import React from 'react';

import Dropdown from './Dropdown'

import {useTranslation} from 'react-i18next';
import EN from "../assets/icon/england.png"
import RU from "../assets/icon/russia.png"
import AT from "../assets/icon/austria.png"
import {MdLanguage} from "react-icons/md";

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
        localStorage.setItem("language", "ru");
    }

    if (localStorage.getItem("language") === "en" || localStorage.getItem("language") === "at") {
        document.documentElement.setAttribute('dir', "ltr");
        document.title = "Alexander KUNZE";

    } else if (localStorage.getItem("language") === "ru") {
        document.documentElement.setAttribute('dir', "ltr");
        document.title = "Александр КУНЦЕ";

    }


    // Dropdown values
    const options = [
        {
            value: 'EN',
            label: <button className="flex items-center justify-center" onClick={() => handleChangeLanguage("en")}>
                <p>EN</p> &#10240;<img src={EN} className="rounded" alt="England Flag" width="50px" loading="lazy"/>
            </button>
        },
        {
            value: 'RU',
            label: <button className="flex items-center justify-center mt-1" onClick={() => handleChangeLanguage("ru")}>
                <p>RU</p> &#10240;<img src={RU} className="rounded" alt="Russia Flag" width="50px" loading="lazy"/>
            </button>
        },
        {
            value: 'AT',
            label: <button className="flex items-center justify-center mt-1" onClick={() => handleChangeLanguage("at")}>
                <p>AT</p> &#10240;<img src={AT} className="rounded" alt="Austria Flag" width="50px" loading="lazy"/>
            </button>
        },
    ];

    return (
        <div className="text-gray-100 dark:text-white">
            <Dropdown
                options={options}
                text={<button><MdLanguage/></button>}
            />
        </div>
    )
}

export default MultiLang;