import { Heading } from "@radix-ui/themes"
import ContactForm from "../../ui/Form/ContactForm"
import * as styled from "./ContactPage.style"
import { useState } from "react"

const ContactPage = () => {
  const [headingState, setHeadingState] = useState({
    isSent:false,
    name:""
  })

  return (
    <styled.Container py={"0"} px={{lg:'160px', md:'120px', sm:'80px', xs:'40px', initial:'15px'}}>
      {!headingState.isSent ? 
      <Heading as="h1" align={"center"} size={{initial:"8", sm:"9"}} >Leave a message for 
        <span style={{color:'#29a383'}}>
          &nbsp;GearUp
        </span>
      </Heading>
        : 
        <Heading as="h1" align={"center"} size={{initial:"8", sm:"9"}} >Thank you for interest,
        <span style={{color:'#29a383'}}>
          &nbsp;{headingState.name}
        </span>
      </Heading>
      }
      <ContactForm
        setHeadingState={setHeadingState}
      />
    </styled.Container>
  )
}

export default ContactPage