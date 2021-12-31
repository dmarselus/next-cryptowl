import React from "react";
import { TextField } from "@mui/material";

export default function SearchBar({ data = [], ...rest }) {
    return <TextField label="" variant="outlined" {...rest} />;
}
