import React from 'react'

import IMG_BOSERVICE from '../assets/image/project/buoService.jpg';
import IMG_DRSCHNELL from '../assets/image/project/qkiss.png';
import IMG_METROHM from '../assets/image/project/metrohm.jpg';
import IMG_METROHM_Cert from '../assets/image/documents/metrohm.jpg'
import IMG_MIA from '../assets/image/project/Mia.jpg';
import IMG_BLUM from '../assets/image/project/blum.jpg';

import {useTranslation} from 'react-i18next';
import {TbWorldWww} from "react-icons/tb";
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

type Props = {}


function Projects({}: Props) {
    const [t, i18n] = useTranslation("global");


    return (
        <div className="w-full" id="projects">
            <h1 className="text-5xl text-blue-200 dark:text-blue-100 px-4">{t("content.projects")}</h1>
            <p className="text-slate-800 dark:text-slate-300 px-4 text-justify text-2xl">{t("content.myexperience")}</p>


            <div className="flex flex-wrap mt-5 gap-5 py-5 overflow-y-hidden overflow-x-scroll md:overflow-x-auto">
                <div
                    className="flex flex-col bg-slate-600 dark:bg-slate-100 p-5 rounded-2xl w-full h-full lg:w-1/3 mx-5 [min-height:65vh]">

                    <div className="topimg">
                        <img src={IMG_BOSERVICE} alt="" className="w-full rounded-xl"/>
                    </div>

                    <div className="text-white dark:text-black">
                        <h2 className="mt-4 text-2xl lg:text-3xl">{t("content.boservice")}</h2>
                        <p style={{whiteSpace: 'pre-wrap'}}
                           className="text-justify">{t("content.boservice-desc")}</p>
                    </div>

                    <div className="flex flex-wrap-reverse text-green-100">
                        C#, .Net, .Net Core, NServiceBus, Microservices, Saga Pattern, Azure Devops, Git, Rider,
                        VS2022,
                        K8s, K6, Helm, Azure, Docker, Ranger, Scrum, Open AI, EF Core, Asp.net core, Microservice,
                        CQRS,
                        DDD, React.js
                        <p className="mr-2">#CSharp</p>
                        <p className="mr-2">#.Net Core</p>
                        <p className="mr-2">#NServiceBus</p>
                        <p className="mr-2">#Microservices</p>
                        <p className="mr-2">#Saga Pattern</p>
                        <p className="mr-2">#Azure Devops</p>
                        <p className="mr-2">#Git</p>
                        <p className="mr-2">#K8s</p>
                        <p className="mr-2">#Helm</p>
                        <p className="mr-2">#Dockerf</p>
                        <p className="mr-2">#EF Core</p>
                        <p className="mr-2">#Opena AI</p>
                        <p className="mr-2">#Asp.net core</p>
                        <p className="mr-2">#CQRS</p>
                    </div>
                    <div className="flex flex-wrap-reverse text-7xl skills mt-4 py-3 w-fit">
                        <a href="https://buo.de/service/">
                            <TbWorldWww className="text-white dark:text-black"/>
                        </a>
                    </div>
                </div>
                <div
                    className="flex flex-col bg-slate-600 dark:bg-slate-100 p-5 rounded-2xl w-full h-full lg:w-1/3 mx-5 [min-height:65vh]">

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
                    <div className="flex flex-wrap-reverse text-7xl skills mt-4 py-3 w-fit">
                        <a href="https://www.dr-schnell.com/">
                            <TbWorldWww className="text-white dark:text-black"/>
                        </a>
                    </div>

                </div>
                <div
                    className="flex flex-col bg-slate-600 dark:bg-slate-100 p-5 rounded-2xl w-full h-full lg:w-1/3 mx-5 [min-height:65vh]">

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
                    <div className="flex flex-wrap-reverse text-7xl skills mt-4 py-3 w-fit">
                        <a href="https://www.metrohm.com/">
                            <TbWorldWww className="text-white dark:text-black"/>
                        </a>
                        <PhotoProvider>
                            <PhotoView src={IMG_METROHM_Cert}>
                                <img src={IMG_METROHM_Cert} width={100} height={100} style={{objectFit: 'cover'}}
                                     alt="Metrohm Certificate"/>
                            </PhotoView>
                        </PhotoProvider>

                    </div>
                </div>
                <div
                    className="flex flex-col bg-slate-600 dark:bg-slate-100 p-5 rounded-2xl w-full h-full lg:w-1/3 mx-5 [min-height:65vh]">

                    <div className="topimg">
                        <img src={IMG_MIA} alt="" className="w-full rounded-xl"/>
                    </div>

                    <div className="text-white dark:text-black">
                        <h2 className="mt-4 text-2xl lg:text-3xl">{t("content.mia")}</h2>
                        <p style={{whiteSpace: 'pre-wrap'}}
                           className="text-justify">{t("content.mia-desc")}</p>
                    </div>

                    <div className="flex flex-wrap-reverse text-green-100">
                        <p className="mr-2">#CSharp</p>
                        <p className="mr-2">#.Net Core</p>
                        <p className="mr-2">#EF Core</p>
                        <p className="mr-2">#RabbitMq</p>
                        <p className="mr-2">#Angular</p>
                        <p className="mr-2">#Git</p>
                        <p className="mr-2">#WPF</p>
                        <p className="mr-2">#WCF</p>
                        <p className="mr-2">#DevExpress</p>
                        <p className="mr-2">#OracleDB</p>
                    </div>
                    <div className="flex flex-wrap-reverse text-7xl skills mt-4 py-3 w-fit">
                        <a href="https://mia-systems.net/">
                            <TbWorldWww className="text-white dark:text-black"/>
                        </a>
                    </div>
                </div>
                <div
                    className="flex flex-col bg-slate-600 dark:bg-slate-100 p-5 rounded-2xl w-full h-full lg:w-1/3 mx-5 [min-height:65vh]">

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
                    <div className="flex flex-wrap-reverse text-7xl skills mt-4 py-3 w-fit">
                        <a href="https://mia-systems.net/">
                            <TbWorldWww className="text-white dark:text-black"/>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Projects