import React from "react";
import { Button } from "@mui/material"
import { useRedirect } from "../hooks/useRedirect";
import Map from "../components/Map";
import { APIProvider } from "@vis.gl/react-google-maps";


const HomePage: React.FC<{}> = () => {

    //for navigating in pages
    const redirectTo = useRedirect();

    //for google maps api key
    const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    //for testing
    const vancouverCenter = { lat: 49.2827, lng: -123.1207 }
    const defaultZoom = 13;


    return (
        <>
            <Button variant="contained" onClick={() => redirectTo("/profile")}>Profile Page</Button>
            <Button variant="contained" onClick={() => redirectTo("/tripDetails")}>Trip Details Page</Button>
            <div style={{ height: "700px", width: "100%" }}>
                <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
                    <Map center={vancouverCenter} zoom={defaultZoom} />
                </APIProvider>

            </div>

        </>


    );

}

export default HomePage
