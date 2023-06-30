import React from "react";
import { Container, LeftContainer, MenuItem } from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { REMOVE_TOKEN } from "../../../redux/actions";
import { ABOUT_US, CONTACT, HOME, SIGN_OUT } from "../../../global/strings";

export default function Bar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch({ type: REMOVE_TOKEN });
    navigate("/");
  };
  return (
    <Container>
      <LeftContainer>
        <MenuItem onClick={() => navigate("/")}>{HOME}</MenuItem>
        <MenuItem onClick={() => navigate("/about-us")}>{ABOUT_US}</MenuItem>
        <MenuItem onClick={() => navigate("/contact")}>{CONTACT}</MenuItem>
      </LeftContainer>
      <MenuItem onClick={handleSignOut}>{SIGN_OUT}</MenuItem>
    </Container>
  );
}
