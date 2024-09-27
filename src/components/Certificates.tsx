import {useTranslation} from "react-i18next";
import React from "react";

import {PhotoProvider, PhotoView} from "react-photo-view";
import IMG_DIPLOM from "../assets/image/documents/diplom.jpg";
import IMG_DIPLOM_AT from "../assets/image/documents/AT/wifiDiplom.jpeg";

import IMG_UML from "../assets/image/documents/uml_cert.jpg";
import IMG_UML_AT from "../assets/image/documents/AT/uml.jpg";

import IMG_PRO from "../assets/image/documents/proj_cert.jpg";
import IMG_WEB_AT from "../assets/image/documents/AT/webmaster.jpeg";

import IMG_Core from "../assets/image/documents/net_core_cert.jpg";
import IMG_CORE_AT from "../assets/image/documents/AT/netCore.jpg"

type Props = {}


function Certificates({}: Props) {
    const [t, i18n] = useTranslation("global");
    return (

        <div className="w-full" id="certificates">
            <h1 className="text-5xl text-blue-200 dark:text-blue-100 px-4">{t("content.myCertificates")}</h1>
            <p className="text-slate-800 dark:text-slate-300 px-4 text-justify text-2xl"/>
            <div className="flex  flex-wrap mt-5 gap-5 py-5 overflow-y-hidden overflow-x-scroll md:overflow-x-auto">
                <div
                    className="w-full overflow-x-scroll overflow-y-hidden md:overflow-x-auto md:flex md:justify-center">
                    <div className="flex flex-wrap-reverse text-7xl skills mt-4 py-3 w-fit gap-10">
                        <PhotoProvider>
                            {localStorage.getItem("language") === "ru" ? (
                                <PhotoView src={IMG_DIPLOM}>
                                    <img
                                        src={IMG_DIPLOM}
                                        width={250}
                                        height={250}
                                        style={{objectFit: "cover"}}
                                        alt="CSharp Diplom"
                                    />
                                </PhotoView>
                            ) : localStorage.getItem("language") === "at" ? (
                                <PhotoView src={IMG_DIPLOM_AT}>
                                    <img
                                        src={IMG_DIPLOM_AT}
                                        width={250}
                                        height={250}
                                        style={{objectFit: "cover"}}
                                        alt="CSharp Diplom"
                                    />
                                </PhotoView>
                            ) : null}
                        </PhotoProvider>
                        <PhotoProvider>
                            {localStorage.getItem("language") === "ru" ? (
                                <PhotoView src={IMG_UML}>
                                    <img
                                        src={IMG_UML}
                                        width={250}
                                        height={250}
                                        style={{objectFit: "cover"}}
                                        alt="UML"
                                    />
                                </PhotoView>
                            ) : localStorage.getItem("language") === "at" ? (
                                <PhotoView src={IMG_UML_AT}>
                                    <img
                                        src={IMG_UML_AT}
                                        width={250}
                                        height={250}
                                        style={{objectFit: "cover"}}
                                        alt="UML"
                                    />
                                </PhotoView>
                            ) : null}
                        </PhotoProvider>
                        <PhotoProvider>
                            {localStorage.getItem("language") === "ru" ? (
                                <PhotoView src={IMG_Core}>
                                    <img
                                        src={IMG_Core}
                                        width={250}
                                        height={250}
                                        style={{objectFit: "cover"}}
                                        alt=".Net Core Certificate"
                                    />
                                </PhotoView>
                            ) : localStorage.getItem("language") === "at" ? (
                                <PhotoView src={IMG_CORE_AT}>
                                    <img
                                        src={IMG_CORE_AT}
                                        width={250}
                                        height={250}
                                        style={{objectFit: "cover"}}
                                        alt=".Net Core Certificate"
                                    />
                                </PhotoView>
                            ) : null}
                        </PhotoProvider>
                        <PhotoProvider>
                            {localStorage.getItem("language") === "ru" ? (
                                <PhotoView src={IMG_PRO}>
                                    <img
                                        src={IMG_PRO}
                                        width={250}
                                        height={250}
                                        style={{objectFit: "cover"}}
                                        alt="Project"
                                    />
                                </PhotoView>
                            ) : localStorage.getItem("language") === "at" ? (
                                <PhotoView src={IMG_WEB_AT}>
                                    <img
                                        src={IMG_WEB_AT}
                                        width={250}
                                        height={250}
                                        style={{objectFit: "cover"}}
                                        alt="Webmaster"
                                    />
                                </PhotoView>
                            ) : null}
                        </PhotoProvider>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Certificates;