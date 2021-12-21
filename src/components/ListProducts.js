import json from "../examples/products.json";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Product } from "./Product";

export const ListComponents = () => {
  const products = json.products;
  return (
    <Box sx={{ flexGrow: 1 }} m={"150px"}>
      <Grid container spacing={3} m={0}>
        {products.map((product, index) => (
          <Product key={index} item={product} />
        ))}
      </Grid>
    </Box>
  );
};
