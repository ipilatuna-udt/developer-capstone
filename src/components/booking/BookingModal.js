/* eslint-disable no-template-curly-in-string */
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import { DateTime } from "luxon";
import React, { useCallback, useEffect } from "react";
import * as Yup from "yup";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { useTheme } from "@emotion/react";

const availableGuests = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const occasions = [
  "Birthday",
  "Anniversary",
  "Wedding",
  "Graduation",
  "Date Night",
  "Other",
];

const minHour = DateTime.now().set({ hour: 10 }).startOf("hour");
const maxHour = DateTime.now().set({ hour: 21 }).endOf("hour");
const maxDate = DateTime.now().plus({ days: 30 }).endOf("day");

// Add Yup method to validate minimum hour with luxon
Yup.addMethod(Yup.string, "hourRange", function (minHour, maxHour, message) {
  return this.test({
    name: "min",
    exclusive: true,
    message: message,
    test: (value) => {
      const valueHour = DateTime.fromISO(value).hour;
      return valueHour <= maxHour.hour && valueHour >= minHour.hour;
    },
  });
});

const defaultDate = DateTime.now().startOf("day");
const defaultTime = DateTime.now().set({ hour: 10 }).startOf("hour");

function BookingModal({ booking, onSave, open, setOpen }) {
  const title = booking ? "Edit Booking" : "New Booking";
  const formik = useFormik({
    initialValues: {
      date: defaultDate,
      time: defaultTime,
      guests: "",
      occasion: "",
    },
    onSubmit: (values) => {
      const id = booking?.id || Date.now();
      const newBooking = {
        ...values,
        id,
        date: values.date.toISODate(),
        time: values.time.toISOTime().slice(0, 2),
      };
      onSave(newBooking);
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      time: Yup.string()
        .required("Time is required")
        .hourRange(minHour, maxHour, "Time must be between 10 AM and 9 PM"),
      guests: Yup.string().required("Number of guests is required"),
      occasion: Yup.string().required("Occasion is required"),
    }),
  });

  useEffect(() => {
    if (booking) {
      formik.setValues({
        date: DateTime.fromISO(booking.date),
        time: DateTime.fromISO(booking.date).set({ hour: booking.time }),
        guests: booking.guests.toString(),
        occasion: booking.occasion,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [booking]);

  const getFieldError = useCallback(
    (field) => {
      return formik.touched[field] && formik.errors[field];
    },
    [formik]
  );

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    if (!formik.dirty) {
      handleClose();
      return;
    }
    if (window.confirm("Are you sure you want to cancel?")) {
      formik.resetForm();
      handleClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      fullWidth
      fullScreen={fullScreen}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
          }}
        >
          <FormControl>
            <DatePicker
              disablePast
              label="Date"
              value={formik.values.date}
              maxDate={maxDate}
              onChange={(date) => formik.setFieldValue("date", date)}
              slotProps={{
                field: {
                  readOnly: true,
                  fullWidth: true,
                },
              }}
            />
            <FormHelperText error={!!getFieldError("date")}>
              {getFieldError("date")}
            </FormHelperText>
          </FormControl>

          <FormControl>
            <TimePicker
              id="time"
              label="Time"
              views={["hours"]}
              viewRenderers={{
                hours: renderTimeViewClock,
              }}
              minTime={minHour}
              maxTime={maxHour}
              value={formik.values.time}
              onChange={(time) => {
                formik.setFieldValue("time", time);
                formik.setFieldTouched("time", true);
              }}
              slotProps={{
                field: {
                  readOnly: true,
                },
              }}
            />
            <FormHelperText error={!!getFieldError("time")}>
              {getFieldError("time")}
            </FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel id="guests-label">Guests</InputLabel>
            <Select
              id="guests"
              labelId="guests-label"
              name="guests"
              label="Guests"
              error={!!getFieldError("guests")}
              {...formik.getFieldProps("guests")}
            >
              <MenuItem value="" disabled>
                -- Select number of guests --
              </MenuItem>
              {availableGuests.map((guest) => (
                <MenuItem key={guest} value={guest}>
                  {guest}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText error={!!getFieldError("guests")}>
              {getFieldError("guests")}
            </FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel id="occasion-label">Occasion</InputLabel>
            <Select
              id="occasion"
              labelid="occasion-label"
              name="occasion"
              label="Occasion"
              error={!!getFieldError("occasion")}
              {...formik.getFieldProps("occasion")}
            >
              <MenuItem value="" disabled>
                -- Select an occasion --
              </MenuItem>
              {occasions.map((occasion) => (
                <MenuItem key={occasion} value={occasion}>
                  {occasion}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText error={!!getFieldError("occasion")}>
              {getFieldError("occasion")}
            </FormHelperText>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="secondary"
          onClick={formik.handleSubmit}
        >
          Book
        </Button>
        <Button variant="outlined" color="error" onClick={handleCancel}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default BookingModal;
