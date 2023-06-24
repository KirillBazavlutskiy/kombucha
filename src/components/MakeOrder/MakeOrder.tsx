import React from 'react';
import s from './MakeOrder.module.scss';
import RectangleForm from './svg/RectangleForm.svg';
import InfoSide from "@/components/MakeOrder/InfoSide/InfoSide";
import Image from "next/image";
import FormSide from "@/components/MakeOrder/FormSide/FormSide";

const MakeOrder = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <InfoSide />
                <FormSide />
            </div>
            <Image src={RectangleForm} alt={"rectangle"} />
        </div>
    );
};

export default MakeOrder;
