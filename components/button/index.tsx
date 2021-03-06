import React from 'react';
import './style';
import { classNames } from '../utils';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'default' | 'primary' | 'warning' | 'danger';
}

export default function Button(props: ButtonProps) {
  const { type = 'default', className, ...rest } = props;

  return (
    <button {...rest}
      className={classNames(className, {
        [`${process.env.COMPONENT_PREFIX}-button`]: true,
        [`${process.env.COMPONENT_PREFIX}-button--${type}`]: true
      })}></button>
  )
}