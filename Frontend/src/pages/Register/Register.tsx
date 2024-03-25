import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [password, setPassword] = useState<number>(0);

  const skipPassword = () => {
    setPassword(1);
    console.log(password)
  }

  return (
    <>
      <div className="flex pt-[1rem]">
        <div className="w-5/12"></div>
        <div className="w-7/12 container px-[10rem] text-center mt-2">
          {/* <p className="text-[2rem]">Welcome!</p> */}
          {/* <p className="text-[1.2rem] mt-2">By creating an account, you're joining a community dedicated to making a positive impact through the excitement of Bingo</p> */}
          {
            password == 0 ?
              <div className="w-full bg-white mt-4 rounded-[24px] max-w-[757px] xl:relative px-[4rem] py-[2rem] sm:p-[3rem]">
                <p className="text-[2rem]">Create an account</p>
                <button className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 mt-4">Sign up with Google</button>
                <button className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 mt-2">Sign up with Facebook</button>
                <button className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 mt-2">Sign up with Apple</button>
                <p className="mt-8">Or continue with email</p>
                <input className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-2 px-4 mt-8" placeholder="Enter your email"></input>
                <button onClick={skipPassword} className="w-full text-[1.2rem] mt-4 mb-8 bg-[#0047FF] text-white rounded-lg p-2">Continue</button>
                <span>Already have an account? </span><Link to={"/login"} className="text-[#0047FF] font-bold"> Log in</Link>
              </div> :
              <div className="w-full bg-white mt-20 rounded-[24px] max-w-[757px] xl:relative px-[4rem] py-[2rem] sm:p-[3rem]">
                <p className="text-[2rem]">Create a password</p>
                <input className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-2 px-4 mt-8" placeholder="Password"></input>
                <input className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-2 px-4 mt-4" placeholder="Confirm password"></input>
                <button className="w-full text-[1.2rem] mt-4 mb-8 bg-[#0047FF] text-white rounded-lg p-2">Continue</button>
                <span>Already have an account? </span><Link to={"/login"} className="text-[#0047FF] font-bold"> Log in</Link>
              </div>
          }

        </div>
      </div>
    </>
  );
};

export default Register;
