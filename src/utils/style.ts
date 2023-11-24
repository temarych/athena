import { twMerge as mergeStyles } from 'tailwind-merge';

export type Variance = {
  [key: string]: any;
};

export type Selector<V extends Variance> = {
  [key in keyof V]?: V[key];
} & {
  style: string;
}

export type Props<V extends Variance> = {
  [key in keyof V]: V[key];
}

export const fromSelectors = <V extends Variance>(selectors: Selector<V>[]) => (variance: V) => {
  return selectors.reduce((className, selector) => {
    const { style, ...variant } = selector;

    for (const key in variant) {
      if (variant[key] !== variance[key]) return className;
    }

    return mergeStyles(className, style);
  }, '');
};

export { twMerge as mergeStyles } from 'tailwind-merge';
