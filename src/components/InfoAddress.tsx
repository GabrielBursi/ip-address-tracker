import { Divider, Text, VStack } from "@chakra-ui/react";

export interface InfoAddressProps {
    nameInfo: string,
    info: string,
}

export function InfoAddress({ info, nameInfo }: InfoAddressProps) {
    return (
        <>
            <VStack spacing={1} p={2} alignItems='start' h='100%' w='30%'>
                <Text fontWeight='500' color='hsl(0, 0%, 59%)' fontSize='1xl'>{nameInfo}</Text>
                <Text fontWeight='700' color='hsl(0, 0%, 17%)' fontSize='3xl'>{info}</Text>
            </VStack>
            <Divider orientation='vertical' height='80px' className="divider-none"/>
        </>

    );
}
