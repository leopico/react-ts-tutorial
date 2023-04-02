import React from 'react'

export type ProfileProp = {
    name: string
}

export default function Profile({ name }: ProfileProp) {
    return (
        <div>Private Profile Component. Name is {name}.</div>
    )
}
