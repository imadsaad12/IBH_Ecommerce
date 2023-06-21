import React from "react";
import { Container, ErrorMessage, Input, Label } from "./styles";

export default function InputField({
  onChange,
  name,
  placeHolder,
  defaultValue,
  style,
  label,
  register,
  errorMessage,
  type = "text",
}) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input
        {...register(name)}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        style={style}
        placeholder={placeHolder}
        type={type}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
