import React, { useState } from "react";
import { Button } from "@mui/material";
import { BookingModal } from "../components/booking";

function ReservationsPage() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <div>
        <h1>Reservations Page</h1>
        <div>
          <Button onClick={handleClick} variant="contained">
            Book Now
          </Button>
        </div>
      </div>
      <BookingModal open={open} setOpen={setOpen} />
    </>
  );
}

export default ReservationsPage;
