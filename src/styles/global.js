import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Poppins', San-Serif;
        background-color: #f2f2f2;
    }
    
    .btn {
    background-color: teal !important;
    border-color: white !important;
    }

`;

export default Global;
