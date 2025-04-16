// Code EyesOnMe Component Here
import React from 'react'

const EyesOnMe = () => {
    const handleBlur=()=>{
        return console.log('Hey! Eyes on me!')

    }
    const handleFocus=()=>{
        return console.log('Good!');
        
    }
  return (
    <div>
        <buton onBlur={handleBlur} onFocus={handleFocus}>Eyes on me </buton>
    </div>
  )
}

export default EyesOnMe