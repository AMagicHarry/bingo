import { Link } from "react-router-dom";
import Google from "../../assets/google.svg"
import Facebook from "../../assets/facebook.svg"
import Apple from "../../assets/apple.svg"
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "../../app/store/auth/thunk";
import { RootState } from "../../app/store/store";
import { ClipLoader } from "react-spinners";
import { ApiStatus } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { resetLoginError } from "../../app/store/auth/slice";

import bgImage from '../../assets/background_ball.png'


const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { getLoginStatus, loginError } = useAppSelector((state: RootState) => state.auth)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    dispatch(resetLoginError())
    e.preventDefault();
    const resultAction = await dispatch(login(credentials));
    console.log(resultAction)
    if (login.fulfilled.match(resultAction)) {
      navigate('/');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(resetLoginError())
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };



  return (
    <>
      <div className="flex  w-full h-full overflow-y-auto">
        <div className="w-5/12 sticky top-0">
          <img className="w-full object-cover h-full" src={bgImage} alt="" />
        </div>

        <div className="w-7/12 container pb-[6rem] px-[10rem] text-center mt-2">

          <div className="w-full bg-white mt-2 rounded-[24px] max-w-[757px] xl:relative px-[4rem] py-[2rem] sm:p-[3rem]">
            <p className="text-[2rem]">Login</p>
            <button className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 mt-4 flex justify-center"><img src={Google} className="w-8 mr-2"></img>Sign up with Google</button>
            <button className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 mt-2 flex justify-center"><img src={Facebook} className="w-9 mr-2"></img>Sign up with Facebook</button>
            <button className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 mt-2 flex justify-center"><img src={Apple} className="w-9 mr-2"></img>Sign up with Apple</button>
            <p className="mt-8">Or continue with email</p>
            <input type="email" name="email" onChange={handleChange} className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 px-4 mt-8" placeholder="Enter your email"></input>
            <input type="password" name="password" onChange={handleChange} className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 px-4 mt-2" placeholder="Password"></input>

            <button style={{

            }} disabled={getLoginStatus === ApiStatus.loading} onClick={handleLogin} className="w-full hover:bg-blue-700 duration-300 text-[1.2rem] mt-4  bg-[#0047FF] text-white rounded-lg p-2">
              {
                getLoginStatus === ApiStatus.loading ? <ClipLoader color="white" size={15} /> : 'Continue'
              }
            </button>

            <div className="w-full text-red-600 py-[.2rem] h-[2rem]">

              {loginError && loginError}
            </div>

            <span>Don't have an account? </span><Link to={"/register"} className="text-[#0047FF] font-bold"> Signup</Link>


          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
