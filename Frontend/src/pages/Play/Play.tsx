import { Link } from 'react-router-dom';
import './Play.css';
import Left from "../../assets/Vector left.png"
import Right from "../../assets/Vector right.png"
import { useState } from 'react';

const Play = () => {
  const [ticketposition, setTicketPosition] = useState<number>(0);

  const rightClick = () => {
    if (ticketposition < 1)
      setTicketPosition(ticketposition + 1);
  }

  const leftClick = () => {
    if (ticketposition > 0)
      setTicketPosition(ticketposition - 1);
  }

  return (
    <div className="w-full min-h-full">
      <div className="container-wrapper flex items-start justify-center p-[1rem]">
        <div className="play-card">

          <div className='text-[15px] sm:text-[20px] text-center mt-10'>
            Choose your BINGO and the Association you want to support
          </div>

          <div className='flex flex-col w-full sm:flex-row items-center mt-[2rem] gap-[2rem] sm:gap-[1rem] justify-center'>
            <button onClick={leftClick}><img src={Left}></img></button>
            {
              ticketposition == 0 ?
                <div className="ticket-info text-[18px] w-full max-w-[360px] flex flex-col items-center justify-center h-[380px] sm:text-[1.6rem] rounded-[12px] p-[1rem] bg-gradient-to-r from-[#FBB900] to-[#EEB557] via-yellow-600 border-4 border-[#DE9C4D]">
                  <div className='mt-8'>BINGO 1</div>
                  <div className='mt-2'>Association: Tennis club</div>
                  <div className='mt-2'>Number of tickets: 180</div>
                  <div className='mt-2'>Ticket price: 10$</div>
                  <div className='mt-2'>Prizes: 500$</div>
                  <div className='mt-2 mb-8'>Biggest prize: 10000$</div>
                </div> :
                <div className="ticket-info text-[18px] w-full max-w-[360px] flex flex-col items-center justify-center h-[380px] sm:text-[1.6rem] rounded-[12px] p-[1rem] bg-gradient-to-r from-[#FBB900] to-[#EEB557] via-yellow-600 border-4 border-[#DE9C4D]">
                  <div className='mt-8'>BINGO 2</div>
                  <div className='mt-2'>Association: Basketball</div>
                  <div className='mt-2'>Number of tickets: 200</div>
                  <div className='mt-2'>Ticket price: 13$</div>
                  <div className='mt-2'>Prizes: 1000$</div>
                  <div className='mt-2 mb-8'>Biggest prize: 17000$</div>
                </div>
            }
            <button onClick={rightClick}><img src={Right}></img></button>

          </div>
          <div className='text-center flex flex-col gap-[1rem] sm:flex-row items-center justify-center mt-8 mb-6'>
            <Link to="/buyticket" className='bg-gradient-to-r from-[#006A10] to-[#00D01F] via-green-600 text-[1.2rem] text-white rounded-md p-2 mr-2'><span className='py-1 px-[4rem] border-dotted border-2 border-[#DE9C4D] rounded-md'>Play Now</span></Link>
            <Link to="/playerlogin" className='bg-gradient-to-r from-[#f1ee4f] to-[#f5d938] via-yellow-600 text-[1.2rem] text-white rounded-md p-2'><span className='py-1 px-[4rem] border-dotted border-2 border-[#DE9C4D] rounded-md'>My Tickets</span></Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Play;
