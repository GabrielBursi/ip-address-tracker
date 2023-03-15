import { Flex } from "@chakra-ui/react"
import { Header, InfoContainer, MapComponent } from "./components"

function App() {

  return (
    <Flex w='100vw' h='100vh' direction='column' alignItems='center'>
      <Header/>
      <InfoContainer/>
      <MapComponent/>
    </Flex>
  )
}

export default App
