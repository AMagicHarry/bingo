import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Selected from './pages/Selected/Selected';
import AllBingos from './pages/AllBingos/AllBingos';
import Pay from './pages/Pay/Pay';
import PaySuccess from './pages/PaySuccess/PaySuccess';
import NotFound from './pages/NotFound/NotFound'; // Assume you have this component
import Association from './pages/Association/Association'
import Register from './pages/Register/Register'
import Login from './pages/login/login'
import BingoHome from './pages/BingoHome/BingoHome'
import BingoPayment from './pages/BingoPayment/BingoPayment'
import BingoHistory from './pages/BingoHistory/BingoHistory';
import TicketHistory from './pages/TicketHistory/TicketHistory';
import BuyTicket from './pages/BuyTicket/BuyTicket';
import Play from './pages/Play/Play';
import MyTicket from './pages/MyTicket/MyTicket';
import PlayTicket from './pages/PlayTicket/PlayTicket';
import {FaBars} from 'react-icons/fa'
import PlayerLogin from './pages/PlayerLogin/PlayerLogin';

import bgImage from './assets/background_ball.png'
import ball from './assets/ball.png'
import background from "./assets/background.png"
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './App.css';



const App = () => {
   const [active,setActive] = useState<boolean>(false)

   const handleActive = () => setActive(!active)

  const Layout1 = () => {
    const location = useLocation();

    return (
      <div style={{ background: `url(${background})` }} className='overflow-y-auto h-full'>
        
        {
          (location.pathname === '/association') || (location.pathname === '/register') || (location.pathname === '/login') ?
            <div className='absolute z-50 hidden lg:block bg-transparent flex-1 text-center justify-center h-full w-5/12'>
              <img src={bgImage} className='object-cover' alt="Bingo" style={{ height: "100%" }} />
            </div> : <div></div>
        }
        <div className='sticky container-wrapper z-[1000] pt-[2rem] px-[1rem]  top-0 left-0 w-full py-[1rem]'>
          <NavBar />
        </div>
        <Outlet />
      </div>
    );
  };

  const Layout2 = () => {
    return (
      <div  className='overflow-y-auto h-full'>
        <div className='absolute text-center justify-center h-full w-full -z-50 opacity-25'>
          <img src={ball} alt="Bingo" style={{ width: "70%", height: "100%" }} />
        </div>
        <div className="w-full sticky top-0  md:hidden relative">
          <div onClick={handleActive} className='w-full h-[4rem] flex justify-between items-center bg-gray-800 px-[1rem]'>
            <FaBars className='text-white text-[1.3rem]'/>
            <Link onClick={handleActive} to={"/"} className="block text-[1.8rem]  cursor-pointer hover:text-blue-400 text-blue-600 font-bold">Back</Link>
          </div>
          <div className={` ${active?"left-[100%]":"left-0"} text-white bg-gray-400 w-full p-[1rem] duration-300 absolute `}>
            <Link onClick={handleActive} to={"/bingohome"} className="block text-[1.8rem] cursor-pointer hover:font-bold">Home</Link>
            <Link onClick={handleActive} to={"/bingopayment"} className="block text-[1.8rem] mt-4 cursor-pointer hover:font-bold">Payment</Link>
            <Link onClick={handleActive} to={"/bingohistory"} className="block text-[1.8rem] mt-4 cursor-pointer hover:font-bold">Bingo</Link>
            <Link onClick={handleActive} to={"/tickethistory"} className="block text-[1.8rem] mt-4 cursor-pointer hover:font-bold">Statistics</Link>
            
          </div>
        </div>

        <Outlet />
      </div>
    );
  };

  return (
    <div className='w-full h-screen overflow-hidden font-serif'>
      <Routes>
        <Route path='/' element={<Layout1 />}>
          <Route index element={<Home />} />
          <Route path="selected" element={<Selected />} />
          <Route path="all-bingos" element={<AllBingos />} />
          <Route path="buyticket" element={<BuyTicket />} />
          <Route path="pay" element={<Pay />} />
          <Route path="pay-success" element={<PaySuccess />} />
          <Route path="play" element={<Play />} />
          <Route path="*" element={<NotFound />} />
          <Route path="association" element={<Association />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="myticket" element={<MyTicket />} />
          <Route path="playerlogin" element={<PlayerLogin />} />

        </Route>
        <Route element={<Layout2 />}>
          <Route path='bingohome' element={<BingoHome />}></Route>
          <Route path='bingopayment' element={<BingoPayment />}></Route>
          <Route path='bingohistory' element={<BingoHistory />}></Route>
          <Route path='tickethistory' element={<TicketHistory />}></Route>
          <Route path="playticket" element={<PlayTicket />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
