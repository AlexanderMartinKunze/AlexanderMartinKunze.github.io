import React from 'react';
import {Tooltip} from 'react-tooltip'

import {
    AngularOriginal,
    AzuresqldatabaseOriginal,
    BlazorOriginal,
    BootstrapOriginal,
    CsharpOriginal,
    DockerOriginal,
    DotnetcoreOriginal,
    GitOriginal,
    GithubOriginal,
    GitlabOriginal,
    GrafanaOriginal,
    HelmOriginal,
    Html5Original,
    JavascriptOriginal,
    TailwindcssOriginal,
    ReduxOriginal,
    JetbrainsOriginal,
    JqueryOriginal,
    MariadbOriginal,
    MicrosoftsqlserverPlain,
    MongodbOriginal,
    MysqlOriginal,
    NhibernateOriginal,
    NodejsOriginal,
    PythonOriginal,
    RabbitmqOriginal,
    RancherOriginal,
    ReactOriginal,
    ElasticsearchOriginal,
} from 'devicons-react';

import {useTranslation} from 'react-i18next';

type Props = {}

function Skills({}: Props) {
    const [t, i18n] = useTranslation("global");
    return (
        <div id="skills">
            <div className="flex flex-col mt-4">
                <h1 className="px-4 text-2xl">{t("content.my skills")}</h1>
                <p className="dark:text-slate-300 text-slate-800 px-4 text-justify">{t("content.skills")}</p>

                <div
                    className="w-full overflow-x-scroll overflow-y-hidden md:overflow-x-auto md:flex md:justify-center">
                    <div className="customTooltipContainer space-x-5 flex flex-wrap-reverse text-7xl skills mt-4 py-3 w-fit">

                        <CsharpOriginal data-tooltip-id="my-tooltip"
                                        data-tooltip-content="C#"
                                        data-tooltip-place="top"
                                        className="text-white dark:text-black"/>

                        <DotnetcoreOriginal data-tooltip-id="my-tooltip"
                                            data-tooltip-content=".NET Core"
                                            data-tooltip-place="top"
                                            className="text-white dark:text-black"/>

                        <ElasticsearchOriginal data-tooltip-id="my-tooltip"
                                               data-tooltip-content="Elasticsearch"
                                               data-tooltip-place="top"
                                               className="text-white dark:text-black"/>

                        <GithubOriginal data-tooltip-id="my-tooltip"
                                        data-tooltip-content="Github"
                                        data-tooltip-place="top"
                                        className="text-white dark:text-black"/>

                        <GrafanaOriginal data-tooltip-id="my-tooltip"
                                         data-tooltip-content="Grafana"
                                         data-tooltip-place="top"
                                         className="text-white dark:text-black"/>

                        <HelmOriginal data-tooltip-id="my-tooltip"
                                      data-tooltip-content="Helm"
                                      data-tooltip-place="top"
                                      className="text-white dark:text-black"/>

                        <GitlabOriginal data-tooltip-id="my-tooltip"
                                        data-tooltip-content="Gitlab"
                                        data-tooltip-place="top"
                                        className="text-white dark:text-black"/>

                        <JetbrainsOriginal data-tooltip-id="my-tooltip"
                                           data-tooltip-content="Jetbrains Tools (Rider, Webstorm, ...)"
                                           data-tooltip-place="top"
                                           className="text-white dark:text-black"/>

                        <JqueryOriginal data-tooltip-id="my-tooltip"
                                        data-tooltip-content="JQuery"
                                        data-tooltip-place="top"
                                        className="text-white dark:text-black"/>

                        <MariadbOriginal data-tooltip-id="my-tooltip"
                                         data-tooltip-content="Maria DB"
                                         data-tooltip-place="top"
                                         className="text-white dark:text-black"/>

                        <MicrosoftsqlserverPlain data-tooltip-id="my-tooltip"
                                                 data-tooltip-content="Microsoft Sqlserver"
                                                 data-tooltip-place="top"
                                                 className="text-white dark:text-black"/>

                        <MongodbOriginal data-tooltip-id="my-tooltip"
                                         data-tooltip-content="Mongo Db"
                                         data-tooltip-place="top"
                                         className="text-white dark:text-black"/>

                        <MysqlOriginal data-tooltip-id="my-tooltip"
                                       data-tooltip-content="Mssql"
                                       data-tooltip-place="top"
                                       className="text-white dark:text-black"/>

                        <NhibernateOriginal data-tooltip-id="my-tooltip"
                                            data-tooltip-content="NHibernate"
                                            data-tooltip-place="top"
                                            className="text-white dark:text-black"/>

                        <NodejsOriginal data-tooltip-id="my-tooltip"
                                        data-tooltip-content="Node js"
                                        data-tooltip-place="top"
                                        className="text-white dark:text-black"/>

                        <PythonOriginal data-tooltip-id="my-tooltip"
                                        data-tooltip-content="Python"
                                        data-tooltip-place="top"
                                        className="text-white dark:text-black"/>

                        <RabbitmqOriginal data-tooltip-id="my-tooltip"
                                          data-tooltip-content="Rabbit mq"
                                          data-tooltip-place="top"
                                          className="text-white dark:text-black"/>

                        <RancherOriginal data-tooltip-id="my-tooltip"
                                         data-tooltip-content="Rancher"
                                         data-tooltip-place="top"
                                         className="text-white dark:text-black"/>

                        <Html5Original data-tooltip-id="my-tooltip"
                                       data-tooltip-content="Html5"
                                       data-tooltip-place="top"
                                       className="text-white dark:text-black"/>

                        <AngularOriginal data-tooltip-id="my-tooltip"
                                         data-tooltip-content="Angular"
                                         data-tooltip-place="top"
                                         className="text-white dark:text-black"/>

                        <JavascriptOriginal data-tooltip-id="my-tooltip"
                                            data-tooltip-content="Javascript"
                                            data-tooltip-place="top"
                                            className="text-white dark:text-black"/>

                        <AzuresqldatabaseOriginal data-tooltip-id="my-tooltip"
                                                  data-tooltip-content="Azuresqldatabase"
                                                  data-tooltip-place="top"
                                                  className="text-white dark:text-black"/>

                        <ReactOriginal data-tooltip-id="my-tooltip"
                                       data-tooltip-content="React"
                                       data-tooltip-place="top"
                                       className="text-white dark:text-black"/>

                        <BlazorOriginal data-tooltip-id="my-tooltip"
                                        data-tooltip-content="Blazor"
                                        data-tooltip-place="top"
                                        className="text-white dark:text-black"/>

                        <BootstrapOriginal data-tooltip-id="my-tooltip"
                                           data-tooltip-content="Bootstrap"
                                           data-tooltip-place="top"
                                           className="text-white dark:text-black"/>

                        <TailwindcssOriginal data-tooltip-id="my-tooltip"
                                             data-tooltip-content="Tailwindcss"
                                             data-tooltip-place="top"
                                             className="text-white dark:text-black"/>

                        <GitOriginal data-tooltip-id="my-tooltip"
                                     data-tooltip-content="Git"
                                     data-tooltip-place="top"
                                     className="text-white dark:text-black"/>

                        <ReduxOriginal data-tooltip-id="my-tooltip"
                                       data-tooltip-content="Redux"
                                       data-tooltip-place="top"
                                       className="text-white dark:text-black"/>

                        <DockerOriginal data-tooltip-id="my-tooltip"
                                        data-tooltip-content="Docker"
                                        data-tooltip-place="top"
                                        className="text-white dark:text-black"/>

                        <Tooltip id="my-tooltip" className="customTooltip"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills