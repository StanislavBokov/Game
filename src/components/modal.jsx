import React from "react";

const Modal = ({countMatch,setVisibleModal}) => {
    const handleClose = (e) => {
      const modal = e.target.closest('.modal')
       modal.classList.add('test')
       setTimeout(() => {
        setVisibleModal(false)
       },500)
    }
    return ( 
        <div className='modal'>
            <div className='modalContent'>
                {countMatch < 4 
                ? `Вы проиграли, вы набрали: ${countMatch} очков`
                : `Вы выиграли, вы набрали: ${countMatch} очков`}<br/>
                <button className='closeBtn' onClick={handleClose}>Закрыть</button>
            </div>
        </div>
     );
}
 
export default Modal;