import React from 'react'
import { Bingo } from '../../types/types'
import { useNavigate } from 'react-router-dom'

interface BingoCardProps {
  bingo: Bingo
}

const BingoRow: React.FC<BingoCardProps> = ({bingo}) => {
  const navigate = useNavigate()
  const handleNavigate = (status:string) =>{
      if(status === 'Play') navigate('/buyticket')
      else return
  }
  return (
    <>
      <tr className="relative border-gray-400 border-b" key={bingo.id}>
        <td className="pt-9 flex flex-col  pb-1">
            <span className='text-[20px] sm:text-[24px] '>{bingo.date}</span>
            <span className='text-[16px] mt-[.5rem]'>{bingo.time}</span>
        </td>

        <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden sm:table-cell">{bingo.association}</td>
        <td className="pt-9 text-[20px] pb-1 sm:text-[24px] word-break-word hidden sm:table-cell">{bingo.firstPrice}</td>

        <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden lg:table-cell">{bingo.donation}$</td>
        <td className="pt-9 text-[20px] pb-1 sm:text-[24px] ">{bingo.ticketPrice}$</td>

        <td className="pt-9 pb-1 sm:text-[25px]">
            <button onClick={()=>handleNavigate(bingo.status)} className={`${bingo.status === 'Play' ? "bg-[#85E8C3] hover:bg-[#81f8C8] text-black" : "bg-[#6A6A6A] hover:bg-[#6A3A5b] text-white"}  p-[.5rem] md:w-[6rem] w-[4rem] md:px-[1rem] px-[.5rem] rounded-md text-base duration-300`}>
             {bingo.status === 'Play' ? 'Play' : 'Finished'}
            </button>
        </td>
      </tr>
    </>
  )
}

export default BingoRow
