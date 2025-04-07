import { Form } from "radix-ui";
import * as styled from "./ContactForm.style"
import { sendData } from "../../../appwrite";
import React, { useState } from "react";

type ContactFormProps = {
	setHeadingState: React.Dispatch<React.SetStateAction<{
		isSent: boolean;
		name: string;
	}>>
}

const ContactForm = ({setHeadingState} : ContactFormProps) => {

	const [isLoading, setIsLoading] = useState(false)
	

	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsLoading(true)

		const formData = new FormData(e.currentTarget)
		let requestData = {} as  {
			[key:string]:string | FormDataEntryValue | undefined
		} 
		formData.forEach((value, key) => (
			requestData[key] = value
		));

		sendData(JSON.stringify(requestData)).then((response)=>{
			setIsLoading(false);
			const reply = response.reply
			const data = JSON.parse(response.data) 
			setHeadingState({
				isSent:true,
				name:data.name
			})

			console.log(data)
			console.log(reply)
			
			const target = e.target as HTMLFormElement
			target.reset()
		}).catch(error =>{
			console.log(error)
		})
	}

	return (
		<styled.FormRoot onSubmit={handleSubmit}>
			<styled.FormField name="name">
				<styled.FormLabels>
					<styled.FormLabel>Name</styled.FormLabel>
					<styled.FormMessage match="valueMissing">
						Please enter your name
					</styled.FormMessage>
					<styled.FormMessage  match="typeMismatch">
						Please provide a valid name
					</styled.FormMessage>
				</styled.FormLabels>
				<Form.Control asChild>
					<styled.Input type="text" required />
				</Form.Control>
			</styled.FormField>
			<styled.FormField name="email">
				<styled.FormLabels>
					<styled.FormLabel>Email</styled.FormLabel>
					<styled.FormMessage match="valueMissing">
						Please enter your email
					</styled.FormMessage>
					<styled.FormMessage  match="typeMismatch">
						Please provide a valid email
					</styled.FormMessage>
				</styled.FormLabels>
				<Form.Control asChild>
					<styled.Input type="email" required />
				</Form.Control>
			</styled.FormField>
			<styled.FormField name="message">
				<styled.FormLabels>
					<styled.FormLabel>Message</styled.FormLabel>
					<styled.FormMessage match="valueMissing">
						Please enter a message
					</styled.FormMessage>
				</styled.FormLabels>
				<Form.Control asChild>
					<styled.Textarea required maxLength={100}/>
				</Form.Control>
			</styled.FormField>
			<Form.Submit asChild>
				<styled.SubmitButton loading={isLoading} style={{ marginTop: 10 }}>
					Submit
				</styled.SubmitButton>
			</Form.Submit>
		</styled.FormRoot>
	)
};

export default ContactForm;