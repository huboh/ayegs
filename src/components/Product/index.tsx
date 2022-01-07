import ProductCardSmall from './variants/ProductCardSmall';
import ProductCardExtended from './variants/ProductCardExtended';
import ProductCardMedium, { ProductMediumProps } from './variants/ProductCardMedium';

export default function Product(props: ProductMediumProps) {
  return (
    <ProductCardMedium { ...props } />
  );
}

Product.Small = ProductCardSmall;
Product.Extended = ProductCardExtended;