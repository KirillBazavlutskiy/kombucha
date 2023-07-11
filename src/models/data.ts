export interface Data {
    hero: IHero;
    tarhun: IProduct;
    wine: IProduct;
    passion: IProduct;
    kombucha_classic: IProduct;
    cascara_mint: IProduct;
    classic_black: IProduct;
    creating_combucha: ICreatingCombucha;
    whereToFind: WhereToFind;
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

export interface WhereToFind {
    locations: Location[];
}

export interface Location {
    city: string;
    places: Place[];
}

export interface Place {
    name: string;
    address: string;
    mapsLink: string;
}
