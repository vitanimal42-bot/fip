const dictionaries = {
    tr: () => import('./tr.json').then((module) => module.default),
    en: () => import('./en.json').then((module) => module.default),
    ru: () => import('./ru.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
    return dictionaries[locale] ? dictionaries[locale]() : dictionaries['tr']();
};

export const locales = ['tr', 'en', 'ru'];
export const defaultLocale = 'tr';
