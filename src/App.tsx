import { useState } from "react";
import { Flex } from "@chakra-ui/react"
import { Header, InfoAddressProps, InfoContainer, MapComponent } from "./components"
import { getIp } from "./services";
import { ApiData } from "./types";

function App() {

  const [ipValue, setIpValue] = useState('');
  const [ipData, setIpData] = useState<ApiData>();
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
    getIp(ipValue)
      .then(({data}) => {
        setIpData(data);
        if(ipData){
          setInfos([
            {
              info: `${ipData.ip}`,
              nameInfo: "IP ADDRESS"
            },
            {
              info: `${ipData.country_code3}, ${ipData.state_prov} ${ipData.zipcode}`,
              nameInfo: "LOCATION"
            },
            {
              info: `UTC-${ipData.time_zone.current_time}`,
              nameInfo: "TIMEZONE"
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
    <Flex w='100vw' h='100vh' direction='column' alignItems='center' position='relative'>
      <Header getIpData={getIpData} ipValue={ipValue} setIpValue={setIpValue}/>
      <InfoContainer data={ipData} infos={infos}/>
      <MapComponent latitude={ipData?.latitude} longitude={ipData?.longitude} />
    </Flex>
  )
}

export default App
