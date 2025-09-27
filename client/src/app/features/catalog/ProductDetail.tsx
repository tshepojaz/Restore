import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../models/product";
import { Button, Divider, Grid2, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";

export default function ProductDetail() {
  const {id} = useParams();
  const [product, setProduct] = useState<Product | null>();

  useEffect(() => {
     fetch(`https://localhost:5001/api/products/${id}`)
       .then(response => response.json())
       .then(data => setProduct(data))
       .catch(error => console.log(error));
  }, [id])
  
  if (!product) return <h3>Loading...</h3>

  const productDetails = [
    {name: 'Name', value: product.name},
    {name: 'Description', value: product.description},
    {name: 'Type', value: product.type},
    {name: 'Brand', value: product.brand},
    {name: 'Quantity in Stock', value: product.quantityInStock}
  ]

  return (
    <Grid2 container spacing={6} maxWidth='lg' sx={{mx: 'auto'}}>
        <Grid2 size={6}>
          <img src={product?.pictureUrl} alt={product?.name} style={{width: '100%'}}/>
        </Grid2>
        <Grid2 size={6}>
            <Typography variant="h3">{product.name}</Typography>
            <Divider sx={{mb: 2}}/>
            <Typography variant="h4" color='secondary'>${(product.price / 100).toFixed(2)}</Typography>
            <TableContainer>
                <Table sx={{'& td': {fontSize: '1rem'}}}>
                    <TableBody>
                        {productDetails.map(({name, value}) => (
                          <TableRow key={name}>
                            <TableCell sx={{fontWeight: 'bold'}}>{name}</TableCell>
                            <TableCell>{value}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid2 container spacing={2} marginTop={3}>
                <Grid2 size={6}>
                    <TextField label="Quantity in Cart" variant="outlined" fullWidth type='number' defaultValue={1}/>
                </Grid2>
                <Grid2 size={6}>
                   <Button sx={{height: '55px'}} fullWidth variant="contained" size="large">Add to cart</Button>
                </Grid2>
            </Grid2>
        </Grid2>
    </Grid2>
  )
}
