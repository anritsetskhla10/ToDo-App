import {createGlobalStyle } from 'styled-components'




const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Josefin Sans", sans-serif;
    }

    body {
        min-width: 375px;
        min-height: 100vh;
        padding: 48px 24px 7px 26px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${({mode})=> mode ? "url(/images/bg-mobile-dark.jpg)" :"url(/images/bg-mobile-light.jpg)"};
        background-position: center top;
        background-color: ${({ mode}:{mode:boolean}) => mode ? "#171823" : "#fafafa"};
        background-size:100% 200px ;
        background-repeat: no-repeat;
        overflow-x: hidden;
    }

    @media only screen and (min-width:1440px){
        body{
        background: ${({mode})=> mode ? "url(/images/bg-desktop-dark.jpg)" :"url(/images/bg-desktop-light.jpg)"};
        background-position: center top;
        background-size:100% 300px ;
        background-repeat: no-repeat;
        }
    }

`

export default GlobalStyles;