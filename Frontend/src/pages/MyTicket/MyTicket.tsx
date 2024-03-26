import { Link } from "react-router-dom"
import ticket1 from "../../assets/tickets/Property 1=Default.png"
import ticket2 from "../../assets/tickets/Property 1=Variant2.png"
import ticket3 from "../../assets/tickets/Property 1=Variant3.png"
import ticket4 from "../../assets/tickets/Property 1=Variant4.png"
import ticket5 from "../../assets/tickets/Property 1=Variant5.png"
import ticket6 from "../../assets/tickets/Property 1=blank.png"

const MyTicket = () => {

    return (
        <div className='w-full min-h-full '>
            <div className="container md:px-[8rem]  p-[1rem] mt-8">
                <p className='text-[2rem]'>Your Tickets</p>
                <div className='flex flex-col sm:flex-row  items-center justify-center gap-[1rem] justify-between mt-8'>
                <Link to="/playticket"><img src={ticket1} className="cursor-pointer"></img></Link>
                    <Link to="/playticket"><img src={ticket2} className="cursor-pointer"></img></Link>
                    <Link to="/playticket"><img src={ticket3} className="cursor-pointer"></img></Link>
                    <Link to="/buyticket"><img src={ticket6} className="cursor-pointer"></img></Link>
                </div>
            </div>
        </div>
    )
}

export default MyTicket