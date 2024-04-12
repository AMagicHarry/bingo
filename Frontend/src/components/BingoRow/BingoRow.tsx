import React, { useEffect, useState } from 'react'
import { Bingo } from '../../types/types'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../../utils/functions'
import { isBeforeToday,isAfterToday } from '../../utils/functions'

interface BingoCardProps {
  bingo: Bingo
}

const BingoRow: React.FC<BingoCardProps> = ({ bingo }) => {


  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/buyticket')
  }

  const createdAt = formatDate(bingo.createdAt)

  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    'bg-[#85E8d3] text-black cursor-point',
    'bg-[#FFC107] text-black cursor-point',
    // 'bg-[#b34f4f] cursor-default text-white',
  ];
  useEffect(() => {
    if (bingo.status === 'Finished') return;

    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 500);

    return () => clearInterval(intervalId);
  }, [bingo.status, colors.length]);







  return (
    <>
      <tr className="relative border-gray-400 border-b" key={bingo._id}>
        <td className="pt-9 flex flex-col  pb-1">
          <span className='text-[20px] sm:text-[24px] '>{createdAt}</span>
          <span className='text-[16px] mt-[.5rem]'>{bingo.time}</span>
        </td>

        <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden sm:table-cell">{bingo.name}</td>
        <td className="pt-9 text-[20px] pb-1 sm:text-[24px] word-break-word hidden sm:table-cell">{bingo.prices.split(',')[0]}</td>

        <td className="pt-9 text-[20px] pb-1 sm:text-[24px] hidden lg:table-cell">{bingo.donation}$</td>
        <td className="pt-9 text-[20px] pb-1 sm:text-[24px] ">{bingo.ticketPrice}$</td>

        <td className="pt-9 pb-1 sm:text-[25px]">
          <button  disabled={isBeforeToday(bingo.startDate) || isAfterToday(bingo.gameDay) } 
          onClick={() => handleNavigate()} 
          className={isBeforeToday(bingo.startDate) ? `${colors[colorIndex]} p-[.5rem] md:w-[6rem] w-[4rem] md:px-[1rem] px-[.5rem] rounded-md text-base duration-300` : isAfterToday(bingo.gameDay)  ? "bg-[#6A6A6A] p-[.5rem] md:w-[6rem] w-[4rem] md:px-[1rem] text-base px-[.5rem] rounded-md cursor-default text-white" : "bg-[#85E8C3] p-[.5rem] md:w-[6rem] w-[4rem] md:px-[1rem] px-[.5rem] rounded-md  hover:bg-[#81f8C8] text-black "  }>
            {isBeforeToday(bingo.startDate) ? 'Starting' : isAfterToday(bingo.gameDay) ? 'Finished' : 'Play'}
          </button>
        </td>
      </tr>
    </>
  )
}

export default BingoRow
