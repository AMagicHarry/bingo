import React, { PropsWithChildren } from 'react';
import { formatDate } from "../../utils/functions";
import { Winner } from '../../types/types';

interface WinningHistoryTableProps extends PropsWithChildren {
  winningHistory: Winner[];
  setWinningHistory:React.Dispatch<React.SetStateAction<Winner[]>>
}

const WinningHistoryTable: React.FC<WinningHistoryTableProps> = ({ winningHistory,children }) => {
  return (
    <div>
        {children}
      <table className="w-full text-left">
        <thead className="text-lg">
          <tr>
            <th scope="col" className="py-4 hidden sm:table-cell font-[400]">Name</th>
            <th scope="col" className="py-4 hidden sm:table-cell font-[400]">Price</th>
            <th scope="col" className="py-4 hidden sm:table-cell font-[400]">Date won</th>
          </tr>
        </thead>
        <tbody>
          {winningHistory.map((winner) => {
            const dateWonFormatted = formatDate(winner.dateWon);
            return (
              <tr className="border-gray-400 border-b" key={winner._id}>
                <td className="pt-9 pb-1 hidden sm:table-cell">{winner.name}</td>
                <td className="pt-9 pb-1 hidden sm:table-cell">{winner.price}</td>
                <td className="pt-9 pb-1">{dateWonFormatted}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WinningHistoryTable;
