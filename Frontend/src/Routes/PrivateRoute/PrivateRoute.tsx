import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie'
import { useState } from "react";
export const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
  const [token,_] = useState<string>(Cookies.get('bingo-tok') || "")
    if (!token) {
      return <Navigate to="/login" />;
    }
    return element;
  };