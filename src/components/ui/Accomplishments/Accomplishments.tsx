import { CookieIcon, CubeIcon, LayersIcon, ReaderIcon, RocketIcon, StopwatchIcon } from "@radix-ui/react-icons"
import { Box, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes"

const accomplishmentsList = [
    {
        id:1,
        icon:<LayersIcon />,
        title:'Wide Equipment Selection',
        desc:'From excavators to cranes, we offer a wide range of machines for every project.'
    },{
        id:2,
        icon:<ReaderIcon/>,
        title:'Flexible Rental Terms',
        desc:'Rent equipment for hours, days, or months – whatever suits your needs.',
    },{
        id:3,
        icon:<RocketIcon/>,
        title:'Modern & Reliable Machines',
        desc:'All our equipment is regularly inspected to ensure safety and reliability.',
    },{
        id:4,
        icon:<StopwatchIcon/>,
        title:'Easy Rental Process',
        desc:'Quick and simple online booking, with minimal paperwork.',
    },{
        id:5,
        icon:<CubeIcon/>,
        title:'Fast Delivery',
        desc:'We deliver equipment directly to your site, no matter where it is.',
    },{
        id:6,
        icon:<CookieIcon/>,
        title:'Competitive Prices',
        desc:'Affordable rates with no hidden fees, giving you the best value.',
    }
]

const Accomplishments = () => {
  return (
    <Section py={'2'} px={{lg:'160px', md:'120px', sm:'80px', xs:'40px', initial:'15px'}}>
        <Heading as="h2" size={{initial:"7", xs:"8"}} mt={"2"} mb={{initial:"-3", xs:"7"}} align={"center"}>Our <span style={{color:'#29a383'}}>Accomplishments</span></Heading>
        <Grid mt={"6"} columns={{sm:'3', xs:'2', initial:'1'}} gap="3" rows={{initial:"repeat(2, 75px)", xs:"repeat(2, 110px)"}} width="auto">
            {
                accomplishmentsList.map(item => {
                    return (
                    <Flex key={item.id} gap={"1"}>
                        <Box py={"5"}>
                            {item.icon}
                        </Box>
                        <Flex  direction={"column"}>
                            <Text as="p" weight={"medium"}>{item.title}</Text>
                            <Text as="p" size={"2"}>{item.desc}</Text>
                        </Flex>
                    </Flex>
                    )
                })
            }
        </Grid>
    </Section>
  )
}

export default Accomplishments