
import { useState } from 'react'
import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {

    const navigate = useNavigate();
    const [value , setValue] = useState();

     const handleClick = () => {
        navigate(`/room/${value}`)
     }

  return (

    <div>
        <input type='text'  placeholder='Enter Your RoomId' onChange={(e) => setValue(e.target.value)}/>
        <button onClick={handleClick}>Join</button>
    </div>

  )
}

export default Home