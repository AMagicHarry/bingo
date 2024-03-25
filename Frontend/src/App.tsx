import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Selected from './pages/Selected/Selected';
import AllBingos from './pages/AllBingos/AllBingos';
import Play from './pages/Play/Play';
import Pay from './pages/Pay/Pay';
import PaySuccess from './pages/PaySuccess/PaySuccess';
import NotFound from './pages/NotFound/NotFound'; // Assume you have this component
import Association from './pages/Association/Association'
import Register from './pages/Register/Register'
import Login from './pages/login/login'
import BingoHome from './pages/BingoHome/BingoHome'

import bgImage from './assets/background_ball.png'

import './App.css';

const App = () => {
  const Layout1 = () => {
    const location = useLocation();

    return (
      <div className="w-full relative bg-blue-200 h-full overflow-y-auto">
        {
          (location.pathname === '/association') || (location.pathname === '/register') || (location.pathname === '/login') ?
            <div className='absolute z-50 bg-transparent flex-1 text-center justify-center h-full w-5/12'>
              <img src={bgImage} alt="Bingo" style={{ height: "100%" }} />
            </div> : <div></div>
        }
        <div className='sticky container z-[1000] pt-[2rem] px-[8rem] top-0 left-0 w-full py-[1rem]'>
          <NavBar />
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
          <Route path="play" element={<Play />} />
          <Route path="pay" element={<Pay />} />
          <Route path="pay-success" element={<PaySuccess />} />
          <Route path="*" element={<NotFound />} />
          <Route path="association" element={<Association />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

        </Route>
        <Route path='bingohome' element={<BingoHome />}></Route>
      </Routes>
    </div>
  );
};

export default App;
