import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { register } from "../../app/store/auth/thunk";
import { RootState } from "../../app/store/store";
import { ApiStatus } from "../../types/types";
import { ClipLoader } from "react-spinners";
import bgImage from '../../assets/background_ball.png'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { resetRegisterError } from "../../app/store/auth/slice";
import Google from "../../assets/google.svg"
import Facebook from "../../assets/facebook.svg"
import Apple from "../../assets/apple.svg"



const Register = () => {
  const { getRegisterStatus, registerError } = useAppSelector((state: RootState) => state.auth)

  const [formStep, setFormStep] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [emailError,setEmailError] = useState<string>('')
  
  const dispatch = useAppDispatch()
  const navigate = useNavigate()


  useEffect(()=>{
   if(getRegisterStatus === ApiStatus.success){
    navigate('/')
   }
  },[getRegisterStatus])


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

  return (
    <>
      <div className="flex w-full h-full overflow-y-auto">
        <div className="w-5/12 sticky top-0">
          <img className="w-full h-full object-cover" src={bgImage} alt="Bingo" style={{ height: "100%" }} />
        </div>
        <div className="w-7/12 container px-[10rem] text-center mt-2">
          {
            formStep === 0 ?
              <div className="w-full bg-white mt-4 rounded-[24px] max-w-[757px] xl:relative px-[4rem] py-[2rem] sm:p-[3rem]">
                <p className="text-[2rem]">Create an account</p>
                <button className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 mt-4 flex justify-center"><img src={Google} className="w-8 mr-2"></img>Sign up with Google</button>
            <button className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 mt-2 flex justify-center"><img src={Facebook} className="w-9 mr-2"></img>Sign up with Facebook</button>
            <button className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 mt-2 flex justify-center"><img src={Apple} className="w-9 mr-2"></img>Sign up with Apple</button>
                <p className="mt-8">Or continue with email</p>
                <input
                  className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-2 px-4 mt-8"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                ></input>
                <button onClick={handleContinue} className="w-full  mt-4  bg-[#0047FF] text-white rounded-lg p-2">Continue</button>
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
                  {registerError && registerError}
                </div>

                <span>Already have an account? </span><Link to={"/login"} className="text-[#0047FF] font-bold"> Log in</Link>
              </div>
          }
        </div>
      </div>
    </>
  );
};

export default Register;
