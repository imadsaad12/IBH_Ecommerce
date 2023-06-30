import React from "react";
import InputField from "../../../components/inputField";
import Button from "../../../components/Button";
import SpinnerLoading from "../../../components/SpinnerLoading";
import { Container, Header, FieldsWrapper } from "../../sign-up/form/styles";
import { SIGN_IN } from "../../../global/strings";
import { useForm } from "react-hook-form";
import { useApiMutation } from "../../../api/user/sign-in";
import { useDispatch } from "react-redux";
import { SET_TOKEN } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";
import { backButtonStyle } from "./styles";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { status, handleApiCall } = useApiMutation(({ data }) => {
    dispatch({ type: SET_TOKEN, payload: data.token });
    navigate("/home");
  });

  const handleOnClick = () => {
    handleSubmit((data) => {
      handleApiCall(data);
    })();
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      {status === "loading" ? (
        <SpinnerLoading />
      ) : (
        <>
          <Header>{SIGN_IN}</Header>
          <Container>
            <InputField
              name="userName"
              placeHolder="joe-doe"
              label="Username"
              style={{ width: "33rem" }}
              register={register}
            />
            <InputField
              name="password"
              placeHolder="Password@123"
              label="Password"
              style={{ width: "33rem" }}
              register={register}
              type="password"
            />
            <FieldsWrapper>
              <Button
                text="Back"
                onClick={handleBackClick}
                style={backButtonStyle}
              />
              <Button text={SIGN_IN} onClick={handleOnClick} />
            </FieldsWrapper>
          </Container>
        </>
      )}
    </>
  );
}
