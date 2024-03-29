import React from 'react';
import InputField from '../../../components/inputField';
import Button from '../../../components/Button';
import SpinnerLoading from '../../../components/SpinnerLoading';
import { Container, Header } from '../../sign-up/form/styles';
import { DO_NOT_HAVE_ACCOUNT, SIGN_IN } from '../../../global/strings';
import { useForm } from 'react-hook-form';
import { useApiMutation } from '../../../api/user/sign-in';
import { useNavigate } from 'react-router-dom';
// import { backButtonStyle } from './styles';
import { setToken } from '../../../utils/authentication';
import { Link, Text } from './styles';
import { SIGN_UP } from '../../../routes/URLs';

export default function Form() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const { status, handleApiCall } = useApiMutation(({ data }) => {
    setToken(data.token);
    navigate('/home');
  });

  const handleOnClick = () => {
    handleSubmit((data) => {
      handleApiCall(data);
    })();
  };

  // const handleBackClick = () => {
  //   navigate('/');
  // };

  return (
    <>
      {status === 'loading' ? (
        <SpinnerLoading />
      ) : (
        <>
          <Header>{SIGN_IN}</Header>
          <Container>
            <InputField
              name="userName"
              placeHolder="joe-doe"
              label="Username"
              style={{ width: '33rem' }}
              register={register}
            />
            <InputField
              name="password"
              placeHolder="Password@123"
              label="Password"
              style={{ width: '33rem' }}
              register={register}
              type="password"
            />
            {/* <Button
                text="Back"
                onClick={handleBackClick}
                style={backButtonStyle}
              /> */}
            <Button
              text={SIGN_IN}
              onClick={handleOnClick}
              style={{ width: '250px', marginBottom: '-10px' }}
            />
            <Text>
              {DO_NOT_HAVE_ACCOUNT}
              <Link href={SIGN_UP}>create one</Link>
            </Text>
          </Container>
        </>
      )}
    </>
  );
}
