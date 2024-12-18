import BingoGroupImage from '../../assets/bingo.svg'
import {  bingoGroups as bingoGroupsDummy } from '../../data/data';
import { BingoGroup } from '../../types/types';
import { useState } from 'react';


const PopularAssociation = () => {
    const [bingoGroups, _] = useState<BingoGroup[]>([...bingoGroupsDummy]);
  return (
    <div className='p-[1rem]'>
        <h1 className='text-[2rem] mt-[1rem]'>Popular Bingo's</h1>
          <div className="flex mt-[1rem] gap-[1rem] items-center justify-center flex-wrap">
            {bingoGroups.map((bingoGroup: BingoGroup) => (
              <div key={bingoGroup.id} className='relative'>
                <img src={BingoGroupImage} alt="" className='relative' />
                <span className='absolute bg-[#85E8C3] left-[50%] px-[.5rem] py-[.2rem] rounded-md -translate-x-1/2 bottom-[2rem]'>
                  {bingoGroup.category}
                </span>
              </div>
            ))}
          </div>
    </div>
  )
}

export default PopularAssociation