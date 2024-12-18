import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "../../app/store/auth/thunk";
import { RootState } from "../../app/store/store";
import { ClipLoader } from "react-spinners";
import { ApiStatus } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { resetLoginError } from "../../app/store/auth/slice";
import bgImage from '../../assets/background_ball.png'
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import { googleLogin } from "../../app/store/auth/thunk";
import { CodeResponse } from "@react-oauth/google";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { getLoginStatus, loginError,getGoogleLoginAuthStatus,googleLoginAuthError } = useAppSelector((state: RootState) => state.auth)
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

  const handleGoogleSuccess = async(codeResponse:CodeResponse) => {
    const resultAction = dispatch(googleLogin(codeResponse.code))
    if (googleLogin.fulfilled.match(resultAction)) {
      navigate('/');
    }
  }

  const handleNavigateToRegister = () => {
    dispatch(resetLoginError())
    navigate('/register')
  }

  // const handleFacebookSuccess = async(response:any) => {
  //   const resultAction = dispatch(googleAuth(response.code))
  //   console.log(resultAction)
  //   if (facebookAuth.fulfilled.match(resultAction)) {
  //     navigate('/');
  //   }
  // }
  // const handleAppleSuccess = async(response:any) => {
  //   const resultAction = dispatch(googleAuth(response.code))
  //   console.log(resultAction)
  //   if (googleAuth.fulfilled.match(resultAction)) {
  //     navigate('/');
  //   }
  // }


  return (
    <>

{
        getGoogleLoginAuthStatus === ApiStatus.loading &&
        <div className="w-full h-full flex items-center justify-center fixed top-0 left-0 right-0 left-0 opacity-[.3] bg-black">
           <ClipLoader color="white"  size={15}/>
        </div>
      }

      <div className="flex  w-full h-full overflow-y-auto">
        <div className="w-5/12 sticky top-0">
          <img className="w-full object-cover h-full" src={bgImage} alt="" />
        </div>

        <div className="w-7/12 container pb-[6rem] px-[10rem] text-center mt-2">

          <div className="w-full bg-white mt-2 rounded-[24px] max-w-[757px] xl:relative px-[4rem] py-[2rem] sm:p-[3rem]">
            <p className="text-[2rem]">Login</p>
            {/* <FacebookButton type="lgoin" onSuccess={handleFacebookSuccess}  /> */}
            <GoogleButton type="login" onSuccess={handleGoogleSuccess}/>
            {/* <AppleButton type="login" onSuccess={handleAppleSuccess}/> */}
            <p className="mt-8">Or continue with email</p>
            <input type="email" name="email" onChange={handleChange} className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 px-4 mt-8" placeholder="Enter your email"></input>
            <input type="password" name="password" onChange={handleChange} className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 px-4 mt-2" placeholder="Password"></input>

            <button type="button" style={{

            }} disabled={getLoginStatus === ApiStatus.loading} onClick={handleLogin} className="w-full hover:bg-blue-700 duration-300 text-[1.2rem] mt-4  bg-[#0047FF] text-white rounded-lg p-2">
              {
                getLoginStatus === ApiStatus.loading ? <ClipLoader color="white" size={15} /> : 'Continue'
              }
            </button>

            <div className="w-full text-red-600 py-[.2rem] h-[2rem]">

              {loginError?loginError:googleLoginAuthError? googleLoginAuthError:""}
            </div>

            <span>Don't have an account? </span><span onClick={handleNavigateToRegister} className="text-[#0047FF] cursor-pointer font-bold"> Signup</span>


          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
