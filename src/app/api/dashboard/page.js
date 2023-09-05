"use client"
import {useSession} from "next-auth/react";
const page = () => {
    let session=useSession();
    return (
        <div>
            <h1>Dashboard</h1>
            <p>{JSON.stringify(session)}</p>
        </div>
    );
};

export default page;