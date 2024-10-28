import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Chip from "@mui/joy/Chip";
import Button from "@mui/joy/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const imageUrls = [
  "https://res.cloudinary.com/dlyxpzd0s/image/upload/v1729413138/pickleadimage_chgdgn.png",
  "https://res.cloudinary.com/dlyxpzd0s/image/upload/v1729373555/chicken_pickle2_qoc9ao.png",
];

export default function ProductCard() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Carousel
      selectedItem={currentSlide}
      onChange={(index) => setCurrentSlide(index)}
      emulateTouch
      swipeable
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showArrows={false}
    >
      {imageUrls.map((url, index) => (
        <div key={index}>
          <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
            <img src={url} loading="lazy" alt={`Slide ${index + 1}`} />
            <CardContent>
              <Link color="neutral" textColor="text.primary" overlay sx={{ fontWeight: "md" }}>
                Buff Ezay
              </Link>
              <Typography
                level="title-lg"
                sx={{ mt: 1, fontWeight: "xl" }}
                endDecorator={
                  <Chip component="span" size="sm" variant="soft" color="success">
                    Lowest price
                  </Chip>
                }
              >
                Nu 500
              </Typography>
              <Typography level="body-sm">(Only <b>1</b> left in stock!)</Typography>
            </CardContent>
            <Button variant="soft" color="success" size="lg" endDecorator={<ArrowOutwardIcon />}>
              Add to cart
            </Button>
          </Card>
        </div>
      ))}
    </Carousel>
  );
}
