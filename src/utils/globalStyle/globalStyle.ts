import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  address {
    font-style: normal;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    padding:0;
    margin:0;
  }

  article {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    background: transparent;
  }

    .react-date-picker.react-date-picker--closed.react-date-picker--enabled .react-date-picker__wrapper {
        border: none;
    }
    .react-date-picker.react-date-picker--open.react-date-picker--enabled .react-date-picker__wrapper{
      border: none;

    }
    .react-date-picker.react-date-picker--closed.react-date-picker--enabled,.react-date-picker.react-date-picker--open.react-date-picker--enabled{
      display: block;
    }

.Logo {
  fill: #ebd8ff;
  width: 20px;
  height: 20px;

  transition-property: background-color, fill;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.Link {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  width: 100%;
  height: 100%;

  transition-property: background-color, fill;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.Link:hover .Logo,
.Link:focus .Logo {
  background-color: rgb(92, 211, 168);
  fill:#ebd8ff;
}

.Link:hover,
.Link:focus {
  background-color: rgb(92, 211, 168);
}
`;

export default GlobalStyles;
