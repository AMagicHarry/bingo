import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

export const PrivateRoute = ({ element }:{element:React.ReactNode}) => {
  const { user} = useAppSelector((state) => state.auth);

  if (!user.accesstoken) {
    return <Navigate to="/login" />;
  }
  return element;
};

