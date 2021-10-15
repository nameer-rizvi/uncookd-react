import styled from "styled-components";
import { FlexBox } from "../Element";

const NotificationsStyled = styled(FlexBox)`
  ${({ theme }) => theme.preset.limitWidth(500)}

  #notifications-date {
    font-weight: bold;
    padding-bottom: 5px;
    border-bottom: ${({ theme }) => theme.border[5]};
  }

  #notifications-news {
    margin: 25px 0 35px 0;
  }

  #notifications-news ul {
    margin-bottom: 0;
  }

  #notifications-news ul,
  #notifications-news li:not(:first-child) {
    margin-top: 10px;
  }

  #notifications-news button {
    width: 100%;
    text-align: left;
    justify-content: flex-start;
  }

  #notifications-settings-link {
    width: 100%;
    margin-bottom: 15px;
    justify-content: flex-start;
    text-decoration: underline;
    font-style: italic;
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: ${({ theme }) => theme.lineHeight[3]};
  }

  #notifications-menu {
    font-weight: bold;
  }

  #feed-content {
    margin-top: 20px;
  }
`;

export default NotificationsStyled;
