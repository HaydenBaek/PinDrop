import { TextField } from "@mui/material";
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

function Lists(props: { toDo: string;}) {
    return <li>{props.toDo}</li>
}

const ProfilePage: React.FC<{}> = () => {

    const toDoList = [
        'user\'s profile box, including the amount of trips + Likes it received',
        'Display different trips of the user in each cards',
        'The "add a trip" box'
    ]

    return (

        <>
        <h1>This is a Profile Page</h1>
        <ul>
            {toDoList.map((item) => <Lists toDo={item}/>)}
        </ul>

        </>
    );
}

export default ProfilePage;