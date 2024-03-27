import { Link } from "react-router-dom";
import { PlayerTicket } from "../../types/types";
import { PropsWithChildren } from "react";

interface BingosTableProps extends PropsWithChildren {
  bingos: PlayerTicket[]
  setBingos: React.Dispatch<React.SetStateAction<PlayerTicket[]>>;
}

const BingosTable: React.FC<BingosTableProps> = ({ bingos, children }) => {
  return (
    <div className="bingos-table px-[1rem] sm:px-[4rem] py-[2rem]">
      {children}
      <table className=" w-full   text-left">
        <thead className="text-lg">
          <tr>
            <th scope="col" className="py-4  font-[500] ">
              Ticket
            </th>
            <th scope="col" className="py-4 hidden sm:table-cell font-[400] ">
              Tickets
            </th>
            <th scope="col" className="py-4 hidden sm:table-cell font-[400]">
              Price
            </th>
            <th scope="col" className="py-4 hidden sm:table-cell font-[400]">
              Draw date/time
            </th>
          </tr>
        </thead>
        <tbody className="overflow-x-auto" >
          {bingos.map((bingo: PlayerTicket) => (
            <tr className="relative border-gray-400 border-b " key={bingo.id}>
              <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden sm:table-cell cursor-pointer hover:text-blue-800"><Link to="/tickets">{bingo.ticketName}</Link></td>
              <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden sm:table-cell">{bingo.tickets}</td>
              <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden sm:table-cell">{bingo.price}</td>
              <td className="pt-9 flex flex-col  pb-1">
                <span className='text-[20px] sm:text-[24px] '>{bingo.date}</span>
                <span className='text-[16px] mt-[.5rem]'>{bingo.time}</span>
              </td>


              {/* {
                bingo.avaiableTickets !== "No" ?
                  <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden sm:table-cell">{bingo.avaiableTickets}</td>
                  :
                  <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden sm:table-cell">
                    <div className="bg-[#6A6A6A] rounded-lg text-white text-[1.5rem] text-center py-2">Sale Closed</div>
                  </td>
              } */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingosTable;