const Timer = () => {
    return (
        <div className='text-center'>
            <p className='text-[#147A55] text-[1.2rem]'>YOUR NEXT DRAW BEGINS IN</p>
            <div className='flex justify-between mt-3'>
                <div>
                    <div className='p-2 text-[3rem] text-white rounded-lg h-[5rem] w-[5rem] bg-[#1BAA76] content-center'>
                        0
                    </div>
                    <p className='text-[#147A55] text-[0.8rem] mt-1'>DAYS</p>
                </div>
                <div>
                    <div className='p-2 text-[3rem] text-white rounded-lg h-[5rem] w-[5rem] bg-[#1BAA76] content-center'>
                        0
                    </div>
                    <p className='text-[#147A55] text-[0.8rem] mt-1'>HOURS</p>
                </div>
                <div>
                    <div className='p-2 text-[3rem] text-white rounded-lg h-[5rem] w-[5rem] bg-[#1BAA76] content-center'>
                        30
                    </div>
                    <p className='text-[#147A55] text-[0.8rem] mt-1'>MINUTES</p>
                </div>
                <div>
                    <div className='p-2 text-[3rem] text-white rounded-lg h-[5rem] w-[5rem] bg-[#1BAA76] content-center'>
                        39
                    </div>
                    <p className='text-[#147A55] text-[0.8rem] mt-1'>SECONDS</p>
                </div>
            </div>

        </div>
    )
}

export default Timer