import {create} from "zustand";

export interface ProductInfo {
    name: string;
    smallBottle: number;
    bigBottle: number;
    priceSmall: number;
    priceBig: number;
}

interface IOrderForm {
    name: string;
    phone: string;
    cityAddress: string;
    mailNumber: string;
    products: ProductInfo[];
}

interface IUseOrderForm {
    orderForm: IOrderForm;
    setOrderForm: (form: IOrderForm) => void;
    setProduct: (orderForm: IOrderForm, productName: string, product: ProductInfo) => void;
}

export const useOrderForm = create<IUseOrderForm>(set => {
    const state: IUseOrderForm = {
        orderForm: {
            name: "",
            phone: "",
            cityAddress: "",
            mailNumber: "",
            products: [
                {
                    name: "Tarragon",
                    smallBottle: 0,
                    bigBottle: 0,
                    priceSmall: 85,
                    priceBig: 215,
                },
                {
                    name: "Wine",
                    smallBottle: 0,
                    bigBottle: 0,
                    priceSmall: 85,
                    priceBig: 215,
                },
                {
                    name: "Passion",
                    smallBottle: 0,
                    bigBottle: 0,
                    priceSmall: 85,
                    priceBig: 215,
                },
                {
                    name: "Kombucha classic",
                    smallBottle: 0,
                    bigBottle: 0,
                    priceSmall: 70,
                    priceBig: 185,
                },
                {
                    name: "CLassic black",
                    smallBottle: 0,
                    bigBottle: 0,
                    priceSmall: 85,
                    priceBig: 215,
                },
                {
                    name: "Cascara Mint",
                    smallBottle: 0,
                    bigBottle: 0,
                    priceSmall: 85,
                    priceBig: 215,
                },
            ],
        },
        setOrderForm: (form) => {
            set({orderForm: form})
        },
        setProduct: (orderForm: IOrderForm, productName: string, product: ProductInfo) => {
            const productIndex = orderForm.products.findIndex(product => product.name === productName);
            const newProducts = orderForm.products;
            orderForm.products[productIndex] = product;
            set({ orderForm: { ...orderForm, products: newProducts} });
        }
    }
    return state;
})
