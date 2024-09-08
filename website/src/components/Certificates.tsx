import {useTranslation} from "react-i18next";
import React from "react";

import {PhotoProvider, PhotoView} from "react-photo-view";
import IMG_DIPLOM from "../assets/image/documents/diplom.jpg";
import IMG_UML from "../assets/image/documents/uml_cert.jpg";
import IMG_PRO from "../assets/image/documents/proj_cert.jpg";
import IMG_Core from "../assets/image/documents/net_core_cert.jpg";

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
                            <PhotoView src={IMG_DIPLOM}>
                                <img src={IMG_DIPLOM} width={250} height={250} style={{objectFit: 'cover'}}
                                     alt="CSharp Diplom"/>
                            </PhotoView>
                        </PhotoProvider>
                        <PhotoProvider>
                            <PhotoView src={IMG_UML}>
                                <img src={IMG_UML} width={250} height={250} style={{objectFit: 'cover'}}
                                     alt="UML"/>
                            </PhotoView>
                        </PhotoProvider>
                        <PhotoProvider>
                            <PhotoView src={IMG_Core}>
                                <img src={IMG_Core} width={250} height={250} style={{objectFit: 'cover'}}
                                     alt=".NET Core"/>
                            </PhotoView>
                        </PhotoProvider>
                        <PhotoProvider>
                            <PhotoView src={IMG_PRO}>
                                <img src={IMG_PRO} width={250} height={250} style={{objectFit: 'cover'}}
                                     alt="Project Management"/>
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificates;