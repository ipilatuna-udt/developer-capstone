import React, { act } from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { DateTime } from "luxon";
import BookingForm from "./BookingForm";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

const mockOnSave = jest.fn();
const mockSetOpen = jest.fn();

const defaultProps = {
  booking: null,
  onSave: mockOnSave,
  open: true,
  setOpen: mockSetOpen,
};

jest.mock("@emotion/react", () => ({
  ...jest.requireActual("@emotion/react"),
  useTheme: () => ({ breakpoints: { down: jest.fn().mockReturnValue("") } }),
}));

const renderComponent = (props) => {
  return render(
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <BookingForm {...props} />
    </LocalizationProvider>
  );
};

describe("BookingForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders modal with initial form fields", async () => {
    renderComponent(defaultProps);

    await screen.findByTestId(/date-picker/i);
    await screen.findByTestId(/time-picker/i);
    await screen.findByTestId(/guests-select/i);
    await screen.findByTestId(/occasion-select/i);
  });

  it("displays validation errors when required fields are empty", async () => {
    renderComponent(defaultProps);

    fireEvent.click(screen.getByTestId(/book-button/i));

    await waitFor(() => {
      expect(
        screen.getByText(/Number of guests is required/i)
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/Occasion is required/i)).toBeInTheDocument();
    });
  });

  it("calls onSave with correct data when form is valid", async () => {
    renderComponent(defaultProps);

    fireEvent.change(screen.getByTestId(/date-picker/i), {
      target: { value: DateTime.now().plus({ days: 1 }).toISODate() },
    });
    fireEvent.change(screen.getByTestId(/time-picker/i), {
      target: { value: DateTime.now().set({ hour: 11 }).toISOTime() },
    });
    fireEvent.change(screen.getByTestId(/guests-select/i), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByTestId(/occasion-select/i), {
      target: { value: "Birthday" },
    });
    fireEvent.click(screen.getByTestId(/book-button/i));

    await waitFor(() => {
      expect(mockOnSave).toHaveBeenCalledWith(
        expect.objectContaining({
          date: expect.any(String),
          time: expect.any(String),
          guests: "2",
          occasion: "Birthday",
        })
      );
    });
  });

  it("closes the modal when cancel is clicked without changes", async () => {
    renderComponent(defaultProps);

      fireEvent.click(screen.getByTestId(/cancel-button/i));

    await waitFor(() => {
      expect(mockSetOpen).toHaveBeenCalledWith(false);
    });
  });

  it("prompts confirmation on cancel when form is dirty", async () => {
    global.confirm = jest.fn(() => true); // Mock window.confirm

    renderComponent(defaultProps);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.change(screen.getByTestId(/guests-select/i), {
        target: { value: "2" },
      });
      fireEvent.click(screen.getByText(/Cancel/i));
    });

    await waitFor(() => {
      expect(global.confirm).toHaveBeenCalledWith(
        "Are you sure you want to cancel?"
      );
    });
  });
});
