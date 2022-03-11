import React from "react";

const Modal = ({countMatch}) => {
    return ( 
        <div className='modal'>
            <div className='modalContent'>
                {countMatch < 4 
                ? `Вы проиграли, вы набрали: ${countMatch} очков`
                : `Вы выиграли, вы набрали: ${countMatch} очков`}
            </div>
        </div>
     );
}
 
export default Modal;