import React, { useEffect, useRef } from 'react'

export default function Domref() {
    const inputRef = useRef<HTMLInputElement>(null!);
    useEffect(() => {
        const ref = inputRef.current.focus();
        console.log(ref);

    }, [])
    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}
