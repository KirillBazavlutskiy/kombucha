export interface Data {
    hero: IHero;
    tarhun: IProduct;
    wine: IProduct;
    passion: IProduct;
    kombucha_classic: IProduct;
    matcha: IProduct;
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
}
