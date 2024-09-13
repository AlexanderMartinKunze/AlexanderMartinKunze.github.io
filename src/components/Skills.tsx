import React from 'react';

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
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
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
                        <ElasticsearchOriginal className="text-white dark:text-black"/>
                        <GithubOriginal className="text-white dark:text-black"/>
                        <GrafanaOriginal className="text-white dark:text-black"/>
                        <HelmOriginal className="text-white dark:text-black"/>
                        <GitlabOriginal className="text-white dark:text-black"/>
                        <JetbrainsOriginal className="text-white dark:text-black"/>
                        <JqueryOriginal className="text-white dark:text-black"/>
                        <MariadbOriginal className="text-white dark:text-black"/>
                        <MicrosoftsqlserverPlain className="text-white dark:text-black"/>
                        <MongodbOriginal className="text-white dark:text-black"/>
                        <MysqlOriginal className="text-white dark:text-black"/>
                        <NhibernateOriginal className="text-white dark:text-black"/>
                        <NodejsOriginal className="text-white dark:text-black"/>
                        <PythonOriginal className="text-white dark:text-black"/>
                        <RabbitmqOriginal className="text-white dark:text-black"/>
                        <RancherOriginal className="text-white dark:text-black"/>
                        <Html5Original className="text-white dark:text-black"/>
                        <AngularOriginal className="text-white dark:text-black"/>
                        <JavascriptOriginal className="text-white dark:text-black"/>
                        <AzuresqldatabaseOriginal className="text-white dark:text-black"/>
                        <ReactOriginal className="text-white dark:text-black"/>
                        <BlazorOriginal className="text-white dark:text-black"/>
                        <BootstrapOriginal className="text-white dark:text-black"/>
                        <TailwindcssOriginal className="text-white dark:text-black"/>
                        <GitOriginal className="text-white dark:text-black"/>
                        <ReduxOriginal className="text-white dark:text-black"/>
                        <DockerOriginal className="text-white dark:text-black"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills