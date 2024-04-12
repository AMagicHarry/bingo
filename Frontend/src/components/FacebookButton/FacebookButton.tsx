import FacebookLogin from 'react-facebook-login';
import Facebook from "../../assets/facebook.svg"

const FacebookButton = ({onSuccess,type}:{onSuccess:(response:any)=>void, type?:string}) => {
    

  return (
    <FacebookLogin
      appId={import.meta.env.VITE_FB_APP_ID}
      autoLoad={false}
      fields="name,email,picture"
      cssClass='w-full text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 mt-2 flex items-center justify-center'
      callback={onSuccess}
      icon={<img className="w-9 mr-2" src={Facebook}/>
    }
     textButton={type === 'login'?"Login with Facebook":"Sign up with Facebook"}
    />
  );
};

export default FacebookButton;
