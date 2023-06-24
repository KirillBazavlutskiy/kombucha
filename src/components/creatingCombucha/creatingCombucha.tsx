import React, {FC} from 'react';
import {ICreatingCombucha} from "@/models/data";
import s from './creatingCombucha.module.scss';

const CreatingCombucha: FC<ICreatingCombucha> = ({ title, description, symbols }) => {
    return (
        <div className={s.container}>
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>{symbols}</h3>
        </div>
    );
};

export default CreatingCombucha;