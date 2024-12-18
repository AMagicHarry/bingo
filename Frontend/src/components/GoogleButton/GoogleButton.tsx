
import Google from '../../assets/google.svg'
import { useGoogleLogin,CodeResponse } from '@react-oauth/google';


const GoogleButton = ({onSuccess,type}:{onSuccess:(codeResponse:CodeResponse)=>void,type?:string}) => {
    
  const login = useGoogleLogin({
    onSuccess: onSuccess,
    flow: 'auth-code',
  });

  return (
    <button onClick={() => login()} className="w-full gap-[.3rem] text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 mt-2 flex justify-center">
      <img src={Google} className="w-9 mr-2"></img>
    {
      type === 'login'?<span>Login</span>:<span>Sign up</span>
    } <span> with Google</span>
    </button>
  );
};

export default GoogleButton;
