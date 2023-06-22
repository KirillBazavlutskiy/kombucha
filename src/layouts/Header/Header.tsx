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
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <header className={cn(s.wrapper, className)}>
            <div className={s.container}>
                <Image className={s.logo} src={Logo} alt="Logo of Samurai Kombucha (black edition)" />
                <nav className={s.navbar}>
                    <a href="#tarhun">Тархун</a>
                    <a href="#wine">Wine</a>
                    <a href="#passion">Passion</a>
                    <a href="#kombucha_classic">Classic</a>
                    <a href="#matcha">Matcha</a>
                    <a href="#">Виготовлення</a>
                    <a href="#where_to_find">Де нас знайти?</a>
                </nav>
                <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
                <div className={cn(s.overlay, isOpen && s.visible)} onClick={() => toggleOpen()} />
                <nav className={cn(s.sidebarMenu, isOpen ? s.open : s.closed)}>
                    <div className={s.background} />
                    <Navigation />
                </nav>
            </div>
        </header>
    );
};
