import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const imageUrl = "https://res.cloudinary.com/dlyxpzd0s/image/upload/v1729331365/Pork_pickle_recipe__How_to_make_traditional_naga_pork_pickle_Naga_pork_pickle_recipe_-_At_My_Kitchen_rz4mi3.jpg";
export default function ProductCard() {
    return (
        <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
            <CardOverflow>
                <AspectRatio sx={{ minWidth: 200 }}>
                    <img
                    // https://drive.google.com/file/d/1uBGwqcdSkYbPaf52GUadJy-PG6xQ5Zvg/view?usp=sharing
                        src={imageUrl}

                        // srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                        loading="lazy"
                        alt="pickle"
                    />
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Typography level="body-xs">Bluetooth Headset</Typography>
                <Link
                    href="#product-card"
                    color="neutral"
                    textColor="text.primary"
                    overlay
                    endDecorator={<ArrowOutwardIcon />}
                    sx={{ fontWeight: 'md' }}
                >
                    Super Rockez A400
                </Link>

                <Typography
                    level="title-lg"
                    sx={{ mt: 1, fontWeight: 'xl' }}
                    endDecorator={
                        <Chip component="span" size="sm" variant="soft" color="success">
                            Lowest price
                        </Chip>
                    }
                >
                    2,900 THB
                </Typography>
                <Typography level="body-sm">
                    (Only <b>7</b> left in stock!)
                </Typography>
            </CardContent>
            <CardOverflow>
                <Button variant="solid" color="danger" size="lg">
                    Add to cart
                </Button>
            </CardOverflow>
        </Card>
    );
}
