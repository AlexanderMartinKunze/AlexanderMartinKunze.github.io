import {useTranslation} from "react-i18next";
import React from "react";
import IMG_CERT_COVER from "../assets/image/certificates.jpeg";

type Props = {}


function Certificates({}: Props) {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="w-full" id="certificates">
            <h1 className="text-5xl text-blue-200 dark:text-blue-100 px-4">{t("content.myCertificates")}</h1>
            <p className="text-slate-800 dark:text-slate-300 px-4 text-justify text-2xl"/>
            <img className="w-full h-1/4" src={IMG_CERT_COVER}
                 alt="Certificate Cover"/>
            <div className="flex  flex-wrap mt-5 gap-5 py-5 overflow-y-hidden overflow-x-scroll md:overflow-x-auto">
                <div
                    className="w-full overflow-x-scroll overflow-y-hidden md:overflow-x-auto md:flex md:justify-center">
                    <div className="flex flex-wrap-reverse text-7xl skills mt-4 py-3 w-fit">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificates;