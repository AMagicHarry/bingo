import { Link } from "react-router-dom";
import Table from "../../components/BingoHistoryTable/BingoHistoryTable";
import { BiFilterAlt, BiSearchAlt } from "react-icons/bi";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store/store";
import { useAppDispatch } from "../../app/hooks";
import { fetchAssociationBingos } from "../../app/store/bingo/thunk";
import { useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import { addBingo } from "../../app/store/bingo/thunk";
import { resetBingoEror } from "../../app/store/bingo/slice";
import { useState,useRef } from "react";
import { ApiStatus, Bingo } from "../../types/types";
import { ClipLoader } from "react-spinners";
import { formatDate, getTimeFromDate } from "../../utils/functions";
import { logout } from "../../app/store/auth/thunk";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { isBeforeToday,isAfterToday } from "../../utils/functions";


const BingoHistory = () => {
  const { user,getLogoutStatus } = useAppSelector((state: RootState) => state.auth)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { addBingoStatus, associationBingos, addBingoError } = useAppSelector((state: RootState) => state.bingo)
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBingos, setFilteredBingos] = useState(associationBingos);
  const [filtersActive,setFiltersActive] = useState<boolean>(false)
  const [logoutModal,setLogoutModal] = useState<boolean>(false)

  const navigate = useNavigate()

  const filterToggleRef = useRef<HTMLDivElement | null>(null);


  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAssociationBingos(user.accesstoken));
  }, [dispatch, user.accesstoken]);


  
  const filterBingos = (bingos:Bingo[]) => {
    const filteredBingos = bingos.filter(bingo =>
      {
        const lowercasedQuery = searchQuery.toLowerCase();
        const name = bingo.name
        const createdAt = formatDate(bingo.createdAt)
        const createdTime = getTimeFromDate(bingo.createdAt)
        const gameDay = formatDate(bingo.gameDay)
        const gameTime = bingo.time
        const price = bingo.prices.split(',')[0]
        const bingoString = ` ${name} ${createdAt} ${price} ${createdTime} ${gameDay} ${gameTime}`;
        return bingoString.includes(lowercasedQuery);
      })
      setFilteredBingos(filteredBingos);
  }

  useEffect(() => {
    filterBingos(associationBingos)
  }, [searchQuery, associationBingos]);

  useEffect(() => {
    dispatch(fetchAssociationBingos(user.accesstoken))
  }, [])

  const now = new Date();
  const todayDate = now.toISOString().split('T')[0];
  const currentTime = now.toISOString().split('T')[1].substring(0, 5);



  const [formData, setFormData] = useState({
    name: '',
    prices: "",
    numberOfTickets: "",
    ticketPrice: '',
    startDate: todayDate,
    endDate: todayDate,
    gameDay: todayDate,
    time: currentTime
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(resetBingoEror())
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    dispatch(resetBingoEror())
    e.preventDefault()
    const resultAction = await dispatch(addBingo({ bingo: formData, token: user.accesstoken }))
    if (addBingo.fulfilled.match(resultAction)) {
      setIsModalOpen(false)
    }
  };

  const handleOn = () => {
    const filtered = associationBingos.filter(bingo => isBeforeToday(bingo.gameDay));
    filterBingos(filtered); 
  };

  const handleFinished = () => {
    const filtered = associationBingos.filter(bingo => isAfterToday(bingo.gameDay));
    filterBingos(filtered);
  };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterToggleRef.current && !filterToggleRef.current.contains(event.target as Node) && filtersActive) {
        setFiltersActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [filtersActive]);



 
  const handleLogout = async () => {
    dispatch(logout())
    const resultAction = await dispatch(logout());
    if (logout.fulfilled.match(resultAction)) {
        navigate('/login');
    }
    googleLogout()
}

  


  


  return (
    <>

<Modal isOpen={logoutModal} onClose={()=>setLogoutModal(false)}>
        <div className="flex flex-col w-full m-auto h-full max-w-[20rem] rounded-md max-h-[15rem] bg-white items-center justify-center">
             <span>Are you sure you want to exit?</span>
             <button style={{

}} disabled={getLogoutStatus === ApiStatus.loading} onClick={handleLogout} className='p-[.5rem] mt-[2rem] group flex-1 text-center bg-blue-500 rounded-md w-[7rem] max-h-[3rem]  duration-300 hover:bg-blue-100 text-base  '>
    {
        getLogoutStatus === ApiStatus.loading ? <ClipLoader color="white" size={15} /> : <span className='text-white group-hover:text-black'>Yes</span>
    }
</button>
        </div>
    </Modal>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit} className='w-full p-4  min-h-[20rem] flex flex-col gap-4 items-start justify-center max-w-[30rem] rounded-md bg-white'>
          <div className="flex flex-col w-full">
            <label>Name</label>
            <input
              name="name"
              className="w-full rounded-md p-[1rem] border"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Prices</label>
            <input
              name="prices"
              className="w-full rounded-md p-[1rem] border"
              type="text"
              value={formData.prices}
              onChange={handleChange}
            />
            <span className="w-full flex text-left">Seperate prices with ,</span>
          </div>
          <div className="flex flex-col w-full">
            <label>Number of Tickets</label>
            <input
              name="numberOfTickets"
              className="w-full rounded-md p-[1rem] border"
              type="text"
              value={formData.numberOfTickets}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Ticket Price</label>
            <input
              name="ticketPrice"
              className="w-full rounded-md p-[1rem] border"
              value={formData.ticketPrice}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col w-full">
            <label>Start Date</label>
            <input
              name="startDate"
              type='date'
              className="w-full p-[1rem] rounded-md border"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col w-full">
            <label>End Date</label>
            <input
              name="endDate"
              type='date'
              className="w-full p-[1rem] rounded-md border"
              value={formData.endDate}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col w-full">
            <label>Game Day</label>
            <input
              name="gameDay"
              type='date'
              className="w-full p-[1rem] rounded-md border"
              value={formData.gameDay}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Time</label>
            <input
              name="time"
              type='time'
              className="w-full p-[1rem] rounded-md border"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
          <div className="flex w-full text-red-500 items-center justify-center">
            {
              addBingoError && addBingoError
            }
          </div>

          <button disabled={addBingoStatus === ApiStatus.loading} type="submit" className="w-full flex items-center  gap-[.5rem] border-[#6A6A6A] hover:bg-[#1A978A] bg-[#1A976A] duration-300 cursor-pointer text-white rounded-md p-[1rem] flex items-center justify-center">
            <span>
              {
                addBingoStatus === ApiStatus.loading && <ClipLoader size={15} color="white" />
              }
            </span>Create New Bingo
          </button>
        </form>
      </Modal>
      <div className="container px-[8rem] py-[4rem] flex z-50">
        <div className="w-3/12">
          <div className="absolute">
            <Link to={"/"} className="block text-[1.8rem] cursor-pointer hover:font-bold">Home</Link>
            <Link to={"/payment"} className="block text-[1.8rem] mt-4 cursor-pointer hover:font-bold">Payment</Link>
            <Link to={"/bingohistory"} className="block text-[1.8rem] mt-4 cursor-pointer hover:font-bold">Bingo</Link>
            <Link to={"/tickethistory"} className="block text-[1.8rem] mt-4 cursor-pointer hover:font-bold">Statistics</Link>
            <Link to={"/"} className="block text-[1.8rem] mt-10 cursor-pointer hover:text-blue-400 text-blue-600 font-bold">Back</Link>
            <button onClick={()=>setLogoutModal(true)} className="block text-[1.8rem] mt-10 cursor-pointer hover:text-blue-400 text-blue-600 font-bold">Logout</button>
          </div>
        </div>
        <div className="w-9/12">
          <button onClick={() => setIsModalOpen(true)} className="text-[1.5rem] bg-[#1A976A] border-2 border-[#6A6A6A] text-white py-1 px-10 mt-10 mb-4 rounded-lg">Create new Bingo</button>
          <Table bingos={filteredBingos} >
            <div className=" flex text-base justify-between gap-[1rem] pb-[1rem] items-center ">
              <h1 className='text-[2rem] '>Your bingo history</h1>
              <div className='flex items-center gap-[1rem]'>
                <div className=' focus-within:ring-2 focus-within:ring-blue-500 flex hover:bg-blue-100 duration-300 cursor-pointer group gap-[.2rem] items-center bg-white px-[1rem] py-[.5rem] rounded-md border-2'>
                  <BiSearchAlt />
                  <input
                    placeholder='Search'
                    type="text"
                    className='flex-1 bg-[inherit] outline-none'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div ref={filterToggleRef} className="relative">
                  <div onClick={() => setFiltersActive(!filtersActive)} className='flex hover:bg-blue-100 duration-300 cursor-pointer gap-[.2rem] items-center bg-white px-[1rem] py-[.5rem] rounded-md border-2'>
                    <BiFilterAlt />
                    <span>Filters</span>
                  </div>
                  {filtersActive && <div className="absolute flex flex-col border border-gray-300 rounded-md shadow-md bg-white top-[3rem] w-[10rem] ">
                    <span onClick={handleOn} className="p-[.5rem] hover:bg-blue-100 cursor-pointer">Still On</span>
                    <span onClick={handleFinished} className="p-[.5rem] hover:bg-blue-100 cursor-pointer">Finished</span>
                  </div>}
                </div>
              </div>
            </div>
          </Table>
        </div>
      </div>
    </>
  );
};

export default BingoHistory;