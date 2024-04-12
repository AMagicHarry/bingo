import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const RouteChangeListener = () => {
  const location = useLocation();

  useEffect(() => {
    sessionStorage.setItem('preAuthLocation', location.pathname);
  }, [location]); 

  return null; 
};
