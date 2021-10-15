import { createGlobalStyle } from "styled-components";
import { style, elementId } from "../../../shared";

const ThemeGlobalStyle = createGlobalStyle`
  ${style.base}

  body {
    align-items: center;
    background-color: ${({ theme }) => theme.color.light[3]};
    color: ${({ theme }) => theme.color.dark[3]};
  }
  
  #${elementId.react} {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    max-width: 1280px;
    padding: 0 30px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  
  main {
    display: flex;
    flex-grow: 1;
    padding-bottom: 60px;
  }
  
  textarea:focus,
  button:focus,
  input:focus,
  select:focus,
  a:focus,
  svg:focus {
    outline: ${({ theme }) => theme.border[7]};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  small,
  pre,
  button,
  textarea,
  select,
  a {
    margin: 0;
    padding: 0;
    border: 0;
    background: unset;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    word-break: break-word;
  }

  [disabled],
  [disabled]:hover,
  [disabled]:focus,
  [disabled]:focus-within {
    background-color: unset !important;
    cursor: auto !important;
    opacity: ${({ theme }) => theme.opacity.disabled};
  }

  .article-ribbons {
    flex-direction: row !important;
    align-items: center !important;
    margin-top: 5px !important;
    svg:not(:last-child) {
      margin-right: 8px !important;
    }
  }

  .container-padding {
    padding: ${({ theme }) => theme.padding.container.d};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[11]}) {
    .container-padding {
      padding: ${({ theme }) => theme.padding.container.t};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint[6]}) {
    body {
      padding: 0 10px !important;
    }
    
    #${elementId.react} {
      padding: 0 !important;
    }

    main {
       margin: ${({ theme }) => theme.height.pageNavMobile} 0 ${({ theme }) =>
  theme.height.pageNav} 0 !important;
      padding: ${({ theme }) => theme.height.pageNavMobile} 0 ${({ theme }) =>
  theme.height.pageNav} 0 !important;
      // flex-grow: unset !important;
    }

    .container-padding {
      padding: ${({ theme }) => theme.padding.container.m} 0;
    }
  }
`;

export default ThemeGlobalStyle;
