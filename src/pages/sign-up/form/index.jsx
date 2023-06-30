import React from "react";
import { Container, Description, FieldsWrapper, Header } from "./styles";
import InputField from "../../../components/inputField";
import { HAVE_ACCOUNT, SIGNUP, SIGN_IN } from "../../../global/strings";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import { useApiMutation } from "../../../api/user/sign-up";
import { useDispatch } from "react-redux";
import { SET_TOKEN } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";
import SignInButton from "./SignInButton";
import SpinnerLoading from "../../../components/SpinnerLoading";

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

  const handleClick = () => navigate("/");

  return (
    <>
      {status === "loading" ? (
        <SpinnerLoading />
      ) : (
        <>
          <Header>{SIGNUP}</Header>
          <Description>
            {HAVE_ACCOUNT}
            <SignInButton onClick={handleClick} text={SIGN_IN} />
          </Description>

          <Container>
            <FieldsWrapper>
              <InputField
                name="firstName"
                placeHolder="joe"
                label="First name"
                style={{ width: "15rem" }}
                register={register}
              />
              <InputField
                name="lastName"
                placeHolder="doe"
                label="Last name"
                style={{ width: "15rem" }}
                register={register}
              />
            </FieldsWrapper>
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
            />
            <Button text="Submit" onClick={handleOnClick} />
          </Container>
        </>
      )}
    </>
  );
}
