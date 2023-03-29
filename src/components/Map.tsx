import { Box } from "@chakra-ui/react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

export function MapComponent() {
    return (
        <Box 
            flex={1} 
            w='100%'
            bg='#f6f6f6'
            zIndex={0}
            top={0}
            left={0}
        > 
            <MapContainer style={{ width: '100%', height: '100%' }} center={[52.505, -0.09]} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[52.505, -0.09]}/>
            </MapContainer>
        </Box>
    );
}
