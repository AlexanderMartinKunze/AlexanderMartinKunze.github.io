import IMG_BLUM from "../../assets/image/project/blum.jpg";
import {TbWorldWww} from "react-icons/tb";
import {PhotoProvider, PhotoView} from "react-photo-view";
import IMG_BLUM_CERT_1 from "../../assets/image/documents/blum_1.jpg";
import IMG_BLUM_CERT_2 from "../../assets/image/documents/blum_2.jpg";
import React from "react";
import {useTranslation} from "react-i18next";

type Props = {}


function Blum({}: Props) {
    const [t, i18n] = useTranslation("global");
    return (
        <div
            className="flex flex-col bg-slate-600 dark:bg-slate-100 p-5 rounded-2xl w-full h-full lg:w-2/5 mx-5 [min-height:65vh]">

            <div className="topimg">
                <img src={IMG_BLUM} alt="" className="w-full rounded-xl"/>
            </div>

            <div className="text-white dark:text-black">
                <h2 className="mt-4 text-2xl lg:text-3xl">{t("content.blum")}</h2>
                <p style={{whiteSpace: 'pre-wrap'}}
                   className="text-justify">{t("content.blum-desc")}</p>
            </div>

            <div className="flex flex-wrap-reverse text-green-100">
                <p className="mr-2">#CSharp</p>
                <p className="mr-2">#.Net Core</p>
                <p className="mr-2">#EF Core</p>
                <p className="mr-2">#VBA</p>
                <p className="mr-2">#CamWorks</p>
                <p className="mr-2">#Git</p>
                <p className="mr-2">#SolidWorks</p>
                <p className="mr-2">#WinForms</p>
                <p className="mr-2">#DevExpress</p>
                <p className="mr-2">#GitLab</p>
            </div>
            <div className="flex flex-wrap-reverse text-7xl skills mt-4 py-3 w-fit space-x-5">
                <a href="https://www.blum.com/">
                    <TbWorldWww className="text-white dark:text-black"/>
                </a>
                <PhotoProvider>
                    <PhotoView src={IMG_BLUM_CERT_1}>
                        <img src={IMG_BLUM_CERT_1} width={100} height={100} style={{objectFit: 'cover'}}
                             alt="Blum Certificate"/>
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src={IMG_BLUM_CERT_2}>
                        <img src={IMG_BLUM_CERT_2} width={100} height={100} style={{objectFit: 'cover'}}
                             alt="Blum Certificate"/>
                    </PhotoView>
                </PhotoProvider>
            </div>
        </div>)
}

export default Blum