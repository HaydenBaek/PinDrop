import React from 'react';
import type {FC} from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import type { MapCameraChangedEvent } from '@vis.gl/react-google-maps'; 


interface MapsProps {
    center: {lat: number; lng: number};

    zoom: number;
}

const Maps: FC<MapsProps> = ({
    center,
    zoom
}) => {
    return (

            <Map 
            defaultZoom = {zoom}
            defaultCenter = {center}>
            </Map>
    );
}

export default Maps;



