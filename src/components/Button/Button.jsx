import React from 'react';
import { ButtonLM } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <>
      <ButtonLM type="button" onClick={onClick}>
        Load more
      </ButtonLM>
    </>
  );
};
export default Button;
