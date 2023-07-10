import React, {FC} from 'react';
import {ProductInfo, useOrderForm} from "@/store/useOrderForm";
import s from './ProductItem.module.scss';
import Image from "next/image";
import EmptyGlass from '../svg/EmptyGlass.svg';
import BtnPlus from '../svg/BtnPlus.svg';
import BtnMinus from '../svg/BtnMinus.svg';
import Switcher from "@/components/MakeOrder/ProductItem/Switcher/Switcher";

interface ProductProps {
    product: ProductInfo;
}

const ProductItem: FC<ProductProps> = ({ product: { name, smallBottle, bigBottle, price } }) => {

    const { orderForm, setProduct } = useOrderForm();

    return (
        <div className={s.container}>
            <div className={s.rectangle}>
                <Image src={EmptyGlass} alt={"EmptyGlass"} />
            </div>
            <div className={s.options}>
                <h3>{name}</h3>
                <div className={s.dimensions}>
                    <div className={s.dimension}>
                        <div className={s.dimensionName}>
                            <Switcher state={smallBottle > 0} onClick={() => {
                                const newProduct: ProductInfo = { name, smallBottle: smallBottle === 0 ? 1 : 0, bigBottle, price };
                                setProduct(name, newProduct);
                            }} />
                            <p>Пляшка 0.33 мл</p>
                        </div>
                        <div className={s.counter}>
                            <button className={s.counterHandler} onClick={() => {
                                const newProduct: ProductInfo = { name, smallBottle: smallBottle + 1, bigBottle, price };
                                setProduct(name, newProduct);
                            }}>
                                <Image src={BtnPlus} alt={"+"} />
                            </button>
                            <span>{orderForm.products.find(product => product.name === name)?.smallBottle}</span>
                            <button className={s.counterHandler} onClick={() => {
                                const newProduct: ProductInfo = { name, smallBottle: smallBottle === 0 ? 0 : smallBottle - 1, bigBottle, price };
                                setProduct(name, newProduct);
                            }}
                            >
                                <Image src={BtnMinus} alt={"-"} />
                            </button>
                        </div>
                    </div>
                    <div className={s.dimension}>
                        <div className={s.dimensionName}>
                            <Switcher state={bigBottle > 0} onClick={() => {
                                const newProduct: ProductInfo = { name, smallBottle, bigBottle: bigBottle === 0 ? 1 : 0, price };
                                setProduct(name, newProduct)
                            }} />
                            <p>Пляшка 0.75 мл</p>
                        </div>
                        <div className={s.counter}>
                            <button className={s.counterHandler} onClick={() => {
                                const newProduct: ProductInfo = { name, smallBottle, bigBottle: bigBottle + 1, price };
                                setProduct(name, newProduct);
                            }}>
                                <Image src={BtnPlus} alt={"+"} />
                            </button>
                            <span>{orderForm.products.find(product => product.name === name)?.bigBottle}</span>
                            <button className={s.counterHandler} onClick={() => {
                                const newProduct: ProductInfo = { name, smallBottle, bigBottle: bigBottle === 0 ? 0 : bigBottle - 1, price };
                                setProduct(name, newProduct);
                            }}
                            >
                                <Image src={BtnMinus} alt={"-"} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
