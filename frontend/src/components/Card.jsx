import * as React from "react";
import { useState, useContext } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Carousel } from "react-responsive-carousel";
import Snackbar from "@mui/joy/Snackbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CartContext } from '../cartcontext';


// Card data can be passed as an array of objects
const productData = [
  {
    id: 1,
    name: "Buff Ezay",
    price: 500,
    stock: 1,
    images: [
      "https://res.cloudinary.com/dlyxpzd0s/image/upload/v1729413138/pickleadimage_chgdgn.png",
      "https://res.cloudinary.com/dlyxpzd0s/image/upload/v1729373555/chicken_pickle2_qoc9ao.png",
    ],
  },
  {
    id: 2,
    name: "Chicken X thingay",
    price: 400,
    stock: 7,
    images: [
      "https://res.cloudinary.com/dlyxpzd0s/image/upload/v1729413138/pickleadimage_chgdgn.png",
    ],
  },
  {
    id: 3,
    name: "Nutella Ezay",
    price: 500,
    stock: 1,
    images: [
      "https://res.cloudinary.com/dlyxpzd0s/image/upload/v1729420633/Pork_pickle_recipe__How_to_make_traditional_naga_pork_pickle_Naga_pork_pickle_recipe_-_At_My_Kitchen_rz4mi3.jpg",
    ],
  },
  {
    id: 4,
    name: "Pork X thingay",
    price: 400,
    stock: 7,
    images:[      "https://res.cloudinary.com/dlyxpzd0s/image/upload/v1729413138/pickleadimage_chgdgn.png",
    ],
  },
  {
    id: 5,
    name: "Pork X thingay",
    price: 400,
    stock: 7,
    images:[      "https://res.cloudinary.com/dlyxpzd0s/image/upload/v1729413138/pickleadimage_chgdgn.png",
    ],
  }
];


function ProductCard({ name, price, stock, images, onAddToCart }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio ratio="4/4" sx={{ minWidth: 150 }}>
          {images.length > 1 ? (
            <Carousel showThumbs={false} showIndicators={false} dynamicHeight>
              {images.map((img, idx) => (
                <div key={idx}>
                  <img src={img} loading="lazy" alt={name} />
                </div>
              ))}
            </Carousel>
          ) : (
            <img src={images[0]} loading="lazy" alt={name} />
          )}
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Link sx={{fontFamily:'work sans'}} color="neutral" textColor="text.primary" overlay>
          {name}
        </Link>
        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl",fontFamily:'work sans'}}
          endDecorator={
            <Chip sx={{fontFamily:'work sans'}} component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          Nu {price}
        </Typography>
        <Typography sx={{fontFamily:'work sans'}} level="body-sm">
          (Only <b>{stock}</b> left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow className="" sx={{ display: 'flex', flexDirection:'row' }}>
        <Button
          variant="soft"
          color="success"
          // size="sm"
          endDecorator={<ArrowOutwardIcon />}
          onClick={addItemToCart}
          sx={{flexGrow: 1, width: '100%',fontFamily:'work sans'}}

        >
          Add to cart
        </Button>
    
      </CardOverflow>
    </Card>
  );
}

export default function ProductList() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleAddToCart = () => {
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  return (
    <div className="grid xl:grid-cols-5 lg:ml-64 grid-cols-2 sm:grid-cols-3  lg:sm:grid-cols-4 gap-2 m-3 mt-8">
      {productData.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onAddToCart={handleAddToCart}
        />
      ))}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        variant="outlined"
        color="success"
        onClose={handleCloseSnackbar}
        message="Item added to cart"
      >
        Item added to cart
      </Snackbar>

    </div>
  );
}
