import { BingoHistory } from "../../types/types";
import { PropsWithChildren } from "react";

interface BingosTableProps extends PropsWithChildren {
  bingos: BingoHistory[]
  setBingos: React.Dispatch<React.SetStateAction<BingoHistory[]>>;
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
              Prize
            </th>
            <th scope="col" className="py-4 hidden sm:table-cell font-[400]">
              Donation Traget
            </th>
            <th scope="col" className="py-4 hidden sm:table-cell font-[400]">
              Ticket price
            </th>
            <th scope="col" className="py-4 font-[400]">
              Draw date/time
            </th>
          </tr>
        </thead>
        <tbody className="overflow-x-auto" >
          {bingos.map((bingo: BingoHistory) => (
            <tr className="relative border-gray-400 border-b " key={bingo.id}>
              <td className="pt-9 flex flex-col  pb-1">
                <span className='text-[20px] sm:text-[24px] '>{bingo.createddate}</span>
                <span className='text-[16px] mt-[.5rem]'>{bingo.createdtime}</span>
              </td>
              <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden sm:table-cell">{bingo.prize}</td>

              <td className="pt-9 text-[20px] pb-1 sm:text-[24px] word-break-word hidden sm:table-cell">{bingo.target}</td>
              <td className="pt-9 text-[20px] pb-1 sm:text-[24px] word-break-word hidden sm:table-cell">{bingo.price}</td>
              <td className="pt-9 flex flex-col  pb-1">
                {
                  bingo.drawdate !== "Finished" ?
                    <>
                      <span className='text-[20px] sm:text-[24px] '>{bingo.drawdate}</span>
                      <span className='text-[16px] mt-[.5rem]'>{bingo.drawtime}</span>
                    </> :
                    <div className="bg-[#6A6A6A] rounded-lg text-white text-[1.5rem] text-center py-2">Finished</div>
                }

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingosTable;
