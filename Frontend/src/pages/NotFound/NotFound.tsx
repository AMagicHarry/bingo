import { Link } from 'react-router-dom'; 

const NotFound = () => {
  return (
    <div className='w-full h-full  flex justify-center items-center overflow-y-auto'>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-5">404 - Not Found</h1>
        <p className="text-white mb-5">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
