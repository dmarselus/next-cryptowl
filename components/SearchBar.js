import React from 'react'
import { TextField } from '@mui/material'
export default function SearchBar({ ...rest }) {
    return (
        <div>
            <TextField label="" variant="outlined" {...rest} />
        </div>
    )
}
