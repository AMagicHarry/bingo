import { Link } from "react-router-dom";

import Timer from "../../components/Timer/Timer"
import ballImage from "../../assets/ball.png"

const Register = () => {

  return (
    <>
      <div className='absolute text-center justify-center h-full w-full -z-50 opacity-25'>
        <img src={ballImage} alt="Bingo" style={{ width: "70%", height: "100%" }} />
      </div>
      <div className="container px-[8rem] py-[4rem] flex z-50">
        <div className="w-4/12">
          <Link to={""} className="block text-[1.8rem] cursor-pointer active:font-bold">Home</Link>
          <Link to={""} className="block text-[1.8rem] mt-4 cursor-pointer">Payment</Link>
          <Link to={""} className="block text-[1.8rem] mt-4 cursor-pointer">Bingo</Link>
          <Link to={""} className="block text-[1.8rem] mt-4 cursor-pointer">Statistics</Link>
        </div>
        <div className="w-8/12">
          <div className="flex">
            <div className="w-7/12">
              <p className="text-[2rem] font-bold">Boxing Club</p>
              <p className="text-[1.5rem] mt-4">Lorem ipsum dolor sit amet consectetur. At risus</p>
              <div className="text-[1.5rem] mt-4 rounded-lg border-2 border-[#0047FF] py-2 w-60 text-center">Verified</div>
            </div>
            <div className="w-5/12">
              <Timer></Timer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
