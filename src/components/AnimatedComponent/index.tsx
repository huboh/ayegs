import { FC, ReactHTML } from 'react';
import { AnimatePresence, Variants, Variant, HTMLMotionProps, motion } from 'framer-motion';

export interface AnimatedComponentProps {
  display: boolean;
  tagName?: keyof ReactHTML;
  className?: string;
  lifeCycleTransitions?: {
    initial?: Variant;
    enter?: Variant;
    exit?: Variant;
  };
}

const AnimatedComponent: FC<AnimatedComponentProps> = (props) => {
  const { tagName = 'div', display, className, lifeCycleTransitions = {}, children } = props;

  const MotionComponent: FC<HTMLMotionProps<typeof tagName>> = (motion as any)[tagName];
  const animationVariants: Variants = {
    initial: { y: 5, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    exit: { y: 5, opacity: 0 },
    ...lifeCycleTransitions
  };

  return (
    <AnimatePresence>
      { display && (
        <MotionComponent className={ className } initial={ 'initial' } animate={ 'enter' } exit={ 'exit' } variants={ animationVariants }>
          { children }
        </MotionComponent>
      ) }
    </AnimatePresence>
  );
};

export default AnimatedComponent;