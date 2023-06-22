import { FC } from 'react';
import Image from "next/image";
import cn from 'classnames';

import s from './Footer.module.scss';
import Logo from "@/images/general/logo_footer.svg";
import Telegram from "@/images/icons/telegram.svg";
import Instagram from "@/images/icons/instagram.svg";


interface FooterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Footer: FC<FooterProps> = ({ className }) => {
    return (
        <footer className={cn(s.wrapper, className)}>
            <div className={s.container}>
                <div className={s.logoWrapper}>
                    <Image className={s.logo} src={Logo} alt="Logo of Samurai Kombucha (white edition)" />
                </div>
                <div className={s.menu}>
                    <h3 className={s.caption}>Menu</h3>
                    <nav className={s.navbar}>
                        <a href="#tarhun">Тархун</a>
                        <a href="#wine">Wine</a>
                        <a href="#passion">Passion</a>
                        <a href="#kombucha_classic">Classic</a>
                        <a href="#matcha">Matcha</a>
                        <a href="#">Виготовлення</a>
                        <a href="#where_to_find">Де нас знайти?</a>
                    </nav>
                </div>
                <div className={s.contacts}>
                    <h3 className={s.caption}>Contacts</h3>
                    <a className={s.subCaption} href="#where_to_find">Де нас знайти?</a>
                    <div className={s.icons}>
                        <a href="#"><Image src={Telegram} alt="icon of telegram" /></a>
                        <a href="https://www.instagram.com/samurai.kombucha/" target="_blank"><Image src={Instagram} alt="icon of instagram" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};