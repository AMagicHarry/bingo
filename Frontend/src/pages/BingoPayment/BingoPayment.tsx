import { Link, useNavigate } from "react-router-dom";
import Table from "../../components/PaymentTable/PaymentTable";
import { BiFilterAlt, BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { fetchAssociationPaymentsApi } from "../../service/api/payment";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store/store";
import { PaymentHistory } from "../../types/types";
import Modal from "../../components/Modal/Modal";
import { logout } from "../../app/store/auth/thunk";
import { googleLogout } from "@react-oauth/google";
import { ApiStatus } from "../../types/types";
import { ClipLoader } from "react-spinners";

const BingoPayment = () => {
  const [paymentHistory,setPaymentHistory] = useState<PaymentHistory[]>([])
  const {user,getLogoutStatus} = useAppSelector((state:RootState)=>state.auth)
  const [logoutModal,setLogoutModal] = useState<boolean>(false)

  const fetchPayments = async ()=> {
    const {data} = await fetchAssociationPaymentsApi(user.accesstoken)
    setPaymentHistory(data)
  }

  const dispatch = useAppDispatch()
   
  const navigate = useNavigate()

  useEffect(()=>{
    fetchPayments()
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
          <Table paymentHistory={paymentHistory} setPaymentHistory={setPaymentHistory} >
            <div className=" flex text-base justify-between gap-[1rem] border-b border-gray-400 pb-[1rem] items-center ">
              <h1 className='text-[1.5rem] '>Ticket payment history</h1>
              <div className='flex items-center gap-[1rem]'>
                <div className=' focus-within:ring-2 focus-within:ring-blue-500 flex hover:bg-blue-100 duration-300 cursor-pointer group gap-[.2rem] items-center bg-white px-[1rem] py-[.5rem] rounded-md border-2'>
                  <BiSearchAlt />
                  <input placeholder='Search' type="text" className='flex-1 bg-[inherit] outline-none ' />
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

export default BingoPayment;