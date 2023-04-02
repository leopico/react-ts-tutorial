import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export default function User() {
    // const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const [user, setUser] = useState<AuthUser | null>(null);
    const handleLogin = () => {
        setUser({
            name: 'Leopico',
            email: 'leopico.peceng@gmail.com'
        });
    };
    const handleLogout = () => {
        setUser(null);
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Login</button>
            <div>User name is {user?.name}</div>
            <div>User Email is {user?.email} </div>
        </div>
    )
}
