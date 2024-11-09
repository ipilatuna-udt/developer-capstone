import { Box } from "@mui/material";
import BookingCard from "./BookingCard";

function BookingList({ bookings, onEdit, onDelete }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {bookings.map((booking) => (
        <BookingCard
          key={booking.id}
          booking={booking}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
      {bookings.length === 0 && <p>No bookings available</p>}
    </Box>
  );
}

export default BookingList;
