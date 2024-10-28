import * as React from "react";
import Badge from "@mui/joy/Badge";
import Typography from "@mui/joy/Typography";
import { CartContext } from "../cartcontext";

export default function Cart() {
  const { items } = React.useContext(CartContext);
  return (
    <div className="flex justify-end">
      <Badge badgeContent={items} color="success">
        <Typography sx={{ fontSize: "xl" }}>
          <a href="https://www.google.com">🛒</a>
        </Typography>
      </Badge>
    </div>
  );
}
