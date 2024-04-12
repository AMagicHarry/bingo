import { Navigate } from "react-router-dom";
import { ApiStatus } from "../../types/types";
import Logo from '../../assets/solar_star-bold-duotone.svg'

import { useAppSelector } from "../../app/hooks";
export const PublicRoute = ({ element }: { element: React.ReactNode }) => {
  const {user,getRefreshStatus} = useAppSelector(user=>user.auth)

  if(getRefreshStatus === ApiStatus.loading){
    return <div className="w-full bg-gray-200 h-screen relative">
           <span className="absolute h-[max-content] w-[max-content]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
           <img className="w-[5rem] h-[5rem]" src={Logo} alt="logo" />
           </span>
          </div>
  }
    return user.accesstoken? <Navigate to='/'/> : element
  };
