import {Button} from "@mui/material"
import { useRedirect } from "../hooks/useRedirect"
import { redirect } from "react-router-dom";

const LandingPage: React.FC<{}> = () => {

    const redirectTo = useRedirect();

    return (
        <>
        <h1>Landing Page</h1>
        <Button onClick={() => redirectTo("/login")}>Start</Button>
        </>
    );

}

export default LandingPage;