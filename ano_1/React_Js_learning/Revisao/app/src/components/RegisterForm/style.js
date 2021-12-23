import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { primaryColor } from "../../constants/colors";

import { Field } from "formik";

export const Container = styled.main`
  width: 380px;
  height: 320px;


`;
export const BoxLogin = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const TextLogin = styled(Field)`
  height: 2rem;
  border-right: none;
  border-top: none;
  border-left: none;
  border-bottom: 2px solid #a9a9a9;
  width: 98%;
 

  &:focus {
    outline: 0;
    border: 1px solid ${primaryColor};
    padding: 8px;
    padding-right: 0;
  }
`;
export const ButtonLogin = styled(Button)`
margin-top:1rem;
`
