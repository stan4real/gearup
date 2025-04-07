import { Section } from "@radix-ui/themes";
import styled from "styled-components";

export const Container = styled(Section)`
	width: 100%;
	height: calc(100vh - 100px);
	display: flex;
    flex-direction: column;
	justify-content: center;
	align-items: center;
    gap:30px;
`
