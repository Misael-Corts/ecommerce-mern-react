import react, { useEffect, useState } from "react";
import { getProductById } from "../app/services/productsServices";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Divider, Stack, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
  boxShadow: 1,
}));

//

export const ProductView = ({ match }) => {
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    const { params } = match;
    getProductById(params.id)
      .then(productFromDB => setProductDetail(productFromDB))
      .catch(err => console.log(err));
  }, [match]);

  return (
    productDetail && (
      <Box sx={{ flexGrow: 1 }} margin="100px" mt="100px">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item
              style={{
                height: "375px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={productDetail.image}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item
              style={{
                height: "375px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box variant="div">
                <Typography
                  variant="h4"
                  color="#3C4858"
                  fontWeight="900"
                  marginBottom="20px"
                >
                  {productDetail.title}
                </Typography>
                <Typography
                  variant="h4"
                  color="#009EE3"
                  fontWeight="900"
                  display="inline"
                >
                  ${productDetail.price}
                </Typography>
              </Box>

              <Stack spacing={2} mt="20px" maxWidth="600px">
                <Button
                  href="/purchase"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Comprar ahora
                </Button>
                <Button variant="outlined" color="error" size="large">
                  Agregar al carrito
                </Button>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Typography variant="h5" color="#3C4858" marginBottom="10px">
                Descripción
              </Typography>
              <Divider></Divider>
              <Typography fontWeight="900" color="black" marginTop="10px">
                {productDetail.description}
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    )
  );
};
