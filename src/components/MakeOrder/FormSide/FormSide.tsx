import React, {useState} from 'react';
import s from './FormSide.module.scss';
import cn from "classnames";

const FormSide = () => {

    const [order, setOrder] = useState({
        name: "",
        phone: "",
        address: "",
        product: "",
        displacement: 'O.75 МЛ'
    })

    return (
        <form className={s.container} onSubmit={e => e.preventDefault()}>
            <input type="text"
                   placeholder={"Ім'я"}
                   value={order.name}
                   onChange={e => setOrder({
                       ...order,
                       name: e.target.value
                   })}
            />
            <input type="text"
                   placeholder={"Номер телефону"}
                   value={order.phone}
                   onChange={e => setOrder({
                       ...order,
                       phone: e.target.value
                   })}
            />
            <input type="text"
                   placeholder={"Адреса"}
                   value={order.address}
                   onChange={e => setOrder({
                       ...order,
                       address: e.target.value
                   })}
            />
            <input type="text"
                   placeholder={"Назва напоя"}
                   value={order.product}
                   onChange={e => setOrder({
                       ...order,
                       product: e.target.value
                   })}
            />
            <div className={s.displacement}>
                <h2>Об’єм пляшки</h2>
                <div className={s.displacementList}>{
                    [ '0.33 МЛ', '0.75 МЛ' ].map(d =>
                        <button
                            key={d}
                            className={cn(s.displacementOption, d === order.displacement && s.active)}
                            onClick={() => setOrder({
                                ...order,
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
