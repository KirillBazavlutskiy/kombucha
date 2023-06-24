export interface Data {
    hero: IHero;
    tarhun: IProduct;
    wine: IProduct;
    passion: IProduct;
    kombucha_classic: IProduct;
    cascara_mint: IProduct;
    classic_black: IProduct;
    creating_combucha: ICreatingCombucha;
};

export interface IHero {
    description: string;
    symbols: string;
}

export interface IProduct {
    name: string;
    description: string;
    symbols: string;
    displacement: string[];
    color?: 'white' | 'black';
}

export interface ICreatingCombucha {
    title: string;
    description: string;
    symbols: string;
}
