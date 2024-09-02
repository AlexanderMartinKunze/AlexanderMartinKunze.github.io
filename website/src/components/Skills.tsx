import React from 'react';

import {
    AngularOriginal,
    AzuresqldatabaseOriginal,
    BlazorOriginal,
    BootstrapOriginalWordmark,
    CsharpOriginal,
    DockerOriginalWordmark,
    DotnetcoreOriginal,
    ElasticsearchOriginalWordmark,
    GitOriginalWordmark,
    GithubOriginal,
    GitlabOriginal,
    GrafanaOriginal,
    HelmOriginal,
    Html5Original,
    JavascriptOriginal,
    TailwindcssPlainWordmark,
    ReduxOriginal,
    JetbrainsOriginal,
    JqueryOriginal,
    MariadbOriginal,
    MicrosoftsqlserverPlain,
    MongodbOriginalWordmark,
    MysqlOriginal,
    NhibernateOriginalWordmark,
    NodejsOriginal,
    PythonOriginal,
    RabbitmqOriginalWordmark,
    RancherOriginalWordmark,
    ReactOriginal,
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
                    <div className="flex flex-wrap-reverse text-7xl skills mt-4 py-3 w-fit">
                        <CsharpOriginal className="text-white dark:text-black"/>
                        <DotnetcoreOriginal className="text-white dark:text-black"/>
                        <ElasticsearchOriginalWordmark className="text-white dark:text-black"/>
                        <GithubOriginal className="text-white dark:text-black"/>
                        <GrafanaOriginal className="text-white dark:text-black"/>
                        <HelmOriginal className="text-white dark:text-black"/>
                        <GitlabOriginal className="text-white dark:text-black"/>
                        <JetbrainsOriginal className="text-white dark:text-black"/>
                        <JqueryOriginal className="text-white dark:text-black"/>
                        <MariadbOriginal className="text-white dark:text-black"/>
                        <MicrosoftsqlserverPlain className="text-white dark:text-black"/>
                        <MongodbOriginalWordmark className="text-white dark:text-black"/>
                        <MysqlOriginal className="text-white dark:text-black"/>
                        <NhibernateOriginalWordmark className="text-white dark:text-black"/>
                        <NodejsOriginal className="text-white dark:text-black"/>
                        <PythonOriginal className="text-white dark:text-black"/>
                        <RabbitmqOriginalWordmark className="text-white dark:text-black"/>
                        <RancherOriginalWordmark className="text-white dark:text-black"/>
                        <Html5Original className="text-white dark:text-black"/>
                        <AngularOriginal className="text-white dark:text-black"/>
                        <JavascriptOriginal className="text-white dark:text-black"/>
                        <AzuresqldatabaseOriginal className="text-white dark:text-black"/>
                        <ReactOriginal className="text-white dark:text-black"/>
                        <BlazorOriginal className="text-white dark:text-black"/>
                        <BootstrapOriginalWordmark className="text-white dark:text-black"/>
                        <TailwindcssPlainWordmark className="text-white dark:text-black"/>
                        <GitOriginalWordmark className="text-white dark:text-black"/>
                        <ReduxOriginal className="text-white dark:text-black"/>
                        <DockerOriginalWordmark className="text-white dark:text-black"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills