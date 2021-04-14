import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import background from "../../videos/background.mp4";
import { IoClose } from "react-icons/io5";
import { RegisterUser } from "./service";
import {
  Container,
  BackgroundVideo,
  BoxContainer,
  TopLineWrapper,
  CloseBtnWrap,
  BoxWrapper,
  FormColumn,
  BoxLabel,
  ActionColumn,
  Form,
  Field,
  SignUpBtn,
  AlreadyHaveUserWrapper,
  SignInLink,
  AlreadyHaveUserText,
} from "./SignUpElements";

function SignUp({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [hover, setHover] = useState(false);

  async function signUpIntent() {
    let nameErr = false;
    let emailErr = false;
    let passwordErr = false;
    if (name === "") nameErr = true;
    if (email === "") emailErr = true;
    if (password === "" || confPassword === "") passwordErr = true;
    if (password !== confPassword) passwordErr = true;

    if (nameErr === true || emailErr === true || passwordErr === true) {
      setNameError(nameErr);
      setEmailError(emailErr);
      setPasswordError(passwordErr);
      return;
    }

    try {
      let response = await RegisterUser(name, email, password);
      console.log(response);
      history.push({ pathname: "/" });
    } catch (err) {
      console.log(err.response);
      if (err.response.status === 409) {
        userAlreadyExists();
      }
    }
  }

  function userAlreadyExists() {
    setNameError(false);
    setEmailError(true);
    setPasswordError(false);
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
          <BoxLabel>Create your new account</BoxLabel>
          <BoxWrapper>
            <FormColumn>
              <Form>
                <Field
                  label="Name"
                  onChange={(e) => setName(e.target.value)}
                  error={nameError}
                />
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
                <Field
                  type="password"
                  label="Confirm password"
                  onChange={(e) => setConfPassword(e.target.value)}
                  error={passwordError}
                />
              </Form>
            </FormColumn>
            <ActionColumn>
              <SignUpBtn variant="contained" onClick={signUpIntent}>
                Sign up
              </SignUpBtn>
              <AlreadyHaveUserWrapper>
                <AlreadyHaveUserText>Already have a user?</AlreadyHaveUserText>
                <SignInLink to="signin">Log in</SignInLink>
              </AlreadyHaveUserWrapper>
            </ActionColumn>
          </BoxWrapper>
        </BoxContainer>
      </Container>
    </>
  );
}

export default withRouter(SignUp);
