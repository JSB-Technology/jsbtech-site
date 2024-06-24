import React, { useState } from 'react';
import { availableLanguages } from '@/utils/languages';
import { useIntl, changeLocale } from 'gatsby-plugin-intl';

export function LangSelector() {

    const intl = useIntl();
    const currentLocale = intl.locale;
    const [isOpen, setIsOpen] = useState(false);

    const handleLanguageChange = (newLocale) => {
        console.log("Language changing to:", newLocale); // 调试信息
        changeLocale(newLocale);
        localStorage.setItem('preferredLanguage', newLocale);
        localStorage.setItem('languageSelected', 'true');

        setIsOpen(false);
        // window.location.reload();
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
                {availableLanguages.find(lang => lang.code === currentLocale).name}
            </button>
            {isOpen && (
                <ul className="absolute right-0 mt-2 w-35 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {availableLanguages.map(({ code, name, Flag }) => (
                        <li
                            key={code}
                            onClick={() => handleLanguageChange(code)}
                            className="cursor-pointer flex items-center px-4 py-2 hover:bg-gray-100"
                        >
                            <Flag title={name} className="inline-block w-4 h-4 mr-2" />
                            {name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
