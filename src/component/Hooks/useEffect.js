import React, { useEffect, useState } from 'react'
import "./Style.css";

export default function UseEffect() {
  //  const initialData = 15;
  const [myNum, setMyNum] = useState(0);

  useEffect(() => {
    document.title = `Chats(${myNum})`

  })
  return (
    <>
    <div className='center-div'>
        <p>{myNum}</p>
        <div className='button2' onClick={() => setMyNum(myNum + 1  )}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        
    </div>
   
    </>
  )
}
