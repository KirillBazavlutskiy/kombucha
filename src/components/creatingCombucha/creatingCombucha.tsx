import React, {FC} from 'react';
import {ICreatingCombucha} from "@/models/data";
import s from './creatingCombucha.module.scss';

const CreatingCombucha: FC<ICreatingCombucha> = ({ title, description, symbols }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <h2>{title}</h2>
                <div className={s.rectDescription}>
                    <p>{description}</p>
                    <div className={s.rect} />
                </div>
                <h3>{symbols}</h3>
            </div>
        </div>
    );
};

export default CreatingCombucha;
