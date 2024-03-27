import { Link } from 'react-router-dom'

const Pay = () => {

    return (
        <div className='w-full min-h-full text-center '>
            <div className="container md:px-[8rem] py-[2rem] w-full justify-center flex flex-wrap">
                <p className='w-full text-[2rem] mt-8'>Please enter your name and email to access your ticket</p>
                <div className="w-full bg-white  rounded-[24px] max-w-[757px] xl:relative p-[1rem] sm:p-[3rem] mt-10">
                    <p className='text-[1.5rem]'>Enter your name and email</p>
                    <form className="w-full p-[2rem] flex flex-col gap-[1rem]">
                        <input
                            className='px-[1rem] focus:ring-2 focus:ring-blue-500 border-[#D0D5DD] rounded-md py-[.5rem] border outline-none'
                            placeholder='Name'
                            type="text"
                        />
                        <input
                            className='px-[1rem] focus:ring-2 focus:ring-blue-500 border-[#D0D5DD] rounded-md py-[.5rem] border outline-none'
                            placeholder='Email'
                            type="email"
                        />

                        <Link to="/myticket" className='px-[1rem] rounded-md text-white hover:bg-blue-600 cursor-pointer duration-300 py-[.8rem] bg-[#0047FF]'>
                            Continue
                        </Link>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Pay