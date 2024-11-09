import { Box } from "@mui/material";
import BookingCard from "./BookingCard";

function BookingList({ bookings }) {
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
        <BookingCard key={booking.id} booking={booking} />
      ))}
    </Box>
  );
}

export default BookingList;
