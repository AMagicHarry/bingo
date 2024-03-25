import { Link } from "react-router-dom";

import Timer from "../../components/Timer/Timer"
import BingoCard from "../../components/BingoCard/BingoCard"
import iphone from "../../assets/iphone.png"
import dollar from "../../assets/dollar.png"
import painted from "../../assets/painted.png"

const bingoData: any = [
  { id: 1, prize: '500$', created: 'Oct 8, 2023', gameDay: 'Jan 11, 2024', time: '07:40 am', url: dollar },
  { id: 2, prize: 'Printed Art', created: 'Jul 9, 2024', gameDay: 'Dec 3, 2024', time: 'Finished', url: painted },
  { id: 3, prize: 'Iphone 13', created: 'Nov 7, 2024', gameDay: 'May 16, 2024', time: '02:30 pm', url: iphone },
]

const Register = () => {

  return (
    <>

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
            </div>
            <div className="w-5/12">
              <Timer></Timer>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-7/12">
              <div className="text-[1.5rem] rounded-lg border-2 border-[#0047FF] py-2 w-60 text-center">Verified</div>
            </div>
            <div className="w-5/12">
              <button className="text-[1.5rem] rounded-lg border-2 border-[#6A6A6A] bg-[#1A976A] py-2 text-white text-center w-full">Create new Bingo</button>
            </div>
          </div>
          <hr className="h-[0.1rem] bg-slate-800 my-10" />
          <div>
            <p className="text-[1.8rem] font-bold">Recent Bingo's</p>
            <div className="flex justify-between">
              {
                bingoData.map((index: any) => {
                  return (
                    <BingoCard key={index.id} price={index.prize} created={index.created} gameDay={index.gameDay} time={index.time} url={index.url}></BingoCard>
                  )
                })
              }
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[1.8rem] font-bold">Recent Winners</p>
            <div className="flex justify-between">
              {
                bingoData.map((index: any) => {
                  return (
                    <BingoCard key={index.id} price={index.prize} created={index.created} gameDay={index.gameDay} time={index.time} url={index.url}></BingoCard>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
