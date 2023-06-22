import { FC, useEffect, useState } from "react";
import Image from 'next/image'
import { motion } from "framer-motion"

import s from './WhereToFind.module.scss';

import RollPart from "../../images/roll_part.png";
import Eight from "../../images/maps/eight.png";

const WhereToFind: FC = () => {
    const [currentMap, setCurrentMap] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setIsOpen(false);
            }, 1000)
        }
    }, [isOpen]);

    const maps = [
        Eight,
        Eight,
        Eight,
        Eight,
        Eight,
        Eight
    ]

    const locations = [
        {
            name: "eight coffeebar",
            address: "вул. Гоголя 9"
        },
        {
            name: "Flat brewbar",
            address: "вул. Барікадна 22"
        },
        {
            name: "gastronomie bistro",
            address: "вул. Сергія Єфремова 22"
        },
        {
            name: "maemo prosit",
            address: "вул. Сергія Єфремова 22"
        },
        {
            name: "twice coffeebar",
            address: "вул. Дмитра Яворницького 34"
        },
        {
            name: "share coffee",
            address: "вул. Тітова 23"
        }
    ]

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <h2 className={s.caption}>Де нас знайти?</h2>
                <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    className={s.content}
                >
                    <ul className={s.list}>
                        {
                            locations.map((el, index) => (
                                <motion.li
                                    whileTap={{ scale: 0.9 }}
                                    key={index}
                                >
                                    <button
                                        className={currentMap == index ? s.active : s.notActive}
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                            setCurrentMap(index);
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
                        <motion.div
                            variants={{
                                open: {
                                    y: "250%",
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.7,
                                    }
                                },
                                closed: {
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.3
                                    }
                                }
                            }}
                            style={{ pointerEvents: isOpen ? "auto" : "none" }}
                            className={s.topRoll}
                        >
                            <Image
                                src={RollPart}
                                alt="Top part of the roll for Google maps"
                            />
                        </motion.div>

                        <motion.div
                            variants={{
                                open: {
                                    y: 0,
                                    scaleY: 0.1,
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.7,
                                    }
                                },
                                closed: {
                                    y: 0,
                                    scaleY: 1,
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.3
                                    }
                                }
                            }}
                            style={{ pointerEvents: isOpen ? "auto" : "none" }}
                        >
                            <Image className={s.locationImg} src={maps[currentMap]} alt="Map" />
                        </motion.div>
                        <motion.div
                            variants={{
                                open: {
                                    y: "-250%",
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.7,
                                    }
                                },
                                closed: {
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.3
                                    }
                                }
                            }}
                            style={{ pointerEvents: isOpen ? "auto" : "none" }}
                            className={s.bottomRoll}
                        >
                            <Image
                                src={RollPart}
                                alt="Bottom part of the roll for Google maps"
                            />
                        </motion.div>
                    </div>
                </motion.div>
                <h3 className={s.symbols}>私たちを見つける場所</h3>
            </div>
        </div>
    );
};

export default WhereToFind;

function userState(arg0: number): [any, any] {
    throw new Error('Function not implemented.');
}
