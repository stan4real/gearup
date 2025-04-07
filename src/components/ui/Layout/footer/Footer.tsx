import { Heading, Text } from "@radix-ui/themes"
import * as styled from "./Footer.style"

function Footer() {
  return (
    <styled.Footer>
        <Heading as="h3" wrap={"nowrap"}>
            Gear
          <span style={{color:'#29a383'}}>Up</span>
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 15 15" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 1C7.66148 1 7.81301 1.07798 7.90687 1.20938L12.9069 8.20938C13.0157 8.36179 13.0303 8.56226 12.9446 8.72879C12.8589 8.89533 12.6873 9 12.5 9H10V11.5C10 11.7761 9.77614 12 9.5 12H5.5C5.22386 12 5 11.7761 5 11.5V9H2.5C2.31271 9 2.14112 8.89533 2.05542 8.72879C1.96972 8.56226 1.98427 8.36179 2.09314 8.20938L7.09314 1.20938C7.18699 1.07798 7.33853 1 7.5 1ZM3.4716 8H5.5C5.77614 8 6 8.22386 6 8.5V11H9V8.5C9 8.22386 9.22386 8 9.5 8H11.5284L7.5 2.36023L3.4716 8Z" 
                fill="currentColor" 
                fillRule="evenodd" 
                clipRule="evenodd">
              </path>
          </svg>
          <Text as="span" weight={"medium"} size={"4"}> 2025</Text>
        </Heading>
    </styled.Footer>
  )
}

export default Footer