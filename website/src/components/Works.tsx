import React from 'react'

import Blum from '../components/Projects/blum';

import {useTranslation} from 'react-i18next';

import 'react-photo-view/dist/react-photo-view.css';
import Mia from "./Projects/mia";
import Metrohm from "./Projects/metrohm";
import BuO from "./Projects/BuO";
import Schnell from "./Projects/schnell";

type Props = {}


function Works({}: Props) {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="w-full" id="projects">
            <h1 className="text-5xl text-blue-200 dark:text-blue-100 px-4">{t("content.projects")}</h1>
            <p className="text-slate-800 dark:text-slate-300 px-4 text-justify text-2xl">{t("content.myexperience")}</p>
            <div className="flex  flex-wrap mt-5 gap-5 py-5 overflow-y-hidden overflow-x-scroll md:overflow-x-auto">
                <BuO/>
                <Schnell/>
                <Metrohm/>
                <Mia/>
                <Blum/>
            </div>
        </div>
    )
}

export default Works