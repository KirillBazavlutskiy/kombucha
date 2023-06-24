import { FC, useEffect, useState } from 'react';
import { GetStaticProps } from 'next';

import fs from "fs";
import process from "process";
import path from "path";

import { Layout } from '@/layouts/Layout';
import Hero from '@/components/Hero/Hero';
import FirstProduct from '@/components/FirstProduct/FirstProduct';
import Product from '@/components/Product/Product';
import WhereToFind from '@/components/WhereToFind/WhereToFind';

import { Data } from '@/models/data';

import Wine from '../images/products/wine.png';
import Tarhun from '../images/products/tarhun.png';
import Passion from '../images/products/passion.png';
import KombuchaClassic from '../images/products/kombucha_classic.png';
import CascaraMint from '../images/products/cascara_mint.png';
import ClassicBlack from '../images/products/classic_black.png';

import MakeOrder from "@/components/MakeOrder/MakeOrder";
import CreatingCombucha from "@/components/creatingCombucha/creatingCombucha";




interface IndexProps {
  data: Data;
}

const Index: FC<IndexProps> = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, [])

  return (
    <Layout title={"Samurai Kombucha"} keywords={""}>
        <section id="hero">
            <Hero
                description={data.hero.description}
                symbols={data.hero.symbols}
                isMobile={isMobile}
            />
        </section>
        <section id="tarhun">
            {/*<FirstProduct*/}
            {/*    img={Tarhun}*/}
            {/*    name={data.tarhun.name}*/}
            {/*    description={data.tarhun.description}*/}
            {/*    symbols={data.tarhun.symbols}*/}
            {/*    isMobile={isMobile}*/}
            {/*    displacement={[ '0.33 МЛ', '0.75 МЛ' ]}*/}
            {/*/>*/}
            <Product
                order={'reversed'}
                background={'transparent'}
                color={'black'}
                img={Tarhun}
                isMobile={isMobile}
                name={data.tarhun.name}
                description={data.tarhun.description}
                symbols={data.tarhun.symbols}
                displacement={[ '0.33 МЛ', '0.75 МЛ' ]}
            />
        </section>
        <section id="wine">
            <Product
                img={Wine}
                order={'ordinar'}
                background={"#AA3732"}
                name={data.wine.name}
                symbols={data.wine.symbols}
                description={data.wine.description}
                isMobile={isMobile}
                displacement={[ '0.33 МЛ', '0.75 МЛ' ]}
            />
        </section>
        <section id="passion">
            <Product
                img={Passion}
                order={'reversed'}
                background={"#FF541E"}
                name={data.passion.name}
                symbols={data.passion.symbols}
                description={data.passion.description}
                isMobile={isMobile}
                displacement={[ '0.33 МЛ', '0.75 МЛ' ]}
            />
        </section>
        <section id="kombucha_classic">
            <Product
                img={KombuchaClassic}
                order={'ordinar'}
                background={"#D09821"}
                name={data.kombucha_classic.name}
                symbols={data.kombucha_classic.symbols}
                description={data.kombucha_classic.description}
                isMobile={isMobile}
                displacement={[ '0.33 МЛ', '0.75 МЛ' ]}
            />
        </section>
        <section id="cascara_mint">
            <Product
                img={CascaraMint}
                order={'reversed'}
                background={"#C2939B"}
                name={data.cascara_mint.name}
                symbols={data.cascara_mint.symbols}
                description={data.cascara_mint.description}
                isMobile={isMobile}
                displacement={[ '0.33 МЛ', '0.75 МЛ' ]}
            />
        </section>
        <section id="classic_black">
            <Product
                img={ClassicBlack}
                order={'ordinar'}
                background={"#784E2F"}
                name={data.classic_black.name}
                symbols={data.classic_black.symbols}
                description={data.classic_black.description}
                isMobile={isMobile}
                displacement={[ '0.33 МЛ', '0.75 МЛ' ]}
            />
        </section>
        <section id="make_order_form">
            <MakeOrder />
        </section>
        <section>
            <CreatingCombucha
                title={data.creating_combucha.title}
                description={data.creating_combucha.description}
                symbols={data.creating_combucha.symbols}
            />
        </section>
        <section id="where_to_find">
            <WhereToFind />
        </section>
    </Layout>
  )
}

export default Index;

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const data = fs.readFileSync(filePath);
  const jsonData: Data = JSON.parse(data.toString());

  return {
    props: {
      data: jsonData,
    },
    revalidate: 600,
  };
}
