import React from 'react';
import { Avatar, Typography, Box, Button, Card, Grid2 as Grid, Paper, Rating } from '@mui/material';
import HomeSection from './HomeSection';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        rating: 5,
        comment: 'Great food and service!'
    },
    {
        id: 2,
        name: 'Jane Doe',
        rating: 4,
        comment: 'Good food, and fancy atmosphere.'
    },
    {
        id: 3,
        name: 'Jim Doe',
        rating: 5,
        comment: 'The best food in Chicago!'
    }
];

function TestimonialCard ({name, rating, comment}) {
  return (
    <Card>
      <Paper sx={{padding: 2}}>
        <Grid container spacing={2}>
            <Grid >
                <Avatar />
            </Grid>
            <Grid >
                <Typography variant="h6">{name}</Typography>
                <Rating value={rating} readOnly />
                <Typography variant="body1">{comment}</Typography>
            </Grid>
        </Grid>
      </Paper>
    </Card>
  );
}

function Testimonials() {
  return (
    <HomeSection>
      <Typography variant="h3">Testimonials</Typography>
      <Typography variant="h6">
        See what our customers are saying about us.
        </Typography>
      <Grid container spacing={2}>
        {testimonials.map((testimonial) => (
          <Grid key={testimonial.id} size={{xs: 12, sm: 6, lg: 4}}>
            <TestimonialCard {...testimonial} />
          </Grid>
        ))}
      </Grid>
    </HomeSection>
  );
}

export default Testimonials;