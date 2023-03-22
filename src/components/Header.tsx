import { Button, Flex, Heading, HStack, Input } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";


export function Header() {
    return (
        <Flex
            w='100%'
            height='35%'
            as="section"
            direction='column'
            align='center'
            gap={[5, 10, 10]}
            pt={[10, 50, 50]}
            px={[150, 250, 450]}
            color="#F7FAFC"
            bgImage="url('./src/assets/images/pattern-bg-desktop.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize='cover'
        >
            <Heading size={['2xl','3xl','4xl']} isTruncated>IP Address Tracker</Heading>
            <HStack w={['90vw','90vw','80%']} spacing={0} >
                <Input 
                    size={['sm', 'lg', 'lg']}
                    variant='filled' 
                    type='text' 
                    placeholder="Procure por qualquer endereço de IP ou domínio" 
                    fontSize='1.5rem' 
                    p={[6, 8, 8]} 
                    boxShadow='5px 5px 5px 1px rgba(0, 0, 0, 0.2)'
                    fontWeight='500'
                />
                <Button 
                    h={['93%', '100%', '100%']}
                    w='10%' 
                    borderRightRadius={15} 
                    borderLeftRadius={0}
                    colorScheme='black'
                    variant='solid'
                    size='lg'
                    bgColor='black'
                    boxShadow='5px 5px 5px 1px rgba(0, 0, 0, 0.2)'
                >
                    <ChevronRightIcon fontSize='3.5rem'/>
                </Button>
            </HStack>
        </Flex>
    );
}
