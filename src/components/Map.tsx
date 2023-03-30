import { Box } from "@chakra-ui/react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

interface MapProps {
    latitude: string | undefined;
    longitude: string | undefined;
}

export function MapComponent({ latitude, longitude }: MapProps) {
    return (
        <Box 
            flex={1} 
            w='100%'
            bg='#f6f6f6'
            zIndex={0}
            top={0}
            left={0}
        > 
            <MapContainer style={{ width: '100%', height: '100%' }} center={[Number(latitude) || 37.42240, Number(longitude) || -122.08421]} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[Number(latitude) || 37.42240, Number(longitude) || -122.08421]}/>
            </MapContainer>
        </Box>
    );
}
