import React from "react";
import { Button } from "@mui/material"
import { useRedirect } from "../hooks/useRedirect";


const HomePage: React.FC<{}> = () => {

    const redirectTo = useRedirect();

    return (
        <>
            <Button variant="contained" onClick={() => redirectTo("/profile")}>Profile Page</Button>
            <Button variant="contained" onClick={() => redirectTo("/tripDetails")}>Trip Details Page</Button>
        </>


    );

}

export default HomePage
