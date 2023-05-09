import { useCallback, useState } from "react";
import { GoogleMap as Map, useLoadScript } from "@react-google-maps/api";

export function MapComponent() {
    const [map, setMap] = useState(null)
    const onLoad = useCallback((map) => setMap(map), [])

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        libraries: ['places']
    })

    if (!isLoaded) return null

    return (
        <Map
            zoom={18}
            center={{ lat: 4.687200, lng: -74.072020 }}
            onLoad={onLoad}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
                disableDefaultUI: true,
                zoomControl: true
            }}
        >

        </Map>
    );
}