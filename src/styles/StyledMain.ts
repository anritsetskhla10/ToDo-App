import styled from "styled-components";

interface StyledMainProps {
    mode: boolean;
  }


const StyledMain = styled.main<StyledMainProps>`

    display: flex;
    flex-direction: column;
    align-items: center;

    .createTodo{
        width: 327px;
        padding: 14px 0 14px 20px;
        border-radius: 5px;
        box-shadow: ${({ mode }) =>
      mode
        ? "0 35px 50px -15px rgba(0, 0, 0, 0.5)"
        : "0 35px 50px -15px rgba(194, 195, 214, 0.5)"};
        background-color:${({mode}) => mode ? "#25273d" : "#fff" };
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    input[type="checkbox"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 20px;
        height: 20px;
        margin: 0 12px 0 0;
        padding: 7.5px 6.1px 7.5px 6.7px;
        border-radius: 50%;
        border: solid 1px ${({mode}) => mode ? "#393A4B" : "#E3E4F1" };

        &:hover{
            cursor: pointer;
            background-image:  linear-gradient(135deg, #5df, #c058f3);
        }

        &:checked {
            background:url(./images/icon-check.svg) center no-repeat , 
            linear-gradient(135deg, #5df, #c058f3);
        }
    }
    
    input[type="text"]{
        border: none;
        font-size: 12px;
        font-weight: normal;
        letter-spacing: -0.17px;
        background-color:${({mode}) => mode ? "#25273d" : "#fff" };
        color:${({mode}) => mode ? "#767992" : "#393a4b" };
    }

    ul{
        width: 327px;
        margin: 16px 0 0 0;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        box-shadow: ${({ mode }) =>
      mode
        ? "0 35px 50px -15px rgba(0, 0, 0, 0.5)"
        : "0 35px 50px -15px rgba(194, 195, 214, 0.5)"};
        background-color:${({mode}) => mode ? "#25273d" : "#fff" };
    }

    li{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        border-bottom: ${({mode}) => mode ? "#393a4b 1px solid" : "#e3e4f1 1px solid" };;
    }

    li div{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    li button{
        border: none;
        background-color:${({mode}) => mode ? "#25273d" : "#fff" };
    }

    li button img{
        width: 12px;
        height: 12px;
        transform: rotate(-90deg);
    }


    @media only screen and (min-width:1440px) {
        .createTodo{
        width: 540px;
        padding: 20px 0 20px 24px;
        }

        input[type="checkbox"] {
            width: 24px;
            height: 24px;
            margin: 0 12px 0 0;
            padding: 9px 7.3px 9px 8px;
        }

        
        input[type="text"]{
            font-size: 18px;
            letter-spacing: -0.25px;
        }

        ul{
            width: 540px;
            margin: 24px 0 0 0;
        }

        li{
            padding: 20px 24px;
        }


        li button img{
            width:  18px;
            height: 18px;
        }

    }
   
`

 export const StyledSpan = styled.span<{ $isdone: string, mode: boolean }>`
  letter-spacing: -0.25px;
  color: ${({ mode }) => mode ? "#c8cbe7" : "#494c6b" };
  text-decoration: ${({ $isdone }) => ($isdone === "true" ? "line-through" : "none")};
  cursor: pointer;
`;



export const StyledInput = styled.input<{ $isdone: string, mode: boolean }>`

        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 20px;
        height: 20px;
        margin: 0 12px 0 0;
        padding: 7.5px 6.1px 7.5px 6.7px;
        border-radius: 50%;
        border: solid 1px ${({mode}) => mode ? "#393A4B" : "#E3E4F1" };

        background: ${({ $isdone }) => $isdone === "true" 
      ? "url(./images/icon-check.svg) center no-repeat, linear-gradient(135deg, #5df, #c058f3)" 
      : "initial"};
      
        &:hover{
            cursor: pointer;
            /* background-image: linear-gradient(135deg, #5df, #c058f3); */
        }

        &:checked {
            background:url(./images/icon-check.svg) center no-repeat , 
            linear-gradient(135deg, #5df, #c058f3);
        }



`

export default StyledMain ;