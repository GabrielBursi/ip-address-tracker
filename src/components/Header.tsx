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
            gap={10}
            pt={50}
            px={450}
            color="#F7FAFC"
            bgImage="url('./src/assets/images/pattern-bg-desktop.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize='cover'
        >
            <Heading size='3xl'>IP Address Tracker</Heading>
            <HStack w='80%' spacing={0}>
                <Input 
                    size='lg' 
                    variant='filled' 
                    type='text' 
                    placeholder="Procure por qualquer endereço de IP ou domínio" 
                    fontSize='1.5rem' 
                    p={8} 
                    borderLeftRadius={15}
                    borderRightRadius={0}
                    boxShadow='5px 5px 5px 1px rgba(0, 0, 0, 0.2)'
                />
                <Button 
                    h='100%' 
                    w='10%' 
                    borderRightRadius={15} 
                    borderLeftRadius={0}
                    colorScheme='black'
                    variant='solid'
                    size='lg'
                    bgColor='black'
                >
                    <ChevronRightIcon fontSize='3.5rem'/>
                </Button>
            </HStack>
        </Flex>
    );
}
