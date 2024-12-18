import { Link, useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { RootState } from '../../app/store/store'
import { logout } from '../../app/store/auth/thunk'
import { ClipLoader } from 'react-spinners'
import { ApiStatus } from '../../types/types'
import { googleLogout } from '@react-oauth/google';




const NavBar = () => {
    const [active, setActive] = useState<boolean>(false)
    const { getLogoutStatus } = useAppSelector((state: RootState) => state.auth)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleLogout = async () => {
        dispatch(logout())
        const resultAction = await dispatch(logout());
        if (logout.fulfilled.match(resultAction)) {
            navigate('/login');
        }
        googleLogout()
    }

    return (
        <div className='flex justify-between items-center gap-[1rem] h-[52px] py-[.5rem] px-[1rem] bg-white w-full   rounded-full '>
            <Link className='p-[.5rem] duration-300 hover:bg-blue-100 px-[1rem] rounded-md text-base ' to='/'>Home</Link>
            <div className='sm:hidden relative'>
                <FaBars onClick={() => setActive(!active)} />
                {active && <div className='flex flex-col absolute top-[2.5rem] w-[15rem] left-[-13rem] z-[600] bg-white border rounded-md oveflow-hidden gap-[.4rem]'>
                    <Link to="/faqs" className='p-[.5rem] flex-1 duration-300 hover:bg-blue-100 px-[1rem] text-base ' >
                        FAQS
                    </Link>
                    <Link to="/play" className='p-[.5rem] flex-1 duration-300 hover:bg-blue-100 px-[1rem]  text-base bg-[#FFD700]' >
                        Play
                    </Link>
                    <Link to="association" className='p-[.5rem] flex-1  duration-300 hover:bg-blue-100  text-base  bg-[#85E8C3]'>
                        Association
                    </Link>
                    <button onClick={handleLogout} className='p-[.5rem] flex-1 text-center   duration-300 hover:bg-blue-100 text-base  '>
                        Logout
                    </button>

                </div>}
            </div>


            <div className=' hidden  sm:flex gap-[.4rem] items-center'>
                <Link to="/faqs" className='p-[.5rem] duration-300 hover:bg-blue-100 px-[1rem] rounded-md text-base ' >
                    FAQS
                </Link>
                <Link to="/play" className='p-[.5rem] duration-300 hover:bg-blue-100 px-[1rem] rounded-md text-base bg-[#FFD700]' >
                    Play
                </Link>
                <Link to="association" className='p-[.5rem] duration-300 hover:bg-blue-100 rounded-md text-base  bg-[#85E8C3]'>
                    Association
                </Link>

                <button style={{

                }} disabled={getLogoutStatus === ApiStatus.loading} onClick={handleLogout} className='p-[.5rem] group flex-1 text-center bg-blue-500 rounded-md w-[7rem]  duration-300 hover:bg-blue-100 text-base  '>
                    {
                        getLogoutStatus === ApiStatus.loading ? <ClipLoader color="white" size={15} /> : <span className='text-white group-hover:text-black'>Logout</span>
                    }
                </button>
            </div>


        </div>
    )
}

export default NavBar