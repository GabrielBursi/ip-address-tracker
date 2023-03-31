import { useState } from "react";
import { Flex, Skeleton } from "@chakra-ui/react"
import { Header, InfoAddressProps, InfoContainer, MapComponent } from "./components"
import { getIp } from "./services";
import { ApiData } from "./types";

function App() {

  const [ipValue, setIpValue] = useState('');
  const [ipData, setIpData] = useState<ApiData>();
  const [isLoading, setIsLoading] = useState(false);
  const [infos, setInfos] = useState<InfoAddressProps[]>([
    {
      info: `192.212.174.101`,
      nameInfo: "IP ADDRESS"
    },
    {
      info: `Brooklyn, NY 10001`,
      nameInfo: "LOCATION"
    },
    {
      info: `UTC-05:00`,
      nameInfo: "TIMEZONE"
    },
    {
      info: `SpaceX Starlink`,
      nameInfo: "ISP"
    },
  ]);

  function getIpData(){
    setIsLoading(true)
    getIp(ipValue)
      .then(({data}) => {
        setIsLoading(false)
        setIpData(data);
        if(ipData){
          const data = new Date(ipData.time_zone.current_time.substring(0, 19)); 
          const horaMinuto = data.toLocaleTimeString("en-US", { timeStyle: "short" });
          setInfos([
            {
              info: `${ipData.ip}`,
              nameInfo: "IP ADDRESS"
            },
            {
              info: `${ipData.country_code3}, ${ipData.state_prov}`,
              nameInfo: "LOCATION"
            },
            {
              info: `${horaMinuto}`,
              nameInfo: "TIME"
            },
            {
              info: `${ipData.isp}`,
              nameInfo: "ISP"
            },
          ])
        }
      })
  }

  return (
    <Flex width='100vw' height='100vh' direction='column' alignItems='center' position='relative'>
      <Header getIpData={getIpData} ipValue={ipValue} setIpValue={setIpValue} isLoading={isLoading}/>
      <InfoContainer infos={infos} isLoading={isLoading}/>
      <MapComponent latitude={ipData?.latitude} longitude={ipData?.longitude} />
    </Flex>
  )
}

export default App
