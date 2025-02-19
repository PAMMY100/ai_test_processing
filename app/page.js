'use client'
import About from "@/components/About"
import TextProcessor from "@/components/TextProcessor"
import { useState } from "react"


const page = () => {
  const [open, setOpen] = useState(false)
  
  const handleClick = () => {
    setOpen(prev => !prev)
  }

  return (
    <div>
      {open ? (<TextProcessor onClose={handleClick} />) : (<About onOpen={handleClick}/>)}
    </div>
  )
}

export default page