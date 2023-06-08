import React from "react";
import { Container, MenuItem } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Bar() {
  const navigate = useNavigate();
  return (
    <Container>
      <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
      <MenuItem onClick={() => navigate("/about-us")}>About us</MenuItem>
      <MenuItem onClick={() => navigate("/contact")}>Contact</MenuItem>
    </Container>
  );
}
