import { Link } from "react-router-dom";
import Ticket from "../../assets/tickets/Property 1=Default.png"

const BingoPayment = () => {
  const alert = () => {
    window.alert("Sent to this email!")
  }
  return (
    <>
      <div className="container px-[8rem] py-[2rem] z-50 text-end mt-10">
        <div className="mt-8 text-[1.8rem] font-bold text-end">
          <button className="cursor-pointer hover:text-green-400 text-green-600 mr-6">Print</button>
          <Link to={"/playerrecord"} className="cursor-pointer hover:text-blue-400 text-blue-600">Back</Link>
        </div>
        <p className="text-start text-[2rem]">Tennis Group</p>
        <div className="flex gap-20 mt-8">
          
          <div>
            <img src={Ticket}></img>
            <p className="text-center text-[1.5rem] mt-2 font-bold">Jacob Jones</p>
            <p onClick={alert} className="text-center text-[1.4rem] mt-2 cursor-pointer hover:text-blue-800">jacobjones@gmail.com</p>
          </div>
          <div>
            <img src={Ticket}></img>
            <p className="text-center text-[1.5rem] mt-2 font-bold">Jacob Jones</p>
            <p onClick={alert} className="text-center text-[1.4rem] mt-2 cursor-pointer hover:text-blue-800">jacobjones@gmail.com</p>
          </div>
          <div>
            <img src={Ticket}></img>
            <p className="text-center text-[1.5rem] mt-2 font-bold">Jacob Jones</p>
            <p onClick={alert} className="text-center text-[1.4rem] mt-2 cursor-pointer hover:text-blue-800">jacobjones@gmail.com</p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default BingoPayment;