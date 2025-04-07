import styled from "styled-components"

export const Header = styled.header`
    background-color: var(--color-background);
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width:100%;
    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 8px 0px #f5f5f5;
    align-items: center;
    
    @media(min-width: 520px){
        padding: 0px 40px;
    }
    @media(min-width: 768px){
        padding: 0px 80px;
    }
`

