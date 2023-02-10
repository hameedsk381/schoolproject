import { Avatar } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../actions/userActions';

const Faculty = () => {
    const userstate = useSelector((state) => state.getAllUsersReducer);
    const dispatch = useDispatch()
    const { users } = userstate;
    console.log(userstate);
    dispatch(getAllUsers())
 axios.get("")
    
  return (
  <>
  <div className="flex flex-col justify-center items-center">

<div className="container mx-auto text-center pt-24">
    <div className="items-center justify-center flex">
        <div className="text-center">
            <div className="flex flex-col justify-center items-center">
                <div className="w-16">
                    <img className="block rounded-full m-auto shadow-md" alt="Duc Sun"
                        src="https://randomuser.me/api/portraits/men/12.jpg" />
                </div>
                <div className="text-gray-600">
                    <p>Duc Sun</p>
                    <p>ceo</p>
                </div>
            </div>
            <ul className="flex flex-row mt-10 justify-center">
                <div className="-mt-10 border-l-2 absolute h-10 border-gray-400"></div>
               
                {users.map(item=>(<li key={item} className="relative p-6">
                <div className="border-t-2 absolute h-8 border-gray-400 top-0"
                style={{left: "0%", right: "0px"}}></div>
                <div className="relative flex justify-center">
                    <div className="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"></div>
                    <div className="text-center">
                        <div className="flex flex-col justify-center items-center">
                            <div className="w-16">
                            <Avatar
  alt={item.name}
  src={`data:images/jpeg;base64,${btoa(
    String.fromCharCode(...new Uint8Array((item.image.data.data)))
  )}`}
  sx={{ width: 56, height: 56 }}
/>
                            
                            </div>
                            <div className="text-gray-600">
                                <p>{item.name}</p>
                                <p>{item.department}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>))}
                
            </ul>
        </div>
    </div>
</div>
<a className="text-md underline text-gray-500 hover:text-gray-700 cursor-pointer bottom-0"
    href="https://codesandbox.io/s/github/ravisankarchinnam/tailwindcss-flow-chart">React.js version</a>
</div>
  </>

  )
}

export default Faculty