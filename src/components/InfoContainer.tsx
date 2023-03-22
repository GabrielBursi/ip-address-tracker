import { Box, Flex } from "@chakra-ui/react";
import { InfoAddress, InfoAddressProps } from "./InfoAddress";

export function InfoContainer() {

    const array: InfoAddressProps[] = [
        {
            info: "192.212.174.101",
            nameInfo: "IP ADDRESS"
        },
        {
            info: "Brooklyn, NY 10001",
            nameInfo: "LOCATION"
        },
        {
            info: "UTC-05:00",
            nameInfo: "TIMEZONE"
        },
        {
            info: "SpaceX Starlink",
            nameInfo: "ISP"
        },
]

    return (
        <Box
            w='75%'
            height={['35%', '35%', '15%']}
            borderRadius={15}
            boxShadow='5px 5px 5px 1px rgba(0, 0, 0, 0.2)'
            bg='#fff'
            zIndex={1}
            padding={4}
            position='absolute'
            top={['72%','76%', '50%']}
            left='50%'
            transform='translate(-50%, -140%)'
            margin='auto'
        >
            <Flex w='100%' h='100%' justifyContent='space-between' alignItems='center' direction={['column', 'column', 'row']}>
                {array.map(info => <InfoAddress key={info.info} info={info.info} nameInfo={info.nameInfo} />)}
            </Flex>
        </Box>
    );
}