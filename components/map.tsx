import React from "react";

//----


import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';


const MapComponentNoSSR = dynamic(() => import('./MapNoSSR'), {
    ssr: false,
});

interface MapComponentProps {
    center: [number, number],
    markers?: [[number, number], string, string][],
    draggableMarker?: [number, number],
    onPosChanged?: (newLatLang: [number, number]) => void
}


const MapComponent = ({ center, markers, draggableMarker, onPosChanged }: MapComponentProps) => {
    return (
        <div>
            <MapComponentNoSSR center={center} markers={markers} draggableMarker={draggableMarker} onPosChanged={onPosChanged}  />
        </div>
    );
};

export default MapComponent;
