import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-orange-300 text-center p-5">
      <div className="max-w-[600px] mx-auto p-6 border border-[#6b3e26] rounded-lg bg-white shadow-lg">
        <h1 className="text-[6rem] text-red-800 mb-0 font-bold">404</h1>
        <h2 className="text-[2rem] text-[#333] my-2 font-semibold">Page Not Found</h2>
        <p className="text-[1.2rem] text-[#666] mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="no-underline text-white bg-orange-800 px-5 py-2.5 rounded-[8px] font-bold transition-colors duration-300 ease-in-out hover:bg-orange-950"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
