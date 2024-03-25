import './Play.css';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useState } from 'react';

const Play = () => {
  const [ticketNumber, setTicketNumber] = useState<number>(1);

  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTicketNumber((prev) => prev + 1);
  };

  const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (ticketNumber === 1) {
      setTicketNumber(1);
    } else {
      setTicketNumber((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full min-h-full">
      <div className="container flex items-start justify-center p-[1rem]">
        <div className="play-card">
          <h1 className='text-[32px] sm:text-[44px] text-center pt-2'>Association: Boxing club</h1>
          <div className='text-[15px] sm:text-[20px] text-center'>
            <p>You are about to purchase your tickets</p>
            <p>Please fill this form</p>
          </div>

          <div className='flex flex-col w-full sm:flex-row items-center mt-[2rem] gap-[2rem] sm:gap-[1rem]'>
            <div className="ticket-info text-[20px] w-full max-w-[448px] flex flex-col items-center justify-center h-[320px] sm:text-[1.8rem] rounded-[12px] p-[1rem] bg-white">
              <div><span>Number of tickets:</span><span>{ticketNumber}</span></div>
              <div><span>Ticket price:</span><span>20</span></div>
              <div><span>Total prizes:</span><span></span>{20*ticketNumber}</div>
              <div><span>Biggest prize:</span><span></span></div>
            </div>

            <form className="ticket-form w-full p-[2rem] flex flex-col gap-[1rem] rounded-[12px] bg-white">
              <input
                className='px-[1rem] focus:ring-2 focus:ring-blue-500 border-[#D0D5DD] rounded-md py-[.5rem] border outline-none'
                placeholder='Name'
                type="text"
              />
              <input
                className='px-[1rem] focus:ring-2 focus:ring-blue-500 border-[#D0D5DD] rounded-md py-[.5rem] border outline-none'
                placeholder='Email'
                type="email"
              />
              <textarea
                className='p-[1rem] focus:ring-2 focus:ring-blue-500 min-h-[94px] border-[#D0D5DD] rounded-md border outline-none'
                placeholder='Comment(OPT)'
              />

              <div className='flex flex-col sm:flex-row gap-[1rem] font-[600] items-center justify-between'>
                <span>Number of tickets</span>
                <span className='flex border w-full max-w-[10rem] px-[1rem] py-[.5rem] rounded-md border-[#D0D5DD] items-center justify-between'>
                  <button onClick={handleDecrement} className='w-[28px] hover:bg-blue-100 cursor-pointer duration-300 bg-[#D9D9D9] h-[28px] rounded-full flex items-center justify-center'>
                    <BsChevronDown className='font-[600] rounded-full' />
                  </button>
                  <span className='flex-1 flex items-center justify-center'>
                    {ticketNumber}
                  </span>
                  <button onClick={handleIncrement} className='w-[28px] hover:bg-blue-100 cursor-pointer duration-300 h-[28px] bg-[#D9D9D9] rounded-full flex items-center justify-center'>
                    <BsChevronUp className='font-[600] rounded-full' />
                  </button>
                </span>
              </div>
              <button className='px-[1rem] rounded-md py-[.8rem] hover:bg-blue-100 cursor-pointer duration-300 bg-[#85E8C3]'>
                Association
              </button>
              <button className='px-[1rem] rounded-md text-white hover:bg-blue-100 cursor-pointer duration-300 py-[.8rem] bg-[#0047FF]'>
                Back
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
