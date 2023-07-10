import React from 'react';
import s from './MakeOrder.module.scss';
import FormSide from "@/components/MakeOrder/FormSide/FormSide";
import OrderedProducts from "@/components/MakeOrder/OrderedProducts/OrderedProducts";

const MakeOrder = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <FormSide />
                <OrderedProducts />
            </div>
        </div>
    );
};

export default MakeOrder;
