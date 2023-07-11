import { FC } from "react";
import Image, { StaticImageData } from 'next/image';
import { motion } from "framer-motion";
import cn from 'classnames';

import { slideFromLeft, slideFromRight, slideFromTop, fade, mobile, duration } from '@/frame-motion/transitions';

import s from './Product.module.scss';
import { IProduct } from '@/models/data';
import {useOrderForm} from "@/store/useOrderForm";

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
        displacement,
        color = 'white'
    }) => {

    const { orderForm, setOrderForm } = useOrderForm();

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
                                className={cn(
                                    s.name,
                                    'text-center',
                                    order === 'reversed' ? '2xs:text-left' : '2xs:text-right',
                                    color === 'white' ? 'text-[#fff]' : 'text-[#000]'
                                )}
                            >{name}</motion.h2>
                            <div className={cn(s.content, order == 'reversed' && [s.reversed])}>
                                <motion.div
                                    variants={order == 'reversed' ? slideFromRight : slideFromLeft}
                                    transition={duration}
                                    custom={2}
                                    className={cn(
                                        s.text,
                                        order == 'reversed' && [s.toRight],
                                        color === 'white' ? 'text-[#fff]' : 'text-[#000]'
                                    )}
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
                                className={cn(s.options, order == 'reversed' ? 'flex-col 2xs:flex-row' : 'flex-col 2xs:flex-row-reverse')}
                            >
                                <h3 className={cn(
                                    s.symbols,
                                    color === 'white' ? 'text-[#fff]' : 'text-[#000]'
                                )}>{symbols}</h3>
                            </motion.div>
                        </div>
                    </motion.div>
                )
                : (
                    <div className={s.wrapper} style={{ backgroundColor: background }}>
                        <div className={s.container}>
                            <h2 className={
                                cn(
                                    s.name,
                                    'text-center',
                                    order == 'reversed' ? 'xl:text-left' : 'xl:text-right',
                                    color === 'white' ? 'text-[#fff]' : 'text-[#000]'
                                )}>
                                {name}
                            </h2>
                            <div className={cn(s.content, order == 'reversed' && [s.reversed])}>
                                <div className={
                                    cn(
                                        s.text,
                                        order == 'reversed' && [s.toRight],
                                        color === 'white' ? 'text-[#fff]' : 'text-[#000]'
                                    )
                                }>{description}</div>
                                <div className={cn(s.model, order == 'reversed' ? s.start : s.end )}>
                                    <Image src={img} alt="Can" />
                                </div>
                            </div>
                            <div className={cn(s.options, order == 'reversed' ? 'flex-col xl:flex-row' : 'flex-col xl:flex-row-reverse')}>
                                <h3 className={cn(
                                    s.symbols,
                                    color === 'white' ? 'text-[#fff]' : 'text-[#000]'
                                )}>{symbols}</h3>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Product;
