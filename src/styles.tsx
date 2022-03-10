import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap");

* {
    &,
    &:before,
    &:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
}

body {
    font-family: "IBM Plex Sans", sans-serif;
}
`;
