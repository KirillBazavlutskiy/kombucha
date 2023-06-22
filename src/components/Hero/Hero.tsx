import { FC, Suspense } from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { IHero } from '@/models/data';
import { slideFromLeft, slideFromRight, mobile, duration } from '@/frame-motion/transitions';

import Can from '../../images/banka_hero.png';
import { Cascara } from '../../models/Cascara';
import s from './Hero.module.scss';


interface HeroProps extends IHero {
    isMobile: boolean
}

const Hero: FC<HeroProps> = ({ description, symbols, isMobile }) => {

    return (
        <>
            {!true
                ? (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.5, once: true }}
                        className={s.wrapper}
                    >
                        <div className={s.container}>
                            <div className={s.content}>
                                <motion.div variants={slideFromLeft} transition={duration} custom={1} className={s.text}>{description}</motion.div>
                                <motion.div variants={slideFromRight} transition={duration} custom={2} className={s.model}>
                                    <Image src={Can} alt="Can" />
                                </motion.div>
                            </div>
                            <motion.h3 variants={slideFromLeft} transition={duration} custom={3} className={s.symbols}>{symbols}</motion.h3>
                        </div>
                    </motion.div>
                )
                : (
                    <div className={s.wrapper}>
                        <div className={s.container}>
                            <div className={s.content}>
                                <div className={s.text}>{description}</div>
                                <div className={s.model}>
                                    {/* <Image src={Can} alt="Can" /> */}
                                    <Suspense>
                                        <Canvas
                                            className={s.canvas}
                                            camera={{ near: 1, position: [0, 0, 0], zoom: 1}}>
                                            <OrbitControls />
                                            <hemisphereLight intensity={0.95} />
                                            <spotLight
                                                position={[10, 20, 10]}
                                                angle={0.3}
                                                penumbra={1}
                                                intensity={2}
                                                castShadow
                                            />
                                            <Cascara />
                                        </Canvas>
                                    </Suspense>
                                </div>
                            </div>
                            <h3 className={s.symbols}>{symbols}</h3>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Hero;
