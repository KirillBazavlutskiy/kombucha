import {create} from "zustand";

interface IOrderForm {
    name: string;
    phone: string;
    address: string;
    product: string;
    displacement: string;
}

interface IUseOrderForm {
    orderForm: IOrderForm;
    setOrderForm: (form: IOrderForm) => void;
}

export const useOrderForm = create<IUseOrderForm>(set => ({
    orderForm: {
        name: "",
        phone: "",
        address: "",
        product: "",
        displacement: 'O.75 МЛ'
    },
    setOrderForm: (form) => {
        set({orderForm: form})
    },
}))
