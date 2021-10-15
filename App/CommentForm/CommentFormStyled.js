import styled from "styled-components";
import { FlexBox } from "../Element";

const CommentFormStyled = styled(FlexBox)`
  button.comment-form-toggle {
    margin-bottom: 20px;
    text-decoration: underline;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  form#comment,
  form#reply {
    align-items: flex-end;
    margin-bottom: 20px;
  }

  button[name="submit_comment"] {
    margin: 0px 0px 5px 0 !important;
  }
`;

export default CommentFormStyled;
