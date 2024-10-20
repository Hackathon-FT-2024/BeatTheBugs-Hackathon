"use client";

import React, { useEffect, useRef } from 'react';

const Map = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const L = require('leaflet');

        const map = L.map(mapRef.current).setView([43.57283566122207, 3.8515948812631953], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([43.57283566122207, 3.85159488126319539]).addTo(map)
            .bindPopup('Rue Théophraste Renaudot<br />34430 Saint-Jean-de-Védas.')
            .openPopup();

        return () => {
            map.remove();
        };
    }, []);

    return (
        <div>
            <div ref={mapRef} style={{ height: '450px', width: '100%' }} />
        </div>
    );
};

export default Map;
