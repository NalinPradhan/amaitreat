import React, { useEffect, useState, useContext } from 'react';
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Carousel } from "react-responsive-carousel";
import Snackbar from "@mui/joy/Snackbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CartContext } from '../cartcontext';

function ProductCard({_id,description,ingredients, name, price, stock, imageUrl, onAddToCart }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio ratio="4/4" sx={{ minWidth: 150 }}>
          {imageUrl.length > 1 ? (
            <Carousel showThumbs={false} showIndicators={false} dynamicHeight>
              {imageUrl.map((img, idx) => (
                <div key={idx}>
                  <img src={img} loading="lazy" alt={name} />
                </div>
              ))}
            </Carousel>
          ) : (
            <img src={imageUrl[0]} loading="lazy" alt={name} />
          )}
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Link sx={{ fontFamily: 'work sans' }} color="neutral" textColor="text.primary" overlay>
          {name}
        </Link>
        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl", fontFamily: 'work sans' }}
          endDecorator={
            <Chip sx={{ fontFamily: 'work sans' }} component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          Nu {price}
        </Typography>
        <Typography sx={{ fontFamily: 'work sans' }} level="body-sm">
          (Only <b>{stock}</b> left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow className="" sx={{ display: 'flex', flexDirection: 'row' }}>
        <Button
          variant="soft"
          color="success"
          endDecorator={<ArrowOutwardIcon />}
          onClick={() => {
            addItemToCart();
            onAddToCart();
          }}
          sx={{ flexGrow: 1, width: '100%', fontFamily: 'work sans' }}
        >
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
}

export default function ProductList() {
  console.log('ProductList component rendered'); // Add this line
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  // const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // console.log('Fetching products');
        const response = await fetch('http://localhost:7000/api/products');
        // console.log('Response:', response);
        const data = await response.json();
        console.log('Fetched products:', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = () => {
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  return (
    <div className="grid xl:grid-cols-5 lg:ml-64 grid-cols-2 sm:grid-cols-3 lg:sm:grid-cols-4 gap-2 m-3 mt-8">
      {products.map((product) => (
        <ProductCard
          key={product._id}
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
