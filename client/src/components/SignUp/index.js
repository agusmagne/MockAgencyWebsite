import React, { useState } from "react";
import background from "../../videos/background.mp4";
import { SignIn } from "./service";
import {
  Container,
  BackgroundVideo,
  BoxContainer,
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

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  function signUpIntent() {
    let request = { name: name, username: email, password: password };
    SignIn(request).then((res) => {
      console.log(res);
    });
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
          <BoxLabel>Create your new account</BoxLabel>
          <BoxWrapper>
            <FormColumn>
              <Form>
                <Field label="Name" onChange={(e) => setName(e.target.value)} />
                <Field
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Field
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Field
                  label="Confirm password"
                  onChange={(e) => setConfPassword(e.target.value)}
                />
              </Form>
            </FormColumn>
            <ActionColumn>
              <SignUpBtn variant="contained" onClick={signUpIntent}>
                Sign up
              </SignUpBtn>
              <AlreadyHaveUserWrapper>
                <AlreadyHaveUserText>Already have a user?</AlreadyHaveUserText>
                <SignInLink>Log in</SignInLink>
              </AlreadyHaveUserWrapper>
            </ActionColumn>
          </BoxWrapper>
        </BoxContainer>
      </Container>
    </>
  );
}

export default SignUp;
