import React from 'react';
import { ProfileProp } from './Profile';

import Login from './Login'

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProp>
}

export default function Private({ isLoggedIn, component: Component }: PrivateProps) {
    if (isLoggedIn) {
        return <Component name='Visual' />
    } else {
        return <Login />
    }
}
