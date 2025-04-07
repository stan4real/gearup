import ReactPlayer from "react-player";
import styled from "styled-components";

export const Player = styled(ReactPlayer)`
    max-width: 500px; 
    min-height: 150px; 
    max-height: 300px;
    padding:8px; 
    border:1px solid gainsboro; 
    border-radius:8px; 

    @media (max-width: 760px) {
        max-width: 400px;
        min-height: 150px;
    }
`