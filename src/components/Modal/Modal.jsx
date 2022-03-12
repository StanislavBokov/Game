import React, { useState } from 'react'
import classes from './Modal.module.css'
import cn from 'classnames'

const Modal = ({ countMatch, setVisibleModal }) => {
    const [click, setClick] = useState(false)

    const handleClose = () => {
        setClick(true)
        setTimeout(() => {
            setVisibleModal(false)
        }, 500)
    }
    return (
        <div
            className={cn(classes.modalContainer, {
                [classes.opacityDown]: click
            })}
        >
            <div className={classes.modalContent}>
                {countMatch < 4
                    ? `Вы проиграли, вы набрали: ${countMatch} очков`
                    : `Вы выиграли, вы набрали: ${countMatch} очков`}
                <br />
                <button className={classes.closeBtn} onClick={handleClose}>
                    Закрыть
                </button>
            </div>
        </div>
    )
}

export default Modal
