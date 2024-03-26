import BingosTable from '../../components/BingosTable/BingosTable';
import { Link } from 'react-router-dom';
import { bingos as bingosDummy, bingoGroups as bingoGroupsDummy } from '../../data/data';
import { Bingo } from '../../types/types';
import { useState } from 'react';
import BingoGroupImage from '../../assets/bingo.svg';
import { BingoGroup } from '../../types/types';

const Selected = () => {
  const [bingos, setBingos] = useState<Bingo[]>([...bingosDummy.slice(0, 5)]);
  const [bingoGroups, _] = useState<BingoGroup[]>([...bingoGroupsDummy]);

  return (
    <>
      <div className="w-full p-[1rem]">
        <div className="container md:px-[8rem] ">
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
          <BingosTable setBingos={setBingos} bingos={bingos}>
            <div className="flex border-b border-gray-400 pb-[1rem] items-center justify-between">
              <h1 className='text-[1.3rem] sm:text-[2rem]'>Trending Bingo's</h1>
              <Link to='/all-bingos' className='text-[15px] sm:text-[25px] hover:underline duration-300 cursor-pointer'>
                See all Bingos
              </Link>
            </div>
          </BingosTable>
        </div>
      </div>
    </>
  );
};

export default Selected;
