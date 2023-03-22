import { Divider, Text, VStack } from "@chakra-ui/react";

export interface InfoAddressProps {
    nameInfo: string,
    info: string,
}

export function InfoAddress({ info, nameInfo }: InfoAddressProps) {
    return (
        <>
            <VStack spacing={1} p={2} alignItems={['center','start','start']} h='100%' w='30%'>
                <Text fontWeight='500' color='hsl(0, 0%, 59%)' fontSize={['sm', 'lg','1xl']} isTruncated>{nameInfo}</Text>
                <Text fontWeight='700' color='hsl(0, 0%, 17%)' fontSize={['lg', '2xl', '3xl',]} isTruncated>{info}</Text>
            </VStack>
            <Divider orientation='vertical' height='80px' className="divider-none"/>
        </>

    );
}