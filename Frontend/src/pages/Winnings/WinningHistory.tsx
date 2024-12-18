import { Link } from "react-router-dom";
import Table from "../../components/WinningHistoryTable/WinningHistoryTable";
import { BiFilterAlt, BiSearchAlt } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store/store";
import { Winner } from "../../types/types";
import { getWinnersApi } from "../../service/api/winner";
import Modal from "../../components/Modal/Modal";
import { ClipLoader } from "react-spinners";
import { googleLogout } from "@react-oauth/google";
import { ApiStatus } from "../../types/types";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { logout } from "../../app/store/auth/thunk";

const WinningHistory = () => {
  const [winningHistory, setWinningHistory] = useState<Winner[]>([]);
  const { user,getLogoutStatus } = useAppSelector((state: RootState) => state.auth);
  const [logoutModal,setLogoutModal] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const fetchWinnings = async () => {
    const { data } = await getWinnersApi(user.accesstoken);
    setWinningHistory(data);
  };

  const navigate = useNavigate()

  
  const handleLogout = async () => {
    dispatch(logout())
    const resultAction = await dispatch(logout());
    if (logout.fulfilled.match(resultAction)) {
        navigate('/login');
    }
    googleLogout()
}


  useEffect(() => {
    fetchWinnings();
  }, []);

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
      <div className="container px-[8rem] py-[4rem] flex z-50">
        <div className="w-3/12">
          <div className="absolute">
            <Link to={"/"} className="block text-[1.8rem] cursor-pointer hover:font-bold">Home</Link>
            <Link to={"/payment"} className="block text-[1.8rem] mt-4 cursor-pointer hover:font-bold">Payment</Link>
            <Link to={"/bingohistory"} className="block text-[1.8rem] mt-4 cursor-pointer hover:font-bold">Bingo</Link>
            <Link to={"/winninghistory"} className="block text-[1.8rem] mt-4 cursor-pointer hover:font-bold">Winnings</Link>
            <Link to={"/"} className="block text-[1.8rem] mt-10 cursor-pointer hover:text-blue-400 text-blue-600 font-bold">Back</Link>
            <button onClick={()=>setLogoutModal(true)} className="block text-[1.8rem] mt-10 cursor-pointer hover:text-blue-400 text-blue-600 font-bold">Logout</button>
          </div>
        </div>
        <div className="w-9/12">
        <Link to='/tickethistory' className="text-[1.5rem] bg-[#1A976A] border-2 border-[#6A6A6A] text-white py-1 px-10 mt-10 mb-4 mr-2 rounded-lg">Tickets</Link>
          <Link to='/winninghistory' className="text-[1.5rem] bg-[#1A976A] border-2 border-[#6A6A6A] text-white py-1 px-10 mt-10 mb-4 rounded-lg">Winnings</Link>
          <Table winningHistory={winningHistory} setWinningHistory={setWinningHistory}>
            <div className="flex text-base justify-between gap-[1rem] pb-[1rem] items-center">
              <h1 className='text-[2rem] mt-[2rem]'>Your Winning History</h1>
              <div className='flex items-center gap-[1rem]'>
                <div className='focus-within:ring-2 focus-within:ring-blue-500 flex hover:bg-blue-100 duration-300 cursor-pointer group gap-[.2rem] items-center bg-white px-[1rem] py-[.5rem] rounded-md border-2'>
                  <BiSearchAlt />
                  <input placeholder='Search' type="text" className='flex-1 bg-[inherit] outline-none' />
                </div>
                <div className='flex hover:bg-blue-100 duration-300 cursor-pointer gap-[.2rem] items-center bg-white px-[1rem] py-[.5rem] rounded-md border-2'>
                  <BiFilterAlt />
                  <span>Filters</span>
                </div>
              </div>
            </div>
          </Table>
        </div>
      </div>
    </>
  );
};

export default WinningHistory;
