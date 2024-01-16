import React from 'react';
import { availableLanguages } from '@/utils/languages';
import { useIntl, changeLocale } from 'gatsby-plugin-intl';

export function LangSelector() {

    const intl = useIntl();
    const currentLocale = intl.locale;

    const handleLanguageChange = (event) => {
        const newLocale = event.target.value;
        console.log("Language changing to:", newLocale); // 调试信息
        changeLocale(newLocale);
        localStorage.setItem('preferredLanguage', newLocale);
        localStorage.setItem('languageSelected', 'true');

        // window.location.reload();
    };

    return (
        <div className="relative inline-block text-left">
            <select
                value={currentLocale}
                onChange={handleLanguageChange}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
                {availableLanguages.map((lang) => (
                    <option key={lang} value={lang}>
                        {lang.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
};
