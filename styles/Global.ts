import {createGlobalStyle} from 'styled-components'

const Style = createGlobalStyle`
    :root {
    --primary-color: #db1f48;
    --secondary-color: #004369;
    --tertiary-color: #01949a;
    --grey-color: #CDCDCD;
    }

    html,
    body {
    padding: 0;
    margin: 0;
    font-family: Absender, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }

    @font-face {
    font-family: Absender;
    src: url(/absender1.woff);
    }


    ::selection {
    background-color: var(--primary-color);
    }
`


export default Style