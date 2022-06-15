import React, { useEffect, useState } from 'react'

export default function Test() {
    const [text,setText]=useState('hi')
    const handelInp=()=>{
        
    }
    useEffect(()=>{
        setText('done',()=>{
            console.log("hey")
        })
    },[])
  return (
    <div>
        <p>{text}</p>
        <button onClick={handelInp}>click</button>
    </div>
  )
}
