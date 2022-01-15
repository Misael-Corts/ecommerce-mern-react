import React from "react";
import { DetailCart } from "../components/ShoppingCart/DetailCart";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const PurchaseView = ({ history }) => {
  const handleCancelButton = () => {
    history.push("/");
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <h1>Carrito de compras</h1>
      <DetailCart />

      <Stack
        spacing={3}
        direction="row"
        justifyContent="flex-end"
        mt="20px"
        mr="20px"
      >
        <Button onClick={handleCancelButton} variant="contained" color="error">
          Cancelar
        </Button>

        <Button variant="contained" color="success">
          Comprar
        </Button>
      </Stack>
    </div>
  );
};
