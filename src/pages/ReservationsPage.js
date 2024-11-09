import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { BookingList, BookingModal } from "../components/booking";
import { defaultBookings } from "../components/booking/defaultBookings";
import { Title } from "../components";

function ReservationsPage() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "lightgray",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
        }}
      >
        <Title title="Reservations" />
        <Box textAlign="center">
          <Button onClick={handleClick} variant="contained">
            Book Now
          </Button>
        </Box>
        <BookingList bookings={defaultBookings} />
      </Box>
      <BookingModal open={open} setOpen={setOpen} />
    </>
  );
}

export default ReservationsPage;
