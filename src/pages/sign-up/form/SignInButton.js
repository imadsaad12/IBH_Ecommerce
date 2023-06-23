import React from "react";
import { SignInStyle } from "./styles";

export default function SignInButton({ onClick, text }) {
  return <SignInStyle onClick={onClick}>{text}</SignInStyle>;
}
