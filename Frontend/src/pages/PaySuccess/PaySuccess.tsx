import { Link } from "react-router-dom"
import check from "../../assets/check.png"

const PaySuccess = () => {

    return (
        <div className='w-full min-h-full '>
            <div className="container px-[8rem] py-[2rem] w-full justify-center flex start ">
                <div className="w-full bg-white  rounded-[24px] max-w-[757px] xl:relative p-[1rem] pt-[2rem] pb-[4rem]">
                    <div className='text-center'>
                        <div>
                            <div className='w-[20rem] mx-auto'>
                                <img className='w-full h-full' src={check} alt="" />
                            </div>
                        </div>
                        <p className='text-[2rem] font-bold'>$80 USD</p>
                        <p className='text-[2rem] mt-8 text-[#00D083]'>Transaction Successful</p>
                        <p className='text-[1rem] mt-4'>Thank you for supporting our club's fundraising efforts!</p>
                        <p className='text-[1rem] mt-4 mb-4'>Please check your email for your tickets/grid</p>
                        <Link to="/myticket" className="text-[1.4rem] bg-[#00d083] p-2 px-8 rounded-lg text-white hover:bg-[#46e4aa]">My Tickets</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default PaySuccess