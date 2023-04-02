import { useState } from "react";
export default function LoggedIn() {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const handleLogin = () => {
        setisLoggedIn(true);
    };
    const handleLogout = () => {
        setisLoggedIn(false);
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Login</button>
            <div>
                User is
                {
                    isLoggedIn ? 'logged in' : 'logged out'
                }
            </div>
        </div>
    )
}
