import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { ApiStatus } from '../../types/types';
import Logo from '../../assets/solar_star-bold-duotone.svg'

export const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
  const { user, getRefreshStatus } = useAppSelector(state => state.auth)

  if (getRefreshStatus === ApiStatus.loading || getRefreshStatus === ApiStatus.ideal) {
    return <div className="w-full bg-gray-100 h-screen relative">
      <span className="absolute h-[max-content] w-[max-content] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="w-[5rem] rotateAndScale rounded-full h-[5rem]">
          <img className="w-full h-full object-cover" src={Logo} alt="logo" />
        </div>

      </span>
    </div>
  }

  if (!user.accesstoken) {
    return <Navigate to="/login" replace />;
  }
  return element;
};
