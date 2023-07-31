import {FC, Ref, startTransition, Suspense, useRef} from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import {Canvas, useFrame} from '@react-three/fiber';
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
                                    <Suspense>
                                        <Canvas
                                            className={s.canvas}
                                            camera={{ near: 2, position: [0, 0, 20], rotation: [0, 0, 0], zoom: 1}}>
                                            <OrbitControls enabled={false} />
                                            <directionalLight
                                                position={[6, 10, 25]}
                                                intensity={0.6}
                                                castShadow={false}
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
