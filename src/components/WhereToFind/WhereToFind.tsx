import {FC, useEffect, useLayoutEffect, useState} from "react";
import { motion } from "framer-motion"
import { Location } from '@/models/data';

import s from './WhereToFind.module.scss';

interface WhereToFindProps {
    locations: Location[];
}


const WhereToFind: FC<WhereToFindProps> = ({ locations }) => {
    const [currentCity, setCurrentCity] = useState(0);
    const [currentPlace, setCurrentPlace] = useState(0);
    const [citiesListActive, setCitiesListActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setIsOpen(false);
            }, 1000)
        }
    }, [isOpen]);

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <h2 className={s.caption}>
                    Де нас знайти?
                    <button onClick={() => setCitiesListActive(prev => !prev)}>
                        {locations[currentCity].city}
                        <svg
                            className={citiesListActive ? s.citiesListActive : s.citiesListNotActive}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        <ul className={citiesListActive ? s.citiesListActive : s.citiesListNotActive}>{
                            locations.map((location, index) =>
                                index !== currentCity &&
                                <li
                                    key={location.city}
                                    onClick={() => {
                                        setCurrentPlace(0);
                                        setCurrentCity(index);
                                    }}>{location.city}</li>
                            )
                        }</ul>
                    </button>
                </h2>
                <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    className={s.content}
                >
                    <ul className={s.list}>
                        {
                            locations[currentCity].places.map((el, index) => (
                                <motion.li
                                    whileTap={{ scale: 0.9 }}
                                    key={index}
                                >
                                    <button
                                        className={currentPlace == index ? s.active : s.notActive}
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                            setCurrentPlace(index);
                                        }}
                                    >
                                        <h3>{el.name}</h3>
                                        <span>{el.address}</span>
                                    </button>
                                </motion.li>
                            ))
                        }
                    </ul>
                    <div className={s.map}>
                        <iframe
                            src={locations[currentCity].places[currentPlace].mapsLink}
                            width="100%" height="100%" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </motion.div>
                <h3 className={s.symbols}>私たちを見つける場所</h3>
            </div>
        </div>
    );
};

export default WhereToFind;
