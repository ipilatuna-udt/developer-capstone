import React, { useCallback, useState } from "react";
import { Box, Button, IconButton, Paper, InputBase } from "@mui/material";
import { BookingList, BookingModal } from "../components/booking";
import { defaultBookings } from "../components/booking/defaultBookings";
import {
  Search as SearchIcon,
  AddCircle as AddIcon,
} from "@mui/icons-material";
import { Title } from "../components";

function BookingsPage() {
  const [open, setOpen] = useState(false);
  const [bookings, setBookings] = useState(defaultBookings);
  const [filteredBookings, setFilteredBookings] = useState(bookings);
  const [searchValue, setSearchValue] = useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const onSearch = useCallback(() => {
    if (!searchValue) {
      setFilteredBookings(bookings);
      return;
    }
    const filtered = bookings.filter((booking) => {
      return booking.occasion.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredBookings(filtered);
  }, [bookings, searchValue]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
        }}
      >
        <Title title="Reservations" />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Paper sx={{ display: "flex" }}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Booking"
              inputProps={{ "aria-label": "search booking" }}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSearch();
                }
              }}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={onSearch}
            >
              <SearchIcon />
            </IconButton>
            <Button onClick={handleClick} variant="contained">
              <AddIcon sx={{ mr: 1 }} />
              Book Now
            </Button>
          </Paper>
        </Box>
        <BookingList bookings={filteredBookings} />
      </Box>
      <BookingModal open={open} setOpen={setOpen} />
    </>
  );
}

export default BookingsPage;
