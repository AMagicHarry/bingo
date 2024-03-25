import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Selected from './pages/Selected/Selected';
import './App.css';
import AllBingos from './pages/AllBingos/AllBingos';
import Play from './pages/Play/Play';
import Pay from './pages/Pay/Pay';
import PaySuccess from './pages/PaySuccess/PaySuccess';
import NotFound from './pages/NotFound/NotFound'; // Assume you have this component

const App = () => {
  const Layout1 = () => {
    return (
      <div className='w-full relative bg-blue-200 h-full overflow-y-auto'>
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
        </Route>
      </Routes>
    </div>
  );
};

export default App;
