import {FC, ReactNode} from "react";
import Head from "next/head";

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import s from './Layout.module.css';

interface LayoutProps {
    children: ReactNode,
    keywords: string,
    title?: string,
    className?: string,
}

export const Layout: FC<LayoutProps> = ({ children, keywords, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={"Samurai Kombucha" + keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta lang="ua" />
            </Head>
            <div className={s.wrapper}>
                <Header className={s.header} />
                <div className={s.body}>
                    {children}
                </div>
                <Footer className={s.footer} />
            </div>
        </>
    );
}