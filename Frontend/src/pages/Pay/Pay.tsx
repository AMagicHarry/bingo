import Visa from '../../assets/visa.svg'
import MasterCard from '../../assets/master-card.svg'
import Gb from '../../assets/gb.svg'
import Gpay from '../../assets/gpay.svg'
import Stripe from '../../assets/logos_stripe.svg'
import { BsFillLockFill } from "react-icons/bs";
import { Link } from 'react-router-dom'

const Pay = () => {

    return (
        <div className='w-full min-h-full '>
            <div className="container px-[8rem] py-[2rem] w-full justify-center flex start ">
                <div className="w-full bg-white  rounded-[24px] max-w-[757px] xl:relative p-[1rem] sm:p-[3rem] xl:pr-[10rem]">

                    <div className="flex-1  flex flex-col gap-[1rem] text-white p-[2rem] bg-[#0047FF] rounded-[24px] xl:absolute mb-[3rem] xl:mb:0 right-[-34%] xl:max-w-[375px]">
                        <div className='flex border-b pb-[1rem] border-white flex-col gap-[1rem]'>
                            <h1 className='text-[20px] font-[500] text-center'>Payment Details</h1>

                            <h1 className='text-[20px] font-[500]'>
                                Ticket purchase
                            </h1>
                            <p className='text-[15px]'>
                                Boxing club bingo ticket purchase for entry into the monthly
                                clarity event
                            </p >
                        </div>

                        <div className='flex border-b border-white pb-[1rem] border-dotted flex-col gap-[1rem]'>
                            <div className='flex  flex-col sm:flex-row text-[20px] items-center justify-between'>
                                <span className='font-[500]'> Transaction date:</span>
                                <span>28/04/2024</span>
                            </div>
                            <div className='flex flex-col sm:flex-row text-[20px] items-center justify-between'>
                                <span className='font-[500]'> Transaction time: </span>
                                <span>1500</span>
                            </div>
                            <div className='flex flex-col sm:flex-row text-[20px] items-center justify-between'>
                                <span className='font-[500]'>Number of tickets:</span>
                                <span>4</span>
                            </div>
                        </div>

                        <div className='flex border-b border-white pb-[1rem]  flex-col gap-[1rem]'>
                            <div className=' flex flex-col sm:flex-row text-[20px] items-center justify-between'>
                                <span className='font-[500]'> Subtotal:</span>
                                <span>$80  USD</span>
                            </div>
                            <div className='flex flex-col sm:flex-row text-[20px] items-center justify-between'>
                                <span className='font-[500]'>Discount: </span>
                                <span>00.00</span>
                            </div>
                        </div>

                        <div className='flex  flex-col sm:flex-row text-[20px] items-center gap-[.5rem] justify-end'>
                            <span className='font-[500]'>Total:</span>
                            <span>$80 USD</span>
                        </div>

                        <Link to={"/pay-success"} className='px-[1rem] text-[15px] w-full text-[#0047FF] rounded-[8px] py-[.8rem] hover:bg-blue-100 cursor-pointer duration-300 bg-white'>
                            Proceed
                        </Link>
                    </div>


                    <div className='flex items-center justify-between'>
                        <h1 className='text-[20px] font-[500]'>Payment options</h1>
                        <div className='text-[15px] flex items-center gap-[.5rem]'>
                            <BsFillLockFill />
                            <span>Secure server</span>
                        </div>
                    </div>

                    <form className='flex flex-col mt-[1rem] gap-[1rem]' >

                        <div className='flex flex-col gap-[1rem]'>
                            <div className='flex items-start gap-[.4rem]'>
                                <input type="radio" className='mt-[.4rem]' />
                                <label className='flex items-start border-b flex-1 justify-between'>
                                    <span className=' flex flex-col'>
                                        <span>credit/debit card</span>
                                        <span className='text-[#DADADA] py-[1rem]'>Make payment using your card</span>
                                    </span>
                                    <span className='flex gap-[.5rem] items-center justify-center' >
                                        <img src={Visa} alt="" />
                                        <img src={MasterCard} alt="" />
                                        <img src={Gb} alt="" />
                                    </span>
                                </label>
                            </div>
                            <div className='flex flex-col sm:flex-row gap-[1rem]'>
                                <div className="flex flex-1 flex-col">
                                    <label htmlFor="firstname" className="mb-2 block text-sm font-medium text-gray-900">
                                        First name
                                    </label>
                                    <input
                                        id="firstname"
                                        className="px-4 w-full py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                        type="text"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col">
                                    <label htmlFor="lastname" className="mb-2 block text-sm font-medium text-gray-900">
                                        Last name
                                    </label>
                                    <input
                                        id="lastname"
                                        className="px-4 w-full py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col sm:flex-row gap-[1rem]'>
                                <div className="flex flex-1 flex-col">
                                    <label htmlFor="card-number" className="mb-2 block text-sm font-medium text-gray-900">
                                        Card number
                                    </label>
                                    <input
                                        id="card-number"
                                        className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                        type="text"
                                    />
                                </div>
                                <div className='flex flex-1 gap-[1rem]'>
                                    <div className="flex flex-col">
                                        <label htmlFor="card-number" className="mb-2 block text-sm font-medium text-gray-900">
                                            Expiration
                                        </label>
                                        <input
                                            id="expiration"
                                            placeholder='MM/YY'
                                            className="px-4 w-full  py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="card-number" className="mb-2 block text-sm font-medium text-gray-900">
                                            CVV
                                        </label>
                                        <input
                                            id="cvv"
                                            placeholder='***'
                                            className="px-4 w-full py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                            type="text"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row gap-[1rem]'>
                                <div className="flex flex-1 flex-col">
                                    <label htmlFor="postal-code" className="mb-2 block text-sm font-medium text-gray-900">
                                        Postal code
                                    </label>
                                    <input
                                        id="postal-code"
                                        className="px-4 w-full py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                        type="text"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col">
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        className="px-4 w-full py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex mt-[2rem]  mb-[1rem] items-start justify-between'>
                            <div className='flex items-start gap-[.4rem]'>
                                <input className='mt-[.4rem]' type="radio" />
                                <label className='flex flex-col items-start'>
                                    <span>
                                        Google Play
                                    </span>
                                    <span className='text-[#DADADA] py-[1rem]'>Make your payment through the Google play portal</span>
                                </label>
                            </div>
                            <img src={Gpay} alt="" />
                        </div>
                        <div className='flex  mb-[1rem] items-start justify-between'>
                            <div className='flex items-start gap-[.4rem]'>
                                <input className='mt-[.4rem]' type="radio" />
                                <label className='flex flex-col items-start'>
                                    <span>
                                        Stripe
                                    </span>
                                    <span className='text-[#DADADA] py-[1rem]'>
                                        Make your payment through the stripe portal
                                    </span>
                                </label>
                            </div>
                            <img src={Stripe} alt="" />
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Pay