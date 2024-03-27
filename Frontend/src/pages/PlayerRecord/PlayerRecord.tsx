import { Link } from "react-router-dom";
import Table from "../../components/PlayerTicketList/PlayerTicketList";
import { BiFilterAlt, BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { playertickets as bingosDummy } from '../../data/data'
import { PlayerTicket } from '../../types/types'

const BingoPayment = () => {
  const [bingos, setBingos] = useState<PlayerTicket[]>([...bingosDummy])
  return (
    <>
      <div className="container px-[8rem] py-[2rem] z-50">
        <Link to={"/bingopayment"} className="block text-[1.8rem] mt-10 cursor-pointer hover:text-blue-400 text-blue-600 font-bold text-end">Back</Link>
        <div >
          <Table bingos={bingos} setBingos={setBingos} >
            <div className="flex text-base justify-between gap-[1rem] border-b border-gray-400 pb-[1rem] items-center ">
              <h1 className='text-[2rem] mt-[2rem] font-bold'>Jacob Jones<span className="text-[1.5rem] font-thin"> (jacobjones@gmail.com)</span></h1>
              <div className='flex items-center gap-[1rem]'>
                <div className=' focus-within:ring-2 focus-within:ring-blue-500 flex hover:bg-blue-100 duration-300 cursor-pointer group gap-[.2rem] items-center bg-white px-[1rem] py-[.5rem] rounded-md border-2'>
                  <BiSearchAlt />
                  <input placeholder='Search' type="text" className='flex-1 bg-[inherit] outline-none ' />
                </div>
                <div className='flex hover:bg-blue-100 duration-300 cursor-pointer gap-[.2rem] items-center bg-white px-[1rem] py-[.5rem] rounded-md border-2'>
                  <BiFilterAlt />
                  <span>Filters</span>
                </div>
              </div>
            </div>
          </Table>
        </div>
      </div>
    </>
  );
};

export default BingoPayment;