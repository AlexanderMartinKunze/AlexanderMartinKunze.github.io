import {useTranslation} from "react-i18next";
import {PhotoProvider, PhotoView} from "react-photo-view";
import React from "react";
import {TbWorldWww} from "react-icons/tb";

import IMG_DRSCHNELL from '../../assets/image/project/qkiss.png';

import IMG_DRSCHNELL_CERT from '../../assets/image/documents/schnell_cert.jpg';
import IMG_DRSCHNELL_CERT_AT_1 from '../../assets/image/documents/AT/drschnell_1.jpg';
import IMG_DRSCHNELL_CERT_AT_2 from '../../assets/image/documents/AT/drschnell_2.jpg';
type Props = {}


function Schnell({}: Props) {
    const [t, i18n] = useTranslation("global");
    return (
        <div
            className="flex flex-col bg-slate-600 dark:bg-slate-100 p-5 rounded-2xl w-full h-full lg:w-2/5 mx-5 [min-height:65vh]">

            <div className="topimg">
                <img src={IMG_DRSCHNELL} alt="" className="w-full rounded-xl"/>
            </div>

            <div className="text-white dark:text-black">
                <h2 className="mt-4 text-2xl lg:text-3xl">{t("content.drschnell")}</h2>
                <p style={{whiteSpace: 'pre-wrap'}}
                   className="text-justify">{t("content.drschnell-desc")}</p>
            </div>

            <div className="flex flex-wrap-reverse text-green-100">
                <p className="mr-2">#CSharp</p>
                <p className="mr-2">#.Net Framework</p>
                <p className="mr-2">#.Net Core</p>
                <p className="mr-2">#Xamarin</p>
                <p className="mr-2">#Maui</p>
                <p className="mr-2">#Android</p>
                <p className="mr-2">#Git</p>
                <p className="mr-2">#Kotlin</p>
                <p className="mr-2">#Github Actions</p>
            </div>
            <div className="flex flex-wrap-reverse text-7xl skills mt-4 py-3 w-fit space-x-5">
                <a href="https://www.dr-schnell.com/">
                    <TbWorldWww className="text-white dark:text-black"/>
                </a>
                {localStorage.getItem("language") === "ru" ? (
                    <PhotoProvider>
                        <PhotoView src={IMG_DRSCHNELL_CERT}>
                            <img src={IMG_DRSCHNELL_CERT} width={100} height={100} style={{objectFit: 'cover'}}
                                 alt="Dr Schnell Certificate"/>
                        </PhotoView>
                    </PhotoProvider>) : localStorage.getItem("language") === "at" ? (
                        <PhotoProvider>
                            <PhotoView src={IMG_DRSCHNELL_CERT_AT_1}>
                                <img src={IMG_DRSCHNELL_CERT_AT_1} width={100} height={100} style={{objectFit: 'cover'}}
                                     alt="Dr Schnell Certificate"/>
                            </PhotoView>
                            <PhotoView src={IMG_DRSCHNELL_CERT_AT_2}>
                                <img src={IMG_DRSCHNELL_CERT_AT_2} width={100} height={100} style={{objectFit: 'cover'}}
                                     alt="Dr Schnell Certificate"/>
                            </PhotoView>
                        </PhotoProvider>) :
                    null}
            </div>
        </div>)
}

export default Schnell