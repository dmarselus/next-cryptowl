import React from 'react'
import styles from "./ConverterCard.module.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ConverterCard({ data, onDelete, value = 1 }) {


    function getConvertedPrice() {
        if (data.type_is_crypto) {
            if (!data.price_usd) return 'price not found'
            let val = value / data.price_usd
            if (val < 0.0001) return val.toFixed(9)
            else if (val < 0.01) return val.toFixed(6)
            else return val.toFixed(3)
        }
        else return (data.price_usd * value).toLocaleString()

    }

    return (
        <Card className={styles.container} sx={{ width: 200 }}>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
                    {data?.name}
                </Typography>
                {data?.url ? <img width="50" height="50" src={data?.url} /> : <div style={{ height: 50 }} />}
                <Typography variant="h5" component="div">
                    {data.asset_id}
                </Typography>
            </CardContent>
            <Typography variant="p" component="div">
                {getConvertedPrice()}
            </Typography>
            <CardActions>

                <Button onClick={onDelete} size="small">X</Button>
            </CardActions>
        </Card>
    )
}
