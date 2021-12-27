import { FC, Suspense } from 'react';
import { useQuery } from 'react-query';

interface ImgProps {
  src: string;
  alt: string;
  className: string;
  suspense?: boolean;
  fallBackSrc?: string;
}

// const Avatar: FC<ImgProps> = (props) => {
//   const { src, alt, suspense, className, ...otherProps } = props;
//   const { data: loadedImage } = useQuery([src], () => new Promise<HTMLImageElement>(resolve => {
//     const image = new Image();
//     image.onload = () => { resolve(image); };
//     image.src = src;

//   }), { suspense: true });

//   if (!suspense) {
//     return <img { ...{ src, className, ...otherProps, alt } } />;
//   }

//   return !loadedImage ? null : (
//     <img { ...{ className, ...otherProps, alt, src: loadedImage.src, } } />
//   );
// };

const Img: FC<ImgProps> = (props) => {
  const { src, alt, suspense = true, fallBackSrc, className, ...otherProps } = props;
  const { data: loadedImage } = useQuery([src], () => new Promise<HTMLImageElement>(resolve => {
    const image = new Image();
    image.onload = () => { resolve(image); };
    image.src = src;

  }), { suspense: true });

  if (!suspense) {
    return <img { ...{ src, className, ...otherProps, alt } } />;
  }

  // TODO : add error boundary
  return (
    <Suspense fallback={ <img src={ fallBackSrc ?? src } alt={ alt } className={ className } /> }>
      { loadedImage && <img { ...{ className, ...otherProps, alt, src: loadedImage.src, } } /> }
    </Suspense>
  );
};

export default Img;