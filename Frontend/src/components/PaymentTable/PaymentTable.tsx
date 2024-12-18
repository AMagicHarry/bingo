import { PropsWithChildren } from "react";
import './BingosTables.css'
import { PaymentHistory } from "../../types/types";
import { Link } from "react-router-dom";

interface PaymentTableProps extends PropsWithChildren {
  paymentHistory: PaymentHistory[]
  setPaymentHistory: React.Dispatch<React.SetStateAction<PaymentHistory[]>>;
}

const BingosTable: React.FC<PaymentTableProps> = ({ paymentHistory, children }) => {
  
  return (
    <div className="bingos-table px-[1rem] sm:px-[4rem] py-[2rem]">
      {children}
      <table className="w-full   text-left">
        <thead className="text-lg border-b border-gray-400">
          <tr>
            <th scope="col" className="py-4 hidden sm:table-cell font-[400] ">
              Purchaser
            </th>
            <th scope="col" className="py-4 hidden sm:table-cell font-[400] ">
              Tickets bought
            </th>
            <th scope="col" className="py-4 hidden sm:table-cell font-[400]">
              Transaction number
            </th>
            <th scope="col" className="py-4 font-[400]">
              Draw date/time
            </th>
          </tr>
        </thead>
        <tbody className="overflow-x-auto" >
          {paymentHistory.map((payment: PaymentHistory) => (
            <tr className="relative border-gray-400 border-b" key={payment._id}>
              <td className="pt-9 text-[20px] pb-1 sm:text-[22px] hidden sm:table-cell ">{payment.ticket.ownerName}</td>
              <td className="pt-9 text-[20px] pb-1 sm:text-[22px] hidden sm:table-cell cursor-pointer hover:text-blue-800"><Link to="/playerrecord">{payment.purchaser}</Link></td>
              <td className="pt-9 flex flex-col  pb-1">
                <span className='text-[20px] sm:text-[22px] '>{payment.numberOfTickets}</span>
                <span className='text-[16px] mt-[.5rem]'>{(parseInt(payment.ticket.ticketPrice)*parseInt(payment.numberOfTickets))}</span>
              </td>
              <td className="pt-9 text-[20px] pb-1 sm:text-[22px] word-break-word hidden sm:table-cell">{payment.transactionNumber}</td>
              <td className="pt-9 flex flex-col  pb-1">
                <span className='text-[20px] sm:text-[22px] '>{payment.ticket.bingo.gameDay}</span>
                <span className='text-[16px] mt-[.5rem]'>{payment.ticket.bingo.time}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingosTable;
