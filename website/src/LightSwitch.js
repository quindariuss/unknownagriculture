import {
    useColorMode,
    Button
} from '@chakra-ui/react';

export function LightSwitch() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button pos='absolute' top='5' right='5' onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
    );
}
