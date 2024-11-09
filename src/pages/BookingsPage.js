import React, { useCallback, useEffect, useState } from "react";
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
  const [editingBooking, setEditingBooking] = useState(null);
  const [filteredBookings, setFilteredBookings] = useState(bookings);
  const [searchValue, setSearchValue] = useState("");

  const onNew = useCallback(() => {
    setEditingBooking(null);
    setOpen(true);
  }, [setEditingBooking, setOpen]);

  const applyFilters = useCallback(
    (values) => {
      if (!searchValue) {
        setFilteredBookings(values);
        return;
      }
      const filtered = values.filter((booking) => {
        return booking.occasion
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredBookings(filtered);
    },
    [searchValue]
  );

  const onSearch = useCallback(() => {
    applyFilters(bookings);
  }, [bookings, applyFilters]);

  const onSave = useCallback(
    (booking) => {
      if (editingBooking) {
        setBookings((prev) =>
          prev.map((b) => (b.id === booking.id ? booking : b))
        );
      } else {
        setBookings((prev) => [...prev, { ...booking }]);
      }
      setOpen(false);
    },
    [setBookings, editingBooking]
  );

  const onDelete = useCallback(
    (id) => {
      if (!window.confirm("Are you sure you want to delete this booking?")) {
        return;
      }
      setBookings((prev) => prev.filter((booking) => booking.id !== id));
    },
    [setBookings]
  );

  const onEdit = useCallback(
    (booking) => {
      setEditingBooking(booking);
      setOpen(true);
    },
    [setEditingBooking, setOpen]
  );

  useEffect(() => {
    applyFilters(bookings);
  }, [bookings, applyFilters]);

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
            <Button onClick={onNew} variant="contained">
              <AddIcon sx={{ mr: 1 }} />
              Book Now
            </Button>
          </Paper>
        </Box>
        <BookingList
          bookings={filteredBookings}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </Box>
      <BookingModal
        open={open}
        booking={editingBooking}
        setOpen={setOpen}
        onSave={onSave}
      />
    </>
  );
}

export default BookingsPage;
