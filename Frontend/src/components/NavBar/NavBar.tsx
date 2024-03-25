import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center gap-[1rem] h-[52px] py-[.5rem] px-[1rem] bg-white w-full   rounded-full overflow-x-auto overflow-y-hidden'>
            <Link className='p-[.5rem] duration-300 hover:bg-blue-100 px-[1rem] rounded-md text-base ' to='/'>Home</Link>
            <div className='flex gap-[.4rem] items-center'>
                <Link to="/faqs" className='p-[.5rem] duration-300 hover:bg-blue-100 px-[1rem] rounded-md text-base ' >
                    FAQS
                </Link>
                <Link to="/play" className='p-[.5rem] duration-300 hover:bg-blue-100 px-[1rem] rounded-md text-base bg-[#FFD700]' >
                    Play
                </Link>
                <Link to="association" className='p-[.5rem] duration-300 hover:bg-blue-100 rounded-md text-base  bg-[#85E8C3]'>
                    Association
                </Link>
            </div>


        </div>
    )
}

export default NavBar