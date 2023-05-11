import { GoogleMap as Map, useLoadScript, MarkerF } from "@react-google-maps/api";

const libraries = ['places']

export function MapComponent({ markers }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        libraries
    })

    if (!isLoaded) return null

    return (
        <Map
            zoom={13}
            center={markers[0]}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
                disableDefaultUI: true,
                zoomControl: true
            }}
        >
            {markers.map(marker => <MarkerF  position={{ lat: marker.lat, lng: marker.lng }} />)}
        </Map>
    );
}