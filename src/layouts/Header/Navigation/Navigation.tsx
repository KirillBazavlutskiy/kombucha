import * as React from "react";
import { motion } from "framer-motion";

import s from './Navigation.module.scss';
import {useState} from "react";
import cn from "classnames";


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 1.3 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const chilfrenVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const Navigation = () => {
    const [listState, setListState] = useState<boolean>(false);

    return (
        <>
            <button
                onClick={() => setListState(prev => !prev)}
                className={cn(s.buttonListToggle, listState && s.active)}
            >
                Продукція
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
            <div className={cn(s.list, listState ? s.listOpen : s.listClose)}>
                <ul>
                    <li><a href="#tarhun">Tarragon</a></li>
                    <li><a href="#wine">Wine</a></li>
                    <li><a href="#passion">Passion</a></li>
                    <li><a href="#kombucha_classic">Classic</a></li>
                    <li><a href="#cascara_mint">Cascara Mint</a></li>
                    <li><a href="#classic_black">Classic Black</a></li>
                </ul>
            </div>
            <ul className={s.otherItemsList}>
                <li><a href="#creating_combucha">Виготовлення</a></li>
                <li><a href="#where_to_find">Де нас знайти?</a></li>
            </ul>
        </>
    )
};
