import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Contact = () => {
const [users,setUsers] = useState()
 useEffect(() => {
  axios.get("http://localhost:5000/api/users/getusers").then(res=>setUsers(res.data))
 }, [])
 
  return (
    <div>
   { users.map(i=>(
    <h1 key={i}>{i.regId}</h1>
   ))}
    </div>
  )
}

export default Contact