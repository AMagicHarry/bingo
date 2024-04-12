import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AllBingos from './pages/AllBingos/AllBingos';
import Pay from './pages/Pay/Pay';
import PaySuccess from './pages/PaySuccess/PaySuccess';
import NotFound from './pages/NotFound/NotFound'; // Assume you have this component
// import Association from './pages/Association/Association'
// import { RouteChangeListener } from './components/RouteChangeListener/RouteChangeListener';
import Register from './pages/Register/Register'
import Login from './pages/login/login'
import BingoHome from './pages/BingoHome/BingoHome'
import BingoPayment from './pages/BingoPayment/BingoPayment'
import PlayerRecord from './pages/PlayerRecord/PlayerRecord'
import BingoHistory from './pages/BingoHistory/BingoHistory';
import TicketHistory from './pages/TicketHistory/TicketHistory';
import BuyTicket from './pages/BuyTicket/BuyTicket';
import Play from './pages/Play/Play';
import MyTicket from './pages/MyTicket/MyTicket';
import PlayTicket from './pages/PlayTicket/PlayTicket';
import PlayerLogin from './pages/PlayerLogin/PlayerLogin';
import Tickets from './pages/Tickets/Tickets';
import bgImage from './assets/background_ball.png'
import ball from './assets/ball.png'
import background from "./assets/background.png"
import { useAppDispatch } from './app/hooks';
import { refresh } from './app/store/auth/thunk';
import { PrivateRoute } from './Routes/PrivateRoute/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute/PublicRoute';
import { useAppSelector } from './app/hooks';
import './App.css';
import { useEffect } from 'react';
import { RootState } from './app/store/store';
import { User } from './types/types';
import PopularAssociation from './pages/PopularAssociation/PopularAssociation';
import WinningHistory from './pages/Winnings/WinningHistory';


const App = () => {
  const dispatch = useAppDispatch()
  
  const {user}:{user:User} = useAppSelector((state:RootState)=>state.auth)

  console.log(user)

  // const role:string = 'player'
  

  useEffect(() => {
    dispatch(refresh())
  }, [])

  const Layout1 = () => {
    const location = useLocation();

    return (
      <div className='overflow-y-auto h-full '>
        <div className='absolute text-center justify-center h-full w-full -z-50'>
          <img src={background} alt="Bingo" style={{ width: "100%", height: "100%" }} />
        </div>
        {
           (location.pathname === '/register') || (location.pathname === '/login') ?
            <div className='absolute z-50 bg-transparent flex-1 text-center justify-center h-full w-5/12'>
              <img src={bgImage} alt="Bingo" style={{ height: "100%" }} />
            </div> : <div></div>
        }
        <div className='sticky container z-[1000] pt-[2rem] px-[2rem] sm:px-[2rem] md:px-[8rem] top-0 left-0 w-full py-[1rem]'>
          <NavBar />
        </div>
        <Outlet />
      </div>
    );
  };

  

  const Layout2 = () => {
    return (
      <div className='overflow-y-auto h-full'>
        <div className='absolute text-center justify-center h-full w-full -z-50 opacity-25'>
          <img src={ball} alt="Bingo" style={{ width: "70%", height: "100%" }} />
        </div>

        <Outlet />
      </div>
    );
  };

  return (
    <div className='w-full h-screen overflow-hidden font-serif'>
      <Routes>
        <Route path="/register" element={<PublicRoute  element={<Register />} />} />
        <Route path="/playerlogin" element={<PublicRoute  element={<PlayerLogin />} />} />
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        
        {
          user.role === 'association' ?
          <Route path='/' element={<PrivateRoute  element={<Layout2 />} />} >
          <Route index element={<BingoHome />}></Route>
          <Route path='payment' element={<BingoPayment />}></Route>
          <Route path='record' element={<PlayerRecord />}></Route>
          <Route path='bingohistory' element={<BingoHistory />}></Route>
          <Route path='tickethistory' element={<TicketHistory />}></Route>
          <Route path='winninghistory' element={<WinningHistory />}></Route>
          <Route path="playticket" element={<PlayTicket />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="*" element={<NotFound />} />
        </Route> : <Route path='/' element={<PrivateRoute element={<Layout1 />} />}>
          <Route index element={<Home/>}/>
          <Route path="all-bingos" element={<AllBingos />} />
          <Route path="buyticket" element={<BuyTicket />} />
          <Route path="pay" element={<Pay />} />
          <Route path="pay-success" element={<PaySuccess />} />
          <Route path="play" element={<Play />} />
          <Route path="association" element={<PopularAssociation />} />
          <Route path="myticket" element={<MyTicket />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        }
      </Routes>
    </div>
  );
};

export default App;
