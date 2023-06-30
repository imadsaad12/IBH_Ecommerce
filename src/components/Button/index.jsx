import React from 'react';
import { CustomizedButton } from './styles';

export default function Button({ onClick, text, style }) {
  return (
    <CustomizedButton onClick={onClick} style={style}>
      {text}
    </CustomizedButton>
  );
}
