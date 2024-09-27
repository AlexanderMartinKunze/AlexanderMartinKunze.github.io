import IMG_METROHM from "../../assets/image/project/metrohm.jpg";
import {TbWorldWww} from "react-icons/tb";
import {PhotoProvider, PhotoView} from "react-photo-view";

import React from "react";
import {useTranslation} from "react-i18next";

import IMG_METROHM_CERT from "../../assets/image/documents/metrohm.jpg";
import IMG_METROHM_CERT_AT from "../../assets/image/documents/AT/metrohm.jpg"

type Props = {}


function Metrohm({}: Props) {
    const [t, i18n] = useTranslation("global");
    return (
        <div
            className="flex flex-col bg-slate-600 dark:bg-slate-100 p-5 rounded-2xl w-full h-full lg:w-2/5 mx-5 [min-height:65vh]">

            <div className="topimg">
                <img src={IMG_METROHM} alt="" className="w-full rounded-xl"/>
            </div>

            <div className="text-white dark:text-black">
                <h2 className="mt-4 text-2xl lg:text-3xl">{t("content.metrohm")}</h2>
                <p style={{whiteSpace: 'pre-wrap'}}
                   className="text-justify">{t("content.metrohm-desc")}</p>
            </div>

            <div className="flex flex-wrap-reverse text-green-100">
                <p className="mr-2">#CSharp</p>
                <p className="mr-2">#.Net Core</p>
                <p className="mr-2">#EF Core</p>
                <p className="mr-2">#NHibernate</p>
                <p className="mr-2">#NUnit</p>
                <p className="mr-2">#Git</p>
                <p className="mr-2">#WPF</p>
                <p className="mr-2">#WCF</p>
                <p className="mr-2">#Specflow</p>
                <p className="mr-2">#ProtoBuf</p>
            </div>
            <div className="flex flex-wrap-reverse text-7xl skills mt-4 py-3 w-fit space-x-5">
                <a href="https://www.metrohm.com/">
                    <TbWorldWww className="text-white dark:text-black"/>
                </a>
                {localStorage.getItem("language") === "ru" ? (
                    <PhotoProvider>
                        <PhotoView src={IMG_METROHM_CERT}>
                            <img src={IMG_METROHM_CERT} width={100} height={100} style={{objectFit: 'cover'}}
                                 alt="Metrohm Certificate"/>
                        </PhotoView>
                    </PhotoProvider>) : localStorage.getItem("language") === "at" ? (
                    <PhotoProvider>
                        <PhotoView src={IMG_METROHM_CERT_AT}>
                            <img src={IMG_METROHM_CERT_AT} width={100} height={100} style={{objectFit: 'cover'}}
                                 alt="Metrohm Certificate"/>
                        </PhotoView>
                    </PhotoProvider>): null}

            </div>
        </div>)
}

export default Metrohm;