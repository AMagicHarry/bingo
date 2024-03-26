import { TicketHistory } from "../../types/types";
import { PropsWithChildren } from "react";

interface BingosTableProps extends PropsWithChildren {
  bingos: TicketHistory[]
  setBingos: React.Dispatch<React.SetStateAction<TicketHistory[]>>;
}

const BingosTable: React.FC<BingosTableProps> = ({ bingos, children }) => {
  return (
    <div>
      {children}
      <table className="w-full   text-left">
        <thead className="text-lg">
          <tr>
            <th scope="col" className="py-4  font-[500] ">
              Date created/time
            </th>
            <th scope="col" className="py-4 hidden sm:table-cell font-[400] ">
              Total tickets created
            </th>
            <th scope="col" className="py-4 hidden sm:table-cell font-[400]">
              Total prize
            </th>
            <th scope="col" className="py-4 hidden sm:table-cell font-[400]">
              total sold/Revenue
            </th>
            <th scope="col" className="py-4 font-[400]">
              Tickets avaiable
            </th>
          </tr>
        </thead>
        <tbody className="overflow-x-auto" >
          {bingos.map((bingo: TicketHistory) => (
            <tr className="relative border-gray-400 border-b " key={bingo.id}>
              <td className="pt-9 flex flex-col  pb-1">
                <span className='text-[20px] sm:text-[24px] '>{bingo.createddate}</span>
                <span className='text-[16px] mt-[.5rem]'>{bingo.createdtime}</span>
              </td>
              <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden sm:table-cell">{bingo.totalTicket}</td>
              <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden sm:table-cell">{bingo.ticketPrize}</td>
              <td className="pt-9 flex flex-col  pb-1">
                <span className='text-[20px] sm:text-[24px] '>{bingo.totalSold}</span>
                <span className='text-[16px] mt-[.5rem]'>{bingo.revenue}</span>
              </td>
              {
                bingo.avaiableTickets !== "No" ?
                  <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden sm:table-cell">{bingo.avaiableTickets}</td>
                  :
                  <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden sm:table-cell">
                    <div className="bg-[#6A6A6A] rounded-lg text-white text-[1.5rem] text-center py-2">Sale Closed</div>
                  </td>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingosTable;