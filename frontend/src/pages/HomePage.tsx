import React from "react";
import { Button } from "@mui/material"
import {useNavigate} from "react-router-dom"

const HomePage: React.FC<{}> = () => {

    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate("/profile")
    }

    return (
        <>
            <Button variant="contained" onClick={(handleRedirect)}>Profile Page</Button>
        </>

    );

}

export default HomePage
