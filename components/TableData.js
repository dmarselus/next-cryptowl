import React from "react";
import styles from './TableData.module.css'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import Image from "next/image";

export default function TableData({ data = [], onClick }) {


    if (data.length)
        return (
            <TableContainer sx={{ maxHeight: 250, width: '15rem' }} component={Paper}>
                <Table size='small' aria-label="simple table">
                    {/* <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead> */}
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow
                                hover
                                key={index}
                                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                onClick={() => onClick(row)}
                                sx={{ display: 'flex', justifyContent: 'flex-start' }}
                            >


                                {/* <TableCell scope="row">
                                    {'123'}
                                </TableCell>
                                <TableCell align="right">{'asd'}</TableCell>
                                <TableCell align="right">{'1234'}</TableCell> */}
                                <TableCell component="th" scope="row">
                                    <img width="20" height="20" src={row?.url} />
                                </TableCell>
                                <TableCell align="right">{row?.asset_id}</TableCell>
                                <TableCell align="right">{row?.name}</TableCell>
                                {/* <TableCell align="right">{row}</TableCell>
                                <TableCell align="right">{row}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    else return null;
}
