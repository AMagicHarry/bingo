import { Link } from "react-router-dom";
import Table from "../../components/TicketHistoryTable/TicketHistoryTable";
import { BiFilterAlt, BiSearchAlt } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import { fetchAssociationTicketsApi } from "../../service/api/ticket";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store/store";
import { TicketHistory } from "../../types/types";
import { getTimeFromDate,formatDate } from "../../utils/functions";
import { logout } from "../../app/store/auth/thunk";
import { useNavigate } from "react-router-dom";
import { ApiStatus } from "../../types/types";
import { googleLogout } from "@react-oauth/google";
import Modal from "../../components/Modal/Modal";
import { ClipLoader } from "react-spinners";

const TicketHisto = () => {
  const [tickethistory, setTicketHistory] = useState<TicketHistory[]>([]);
  const { user,getLogoutStatus } = useAppSelector((state: RootState) => state.auth);
  const [allTickets, setAllTickets] = useState<TicketHistory[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [filtersActive, setFiltersActive] = useState(false);
  const filterToggleRef = useRef<HTMLDivElement | null>(null);
  const [loading,setLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const dispatch = useAppDispatch()


  const [logoutModal,setLogoutModal] = useState<boolean>(false)


  const fetchTickets = async () => {
    setLoading(true)
    const { data } = await fetchAssociationTicketsApi(user.accesstoken);
    setAllTickets(data); 
    filterTickets(data); 
    setLoading(false)
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  useEffect(() => {
    filterTickets(allTickets);
  }, [searchQuery]);

  const handleSalesOpen = () => {
    const filtered = allTickets.filter(ticket => ticket.totalSold < ticket.totalTicket);
    filterTickets(filtered); 
  };

  const handleSalesClosed = () => {
    const filtered = allTickets.filter(ticket => ticket.totalSold === ticket.totalTicket);
    filterTickets(filtered);
  };

  const filterTickets = (tickets: TicketHistory[]) => {
    const filteredTickets = tickets.filter(ticket => {
      const ticketDataString = ` ${formatDate(ticket.createdAt)} ${getTimeFromDate(ticket.createdAt)}  ${ticket.totalTicket} ${ticket.ticketPrice} ${ticket.totalSold} ${ticket.revenue} ${ticket.availableTickets}`.toLowerCase();
      return ticketDataString.includes(searchQuery.toLowerCase());
    });
    setTicketHistory(filteredTickets);
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
          <Link to='/tickethistory' className="text-[1.5rem] bg-[#1A976A] border-2 border-[#6A6A6A] text-white py-1 px-10 mt-10 mb-4 mr-2 rounded-lg">Tickets</Link>
          <Link to='/winninghistory' className="text-[1.5rem] bg-[#1A976A] border-2 border-[#6A6A6A] text-white py-1 px-10 mt-10 mb-4 rounded-lg">Winnings</Link>
          {
            !loading ?
            <Table ticketHistory={tickethistory} setTicketHistory={setTicketHistory}>
            <div className="flex text-base mt-[2rem] justify-between gap-[1rem] pb-[1rem] items-center ">
              <h1 className='text-[2rem]'>Your Ticket history</h1>

              <div className='flex items-center gap-[1rem]'>
                <div className='focus-within:ring-2 focus-within:ring-blue-500 flex hover:bg-blue-100 duration-300 cursor-pointer group gap-[.2rem] items-center bg-white px-[1rem] py-[.5rem] rounded-md border-2'>
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
                    <span onClick={handleSalesOpen} className="p-[.5rem] hover:bg-blue-100 cursor-pointer">Sales Open</span>
                    <span onClick={handleSalesClosed} className="p-[.5rem] hover:bg-blue-100 cursor-pointer">Sales Closed</span>
                  </div>}
                </div>
              </div>
            </div>
          </Table>: <div className="block w-full mt-[2rem] flex items-center justify-center">
          <ClipLoader color="black" size={15} />
          </div>
          }
        </div>
      </div>
    </>
  );
};

export default TicketHisto;
