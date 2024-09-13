import IMG_BOSERVICE from "../../assets/image/project/buoService.jpg";
import {TbWorldWww} from "react-icons/tb";
import React from "react";
import {useTranslation} from "react-i18next";

type Props = {}


function BuO({}: Props) {
    const [t, i18n] = useTranslation("global");
    return (
        <div
            className="flex flex-col bg-slate-600 dark:bg-slate-100 p-5 rounded-2xl w-full h-full lg:w-2/5 mx-5 [min-height:65vh]">

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
            <div className="flex flex-wrap-reverse text-7xl skills mt-4 py-3 w-fit space-x-5">
                <a href="https://buo.de/service/">
                    <TbWorldWww className="text-white dark:text-black"/>
                </a>
            </div>
        </div>)
}
export default BuO;