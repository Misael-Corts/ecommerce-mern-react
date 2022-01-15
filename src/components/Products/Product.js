import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, CardActions } from "@mui/material";
import { Grid } from "@mui/material";
import db from "../../app/db/db";

export const Product = ({ item }) => {
  const { title, price, image } = item;

  const addProductToCart = ({ title, price, category, image, description }) => {
    db.cart.add({
      title: title,
      price: price,
      category: category,
      image: image,
      description: description,
    });
  };

  return (
    <Grid item xs={4}>
      <Card
        sx={{
          maxWidth: "80%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box variant="div">
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
        </Box>
        <CardActions style={{ justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            ${price}
          </Typography>

          <Button onClick={() => addProductToCart(item)} variant="contained">
            Agregar al carrito
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
