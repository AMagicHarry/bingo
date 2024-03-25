import { Link } from "react-router-dom";
import Table from "../../components/TicketHistoryTable/TicketHistoryTable";
import { BiFilterAlt, BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { tickethistorys as bingosDummy } from '../../data/data'
import { TicketHistory } from '../../types/types'

const BingoPayment = () => {
  const [bingos, setBingos] = useState<TicketHistory[]>([...bingosDummy])
  return (
    <>
      <div className="container px-[8rem] py-[4rem] flex z-50">
        <div className="w-3/12">
          <div className="absolute">
            <Link to={"/bingohome"} className="block text-[1.8rem] cursor-pointer hover:font-bold">Home</Link>
            <Link to={"/bingopayment"} className="block text-[1.8rem] mt-4 cursor-pointer hover:font-bold">Payment</Link>
            <Link to={"/bingohistory"} className="block text-[1.8rem] mt-4 cursor-pointer hover:font-bold">Bingo</Link>
            <Link to={"/tickethistory"} className="block text-[1.8rem] mt-4 cursor-pointer hover:font-bold">Statistics</Link>
          </div>
        </div>
        <div className="w-9/12">
          <button className="text-[1.5rem] bg-[#1A976A] border-2 border-[#6A6A6A] text-white py-1 px-10 mt-10 mb-4 mr-2 rounded-lg">Tickets</button>
          <button className="text-[1.5rem] bg-[#1A976A] border-2 border-[#6A6A6A] text-white py-1 px-10 mt-10 mb-4 rounded-lg">Winnings</button>
          <Table bingos={bingos} setBingos={setBingos} >
            <div className=" flex text-base justify-between gap-[1rem] pb-[1rem] items-center ">
              <h1 className='text-[2rem] mt-[2rem]'>Your Ticket history</h1>
              <div className='flex items-center gap-[1rem]'>
                <div className=' focus-within:ring-2 focus-within:ring-blue-500 flex hover:bg-blue-100 duration-300 cursor-pointer group gap-[.2rem] items-center bg-white px-[1rem] py-[.5rem] rounded-md border-2'>
                  <BiSearchAlt />
                  <input placeholder='Search' type="text" className='flex-1 bg-[inherit] outline-none' />
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