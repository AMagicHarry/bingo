import { Link } from "react-router-dom"
import ballTable from "../../assets/ball/bingo full grid.png"
import ball1 from "../../assets/ball/Frame 489.png"
import ball2 from "../../assets/ball/Frame 490.png"
import ball3 from "../../assets/ball/Frame 492.png"
import ball4 from "../../assets/ball/Frame 493.png"

const MyTicket = () => {

    return (
        <div className='w-full min-h-full r mt-16'>
            <div className="container md:px-[8rem]  relative p-[1rem] mt-8">
                <div className="flex flex-col items-center justify-center sm:flex-row">
                    <div className="w-full mt-[2rem] sm:mt-0 max-w-4/12 text-center">
                        <img className="w-full" src={ballTable}></img>
                    </div>
                    <div className="w-full max-w-4/12 text-center mt-8">
                        <p>24/03/2024</p>
                        <p className="text-[2rem]">Basketball Club</p>
                        <div>
                            <img src={ball1} className="w-[15rem] mt-[2rem] mx-auto"></img>
                        </div>
                        <p>10 BALLS LEFT</p>
                    </div>
                    <div className="w-full max-w-4/12">
                        <Link  to="/" className="text-[1.4rem] top-0 left-[50%] -translate-x-[50%] sm:-translate-x-[-50%] sm:top-[2rem]  absolute sm:right-0   text-blue-500">Go Home</Link>
                        <p className="text-[1.5rem] text-center mt-[5rem]">Winners</p>
                        <div className="relative bg-[#271239] text-white p-2 border-2 rounded-xl h-[20rem] border-[#DE9C4D] mt-4">
                            <div className="border-2 rounded-lg p-1 border-[#DE9C4D]">Lot1: Paul P.</div>
                            <div className="border-2 rounded-lg p-1 border-[#DE9C4D] mt-2">Lot2: James G.</div>
                            <div className="border-2 rounded-lg p-1 border-[#DE9C4D] mt-2">Lot3: Jabowski J.</div>
                            <div className="border-2 rounded-lg p-1 border-[#DE9C4D] mt-2">Lot4: ...</div>
                            <div className="absolute bottom-2 ">
                                <div className="border-2 rounded-lg p-2 px-8 bg-[#FBD128] text-black border-black ">Prize 4: Game Tickets</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mt-16 mb-10">
                    <img src={ball1}></img>
                    <img src={ball2}></img>
                    <img src={ball1}></img>
                    <img src={ball3}></img>
                    <img src={ball1}></img>
                    <img src={ball2}></img>
                    <img src={ball1}></img>
                    <img src={ball3}></img>
                    <img src={ball1}></img>
                    <img src={ball2}></img>
                    <img src={ball3}></img>
                    <img src={ball1}></img>
                    <img src={ball3}></img>
                    <img src={ball1}></img>
                    <img src={ball1}></img>
                    <img src={ball3}></img>
                    <img src={ball1}></img>
                    <img src={ball2}></img>
                    <img src={ball1}></img>
                    <img src={ball3}></img>
                    <img src={ball1}></img>
                    <img src={ball1}></img>
                    <img src={ball1}></img>
                    <img src={ball2}></img>
                    <img src={ball1}></img>
                    <img src={ball3}></img>
                    <img src={ball1}></img>
                    <img src={ball2}></img>
                    <img src={ball1}></img>
                    <img src={ball3}></img>
                </div>
            </div>
        </div>
    )
}

export default MyTicket