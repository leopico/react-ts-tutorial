import React, { useContext } from 'react'
import ThemeContext from './ThemContext'

export default function Box() {
    const theme = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>Theme Context</div>
    )
}
