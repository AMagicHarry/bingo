import { Payment } from "../../types/types";
import { PropsWithChildren } from "react";
import './BingosTables.css'

interface BingosTableProps extends PropsWithChildren {
  bingos: Payment[]
  setBingos: React.Dispatch<React.SetStateAction<Payment[]>>;
}

const BingosTable: React.FC<BingosTableProps> = ({ bingos, children }) => {
  return (
    <div className="bingos-table px-[1rem] sm:px-[4rem] py-[2rem]">
      {children}
      <table className="w-full   text-left">
        <thead className="text-lg border-b border-gray-400">
          <tr>
            <th scope="col" className="py-4  font-[500] ">
              Ticket
            </th>
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
          {bingos.map((bingo: Payment) => (
            <tr className="relative border-gray-400 border-b" key={bingo.id}>
              <td className="pt-9 text-[20px] pb-1 sm:text-[22px] hidden sm:table-cell">{bingo.ticketName}</td>
              <td className="pt-9 text-[20px] pb-1 sm:text-[22px] hidden sm:table-cell">{bingo.purchaser}</td>
              <td className="pt-9 flex flex-col  pb-1">
                <span className='text-[20px] sm:text-[22px] '>{bingo.tickets}</span>
                <span className='text-[16px] mt-[.5rem]'>{bingo.bought}</span>
              </td>
              <td className="pt-9 text-[20px] pb-1 sm:text-[22px] word-break-word hidden sm:table-cell">{bingo.transaction}</td>
              <td className="pt-9 flex flex-col  pb-1">
                <span className='text-[20px] sm:text-[22px] '>{bingo.date}</span>
                <span className='text-[16px] mt-[.5rem]'>{bingo.time}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingosTable;
