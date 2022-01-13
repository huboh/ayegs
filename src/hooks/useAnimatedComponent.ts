import { FC } from 'react';
import AnimatedComponent, { AnimatedComponentProps } from "../components/AnimatedComponent";

export interface UseAnimatedComponentProps extends AnimatedComponentProps { }

const useAnimatedComponent = (componentProps: UseAnimatedComponentProps) => {
  const animatedComponentProps: AnimatedComponentProps = componentProps;
  AnimatedComponent.defaultProps = animatedComponentProps;

  return [
    AnimatedComponent as FC<Partial<AnimatedComponentProps> | undefined>,
    animatedComponentProps
  ] as const;
};

export default useAnimatedComponent;