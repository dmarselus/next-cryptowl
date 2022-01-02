import React from "react";
import { TextField } from "@mui/material";

export default function Input({ data = [], ...rest }) {
    return <TextField label="" variant="outlined" {...rest} />;
}
