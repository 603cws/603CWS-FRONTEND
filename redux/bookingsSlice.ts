import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BookingInterface {
  spaceName: string;
  startTime: string;
  endTime: string;
  date: string;
  price: number;
}

export interface BookingState {
  bookings: BookingInterface[];
}

const initialState: BookingState = {
  bookings: [],
};

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    addBooking(state, action: PayloadAction<BookingInterface>) {
      state.bookings.push(action.payload);
    },
    setBookings(state, action: PayloadAction<BookingInterface[]>) {
      state.bookings = action.payload;
    },
    removeBooking(state, action: PayloadAction<BookingInterface>) {
      state.bookings = state.bookings.filter(
        (booking) =>
          !(
            booking.spaceName === action.payload.spaceName &&
            booking.startTime === action.payload.startTime &&
            booking.endTime === action.payload.endTime &&
            booking.date === action.payload.date
          )
      );
    },
  },
});

export const { addBooking, setBookings, removeBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;
