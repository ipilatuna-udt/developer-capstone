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
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {icon}
      <Typography variant="body1">{label}</Typography>
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
    >
      <CardMedia
        component="img"
        height="194"
        image={bookingTypeImages[booking.occasion]}
        alt={booking.occasion}
      />
      <CardContent
        sx={{
          display: "flex",
          gap: 1,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {booking.occasion}
        </Typography>
        <FieldDisplay
          icon={<CalendarIcon />}
          label="Date"
          text={booking.date}
        />
        <FieldDisplay
          icon={<TimeIcon />}
          label="Time"
          text={`${booking.time}:00`}
        />
        <FieldDisplay
          icon={<GuestsIcon />}
          label="Guests"
          text={booking.guests}
        />
      </CardContent>
      <CardActions
        sx={{ justifyContent: "center", backgroundColor: "whitesmoke" }}
      >
        <IconButton size="small" onClick={() => onEdit(booking)}>
          <EditIcon color="primary" />
        </IconButton>
        <IconButton size="small" onClick={() => onDelete(booking.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default BookingCard;
