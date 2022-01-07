import { MenuItem } from "@mui/material";

export const ShoppingCartItem = props => {
  const { title, price, category } = props.item;
  return (
    <MenuItem onClick={props.handleClose} disableRipple>
      {`${title} - ${category} - $${price}`}
    </MenuItem>
  );
};
