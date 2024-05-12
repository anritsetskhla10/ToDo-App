import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    h1{
        color: #fff;
        font-size: 27px ;
        font-weight: 700;
        letter-spacing: 9px;
    }

    img{
        width: 16.2px;
        height: 16.2px;
        cursor: pointer;
    }

    @media only screen and (min-width:1440px) {
        margin-bottom: 48px;

        h1{
            font-size: 40px ;
            letter-spacing: 15px;
        }

        img{
            width: 26px;
            height: 26px;
        }
    }
`

export default StyledHeader;