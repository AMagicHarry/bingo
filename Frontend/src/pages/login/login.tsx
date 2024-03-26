import { Link } from "react-router-dom";
import Google from "../../assets/google.svg"
import Facebook from "../../assets/facebook.svg"
import Apple from "../../assets/apple.svg"

const Login = () => {

  return (
    <>
      <div className="flex pt-[1rem]">
      <div className="w-5/12 hidden lg:block"></div>
        <div className="w-full lg:w-7/12 container md:px-[8rem] px-[2rem]   text-center mt-[5rem]">
          {/* <p className="text-[2rem]">Welcome!</p> */}
          {/* <p className="text-[1.2rem] mt-2">By creating an account, you're joining a community dedicated to making a positive impact through the excitement of Bingo</p> */}

          <div className="w-full bg-white mt-2 rounded-[24px] max-w-[757px] xl:relative px-[4rem] py-[2rem] sm:p-[3rem]">
            <p className="text-[2rem]">Login</p>
            <button className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 mt-4 flex justify-center"><img src={Google} className="w-8 mr-2"></img>Sign up with Google</button>
            <button className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 mt-2 flex justify-center"><img src={Facebook} className="w-9 mr-2"></img>Sign up with Facebook</button>
            <button className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 mt-2 flex justify-center"><img src={Apple} className="w-9 mr-2"></img>Sign up with Apple</button>
            <p className="mt-8">Or continue with email</p>
            <input className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 px-4 mt-8" placeholder="Enter your email"></input>
            <input className="w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 px-4 mt-2" placeholder="Password"></input>
            <Link to={"/bingohome"} className="block w-full text-[1.2rem] mt-4 mb-8 bg-[#0047FF] text-white rounded-lg p-2">Continue</Link>
            <span>Don't have an account? </span><Link to={"/register"} className="text-[#0047FF] font-bold"> Signup</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
