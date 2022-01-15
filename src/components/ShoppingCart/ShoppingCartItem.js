import { Link } from "react-router-dom";
import { MenuItem } from "@mui/material";

export const ShoppingCartItem = props => {
  const { title, price, category, id } = props.item;
  return (
    <Link
      to={`/product/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <MenuItem onClick={props.handleClose} disableRipple>
        {`${title} - ${category} - $${price}`}
      </MenuItem>
    </Link>
  );
};
