// import { useContext } from "react";
// import { UserContext } from "../../context/userContext";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
    // const {user} = useContext(UserContext);
    const [user, setUser] = useState(null);
    return(
        <div>
            <h1>Welcome</h1>
            {/* <>
            {!!user && (<h1>Hello {user.name}!</h1>)}
            </> */}
        </div>
    )
}