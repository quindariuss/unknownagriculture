import {
    Heading,
    Center
} from '@chakra-ui/react';

export function Title() {
    return (
        <Center>
            <Heading
                bgGradient="linear(to-l, green, teal)"
                bgClip="text"
                size='4xl' height='2xs' textAlign='center' marginTop='20%'>
                Unknown Argiculture
        </Heading>
        </Center>
    );
}
