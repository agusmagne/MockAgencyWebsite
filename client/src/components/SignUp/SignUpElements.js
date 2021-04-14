import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: ${`${window.innerHeight}px`};
  align-items: center;
  justify-content: center;
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const BoxContainer = styled.div`
  z-index: 10;
  max-width: 768px;
  border-radius: 10px;
  margin-left: 68px;
  margin-right: 68px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  width: 100%;
  padding-bottom: 50px;
  height: auto;
  background: #fff;
`;

export const BoxLabel = styled.h1`
  padding: 32px 0 0 32px;
  color: #010606;
  letter-spacing: 1px;
  height: min-content;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    text-align: center;
    padding: 32px 16px 0 16px;
  }
`;

export const TopLineWrapper = styled.div`
  display: grid;
  justify-items: end;
`;

export const CloseBtnWrap = styled(LinkR)`
  margin: 24px 24px -24px 0;
  color: #000;
  &:hover {
    color: #01bf71;
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;

export const BoxWrapper = styled.div`
  display: grid;
  margin: 32px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "formColumn actionColumn";

  @media screen and (max-width: 768px) {
    display: block;
    grid-template-columns: 1fr;
  }
`;

export const FormColumn = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  grid-area: formColumn;
`;

export const Form = styled.div`
  display: grid;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Field = styled(TextField)`
  && {
    margin: 8px;
    max-width: 300px;
  }
`;

export const ActionColumn = styled.div`
  grid-area: actionColumn;
  display: grid;
  padding-top: 30px;
`;

export const SignUpBtn = styled(Button)`
  width: 50%;
  height: 50%;
  justify-self: center;
  align-self: end;

  && {
    border-radius: 100px;
    background: #01bf71;
    color: #e9f7f7;
    margin-bottom: 12px;
    max-width: 150px;

    &:hover {
      background: #fff;
      color: #01bf71;
    }
  }

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const AlreadyHaveUserWrapper = styled.div`
  justify-content: center;
  display: flex;
`;

export const AlreadyHaveUserText = styled.div`
  margin-right: 8px;
`;

export const SignInLink = styled(LinkR)`
  text-decoration: none;
  color: #01bf71;
  height: min-content;

  &:hover {
    text-decoration: underline;
  }
`;
