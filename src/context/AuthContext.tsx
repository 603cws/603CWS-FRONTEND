import React, { createContext, useState, ReactNode, useContext, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

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
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<string>("user");
  const [loading, setloading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [popup, setpopup] = useState<boolean>(false);

  const PORT = "https://603-cws-backend.vercel.app";

  const location = useLocation();

  const checkAuth = useCallback(async () => {
    try {
      const res = await axios.get(`${PORT}/api/v1/users/checkauth`, { withCredentials: true });
      setIsAuthenticated(res.data.auth);
      setIsAdmin(res.data.user);
    } catch (error) {
      console.error("Error checking authentication:", error);
      setIsAuthenticated(false);
      setIsAdmin("user");
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
    <AppContext.Provider value={{ 
      isAuthenticated, setIsAuthenticated, loading, setloading, 
      isAdmin, setIsAdmin, refreshAuth, 
      searchQuery, setSearchQuery, popup, setpopup
    }}>
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
