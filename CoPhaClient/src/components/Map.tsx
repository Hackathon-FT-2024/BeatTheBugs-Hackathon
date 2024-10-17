import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { useEffect } from 'react';

import { Icon } from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

//TODO: fix marker not showing & fix margin in map

export default function MapComponent() {

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
    }, []);

    return (
        <MapContainer
            center={[43.57283566122207, 3.8515948812631953]}
            zoom={13}
            style={{ height: '450px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[43.57283566122207, 3.8515948812631953]}>
                <Popup>
                    Rue Théophraste Renaudot<br />34430 Saint-Jean-de-Védas.
                </Popup>
            </Marker>
        </MapContainer>
    );
};
