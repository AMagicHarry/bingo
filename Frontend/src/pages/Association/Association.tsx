import { Link } from "react-router-dom";

const Association = () => {
  return (
    <>
      <div className="flex pt-[1rem]">
        <div className="w-5/12 hidden lg:block"></div>
        <div className="w-full sm:w-7/12 container-wrapper px-[2rem]   text-center mt-[5rem]">
          {/* <p>Welcome!</p>
          <p>By creating an account, you're joining a community dedicated to making a positive impact through the excitement of Bingo</p>
          <div className="w-full bg-white  rounded-[24px] max-w-[757px] xl:relative p-[1rem] sm:p-[3rem] xl:pr-[10rem]">
            <p>Create</p>
          </div> */}
          <p className="text-[2.5rem]">Welcome Association/Club!</p>
          <p className="text-[1.3rem] mt-2">With bingo, make a difference! seize the opportunity to create positive change. Sign up now to host bingo events, manage payments, and support your charitable causes. Join us in making an impact today!</p>
          <Link to={"/login"} className="block w-full bg-white hover:bg-slate-200 p-3 rounded-lg text-2xl text-[#0047FF] mt-4">Login</Link>
          <Link to={"/register"} className="block w-full  bg-white hover:bg-slate-200 p-3 rounded-lg text-2xl text-[#0047FF] mt-4">Create account</Link>
        </div>
      </div>
    </>
  );
};

export default Association;
