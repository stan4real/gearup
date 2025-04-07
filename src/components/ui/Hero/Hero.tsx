import { Box, Flex, Heading, Section, Text } from "@radix-ui/themes"
import ReactPlayer from "react-player"

const Hero = () => {
  return (
    <Section py={{initial:'2', md:'8'}} px={{lg:'160px', md:'120px', sm:'80px', xs:'40px', initial:'15px'}}>
      <Flex gap={'2'} direction={{initial:'column', sm:'row'}}>
        <Box width={{initial:'100%', sm:'50%'}} my={{md:"80px", sm:"6", initial:'2'}}>
          <Heading as="h1" size={{initial:'8', lg:'9'}}>Rent the Best Construction Gear, <span style={{color:"var(--accent-9)"}}>Anytime,</span> Anywhere</Heading>
          <Text as="p" size={'3'} my={'4'}>Reliable Heavy Machinery for Your Projects – Ready When You Are</Text>
        </Box>
        <Flex width={{initial:'100%', sm:'50%'}} justify={"center"} align={"center"}>
          <ReactPlayer
            style={{padding:'8px', border:'1px solid gainsboro', borderRadius:'8px', maxWidth:'400px', minHeight:'150px', maxHeight:"300px"}}
            url={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            height={'100%'}
            width={'100%'}
            controls={true}
          />
        </Flex>
      </Flex>
    </Section>
  )
}

export default Hero