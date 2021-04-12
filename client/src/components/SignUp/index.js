import React from "react";
import background from "../../videos/background.mp4";
import { Input } from "@material-ui/core";
import {
  Container,
  BackgroundVideo,
  BoxContainer,
  BoxWrapper,
  FormColumn,
  BoxLabel,
  ActionColumn,
  Form,
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
                <Input placeholder="AasdsadsadSD" label="asd" />
                <Input />
                <Input />
                <Input />
              </Form>
            </FormColumn>
            <ActionColumn>ASD</ActionColumn>
          </BoxWrapper>
        </BoxContainer>
      </Container>
    </>
  );
}

export default SignUp;
