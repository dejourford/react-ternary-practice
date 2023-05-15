import "./body.css"
import { useState } from "react"
import React from "react"

export default function Body() {
   const [isGoingOut, setIsGoingOut] = React.useState(true)
   
    const handleClick = () => {
    setIsGoingOut(isGoingOut => !isGoingOut)
   }
    
    
    return (
        <div className="bodySection">
            <button className="answerBtn" onClick={handleClick}>{isGoingOut ? "Yes" : "No"}</button>
        </div>
    )
}