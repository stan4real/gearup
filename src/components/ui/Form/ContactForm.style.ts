import styled from "styled-components"
import { Form } from "radix-ui"
import { Button } from "@radix-ui/themes"


export const FormRoot = styled(Form.Root)`
    max-width: 320px;
	width: 100%;
`
export const FormField = styled(Form.Field)`
    display: grid;
	margin-bottom: 10px;
`
export const FormLabels = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`
export const FormLabel = styled(Form.Label)`
    font-size: 15px;
	font-weight: 500;
	line-height: 35px;
`
export const FormMessage = styled(Form.Message)`
    font-size: 13px;
	color: var(--color-gray);
	opacity: 0.8;
`
export const Input = styled.input`
    width: 100%;
    padding: 0 10px;
	height: 35px;
	line-height: 1;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	font-size: 15px;
	color: #0f0f0f;
	background-color: var(--jade-a2);
	box-shadow: 0 0 0 1px var(--jade-a6);

    &:hover{
        box-shadow: 0 0 0 1px #29a383;
    }
    &:focus{
        box-shadow: 0 0 0 2px #29a383;
    }
    
`

export const Textarea = styled.textarea`
    width: 100%;
    resize: none;
    padding: 10px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	font-size: 15px;
	color: #0f0f0f;
	background-color: var(--jade-a2);
	box-shadow: 0 0 0 1px var(--jade-a6);

    &:hover{
        box-shadow: 0 0 0 1px #29a383;
    }
    &:focus{
        box-shadow: 0 0 0 2px #29a383;
    }
	&::-webkit-scrollbar {
        width: 0px;
    }
`
export const SubmitButton = styled(Button)`
    display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	padding: 0 15px;
	font-size: 15px;
	line-height: 1;
	font-weight: 500;
	height: 35px;
	width: 100%;
	box-shadow: 0 2px 10px var(--black-a4);
`