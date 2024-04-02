import { CheckoutForm } from '../../components/CheckoutForm/CheckoutForm'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Pay = () => {


    let mode: "payment" | "setup" | "subscription" | undefined = 'payment';


    const options = {
        mode: mode,
        amount: 1099,
        currency: 'usd',
        appearance: {},
    };



    return (
        <div className='w-full min-h-full '>
            <div className="container sm:px-[2rem] md:px-[8rem] py-[2rem] w-full justify-center flex start ">
                <div className="w-full bg-white  sm:rounded-[24px] max-w-[757px] xl:relative p-[1rem] sm:p-[3rem] xl:pr-[10rem]">

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

                    </div>


                    <div className='flex flex-col mt-[1rem] gap-[1rem]' >

                        <div className='mb-[1rem]'>

                                    <Elements stripe={stripePromise} options={options}>
                                        <CheckoutForm />
                                    </Elements>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Pay