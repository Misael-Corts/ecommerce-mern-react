import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export const Product = ({ item }) => {
  const { title, price, image } = item;
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
          <Typography gutterBottom variant="h5" component="div">
            ${price}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
