import React from 'react'
import { getGenerationArray } from '../../utils'
import classes from './NumberOfTicket.module.css'
const NumberOfTicket = ({
    array,
    array2,
    setSelectedNumbers,
    setSelectedNumbers2
}) => {
    const handleClick = () => {
        setSelectedNumbers(getGenerationArray(array, 8))
        setSelectedNumbers2(getGenerationArray(array2, 1))
    }
    return (
        <div className={classes.ticketNum}>
            <div>Билет 1</div>
            <div className={classes.stick} onClick={handleClick} />
        </div>
    )
}

export default NumberOfTicket
