import React, {useEffect} from "react";
import {assertBlockStatement} from "@babel/types";

export interface myError {
    code: number,
    message: string
}

export interface myLocation {
    loaded: boolean,
    coordinates?: {
        lat: number
        long: number
    }
    error?: myError
}

export const useGeolocation = () => {
    const [location, setLocation] = React.useState<myLocation>({
        loaded: false,
        coordinates: {lat: 0, long: 0},
    });

    const onSuccess =(location: GeolocationPosition) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                long: location.coords.longitude
            }
        })
    }


    const onError = (error: myError) => {
         console.log(error)
        setLocation({
            loaded: true,
            error: error
        })
    }


    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError(
                {
                    code: 400,
                    message: "not supported",
                }
            )
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, []);

    return location
}