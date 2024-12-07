import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useCallback,
  useEffect,
} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBooking, removeBooking } from "../../redux/bookingsSlice";
import { addDayPass, removeDayPass } from "../../redux/dayPassesSlice";
import { RootState } from "../store";
import toast from "react-hot-toast";

interface BookingInterface {
  spaceName: string;
  startTime: string;
  endTime: string;
  date: string;
  price: number;
}

// {
//   "member": false,
//   "_id": "6729c2e70d51e5f265467a94",
//   "companyName": "603cws",
//   "username": "testuser",
//   "email": "manchadiyuvraj@gmail.com",
//   "country": "India",
//   "state": "Haryana",
//   "city": "Hisar",
//   "zipcode": "125005",
//   "password": "$2b$10$CBpB76XlqvftF5xWCWppG.5nl3OH7TabhLk4E5Pkz3XZQQiNhjTXO",
//   "phone": "9594767165",
//   "role": "admin",
//   "kyc": true,
//   "creditsleft": 0,
//   "monthlycredits": 7,
//   "extracredits": 29,
//   "createdAt": "2024-11-05T07:01:59.543Z",
//   "__v": 0
// }
// interface User {

// }

interface UserDetails {
  companyName: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  role: "admin" | "user";
  kyc: boolean;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  location: string;
  credits?: number;
  createdAt?: Date;
  member: boolean;
}

interface DayPassInterface {
  price: number;
  spaceName: string;
  bookeddate: string;
  day: number;
  month: number;
  year: number;
}

interface AppContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  popup: boolean;
  setpopup: React.Dispatch<React.SetStateAction<boolean>>;
  isAdmin: string;
  setIsAdmin: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
  refreshAuth: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  bookings: BookingInterface[];
  dayPasses: DayPassInterface[];
  accHolder: UserDetails[];
  setAccHolder: React.Dispatch<React.SetStateAction<UserDetails>>;
  addNewBooking: (newBooking: BookingInterface) => void;
  bookDayPass: (newDayPass: DayPassInterface) => void;
  removeSpecificBooking: (booking: BookingInterface) => void;
  removeSpecificDayPass: (dayPass: DayPassInterface) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const convertTimeToMinutes = (time: string): number => {
  const [timePart, modifier] = time.split(" ");
  let [hours, minutes] = timePart.split(":").map(Number);

  if (modifier === "pm" && hours !== 12) {
    hours += 12;
  }
  if (modifier === "am" && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes; // Return total minutes since midnight
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<string>("user");
  const [loading, setloading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [popup, setpopup] = useState<boolean>(false);
  const PORT = "https://603-bcakend-new.vercel.app";

  const [accHolder, setAccHolder] = useState<UserDetails>({
    companyName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    role: "user",
    kyc: false,
    country: "",
    state: "",
    city: "",
    zipcode: "",
    location: "",
    credits: 0,
    createdAt: new Date(), // Correct initialization for Date
    member: false,
  });

  const bookings = useSelector((state: RootState) => state.bookings.bookings);
  const dayPasses = useSelector(
    (state: RootState) => state.dayPasses.dayPasses
  );

  const removeSpecificBooking = (booking: BookingInterface) => {
    dispatch(removeBooking(booking));
    toast.success("Booking removed from Cart");
  };

  const removeSpecificDayPass = (dayPass: DayPassInterface) => {
    dispatch(removeDayPass(dayPass));
    toast.success("Day Pass removed from Cart");
  };

  const addNewBooking = (newBooking: BookingInterface) => {
    const newStartTimeInMinutes = convertTimeToMinutes(newBooking.startTime);
    const newEndTimeInMinutes = convertTimeToMinutes(newBooking.endTime);

    const isDuplicate = bookings.some((booking) => {
      const bookingStartTimeInMinutes = convertTimeToMinutes(booking.startTime);
      const bookingEndTimeInMinutes = convertTimeToMinutes(booking.endTime);

      return (
        booking.spaceName === newBooking.spaceName &&
        booking.date === newBooking.date &&
        ((newStartTimeInMinutes >= bookingStartTimeInMinutes &&
          newStartTimeInMinutes < bookingEndTimeInMinutes) ||
          (newEndTimeInMinutes > bookingStartTimeInMinutes &&
            newEndTimeInMinutes <= bookingEndTimeInMinutes) ||
          (bookingStartTimeInMinutes >= newStartTimeInMinutes &&
            bookingStartTimeInMinutes < newEndTimeInMinutes) ||
          (bookingEndTimeInMinutes > newStartTimeInMinutes &&
            bookingEndTimeInMinutes <= newEndTimeInMinutes))
      );
    });

    if (!isDuplicate) {
      dispatch(addBooking(newBooking));
      toast.success("Added to Cart");
    } else {
      toast.error("Time slots collide");
      console.log("Booking already exists or time slots collide");
    }
  };

  const bookDayPass = (newDayPass: DayPassInterface) => {
    const isDuplicate = dayPasses.some(
      (dayPass) =>
        dayPass.spaceName === newDayPass.spaceName && // Check relevant properties
        dayPass.bookeddate === newDayPass.bookeddate &&
        dayPass.day === newDayPass.day &&
        dayPass.month === newDayPass.month &&
        dayPass.year === newDayPass.year
    );

    if (!isDuplicate) {
      dispatch(addDayPass(newDayPass));
      toast.success("Added to Cart");
    } else {
      toast.error("Already Added");
      console.log("Day pass already exists");
    }
  };

  const checkAuth = useCallback(async () => {
    try {
      const res = await axios.get(`${PORT}/api/v1/users/checkauth`, {
        withCredentials: true,
      });
      setIsAuthenticated(res.data.auth);
      setIsAdmin(res.data.user);
      setAccHolder(res.data.accHolder);
    } catch (error) {
      console.error("Error checking authentication:", error);
      setIsAuthenticated(false);
      setIsAdmin("user");
      setAccHolder({
        companyName: "",
        username: "",
        email: "",
        password: "",
        phone: "",
        role: "user",
        kyc: false,
        country: "",
        state: "",
        city: "",
        zipcode: "",
        location: "",
        credits: 0,
        createdAt: new Date(), // Correct initialization for Date
        member: false,
      });
    } finally {
      setloading(false);
    }
  }, [PORT]);

  const refreshAuth = useCallback(() => {
    setloading(true);
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    refreshAuth();
  }, [location.pathname, refreshAuth]);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setloading,
        isAdmin,
        setIsAdmin,
        refreshAuth,
        searchQuery,
        setSearchQuery,
        popup,
        setpopup,
        bookings,
        dayPasses,
        addNewBooking,
        bookDayPass,
        removeSpecificBooking,
        removeSpecificDayPass,
        accHolder,
        setAccHolder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
