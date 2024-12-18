import { Link } from "react-router-dom";
import Timer from "../../components/Timer/Timer"
import BingoCard from "../../components/BingoCard/BingoCard"
import WinnerCard from "../../components/WinnerCard/WinnerCard"
import Modal from "../../components/Modal/Modal";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store/store";
import { useAppDispatch } from "../../app/hooks";
import { addBingo } from "../../app/store/bingo/thunk";
import { ApiStatus } from "../../types/types";
import { ClipLoader } from "react-spinners";
import { getWinnersApi } from "../../service/api/winner";
import { fetchAssociationBingos } from "../../app/store/bingo/thunk";
import { resetBingoEror } from "../../app/store/bingo/slice";
import { Bingo } from "../../types/types";
import { formatDate } from "../../utils/functions";
import { logout } from "../../app/store/auth/thunk";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";


interface WinnerData {
  _id:string,
  data:string;
  winner:string;
  prize:string
}

interface FormData {
  name: string;
  prices:string;
  ticketPrice: string;
  numberOfTickets:string;
  startDate: string;
  endDate: string;
  gameDay: string;
  time:string;
}

const BingoHome = () => {
  const [isModalOpen,setIsModalOpen] = useState<boolean>(false)
  const {user,getLogoutStatus} = useAppSelector((state:RootState)=>state.auth)
  const {addBingoStatus,associationBingos,addBingoError} = useAppSelector((state:RootState)=>state.bingo)
  const [winners,setWinners] = useState<WinnerData[]>([])

  const [logoutModal,setLogoutModal] = useState<boolean>(false)

  const now = new Date();
  const todayDate = now.toISOString().split('T')[0]; 
  const currentTime = now.toISOString().split('T')[1].substring(0, 5);

  const dispatch = useAppDispatch()

  const navigate= useNavigate()


  const [formData, setFormData] = useState<FormData>({
    name: '',
    prices:"",
    numberOfTickets:"",
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


  const handleSubmit = async(e: React.FormEvent) => {
    dispatch(resetBingoEror())
    e.preventDefault()
    const resultAction = await dispatch(addBingo({bingo:formData,token:user.accesstoken}))
    if (addBingo.fulfilled.match(resultAction)) {
       setIsModalOpen(false)
       console.log(formData)
    }
  };

  useEffect(()=>{
    dispatch(fetchAssociationBingos(user.accesstoken))
  },[])


  const fetchWinners = async() => {
      const {data} = await getWinnersApi(user.accesstoken)
      setWinners(data)
  }

  useEffect(()=>{
    fetchWinners()
  },[])

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
            addBingoStatus === ApiStatus.loading && <ClipLoader size={15} color="white"/>
          }
        </span>Create New Bingo
      </button>
    </form>
        </Modal>

      <div className="container px-[8rem] py-[4rem] flex z-50">
        <div className="w-4/12">
          <div className="absolute">
            <Link to={"/"} className="block text-[1.8rem] cursor-pointer hover:font-bold">Home</Link>
            <Link to={"/payment"} className="block text-[1.8rem] mt-4 cursor-pointer hover:font-bold">Payment</Link>
            <Link to={"/bingohistory"} className="block text-[1.8rem] mt-4 cursor-pointer hover:font-bold">Bingo</Link>
            <Link to={"/tickethistory"} className="block text-[1.8rem] mt-4 cursor-pointer hover:font-bold">Statistics</Link>
            <Link to={"/"} className="block text-[1.8rem] mt-10 cursor-pointer hover:text-blue-400 text-blue-600 font-bold">Back</Link>
            <button onClick={()=>setLogoutModal(true)} className="block text-[1.8rem] mt-10 cursor-pointer hover:text-blue-400 text-blue-600 font-bold">Logout</button>
          </div>
        </div>
        <div className="w-8/12">
          <div className="flex">
            <div className="w-7/12">
              <p className="text-[2rem] font-bold">{user.name}</p>
              <p className="text-[1.5rem] mt-4">Lorem ipsum dolor sit amet consectetur. At risus</p>
            </div>
            <div className="w-5/12">
              <Timer></Timer>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-7/12">
              <div className="text-[1.5rem] rounded-lg border-2 border-[#0047FF] py-2 w-60 text-center">Verified</div>
            </div>
            <div className="w-5/12">
              <button onClick={()=>setIsModalOpen(true)} className="text-[1.5rem] rounded-lg border-2 border-[#6A6A6A] bg-[#1A976A] py-2 text-white text-center w-full">Create new Bingo</button>
            </div>
          </div>
          <hr className="h-[0.1rem] bg-slate-800 my-10" />
          <div>
            <p className="text-[1.8rem] font-bold">Recent Bingo's</p>
            <div className="flex  flex-wrap gap-[1rem] ">
              {
                associationBingos.map((bingo:Bingo ) => {
                   const createdAt = formatDate(bingo.createdAt)
                   const bingoDay = formatDate(bingo.gameDay)
                  return (
                    <BingoCard key={bingo._id} price={bingo.prices} created={createdAt} gameDay={bingoDay} time={bingo.time}></BingoCard>
                  )
                })
              }
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[1.8rem] font-bold">Recent Winners</p>
            <div className="flex gap-[1rem] justify-between">
              {
                winners.map((index: any) => {
                  return (
                    <WinnerCard key={index.id} prize={index.prize} date={index.date} winner={index.winner}></WinnerCard>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BingoHome;
