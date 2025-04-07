import styled from "styled-components";
import { Section } from "@radix-ui/themes";

export const Container = styled(Section)`
    position: relative;
    height: 400px;
    margin-top: 8px;
    display: flex;
    color: white;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 520px) {
        height: 300px;
    }
`
export const Image = styled.img`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 100% 80%;
    filter: brightness(30%);

    @media (max-width: 520px) {
        object-position: center;
    }
`

export const Heading = styled.h3`
    font-size: 30px;
    margin-top: 0px;

    @media (max-width: 520px) {
        font-size:24px;
    }
    @media (min-width: 1000px) {
        font-size:40px;
    }
`