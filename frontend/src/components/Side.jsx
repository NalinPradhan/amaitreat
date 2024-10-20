import * as React from 'react';
import List from '@mui/joy/List';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import Search from '@mui/icons-material/Search';
import ListItemButton from '@mui/joy/ListItemButton';
const logo =
  "https://res.cloudinary.com/dlyxpzd0s/image/upload/v1729445920/logo-modified_pgnxqt.png";
export default function Header() {
    return (
      <div className="hidden lg: bg-slate-100 lg:flex lg:flex-col lg:w-64 lg:h-full lg:fixed lg:top-0 lg:left-0   ">
        <Box display="flex " justifyContent="center" alignItems="center" my={2}>
          <img className='mt-2' src={logo} style={{ width: 80 }} alt="logo" />
        </Box>
        <Input
          size="sm"
          placeholder="Search"
          className='bg-slate-100'
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
          size="md"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "md",
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
          
      </div>
    );
  }