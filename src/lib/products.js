import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const productsBaseDirectory = path.join(process.cwd(), "content", "products");

marked.setOptions({
  mangle: false,
  headerIds: false,
});

/**
 * Fiyatın gerçekten gösterilebilir bir sayı olup olmadığını kontrol eder.
 */
const isValidPriceValue = (value) => {
  if (value === "" || value === null || value === undefined) return false;
  const num = parseFloat(value);
  return !isNaN(num) && isFinite(num);
};

/**
 * Ürün verilerini standart bir yapıya sokar ve 
 * boş/hatalı verilerin (NaN gibi) oluşmasını engeller.
 */
const normalizeProduct = (data) => {
  const order = Number(data.order);
  const images = Array.isArray(data.images) ? data.images : [];

  // Fiyat listesini en baştan temizliyoruz
  const cleanPriceList = (Array.isArray(data.priceList) ? data.priceList : []).map(item => {
    return {
      ...item,
      // Eğer geçerli bir sayı değilse kesinlikle boş string yap
      price: isValidPriceValue(item.price) ? String(item.price) : ""
    };
  });

  return {
    slug: data.slug || "",
    name: data.name || data.slug || "",
    badge: data.badge || "",
    description: data.description || "",
    details: Array.isArray(data.details) ? data.details : [],
    images,
    heroImage: data.heroImage || images[0] || "",
    dosageCards: Array.isArray(data.dosageCards) ? data.dosageCards : [],
    dosageNote: data.dosageNote || "",
    priceList: cleanPriceList,
    extraNote: data.extraNote || "",
    order: Number.isFinite(order) ? order : 999,
  };
};

const readProductFile = (filePath) => {
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const slug = data.slug || path.basename(filePath, ".md");

  return {
    ...data,
    slug,
    content,
  };
};

export const getAllProducts = (lang = 'tr') => {
  const productsDirectory = path.join(productsBaseDirectory, lang);

  if (!fs.existsSync(productsDirectory)) {
    const fallbackDir = path.join(productsBaseDirectory, 'tr');
    if (!fs.existsSync(fallbackDir)) return [];

    const files = fs.readdirSync(fallbackDir).filter((file) => file.endsWith(".md"));
    return files.map((file) => {
      const product = readProductFile(path.join(fallbackDir, file));
      return normalizeProduct(product);
    }).sort((a, b) => a.order - b.order);
  }

  const files = fs.readdirSync(productsDirectory).filter((file) => file.endsWith(".md"));

  const products = files.map((file) => {
    const product = readProductFile(path.join(productsDirectory, file));
    return normalizeProduct(product);
  });

  return products.sort((a, b) => {
    if (a.order !== b.order) {
      return a.order - b.order;
    }
    return a.name.localeCompare(b.name, lang);
  });
};

export const getProductBySlug = (slug, lang = 'tr') => {
  const trPath = path.join(productsBaseDirectory, 'tr', `${slug}.md`);
  const trProductRaw = readProductFile(trPath);
  const trProduct = trProductRaw ? normalizeProduct(trProductRaw) : null;

  if (lang === 'tr') {
    if (!trProduct) return null;
    return {
      ...trProduct,
      contentHtml: marked.parse(trProductRaw.content || ""),
    };
  }

  const productsDirectory = path.join(productsBaseDirectory, lang);
  const filePath = path.join(productsDirectory, `${slug}.md`);
  let productRaw = readProductFile(filePath);

  if (productRaw) {
    const langProduct = normalizeProduct(productRaw);

    if (trProduct && trProduct.priceList) {
      langProduct.priceList = langProduct.priceList.map((item, index) => {
        const trItem = trProduct.priceList[index];
        if (trItem) {
          return {
            ...item,
            // TR fiyatı geçerli değilse EN/RU versiyonuna da boş aktar
            price: isValidPriceValue(trItem.price) ? trItem.price : ""
          };
        }
        return item;
      });
    }

    return {
      ...langProduct,
      contentHtml: marked.parse(productRaw.content || ""),
    };
  }

  if (trProduct) {
    return {
      ...trProduct,
      contentHtml: marked.parse(trProductRaw.content || ""),
    };
  }

  return null;
};