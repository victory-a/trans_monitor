import { createGlobalStyle } from "styled-components";
import colors from "styles/colors";

const size = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1025px",
  desktop: "1441px"
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};

const GlobalStyles = createGlobalStyle`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  html {
    font-size: 50%;

    @media ${device.mobile} {
      font-size: 62.5%;
    }
  }
  
 body {
    width: 100%;
    height: 100%;
    font-size: 14px;
    min-height: 100%;
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    outline: none;
    color: ${colors.primary};
    /* background-color: ${colors.lightGrey}; */
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none !important;
    transform: color .5s;
  }

  button {
/* override chakra-ui default button styles */
    font-size: 1.2rem !important;
    font-weight: bold !important;
    font-family: 'Roboto', sans-serif !important;

    span {
      font-size: 20px;
      margin-right: .5rem;
      vertical-align: top;
      height: 7px;
      width: 7px;
      border-radius: 20px;

      &.green {
        background-color: ${colors.green};
      }
      &.yellow {
        background-color: ${colors.yellow};
      }
      &.un {
        background-color: ${colors.un};
      }

      & ::un {
        content: " ";
        color: red;

        position: relative;
        height: 10px;
        width: 10px;
      }
    }
  }

  input {
    font-size: 14px !important;
    
/* override chakra-ui default input styles */
    :focus {
      border: 1px solid #8dcfff !important;
      outline: none;
      box-shadow: 0 0 0 .8px #8dcfff !important;
    }
  }
`;

export default GlobalStyles;
