import react from 'react'
import reactdom from 'react-dom'
import
{
	extendTheme,
	ChakraProvider,
	ColorModeScript,
	Flex,
	SimpleGrid,
	Heading,
	Box,
	Text,
	Center
} from '@chakra-ui/react'
import { LightSwitch } from './LightSwitch'
import {Title} from './Title'

const config = {
	  initialColorMode: "light",
	  useSystemColorMode: false,
	}

const theme = extendTheme({ config })

reactdom.render
(
	<ChakraProvider>
	<ColorModeScript initialColorMode={theme.config.initialColorMode} />
		<Title/>
		<SimpleGrid   maxBlockSize='lg' justifyContent='center' textAlign="center" minChildWidth="240" spacing="40px" marginStart='5%' marginEnd='5%'>
			  <Box boxShadow='lg' borderRadius='lg' bg="green">
					<Text color='white'  fontSize='3xl' padding='10'>
						Find wild plants faster than ever before
					</Text>
			  </Box>
			  <Box boxShadow='lg' borderRadius='lg' bg="tomato"  >
					<Text color='white' fontSize='3xl' padding='10'>
						Documented use genius species, reasearch, and potential use information.
					</Text>
				</Box>
			  <Box boxShadow='lg'  borderRadius='lg' bg="teal"  >
					  <Text color='white'  fontSize='3xl' padding='10'>
						  Large Database with GPS Coordinates to a wide variety of plants.
					  </Text>
				</Box>
		</SimpleGrid>
		<Center margin='5%'>
			<LightSwitch/>
		</Center>
	</ChakraProvider>,
	document.getElementById('root')
)

