import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { googleRegister, register } from "../../app/store/auth/thunk";
import { RootState } from "../../app/store/store";
import { ApiStatus } from "../../types/types";
import { ClipLoader } from "react-spinners";
import bgImage from '../../assets/background_ball.png'
import { useNavigate } from "react-router-dom";
import { resetRegisterError } from "../../app/store/auth/slice";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import {CodeResponse } from "@react-oauth/google";



const Register = () => {
  const { getRegisterStatus, registerError,getGoogleRegisterAuthStatus,getFacebookAuthStatus,googleRegisterAuthError } = useAppSelector((state: RootState) => state.auth)

  const [formStep, setFormStep] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [emailError,setEmailError] = useState<string>('')
  
  const dispatch = useAppDispatch()
  const navigate = useNavigate()


  const goToPasswordSetup = () => {
    if (emailError === '') {
      setFormStep(1);
    }
  };

  const validateEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    if (!re.test(email)) {
      setEmailError('Invalid email format.');
      return
    } else {
      setEmailError('');
      goToPasswordSetup()
    }
  };


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError("")
  };


  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setName(name)
  };

 const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
  };


  const handleContinue = () => {
    setEmailError("")
    validateEmail(email)
  }

  const handleRegistration = () => {
    dispatch(resetRegisterError())
    setEmailError("")
    dispatch(register({name, email, password, confirmPassword }))
  };

  const handleGoogleSuccess = async(codeResponse:CodeResponse) => {
    const resultAction = dispatch(googleRegister(codeResponse.code))
    if (googleRegister.fulfilled.match(resultAction)) {
      navigate('/');
    }
  }

  const handleNavigateToLogin = () => {
    dispatch(resetRegisterError())
    navigate('/login')
  }
  // const handleFacebookSuccess = async(response:any) => {
  //   console.log(response)
  //   const resultAction = dispatch(facebookAuth({name:response?.name,email:response?.email}))
  //   if (facebookAuth.fulfilled.match(resultAction)) {
  //     navigate('/');
  //   }
  // }


  return (
    <>
      {
        (getGoogleRegisterAuthStatus === ApiStatus.loading || getFacebookAuthStatus === ApiStatus.loading) &&
        <div className="w-full h-full flex items-center justify-center fixed top-0 left-0 right-0 left-0 opacity-[.3] bg-black">
           <ClipLoader color="white"  size={15}/>
        </div>
      }
      <div className="flex w-full h-full overflow-y-auto">
        <div className="w-5/12 sticky top-0">
          <img className="w-full h-full object-cover" src={bgImage} alt="Bingo" style={{ height: "100%" }} />
        </div>
        <div className="w-7/12 container px-[10rem] text-center mt-2">
          {
            formStep === 0 ?
              <div className="w-full bg-white mt-4 rounded-[24px] max-w-[757px] xl:relative px-[4rem] py-[2rem] sm:p-[3rem]">
                <p className="text-[2rem]">Create an account</p>
               {/* <FacebookButton onSuccess={handleFacebookSuccess}/> */}
               <GoogleButton onSuccess={handleGoogleSuccess}/>
               {/* <AppleButton onSuccess={()=>console.log('Hello')}/> */}
                <p className="mt-8">Or continue with email</p>
                <input
                  className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-2 px-4 mt-8"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                ></input>
                <button type="button" onClick={handleContinue} className="w-full  mt-4  bg-[#0047FF] text-white rounded-lg p-2">Continue</button>
                <div className="h-[1rem] mb-[1rem]">
                {emailError && <p className="text-red-500 w-full text-center  mt-[.5rem]">{emailError}</p>}
                </div>
                <span >Already have an account? </span><Link to={"/login"} className="text-[#0047FF] font-bold"> Log in</Link>
              </div> :
              <div className="w-full bg-white mt-20 rounded-[24px] max-w-[757px] xl:relative px-[4rem] py-[2rem] sm:p-[3rem]">
                <span className="text-[2rem]">Complete from</span>
                <input
                  className="w-full opacity-[.5] bg-gray-200 text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 outline-none p-2 px-4"
                  placeholder="Email"
                  type="email"
                  readOnly
                  value={email}
                ></input>

                <input
                  className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-2 px-4 mt-4"
                  placeholder="Name"
                  type="name"
                  value={name}
                  onChange={handleNameChange}
                ></input>

                <input
                  className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-2 px-4 mt-4"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                ></input>
                <input
                  className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-2 px-4 mt-4"
                  placeholder="Confirm password"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                ></input>

              

                <button style={{

                }} disabled={getRegisterStatus === ApiStatus.loading} onClick={handleRegistration} className="w-full hover:bg-blue-700 duration-300 text-[1.2rem] mt-4 mb-4 bg-[#0047FF] text-white rounded-lg p-2">
                  {
                    getRegisterStatus === ApiStatus.loading ? <ClipLoader color="white" size={15} /> : 'Continue'
                  }
                </button>

                <div className="w-full text-red-600 h-[2rem]">
                  {registerError? registerError:googleRegisterAuthError?googleRegisterAuthError:""}
                </div>

                <span>Already have an account? </span><span onClick={handleNavigateToLogin} className="text-[#0047FF] cursor-pointer font-bold"> Log in</span>
              </div>
          }
        </div>
      </div>
    </>
  );
};

export default Register;
