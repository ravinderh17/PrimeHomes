import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaShare} from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";


export default function SubHeader() {

  const [copied, setCopied] = useState(false);
//   const navigate = useNavigate();
  

  return ( 
    // bg-white-200
    <subheader className=' sticky w-full top-0 z-50'>
        <div  className='flex justify-between items-center max-w-6xl mx-auto p-3 bg-white'>
      <Link to = '/search' className='hover:text-slate-500'>
          <span className='items-center gap-2 flex flex-wrap '>
          <IoIosArrowBack /> 
         
          Back to Search
          </span>
      </Link>
        <div className='cursor-pointer flex items-center gap-2 hover:text-slate-500'
             onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}
            >
            <FaShare
              className='text-slate-500'
            /> 
           <span>Share</span>
            
          </div>
          {copied && (
            <p className='fixed top-[23%] right-[6%] z-10 rounded-md bg-slate-100 p-2'>
              Link copied!
            </p>
          )}
        </div>
    </subheader>
  )
}
