import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActions } from "@mui/material";
import { Grid } from "@mui/material";

import db from "../../app/db/db";

export const Product = ({ item }) => {
  const { title, price, image } = item;

  const addProductToCart = ({ title, price, category }) => {
    db.cart.add({
      title: title,
      price: price,
      category: category,
    });
  };

  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: "80%" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="300"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>

        <CardActions style={{ justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            ${price}
          </Typography>

          <Button onClick={() => addProductToCart(item)} variant="contained">
            Añadir al carrito
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
