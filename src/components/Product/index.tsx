import ProductCardSmall from './components/ProductCardSmall';
import ProductCardExtended from './components/ProductCardExtended';
import ProductCardMedium, { ProductMediumProps } from './components/ProductCardMedium';

export default function Product(props: ProductMediumProps) {
  return (
    <ProductCardMedium { ...props } />
  );
}

Product.Small = ProductCardSmall;
Product.Extended = ProductCardExtended;