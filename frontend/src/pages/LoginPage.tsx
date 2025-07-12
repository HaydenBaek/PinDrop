import {Button} from "@mui/material"
import { useRedirect } from "../hooks/useRedirect";

const LoginPage: React.FC = () => {

    const redirectTo = useRedirect();

    return (
        <>
        <h1>login Page</h1>
        <Button variant="contained" onClick={() => redirectTo("/home")}>Home Page</Button>
        </>
    );
}

export default LoginPage;