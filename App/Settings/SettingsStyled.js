import styled from "styled-components";
import { FlexBox } from "../Element";

const SettingsStyled = styled(FlexBox)`
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
  flex-direction: row;

  nav#settings-mobile-menu,
  nav#settings-desktop-menu {
    align-items: flex-start;
    min-width: 200px;
    border-right: ${({ theme }) => theme.border[1]};
  }

  nav#settings-mobile-menu {
    display: flex;
  }

  #settings-main {
    flex-grow: 1;
    padding: 10px 0 0 40px;
  }

  form {
    flex-grow: 1;
    max-width: 500px;
  }

  button[type="submit"] {
    margin-top: 20px;
  }

  button[type="submit"],
  .post-status {
    align-self: flex-end;
  }

  form#profile-settings {
    label {
      min-width: 100px;
    }
    fieldset label {
      min-width: 115px;
    }
    .textarea-container {
      margin-top: 25px;
      margin-bottom: 30px !important;
      padding-bottom: 40px;
      border-bottom: ${({ theme }) => theme.border[5]};
    }
  }

  form#change-password-settings label {
    min-width: 170px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[11]}) {
    nav#settings-desktop-menu {
      min-width: 130px;
      max-width: 130px;
    }
    nav#settings-desktop-menu a {
      padding: 5px 10px;
    }
    #settings-main {
      padding-left: 30px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[7]}) {
    flex-direction: column;
    #settings-main {
      padding: 40px 0 0 0;
    }
  }
`;

export default SettingsStyled;
