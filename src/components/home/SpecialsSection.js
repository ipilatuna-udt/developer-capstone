import React from "react";
import {
  Typography,
  Card,
  Grid2 as Grid,
  CardMedia,
  CardContent,
} from "@mui/material";

import HomeSection from "./HomeSection";

export const specials = [
  {
    id: 1,
    title: "Greek salad",
    description: "Fresh salad with feta cheese, olives, and tomatoes.",
    image: "/assets/dishes/greek-salad.jpg",
    price: 12.99,
  },
  {
    id: 2,
    title: "Brocheta",
    description: "Grilled meat skewers with peppers and onions.",
    image: "/assets/dishes/brocheta.jpg",
    price: 15.99,
  },
  {
    id: 3,
    title: "Lemon Pie",
    description: "Delicious lemon pie with meringue. Traditional recipe.",
    image: "/assets/dishes/lemon-pie.jpg",
    price: 18.99,
  },
];

function SpecialCard({ title, description, image, price }) {
  return (
    <Card sx={{ padding: 2 }} aria-labelledby={`${title}-title`} role="article">
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={`Image of ${title}`}
        aria-describedby={`${title}-description`}
      />
      <CardContent>
        <Typography variant="h6" id={`${title}-title`}>
          {title}
        </Typography>
        <Typography variant="body1" id={`${title}-description`}>
          {description}
        </Typography>
        <Typography variant="h5" aria-label={`Price: $${price}`}>
          ${price}
        </Typography>
      </CardContent>
    </Card>
  );
}

function SpecialsSection() {
  return (
    <HomeSection aria-labelledby="specials-heading" role="region" data-testid="specials-section">
      <Typography variant="h3" id="specials-heading">
        Specials
      </Typography>
      <Typography variant="h6">Check out our daily specials.</Typography>
      <Grid container spacing={2} aria-label="Specials menu items">
        {specials.map((special) => (
          <Grid
            key={special.id}
            size={{ xs: 12, sm: 6, lg: 4 }}
            sx={{ mb: 2 }}
            role="region"
            aria-labelledby={`${special.title}-title`}
            data-testid={`special-card-${special.id}`}
          >
            <SpecialCard {...special} />
          </Grid>
        ))}
      </Grid>
    </HomeSection>
  );
}

export default SpecialsSection;
