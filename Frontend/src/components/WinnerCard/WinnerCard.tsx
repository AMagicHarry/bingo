interface BingoCardProps {
    date: string,
    winner: string,
    prize: string
}

const WinnerCard = ({ date, winner, prize }: BingoCardProps) => {
    return (
        <>
            <div className="bg-[#271239] text-center border-2 border-[#DE9C4D] rounded-lg py-4 px-10">
                <p className="text-[1rem] text-white">{date}</p>
                <p className="text-[1.5rem] text-white">{winner}</p>
                <p className="text-[1rem] text-white">Prize won: {prize}</p>
            </div>
        </>
    )
}

export default WinnerCard