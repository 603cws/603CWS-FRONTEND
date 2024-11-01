// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use local storage
import bookingsReducer, { BookingState } from '../redux/bookingsSlice'; // Import BookingState
import dayPassesReducer, { DayPassState } from '../redux/dayPassesSlice'; // Import DayPassState
import { combineReducers } from 'redux';

// Define a persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Combine your reducers
const rootReducer = combineReducers({
  bookings: bookingsReducer,
  dayPasses: dayPassesReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
});

// Create a persist store
export const persistor = persistStore(store);

// Define the RootState and AppDispatch types
export type RootState = {
  bookings: BookingState; // Specify the type here
  dayPasses: DayPassState; // Specify the type here
};
export type AppDispatch = typeof store.dispatch;
