import { FC } from "react";
import Image, { StaticImageData } from 'next/image';
import { motion } from "framer-motion";
import cn from 'classnames';

import { slideFromLeft, slideFromRight, slideFromTop, fade, mobile, duration } from '@/frame-motion/transitions';

import s from './Product.module.scss';
import { IProduct } from '@/models/data';

interface ProductProps extends IProduct {
    order: 'ordinar' | 'reversed';
    background: string;
    img: StaticImageData;
    isMobile: boolean;
}

const Product: FC<ProductProps> = (
    {
        name,
        description,
        symbols,
        background,
        order,
        img,
        isMobile,
        displacement
    }) => {
    return (
        <>
            {!isMobile
                ? (
                    <motion.div
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{ amount: 0.4, once: true }}
                        className={s.wrapper}
                        style={{ backgroundColor: background }}
                    >
                        <div className={s.container}>
                            <motion.h2
                                variants={slideFromTop}
                                transition={duration}
                                custom={3}
                                className={cn(s.name, 'text-center', order == 'reversed' ? '2xl:text-left' : '2xl:text-right')}
                            >{name}</motion.h2>
                            <div className={cn(s.content, order == 'reversed' && [s.reversed])}>
                                <motion.div
                                    variants={order == 'reversed' ? slideFromRight : slideFromLeft}
                                    transition={duration}
                                    custom={2}
                                    className={cn(s.text, order == 'reversed' && [s.toRight])}
                                    >{description}</motion.div>
                                <motion.div
                                    variants={order == 'reversed' ? slideFromLeft : slideFromRight}
                                    transition={duration}
                                    custom={1}
                                    className={cn(s.model, order == 'reversed' ? s.start : s.end )}
                                    >
                                    <Image src={img} alt="Can" />
                                </motion.div>
                            </div>
                            <motion.div
                                variants={fade}
                                transition={duration}
                                custom={5}
                                className={cn(s.options, order == 'reversed' ? 'flex-col xl:flex-row' : 'flex-col xl:flex-row-reverse')}
                            >
                                <h3 className={s.symbols}>{symbols}</h3>
                                <div className={s.displacement}>{
                                    displacement.map(d =>
                                        <div key={d} className={s.displacementOption}>
                                            <span>{d}</span>
                                        </div>
                                    )
                                }</div>
                            </motion.div>
                        </div>
                    </motion.div>
                )
                : (
                    <div className={s.wrapper} style={{ backgroundColor: background }}>
                        <div className={s.container}>
                            <h2 className={s.name}>{name}</h2>
                            <div className={cn(s.content, order == 'reversed' && [s.reversed])}>
                                <div className={cn(s.text, order == 'reversed' && [s.toRight])}>{description}</div>
                                <div className={cn(s.model, order == 'reversed' ? s.start : s.end )}>
                                    <Image src={img} alt="Can" />
                                </div>
                            </div>
                            <div className={cn(s.options, order == 'reversed' ? 'flex-row' : 'flex-row-reverse')}>
                                <h3 className={s.symbols}>{symbols}</h3>
                                <div className={s.displacement}>{
                                    displacement.map(d =>
                                        <div key={d} className={s.displacementOption}>
                                            <span>{d}</span>
                                        </div>
                                    )
                                }</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Product;
