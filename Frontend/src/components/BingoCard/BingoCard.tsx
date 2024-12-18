interface BingoCardProps {
    price: string,
    created: string,
    gameDay: string,
    time: string,
}

const BingoCard = ({ price, created, gameDay, time}: BingoCardProps) => {
    return (
        <>
            <div className=' group mt-2'>
                <div className="w-[12rem] font-[600] text-lg group-hover:bg-gray-200 flex items-center justify-center text-center text-gray-600 h-[14rem] bg-gray-100 z-[2] rounded-xl  border-2 mx-auto">
                {price.split(',')[0]}
                </div>

                <div className='-mt-[6rem] overflow-hidden px-4 rounded-xl bg-white pt-[8rem] pb-6 border-[#DE9C4D] border-2 w-[16rem] text-[1.2rem]'>
                    <div className='flex justify-between  gap-[1rem] overflow-hidden'>
                        <p>Prize:</p>
                        <p className="truncate ">{price.split(',')[0]}</p>
                    </div>
                    <div className='flex gap-[1rem] justify-between'>
                        <p>Created:</p>
                        <p className="truncate ">{created}</p>
                    </div>
                    <div className='flex gap-[1rem] justify-between'>
                        <p>Game day:</p>
                        <p className="truncate ">{gameDay}</p>
                    </div>
                    <div className='flex gap-[1rem] justify-between'>
                        <p>Time:</p>
                        <p className="truncate ">{time}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BingoCard