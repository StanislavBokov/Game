import React from "react";
import { getGenerationArray } from "../utils";
const NumberOfTicket = ({array,array2,setSelectedNumbers,setSelectedNumbers2}) => {
    const handleClick = () => {
        setSelectedNumbers(getGenerationArray(array,8))
        setSelectedNumbers2(getGenerationArray(array2,1))
    }
    return ( 
        <div className='ticket-num'>
         <div>Билет 1</div>
         <div className='stick' onClick={handleClick}></div>
      </div>
     );
}
 
export default NumberOfTicket;