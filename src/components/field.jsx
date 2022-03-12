import React from "react";

const Field = ({array,num,selectedNumbers,setSelectedNumbers}) => {
  const items = document.querySelectorAll('.item')
  items.forEach((el,i) => {
   return el.style = `right: ${i % 7}px;bottom: ${Math.floor(i / 7)}px`;
  })

  const handleClick = (i,arr) => {

    if(arr.includes(i)) {
      setSelectedNumbers(arr.filter((item) => item!==i))
    } else {
      if(arr.length < num) {
        setSelectedNumbers([...arr,i])
      } 
    }
}
    return ( <>

    <div className='info'>
          <div >
            Поле {num > 1 ? 1 : 2}
          </div>
          <div>
            {num === 8
            ? `Отметьте ${num} чисeл`
            : `Отметьте ${num} число`}
          </div>
    </div>
    <div className='contaner-item'>
        {array.map((item,i) => (
            <div className={(selectedNumbers.includes(i+1)?'active':'') + ' item'} key={item} onClick={()=>handleClick(i+1,selectedNumbers)}>{item}</div>
        ))}
    </div>
           </>
     );
     
}
 
export default Field;