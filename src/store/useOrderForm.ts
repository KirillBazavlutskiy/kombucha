import {create} from "zustand";

export interface ProductInfo {
    name: string;
    smallBottle: number;
    bigBottle: number;
    price: number;
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
    setProduct: (productName: string, product: ProductInfo) => void;
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
                    price: 85
                },
                {
                    name: "Wine",
                    smallBottle: 0,
                    bigBottle: 0,
                    price: 85
                },
                {
                    name: "Passion",
                    smallBottle: 0,
                    bigBottle: 0,
                    price: 85
                },
                {
                    name: "Kombucha classic",
                    smallBottle: 0,
                    bigBottle: 0,
                    price: 70
                },
                {
                    name: "CLassic black",
                    smallBottle: 0,
                    bigBottle: 0,
                    price: 85
                },
                {
                    name: "Cascara Mint",
                    smallBottle: 0,
                    bigBottle: 0,
                    price: 85
                },
            ],
        },
        setOrderForm: (form) => {
            set({orderForm: form})
        },
        setProduct: (productName: string, product: ProductInfo) => {
            const orderForm = state.orderForm;
            const productIndex = orderForm.products.findIndex(product => product.name === productName);
            const newProducts = orderForm.products;
            orderForm.products[productIndex] = product;
            set({ orderForm: { ...orderForm, products: newProducts} });
        }
    }
    return state;
})
