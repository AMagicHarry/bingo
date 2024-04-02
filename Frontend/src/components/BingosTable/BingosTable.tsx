import { Bingo } from "../../types/types";
import BingoRow from "../BingoRow/BingoRow";
import { PropsWithChildren } from "react";
import './BingosTables.css'

interface BingosTableProps extends PropsWithChildren {
  bingos: Bingo[]
  setBingos: React.Dispatch<React.SetStateAction<Bingo[]>>;
}

const BingosTable: React.FC<BingosTableProps> = ({ bingos, children }) => {


  return (
    <div className="bingos-table px-[1rem] sm:px-[4rem] py-[2rem]">
      {children}
      <table className="w-full   text-left">
        <thead className="text-lg border-b border-gray-400">
          <tr>
            <th scope="col" className="py-4  font-[500] ">
              Draw Date
            </th>
            <th scope="col" className="py-4 hidden sm:table-cell font-[400] ">
              Association
            </th>
            <th scope="col" className="py-4 hidden sm:table-cell font-[400]">
              1st Price
            </th>
            <th scope="col" className="py-4 hidden lg:table-cell font-[400]">
              Donation
            </th>
            <th scope="col" className="py-4 font-[400]">
              Ticket Price
            </th>
            <th scope="col" className="py-4 font-[400]">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="overflow-x-auto" >
          {bingos.map((bingo: Bingo) => (
            <BingoRow key={bingo.id} bingo={bingo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingosTable;
