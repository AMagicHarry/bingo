interface BingoCardProps {
    price: string,
    created: string,
    gameDay: string,
    time: string,
    url: string
}

const BingoCard = ({ price, created, gameDay, time, url }: BingoCardProps) => {
    return (
        <>
            <div className='relative mt-2'>
                <div>
                    <img src={url} className='w-[14rem] h-[10rem] rounded-xl border-[#DE9C4D] border-2 mx-auto'></img>
                </div>

                <div className='-mt-[6rem] px-4 rounded-xl bg-white pt-[8rem] pb-6 border-[#DE9C4D] border-2 w-[16rem] text-[1.2rem]'>
                    <div className='flex justify-between'>
                        <p>Prize:</p>
                        <p>{price}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Created:</p>
                        <p>{created}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Game day:</p>
                        <p>{gameDay}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Time:</p>
                        <p>{time}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BingoCard