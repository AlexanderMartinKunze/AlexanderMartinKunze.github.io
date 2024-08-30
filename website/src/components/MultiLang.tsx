import React from 'react';

import Dropdown from './Dropdown'

import {useTranslation} from 'react-i18next';
import {IoLanguage} from 'react-icons/io5';

import EN from "../assets/icon/england.png"
import RU from "../assets/icon/russia.png"

type Props = {}

function MultiLang({}: Props) {
    // Multi Language Functions
    const [t, i18n] = useTranslation("global");


    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
        document.documentElement.className = lang;
        document.documentElement.setAttribute('lang', lang);
    };

    if (!localStorage.getItem("language")) {
        localStorage.setItem("language", "en");
    }

    if (localStorage.getItem("language") === "en") {
        document.documentElement.setAttribute('dir', "ltr");
        document.title = "Alexander KUNZE";

    } else if (localStorage.getItem("language") === "ru") {
        document.documentElement.setAttribute('dir', "rtl");
        document.title = "Александр КУНЦЕ";

    }


    // Dropdown values
    const options = [
        {
            value: 'FA',
            label: <button className="flex items-center justify-center" onClick={() => handleChangeLanguage("en")}>
                <p>EN</p> &#10240;<img src={EN} className="rounded" alt="England Flag" width="50px" loading="lazy"/>
            </button>
        },
        {
            value: 'EN',
            label: <button className="flex items-center justify-center mt-1" onClick={() => handleChangeLanguage("ru")}>
                <p>FA</p> &#10240;<img src={RU} className="rounded" alt="Russia Flag" width="50px" loading="lazy"/>
            </button>
        },
    ];

    return (
        <div className="text-gray-100 dark:text-white">
            <Dropdown
                options={options}
                text={<button><IoLanguage/></button>}
            />
        </div>
    )
}

export default MultiLang;