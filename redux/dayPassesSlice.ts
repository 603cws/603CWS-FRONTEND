import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DayPassInterface {
  price: number;
  spaceName: string;
  bookeddate: string;
  day: number;
  month: number;
  year: number;
  quantity?: number;
}

export interface DayPassState {
  dayPasses: DayPassInterface[];
}

const initialState: DayPassState = {
  dayPasses: [],
};

const dayPassesSlice = createSlice({
  name: "dayPasses",
  initialState,
  reducers: {
    addDayPass(state, action: PayloadAction<DayPassInterface>) {
      state.dayPasses.push(action.payload);
    },
    setDayPasses(state, action: PayloadAction<DayPassInterface[]>) {
      state.dayPasses = action.payload;
    },
    removeDayPass(state, action: PayloadAction<DayPassInterface>) {
      state.dayPasses = state.dayPasses.filter(
        (dayPass) =>
          !(
            dayPass.spaceName === action.payload.spaceName &&
            dayPass.bookeddate === action.payload.bookeddate &&
            dayPass.day === action.payload.day &&
            dayPass.month === action.payload.month &&
            dayPass.year === action.payload.year
          )
      );
    },
  },
});

export const { addDayPass, setDayPasses, removeDayPass } =
  dayPassesSlice.actions;
export default dayPassesSlice.reducer;
