// 示例支持的语言列表
// en 英语
// zh 中文
// ar 阿拉伯语
// es 西班牙语
// ru 俄语

import { US, CN, AE, ES, RU } from 'country-flag-icons/react/3x2';

export const availableLanguages = [
    { code: 'en', name: 'English', Flag: US },
    { code: 'zh', name: '中文', Flag: CN },
    { code: 'ar', name: 'العربية', Flag: AE },
    { code: 'es', name: 'Español', Flag: ES },
    { code: 'ru', name: 'Русский', Flag: RU }
];

export const defaultLanguage = `en`;