import React, {useEffect, useState} from 'react';
import s from './FormSide.module.scss';
import cn from "classnames";
import {useOrderForm} from "@/store/useOrderForm";

const FormSide = () => {

    const { orderForm, setOrderForm } = useOrderForm();

    useEffect(() => console.log(orderForm));

    return (
        <form className={s.container} onSubmit={e => e.preventDefault()}>
            <input type="text"
                   placeholder={"Ім'я"}
                   value={orderForm.name}
                   onChange={e => setOrderForm({
                       ...orderForm,
                       name: e.target.value
                   })}
            />
            <input type="text"
                   placeholder={"Номер телефону"}
                   value={orderForm.phone}
                   onChange={e => setOrderForm({
                       ...orderForm,
                       phone: e.target.value
                   })}
            />
            <input type="text"
                   placeholder={"Адреса"}
                   value={orderForm.address}
                   onChange={e => setOrderForm({
                       ...orderForm,
                       address: e.target.value
                   })}
            />
            <input type="text"
                   placeholder={"Назва напоя"}
                   value={orderForm.product}
                   onChange={e => setOrderForm({
                       ...orderForm,
                       product: e.target.value
                   })}
            />
            <div className={s.displacement}>
                <h2>Об’єм пляшки</h2>
                <div className={s.displacementList}>{
                    [ '0.33 МЛ', '0.75 МЛ' ].map(d =>
                        <button
                            key={d}
                            className={cn(s.displacementOption, d === orderForm.displacement && s.active)}
                            onClick={() => setOrderForm({
                                ...orderForm,
                                displacement: d,
                            })}>
                            <span>{d}</span>
                        </button>
                    )
                }</div>
            </div>
            <div className={s.btn}>
                <button type='submit'>Замовити</button>
            </div>
        </form>
    );
};

export default FormSide;
