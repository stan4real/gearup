import { Button } from "@radix-ui/themes"
import  * as styled from "./ContactUs.style"
import { Link } from "react-router"

const ContactUs = () => {
  return (
    <styled.Container>
        <styled.Image src="/gearup/spec-tech-banner.jpg" alt="special-working-machines-banner"/>
        <styled.Heading>Press Contact Us to offer</styled.Heading>
        <Link to={'/contact'}>
          <Button size={{md:'4', sm:'3', initial:'2'}} style={{cursor:'pointer'}}>Contact us</Button>
        </Link>
    </styled.Container>
  )
}

export default ContactUs