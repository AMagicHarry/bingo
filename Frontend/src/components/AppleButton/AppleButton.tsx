import AppleLogin from 'react-apple-login';
import Apple from '../../assets/apple.svg'

const AppleButton = ({onSuccess,type}:{onSuccess:(response:any)=>void, type?:string}) => {
  return (
    <AppleLogin
      clientId='ddj'
      redirectURI="YOUR_REDIRECT_URL"
    //   usePopup={true}
      callback={onSuccess}
      scope="email name"
      responseMode="query"
      render={(renderProps:any) => (
        <button onClick={renderProps.onClick} className="w-full gap-[.3rem] text-[1.2rem] rounded-lg border-solid border-2 border-gray-200 p-1 mt-2 flex justify-center">
      <img src={Apple} className="w-9 mr-2"></img>
    {
      type === 'login'?<span>Login</span>:<span>Sign up</span>
    } <span> with Apple</span>
    </button>
      )}
    />
  );
};

export default AppleButton;
