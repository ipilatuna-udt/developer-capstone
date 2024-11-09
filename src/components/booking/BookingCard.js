import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import {
  AccessTime as TimeIcon,
  CalendarMonth as CalendarIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  People as GuestsIcon,
} from "@mui/icons-material";

const bookingTypeImages = {
  Anniversary: "/assets/booking/anniversary.jpg",
  Birthday: "/assets/booking/birthday.jpg",
  "Date Night": "/assets/booking/date-night.jpg",
  Wedding: "/assets/booking/wedding.jpg",
  Graduation: "/assets/booking/graduation.jpg",
};

function FieldDisplay({ icon, label, text }) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: 1 }}
      aria-label={`${label}: ${text}`}
      role="group"
    >
      {icon}
      <Typography variant="body1" aria-hidden="true">
        {label}:
      </Typography>
      <Typography variant="body1">{text}</Typography>
    </Box>
  );
}

function BookingCard({ booking, onEdit, onDelete }) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 360,
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
      }}
      aria-label={`${booking.occasion} booking card`}
      role="article"
    >
      <CardMedia
        component="img"
        height="194"
        image={bookingTypeImages[booking.occasion]}
        alt={`${booking.occasion} event image`}
        aria-label={`${booking.occasion} booking`}
      />
      <CardContent
        sx={{
          display: "flex",
          gap: 1,
          flexDirection: "column",
          alignItems: "center",
        }}
        aria-label="Booking details"
      >
        <Typography gutterBottom variant="h5" component="div">
          {booking.occasion}
        </Typography>
        <FieldDisplay
          icon={<CalendarIcon aria-hidden="true" />}
          label="Date"
          text={booking.date}
        />
        <FieldDisplay
          icon={<TimeIcon aria-hidden="true" />}
          label="Time"
          text={`${booking.time}:00`}
        />
        <FieldDisplay
          icon={<GuestsIcon aria-hidden="true" />}
          label="Guests"
          text={booking.guests}
        />
      </CardContent>
      <CardActions
        sx={{ justifyContent: "center", backgroundColor: "whitesmoke" }}
        aria-label="Booking actions"
      >
        <IconButton
          size="small"
          onClick={() => onEdit(booking)}
          aria-label="Edit booking"
        >
          <EditIcon color="primary" />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => onDelete(booking.id)}
          aria-label="Delete booking"
        >
          <DeleteIcon color="error" />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default BookingCard;
