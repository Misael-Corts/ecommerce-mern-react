import react from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useEffect } from "react";
import { getAllProducts } from "../../app/services/productsServices";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const DetailCart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(allProductsFromDB => setProducts(allProductsFromDB));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Titulo</StyledTableCell>
            <StyledTableCell>Categoria</StyledTableCell>
            <StyledTableCell>Precio</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {product.id}
              </StyledTableCell>
              <StyledTableCell>{product.title}</StyledTableCell>
              <StyledTableCell>{product.category}</StyledTableCell>
              <StyledTableCell>${product.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
