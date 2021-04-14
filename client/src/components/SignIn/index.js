import React, { useState } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import background from "videos/background.mp4";
import { SignInUser } from "./service";
import { withSnackbar } from "higher-order-components/";
import { IoClose } from "react-icons/io5";
import {
  Container,
  BackgroundVideo,
  BoxContainer,
  BoxWrapper,
  CloseBtnWrap,
  FormColumn,
  BoxLabel,
  ActionColumn,
  Form,
  Field,
  SignUpBtn,
  AlreadyHaveUserWrapper,
  SignInLink,
  AlreadyHaveUserText,
  TopLineWrapper,
} from "components/SignIn/SignInElements";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [hover, setHover] = useState(false);

  async function signInIntent() {
    let emailErr = false;
    let passwordErr = false;
    if (email === "") emailErr = true;
    if (password === "") passwordErr = true;
    if (emailErr === true || passwordErr === true) {
      setEmailError(emailErr);
      setPasswordError(passwordErr);
      return;
    }
    try {
      let response = await SignInUser(email, password);
      console.log(response);
      props.snackbarSuccess("Logged in successfully");
      // props.history.push({ pathname: "/" });
    } catch (err) {
      console.log(err.response);
      if (err.response.status === 409) {
        invalidCredentials();
      }
    }
  }

  function invalidCredentials() {
    setEmailError(true);
    setPasswordError(true);
  }

  function onHover() {
    setHover(!hover);
  }

  return (
    <>
      <Container>
        <BackgroundVideo
          autoPlay
          loop
          muted
          src={background}
          type="video/mp4"
        />
        <BoxContainer>
          <TopLineWrapper>
            <CloseBtnWrap to="/">
              <IoClose
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                style={{ fontSize: "2rem" }}
              />
            </CloseBtnWrap>
          </TopLineWrapper>
          <BoxLabel>Sign in to your account</BoxLabel>
          <BoxWrapper>
            <FormColumn>
              <Form>
                <Field
                  label="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                />
                <Field
                  type="password"
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  error={passwordError}
                />
              </Form>
            </FormColumn>
            <ActionColumn>
              <SignUpBtn variant="contained" onClick={signInIntent}>
                Continue
              </SignUpBtn>
              <AlreadyHaveUserWrapper>
                <AlreadyHaveUserText>
                  Don't have an account yet?
                </AlreadyHaveUserText>
                <SignInLink to="signup">Sign up</SignInLink>
              </AlreadyHaveUserWrapper>
            </ActionColumn>
          </BoxWrapper>
        </BoxContainer>
      </Container>
    </>
  );
}

export default compose(withSnackbar, withRouter)(SignIn);
