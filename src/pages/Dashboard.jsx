import { useContext } from "react";
import { userContext } from "../../context/userContext";

export default function Dashboard() {
    const {user} = useContext(userContext);
    return(
        <div>
            <h1>DASHBOARD</h1>
            <>
            {!!user && (<h1>Hello {user.name}!</h1>)}
            </>
        </div>
    )
}