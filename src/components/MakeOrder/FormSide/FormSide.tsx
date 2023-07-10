import React, {useEffect, useState} from 'react';
import s from './FormSide.module.scss';
import cn from "classnames";
import {useOrderForm} from "@/store/useOrderForm";

const FormSide = () => {

    const { orderForm, setOrderForm } = useOrderForm();

    return (
        <div className={s.container}>
            <h2>Доставка</h2>
            <form className={s.form} onSubmit={e => e.preventDefault()}>
                <label>
                    <h3>Контактна інформація</h3>
                    <input type="text"
                           placeholder={"Ім'я та прізвище"}
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
                </label>
                <label>
                    <h3>Доставка новою поштою</h3>
                    <input type="text"
                           placeholder={"Місто"}
                           value={orderForm.cityAddress}
                           onChange={e => setOrderForm({
                               ...orderForm,
                               cityAddress: e.target.value
                           })}
                    />
                    <input type="text"
                           placeholder={"Відділення нової пошти"}
                           value={orderForm.mailNumber}
                           onChange={e => setOrderForm({
                               ...orderForm,
                               mailNumber: e.target.value
                           })}
                    />
                </label>
                <div className={s.btn}>
                    <button type='submit'>Замовити</button>
                </div>
            </form>
            <h3>宅配</h3>
        </div>
    );
};

export default FormSide;
