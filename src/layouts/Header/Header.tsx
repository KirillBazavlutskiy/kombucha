import { FC } from 'react';
import Image from "next/image";
import cn from "classnames";

import { useCycle } from "framer-motion";
import { MenuToggle } from './MenuToggle/MenuToggle';
import { Navigation } from './Navigation/Navigation';

import s from './Header.module.scss';
import Logo from "@/images/general/logo_header.svg";


interface HeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Header: FC<HeaderProps> = ({ className }) => {
    const [isOpenBurger, toggleBurgerOpen] = useCycle(false, true);
    const [isProductListOpen, toggleProductListOpen] = useCycle(false, true);

    return (
        <header className={cn(s.wrapper, className)}>
            <div className={s.container}>
                <Image className={s.logo} src={Logo} alt="Logo of Samurai Kombucha (black edition)" />
                <div className={s.productList}>
                    <button onClick={() => toggleProductListOpen()} className={cn(s.productListBtn, isProductListOpen && s.open)}>
                        <p>Продукція</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </button>
                    <nav className={cn(s.navbar, !isProductListOpen && s.listClose)}>
                        <a href="#tarhun">Tarragon</a>
                        <a href="#wine">Wine</a>
                        <a href="#passion">Passion</a>
                        <a href="#kombucha_classic">Classic</a>
                        <a href="#cascara_mint">Cascara Mint</a>
                        <a href="#classic_black">Classic Black</a>
                    </nav>
                    <nav className={s.navbar}>
                        <a href="#creating_combucha">Виготовлення</a>
                        <a href="#where_to_find">Де нас знайти?</a>
                    </nav>
                </div>
                <MenuToggle toggle={() => toggleBurgerOpen()} isOpen={isOpenBurger} />
                <div className={cn(s.overlay, isOpenBurger && s.visible)} onClick={() => toggleBurgerOpen()} />
                <nav className={cn(s.sidebarMenu, isOpenBurger ? s.open : s.closed)}>
                    <div className={s.background} />
                    <Navigation />
                </nav>
            </div>
        </header>
    );
};
