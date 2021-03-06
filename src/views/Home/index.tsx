import { FC } from "react";
import { Products } from "../../types";
import Product from '../../components/Product';
import ProductCarousel from "../../components/ProductCarousel";
import ProductCampaign from "../../components/ProductCampaign";

const dummyProducts: Products = [
  {
    id: 1,
    mainImage: '/img-1.jpg',
    price: '20',
    discount: 10,
    productId: 'sfddsryhsr',
    ratings: 5,
    title: 'air jordan mens air jordan sneakers orignal air jordan mens air jordan sneakers orignal',
    descriptions: {},
    reviews: 22,
    images: [''],
    category: 'sneakers',
  },
  {
    id: 2,
    mainImage: '/img-2.jpg',
    price: '20',
    productId: 'sfsrgrhsr',
    ratings: 1,
    discount: 22,
    title: 'air jordan mens air jordan sneakers orignal',
    descriptions: {},
    reviews: 22,
    images: [''],
    category: 'sneakers',
  },
  {
    id: 3,
    mainImage: '/img-3.webp',
    price: '20',
    productId: 'srtgbsyhsr',
    ratings: 3,
    discount: 99,
    title: 'air jordan mens air jordan sneakers orignal',
    descriptions: {},
    reviews: 22,
    images: [''],
    category: 'sneakers',
  },
  {
    id: 4,
    mainImage: '/img-4.jpg',
    price: '20',
    productId: 'syrtshyhsr',
    ratings: 0,
    discount: 30,
    title: 'a3ir jordan mens air jordan sneakers orignal',
    descriptions: {},
    reviews: 22,
    images: [''],
    category: 'sneakers',
  }
];

const Home: FC = () => {
  return (
    <main className="main home">
      <ProductCarousel title="recent products" products={ dummyProducts } />

      <ProductCarousel title="deal of the day" products={ dummyProducts } setProductComponent={
        (productInfo) => <Product.Extended productData={ productInfo } />
      } />

      <ProductCampaign />
    </main>
  );
};

export default Home;