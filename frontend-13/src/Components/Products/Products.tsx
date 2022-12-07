import { Box, Button, Container, Grid } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { data } from "../../data";
import { getProductsSelector } from "../../Redux/product.slice";
import ProductCard from "./ProductCard";

export default function Products() {

  // interface Product{
  //   id: number,
  //   name: string,
  //   price: number,
  //   description: string,
  //   image: string
  // }
  
  // const[products, setProducts] = useState<Product[]>(data);

  const products = useSelector(getProductsSelector);

  const renderProducts = products.map((product) => (
    <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">

        <ProductCard {...product} />
      
    </Grid>
  ));
  return (
    <Container>
      <Grid        
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: `20px 4px 10px 4px` }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>

      {/* <div>
        <button onClick={()=>setProducts(prevProducts=>[
          {
            id: 10,
            name: 'test',
            price: 100,
            description: 'testtest',
            image: 'test'
          }, ...prevProducts
        ])}>
          Add Product
        </button>
      </div> */}
    </Container>
  );
}