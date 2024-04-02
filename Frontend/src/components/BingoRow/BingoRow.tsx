import React, { useEffect, useState } from 'react'
import { Bingo } from '../../types/types'
import { useNavigate } from 'react-router-dom'

interface BingoCardProps {
  bingo: Bingo
}

const BingoRow: React.FC<BingoCardProps> = ({ bingo }) => {


  const navigate = useNavigate()
  const handleNavigate = (status: string) => {
    if (status === 'Play') navigate('/buyticket')
    else return
  }


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
          <button onClick={() => handleNavigate(bingo.status)} className={`${bingo.status === 'Play' ? "bg-[#85E8C3] hover:bg-[#81f8C8] text-black" : bingo.status === "Finished" ? "bg-[#6A6A6A] cursor-default text-white" : colors[colorIndex]}  p-[.5rem] md:w-[6rem] w-[4rem] md:px-[1rem] px-[.5rem] rounded-md text-base duration-300`}>
            {bingo.status === 'Play' ? 'Play' : bingo.status === 'Finished' ? 'Finished' : 'Starting'}
          </button>
        </td>
      </tr>
    </>
  )
}

export default BingoRow
