import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
// import Menu from '@mui/icons-material/Menu';
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Search from "@mui/icons-material/Search";
const logo =
  "https://res.cloudinary.com/dlyxpzd0s/image/upload/v1729445920/logo-modified_pgnxqt.png";

export default function Mobilemenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        <MenuOpenIcon />
      </IconButton>
      <Drawer size="sm" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            sx={{ fontSize: "sm", fontWeight: "lg", cursor: "pointer" }}
          >
            Close
          </Typography>
          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" my={2}>
          <img src={logo} style={{ width: 80 }} alt="logo" />
        </Box>
        <Input
          size="sm"
          placeholder="Search"
          variant="plain"
          endDecorator={<Search />}
          slotProps={{
            input: {
              "aria-label": "Search anything",
            },
          }}
          sx={{
            m: 3,
            borderRadius: 0,
            borderBottom: "2px solid",
            borderColor: "neutral.outlinedBorder",
            "&:hover": {
              borderColor: "neutral.outlinedHoverBorder",
            },
            "&::before": {
              border: "1px solid var(--Input-focusedHighlight)",
              transform: "scaleX(0)",
              left: 0,
              right: 0,
              bottom: "-2px",
              top: "unset",
              transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
              borderRadius: 0,
            },
            "&:focus-within::before": {
              transform: "scaleX(1)",
            },
          }}
        />
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "center" },
          }}
        >
          <ListItemButton sx={{ fontWeight: "lg" }}>Home</ListItemButton>
          <ListItemButton>Cart</ListItemButton>
          <ListItemButton>Track my Product</ListItemButton>
          <ListItemButton>About</ListItemButton>
          <ListItemButton>Contact</ListItemButton>
        </List>
        <footer
          style={{
            marginTop: "auto",
            textAlign: "center",
            padding: "1rem",
            background: "#f1f1f1",
          }}
        >
          Made with ❤️ in Bhutan
        </footer>
      </Drawer>
    </React.Fragment>
  );
}
