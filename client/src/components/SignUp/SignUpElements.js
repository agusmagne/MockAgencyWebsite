import styled from "styled-components";
import { Input } from "@material-ui/core";

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
  display: grid;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  width: 60%;
  height: 480px;
  background: #e9f7f7;
`;

export const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "formColumn actionColumn";
`;

export const BoxLabel = styled.h1`
  margin: 32px;
  color: #010606;
`;

export const FormColumn = styled.div`
  padding: 0 15px;
  display: flex;
  max-width: 100%;
  flex-direction: column;
  grid-area: formColumn;
`;

export const Form = styled.div`
  display: grid;
`;

export const ActionColumn = styled.div`
  padding: 0 15px;
  grid-area: actionColumn;
`;

export const Field = styled(Input)`
  margin-bottom: 32px;
  margin-right: 32px;
  margin-left: 32px;
`;
