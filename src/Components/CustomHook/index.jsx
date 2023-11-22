import React, { useState } from 'react'




function useToggle() {
    const [open, setOpen] = useState(false)

function handleClick(){

    setOpen(!open)
    
}


  return [open,handleClick]
  
}

export default useToggle