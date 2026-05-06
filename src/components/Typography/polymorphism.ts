import { forwardRef as forwardReactRef } from 'react';
import type React from 'react';

export type As<Props = any> = React.ElementType<Props>;

export type ComponentPropsWithAs<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<
  Target,
  'as' | OmitAdditionalProps
>;

type RightJoinProps<SourceProps extends object, OverrideProps extends object> = OmitCommonProps<
  SourceProps,
  keyof OverrideProps
> &
  OverrideProps;

type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object,
  AsComponent extends As = As,
> = RightJoinProps<ComponentProps, AdditionalProps> &
  RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent;
  };

export type ComponentWithAs<Component extends As, Props extends object> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      React.ComponentProps<Component>,
      React.ComponentProps<AsComponent>,
      Props,
      AsComponent
    >,
  ): React.ReactElement | null;

  displayName?: string;
};

export function forwardRefWithAs<Props extends object, Component extends As>(
  component: React.ForwardRefRenderFunction<
    any,
    React.PropsWithoutRef<
      RightJoinProps<ComponentPropsWithAs<Component>, Props> & {
        as?: As;
      }
    >
  >,
) {
  return forwardReactRef(component) as unknown as ComponentWithAs<Component, Props>;
}
