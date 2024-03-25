import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'

import BingosTable from '../../components/BingosTable/BingosTable';
import { bingos as bingosDummy, bingoGroups as bingoGroupsDummy } from '../../data/data';
import { Bingo } from '../../types/types';
import { BingoGroup } from '../../types/types';

import BingoGroupImage from '../../assets/bingo.svg';
import BiggestPrice from '../../assets/price.svg'
import SolarStar from '../../assets/solar_star-bold-duotone.svg'
import Rectangle7 from '../../assets/latest_winner_frame.svg'
import CounterFrame from '../../assets/counterframe.svg'

import './Home.css'

const Home = () => {
  const navigate = useNavigate();

  const [bingos, setBingos] = useState<Bingo[]>([...bingosDummy.slice(0, 5)]);
  const [bingoGroups, _] = useState<BingoGroup[]>([...bingoGroupsDummy]);

  const totals: any = [
    { id: 1, title: 'Game Played', value: '1.3M' },
    { id: 2, title: 'Total winnings', value: '900k' },
    { id: 3, title: 'Active players', value: '300k' },
  ]

  const winners: string[] = [
    'Julie',
    'Serenity',
    'Kathryn',
    'Claire',
    'Audrey',
    'Connie',
    'Regina',
    'Savannah',
    'Courtney',
    'Bessie'
  ]

  return (
    <div className='w-full'>
      <div className="container px-[8rem] py-[2rem]">
        <div className="flex flex-col lg:flex-row w-full">
          <div className='flex flex-1  sm:flex-md  flex-col gap-[1rem]'>
            <div className='w-full max-w-[330px] relative h-[330px]'>
              <img src={Rectangle7} className='w-full object-cover h-full' alt="" />
              <div className='absolute text-center text-white font-[600] top-0 flex flex-col items-center justify-center gap-[.7rem] left-0 right-0 bottom-0'>
                <h1 className='text-[25px] p-1'>Latest Jackpot Winner</h1>
                <span className='text-[25px]'>29th January</span>
                <div className='flex items-center gap-[1rem]'>
                  <div className='w-[20x] '>
                    <img className='w-full h-full' src={SolarStar} alt="" />
                  </div>
                  <div className='w-[20x] '>
                    <img className='w-full h-full' src={SolarStar} alt="" />
                  </div>
                  <div className='w-[20x] '>
                    <img className='w-full h-full' src={SolarStar} alt="" />
                  </div>
                  <div className='w-[20x] '>
                    <img className='w-full h-full' src={SolarStar} alt="" />
                  </div>
                  <div className='w-[20x] '>
                    <img className='w-full h-full' src={SolarStar} alt="" />
                  </div>
                </div>
                <span className='text-[35px]'>
                  James W.
                </span>
              </div>
            </div>
            <p className='font-[400] text-[16px] py-[2rem]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi vitae, perferendis earum repellat, est voluptate a, delectus modi consequuntur mollitia
              distinctio et animi explicabo iusto sed tempora nemo excepturi consectetur.
            </p>
            <div className='flex items-center mb-[1.5rem] justify-center sm:justify-start w-full gap-[1rem]'>
              < Link to='/play' onClick={() => navigate('/play')} className='p-[.5rem] w-full max-w-[148px] flex items-center justify-center duration-300 hover:bg-blue-100 px-[1rem] rounded-md text-base bg-[#FFD700]'>
                Play
              </Link >
              <Link to='/association' onClick={() => navigate('#')} className='p-[.5rem] w-full max-w-[148px] flex items-center justify-center duration-300 hover:bg-blue-100 rounded-md text-base  bg-[#85E8C3]' >
                Association
              </Link >
            </div>

          </div>

          <div className=' flex-1'>
            <img className='w-full' src={BiggestPrice} alt="" />
          </div>
        </div>

        <div className='flex flex-col gap-[1rem] mt-[4rem] mb-[1rem] md:flex-row items-center justify-between'>
          <div >
            <img src={CounterFrame} alt="" />
          </div>
          <div className='flex flex-col sm:flex-row items-center gap-[.5rem] '>
            {
              totals.map((total: any) => {
                return <div key={total.id} className='total-play-card'>
                  <h1 className='text-[36px]'>{total.value}</h1>
                  <span className='text-[15px]'>{total.title}</span>
                </div>
              })
            }
          </div>
        </div>
      </div>

      <div className="w-full  overflow-x-auto overflow-y-hidden  my-[2rem] h-[23px] flex items-center gap-[2rem]  bg-white">
        <div className='min-w-[8rem]'>Best Winners</div>
        <div className="flex flex-1  items-center justify-between">
          {
            winners.map((winner: string) => {
              return <div key={winner} className={`border-r-2 flex items-center h-[17px]  border-gray-600 px-[1rem]`}>
                {winner}
              </div>
            })
          }
        </div>
      </div>

      <div className="w-full p-[1rem]">
        <div className="container px-[8rem]">
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


    </div>


  )
}

export default Home