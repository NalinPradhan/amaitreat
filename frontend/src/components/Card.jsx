import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const imageUrl =
  "https://res.cloudinary.com/dlyxpzd0s/image/upload/v1729413138/pickleadimage_chgdgn.png";

const imageUrl2 =
  "https://res.cloudinary.com/dlyxpzd0s/image/upload/v1729373555/chicken_pickle2_qoc9ao.png";
const imageUrl3 =
  "https://res.cloudinary.com/dlyxpzd0s/image/upload/v1729420633/Pork_pickle_recipe__How_to_make_traditional_naga_pork_pickle_Naga_pork_pickle_recipe_-_At_My_Kitchen_rz4mi3.jpg";
export default function ProductCard() {
  return (
    <div className="grid lg:ml-64 grid-cols-2 sm:grid-cols-3 lg:sm:grid-cols-4 gap-2 m-3 mt-8">
      <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
        <CardOverflow>
          <AspectRatio ratio="4/4" sx={{ minWidth: 150 }}>
            <img src={imageUrl2} loading="lazy" alt="pickle" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Link
            
            color="neutral"
            textColor="text.primary"
            overlay
            sx={{ fontWeight: "md" }}
          >
            Buff Ezay
          </Link>

          <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: "xl" }}
            className=""
            endDecorator={
              <Chip component="span" size="sm" variant="soft" color="success">
                Lowest price
              </Chip>
            }
          >
            Nu 500
          </Typography>
          <Typography level="body-sm">
            (Only <b>1</b> left in stock!)
          </Typography>
        </CardContent>
        <CardOverflow>
          <Button
            variant="soft"
            color="success"
            size="lg"
            endDecorator={<ArrowOutwardIcon />}
          >
            Add to cart
          </Button>
        </CardOverflow>
      </Card>
      <Card
        sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
      >
        <CardOverflow>
          <AspectRatio ratio="4/4" sx={{ minWidth: 150 }}>
            <img src={imageUrl} loading="lazy" alt="pickle" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Link
            href="#product-card"
            color="neutral"
            textColor="text.primary"
            overlay
            sx={{ fontWeight: "md" }}
          >
            Chicken X thingay
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
            Nu 400
          </Typography>
          <Typography level="body-sm">
            (Only <b>7</b> left in stock!)
          </Typography>
        </CardContent>
        <CardOverflow>
          <Button
            variant="soft"
            color="success"
            endDecorator={<ArrowOutwardIcon />}
            size="lg"
          >
            Add to cart
          </Button>
        </CardOverflow>
      </Card>
      <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
        <CardOverflow>
          <AspectRatio ratio="4/4" sx={{ minWidth: 150 }}>
            <img src={imageUrl3} loading="lazy" alt="pickle" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Link
            href="#product-card"
            color="neutral"
            textColor="text.primary"
            overlay
            sx={{ fontWeight: "md" }}
          >
            Nutella Ezay
          </Link>

          <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: "xl" }}
            className=""
            endDecorator={
              <Chip component="span" size="sm" variant="soft" color="success">
                Lowest price
              </Chip>
            }
          >
            Nu 500
          </Typography>
          <Typography level="body-sm">
            (Only <b>1</b> left in stock!)
          </Typography>
        </CardContent>
        <CardOverflow>
          <Button
            variant="soft"
            color="success"
            size="lg"
            endDecorator={<ArrowOutwardIcon />}
          >
            Add to cart
          </Button>
        </CardOverflow>
      </Card>
      <Card
        sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
      >
        <CardOverflow>
          <AspectRatio ratio="4/4" sx={{ minWidth: 150 }}>
            <img src={imageUrl} loading="lazy" alt="pickle" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Link
            href="#product-card"
            color="neutral"
            textColor="text.primary"
            overlay
            sx={{ fontWeight: "md" }}
          >
            Mutton X thingay
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
            Nu 400
          </Typography>
          <Typography level="body-sm">
            (Only <b>7</b> left in stock!)
          </Typography>
        </CardContent>
        <CardOverflow>
          <Button
            variant="soft"
            color="success"
            endDecorator={<ArrowOutwardIcon />}
            size="lg"
          >
            Add to cart
          </Button>
        </CardOverflow>
      </Card>
    </div>
  );
}
