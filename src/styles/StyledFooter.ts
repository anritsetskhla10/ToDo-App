import styled from "styled-components";

interface StyledFooterProps {
    mode: boolean;
  }
  
  const StyledFooter = styled.footer<StyledFooterProps>`
    display: flex;
    flex-direction: column;
    align-items: center;

 .filter{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 19px;
        width: 327px;
        margin: 16px 0 40px;
        padding: 15px 80px 15px 81px;
        border-radius: 5px;
        box-shadow: ${({ mode }) =>
      mode
        ? "0 35px 50px -15px rgba(0, 0, 0, 0.5)"
        : "0 35px 50px -15px rgba(194, 195, 214, 0.5)"};
        background-color:${({mode}) => mode ? "#25273d" : "#fff" }; 
    }

    .filter button{
        border: none;
        background-color:${({mode}) => mode ? "#25273d" : "#fff" }; 
        font-size: 14px;
        font-weight: bold;
        letter-spacing: -0.19px;
        color:${({mode}) => mode ? "#5b5e7e" : "#9495a5" };
        cursor: pointer;

        &:focus{
            color: #3a7cfd;
        }

        &:hover{
            color:${({mode}) => mode ? "#e3e4f1" : "#494c6b" };
        }

    }


    h2{
        font-size: 14px;
        font-weight: normal;
        letter-spacing: -0.19px;
        text-align: center;
        color:${({mode}) => mode ? "#5b5e7e" : "#9495a5" };
    }

    .todos-amount{
        width: 327px;
        display: flex;
        flex-direction: row;
        gap: 138px;
        padding: 16px 20px;
        background-color:${({mode}) => mode ? "#25273d" : "#fff" };
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    

    .todos-amount span{
        font-size: 12px;
        font-weight: normal;
        letter-spacing: -0.17px;
        color:${({mode}) => mode ? "#5b5e7e" : "#9495a5" };
    }

    .todos-amount button{
        border: none;
        background-color:${({mode}) => mode ? "#25273d" : "#fff" };
        font-size: 12px;
        font-weight: normal;
        letter-spacing: -0.17px;
        color:${({mode}) => mode ? "#5b5e7e" : "#9495a5" };
        cursor: pointer;

        &:hover{
            color:${({mode}) => mode ? "#e3e4f1" : "#494c6b" };
        }
    }

    @media only screen and (min-width:1440px) {
    
        .filter-wrapper{
            width:540px;
            padding: 16px 24px;
            margin-bottom: 49px;
            display: grid;
            background-color:${({mode}) => mode ? "#25273d" : "#fff"};
            grid-template-rows: 1fr ;
            grid-template-columns: 1fr ;
            align-items: center;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            box-shadow: ${({ mode }) =>
      mode
        ? "0 35px 50px -15px rgba(0, 0, 0, 0.5)"
        : "0 35px 50px -15px rgba(194, 195, 214, 0.5)"};
        }

        .filter{
            width: fit-content;
            margin: 0;
            padding: 0;
            border-radius: 0;
            grid-area: 1 / 1;
            justify-self: center;
            z-index: 1;
        }

        .todos-amount{
            width: 100%;
            justify-content: space-between;
            gap: 0;
            padding: 0;
            grid-area: 1 / 1
        }
        
        .todos-amount span{
            font-size: 14px;
            letter-spacing: -0.19px;
        }

        .todos-amount button{
            font-size: 14px;
            letter-spacing: -0.19px;
        }
        }
    
`


export default StyledFooter;