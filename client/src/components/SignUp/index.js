import React from "react";
import background from "../../videos/background.mp4";
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
                <Field label="Name" />
                <Field label="Email" />
                <Field label="Password" />
                <Field label="Confirm password" />
              </Form>
            </FormColumn>
            <ActionColumn>
              <SignUpBtn variant="contained">Sign up</SignUpBtn>
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
