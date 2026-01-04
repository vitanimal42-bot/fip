import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const baseDirectory = path.join(process.cwd(), "content", "statics");

export const getStaticPage = (slug, lang = 'tr') => {
    const filePath = path.join(baseDirectory, lang, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        const fallbackPath = path.join(baseDirectory, 'tr', `${slug}.md`);
        if (!fs.existsSync(fallbackPath)) return null;

        const raw = fs.readFileSync(fallbackPath, "utf8");
        const { data, content } = matter(raw);
        return { ...data, contentHtml: marked.parse(content) };
    }

    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    return { ...data, contentHtml: marked.parse(content) };
};
