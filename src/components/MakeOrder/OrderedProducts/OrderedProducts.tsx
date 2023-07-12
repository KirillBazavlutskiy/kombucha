import {FC} from 'react';
import s from './OrderedProducts.module.scss';
import {useOrderForm} from "@/store/useOrderForm";
import ProductItem from "@/components/MakeOrder/ProductItem/ProductItem";

const OrderedProducts: FC = () => {

    const { orderForm } = useOrderForm();

    return (
        <div className={s.container}>
            <div className={s.header}>
                <div className={s.line} />
                <h2>Оформити замовлення</h2>
            </div>
            <div className={s.ordersList}>{
                orderForm.products.map(product =>
                    <ProductItem product={product} key={product.name} />
                )
            }</div>
            <div className={s.footer}>
                <h2>Вартість замовлення:
                    <span>
                        {
                            orderForm.products.reduce((orderPrice: number, product) =>
                                (orderPrice + product.smallBottle * product.priceSmall + product.bigBottle * product.priceBig), 0
                            )
                        } UAH
                    </span>
                </h2>
                <div className={s.line} />
            </div>
        </div>
    );
};

export default OrderedProducts;
