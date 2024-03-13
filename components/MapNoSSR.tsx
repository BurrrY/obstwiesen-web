
// MapNoSSR.tsx
import {CircleMarker, LayersControl, MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React, {useCallback, useMemo, useRef, useState} from "react";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import {Icon} from 'leaflet'

interface MapComponentProps {
    center: [number, number],
    draggableMarker?: [number, number],
    markers?: [[number, number], string, string][]
    onPosChanged?: (newLatLang: [number, number]) => void
}


interface DraggableMarkerProps {
    initial: [number, number],
    onPosChanged?: (newLatLang: [number, number]) => void
}

function DraggableMarker({ initial, onPosChanged }: DraggableMarkerProps) {

    const markerRef = useRef<L.Marker>(null)
    const [position, setPosition] = useState(initial)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    const newLatLang:[number, number] = [marker.getLatLng().lat, marker.getLatLng().lng]
                    setPosition(newLatLang)
                    if (onPosChanged) {
                        onPosChanged(newLatLang)
                    }
                }
            },
        }),
        [onPosChanged],
    )


    return (
        <Marker
            ref={markerRef}
            eventHandlers={eventHandlers}
            draggable={true}
            position={position}>
        </Marker>
    )
}


const MapNoSSR = ({ center, markers, draggableMarker, onPosChanged }: MapComponentProps) => {


    return (
            <MapContainer center={center} zoom={18} scrollWheelZoom={false} className="" style={{height: '400px'}}>
                <LayersControl>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />

                        <TileLayer
                            url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                            maxZoom= {20}
                            subdomains={['mt1','mt2','mt3']}
                        />

                </LayersControl>

                {markers?.map((marker, idx) => (
                    <CircleMarker center={marker[0]} radius={5} key={idx}>
                        <Popup minWidth={90}>
                            <span>
                                <a href={marker[2]}>{marker[1]}</a>
                            </span>
                        </Popup>
                    </CircleMarker>
                ))}

                {draggableMarker ?  <DraggableMarker initial={draggableMarker} onPosChanged={onPosChanged} /> : ""}

            </MapContainer>
    );
};

export default MapNoSSR;