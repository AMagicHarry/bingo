import { TicketHistory } from "../../types/types";
import { PropsWithChildren } from "react";
import { formatDate } from "../../utils/functions";
import { getTimeFromDate } from "../../utils/functions";

interface BingosTableProps extends PropsWithChildren {
  ticketHistory: TicketHistory[]
  setTicketHistory: React.Dispatch<React.SetStateAction<TicketHistory[]>>;
}


const BingosTable: React.FC<BingosTableProps> = ({ ticketHistory, children }) => {
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
              Ticket prize
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
          {ticketHistory.map((ticket: TicketHistory) => {
             const createdAt = formatDate(ticket.createdAt)
             const time = getTimeFromDate(ticket.createdAt)
             const ticketPrice = ticket.ticketPrice
            return (
              <tr className="relative border-gray-400 border-b " key={ticket._id}>
                <td className="pt-9 flex flex-col  pb-1">
                  <span className='text-[20px] sm:text-[24px] '>{createdAt}</span>
                  <span className='text-[16px] mt-[.5rem]'>{time}</span>
                </td>
                <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden sm:table-cell">{ticket.totalTicket}</td>
                <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden sm:table-cell">${ticketPrice}</td>
                <td className="pt-9 flex flex-col  pb-1">
                  <span className='text-[20px] sm:text-[24px] '>{ticket.totalSold}</span>
                  <span className='text-[16px] mt-[.5rem]'>{ticket.revenue}</span>
                </td>
                {
                  ticket.availableTickets !== '0' ?
                    <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden sm:table-cell">{ticket.availableTickets}</td>
                    :
                    <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden sm:table-cell">
                      <div className="bg-[#6A6A6A] rounded-lg text-white text-[1.5rem] text-center py-2">Sale Closed</div>
                    </td>
                }
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BingosTable;