import { FC } from "react";
import Image, { StaticImageData } from 'next/image';
import { motion } from "framer-motion";

import { slideFromLeft, slideFromRight, slideFromTop, fade, mobile, duration } from '@/frame-motion/transitions';

import s from './FirstProduct.module.scss';
import { IProduct } from '@/models/data';

interface ProductProps extends IProduct {
    img: StaticImageData;
    isMobile: boolean;
}

const FirstProduct: FC<ProductProps> = ({ name, description, symbols, img, isMobile }) => {

    return (
        <>
            {!isMobile
                ? (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.4, once: true }}
                        className={s.wrapper}
                    >
                        <div className={s.container}>
                            <motion.h2 variants={slideFromTop} transition={duration} custom={3} className={s.name}>{name}</motion.h2>
                            <div className={s.content}>
                                <motion.div variants={slideFromRight} transition={duration} custom={2} className={s.text}>{description}</motion.div>
                                <motion.div variants={slideFromLeft} transition={duration} custom={1} className={s.model}>
                                    <Image src={img} alt="Gaysha" />
                                    <div className={s.overlay}></div>
                                    <motion.h3 variants={fade} transition={duration} custom={5} className={s.symbols}>{symbols}</motion.h3>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )
                : (
                    <div className={s.wrapper}>
                        <div className={s.container}>
                            <h2 className={s.name}>{name}</h2>
                            <div className={s.content}>
                                <div className={s.text}>{description}</div>
                                <div className={s.model}>
                                    <Image src={img} alt="Gaysha" />
                                    <div className={s.overlay}></div>
                                    <h3 className={s.symbols}>{symbols}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </>
    );
};

export default FirstProduct;