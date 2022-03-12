import React, { useCallback } from 'react'
import classes from './Field.module.css'
import cn from 'classnames'

const Field = ({
    array,
    num,
    defaultText,
    selectedNumbers,
    setSelectedNumbers,
    defaultText2
}) => {
    const handleClick = useCallback(
        (i, arr) => {
            if (arr.includes(i)) {
                setSelectedNumbers(arr.filter((item) => item !== i))
            } else {
                if (arr.length < num) {
                    setSelectedNumbers([...arr, i])
                }
            }
        },
        [selectedNumbers]
    )
    return (
        <>
            <div className={classes.info}>
                <div>{defaultText2}</div>
                <div>{defaultText}</div>
            </div>
            <div className={classes.contanerItem}>
                {array.map((item, i) => (
                    <div
                        className={cn(classes.item, {
                            [classes.active]: selectedNumbers.includes(i + 1)
                        })}
                        key={item}
                        onClick={() => handleClick(i + 1, selectedNumbers)}
                        style={{
                            right: `${i % 7}px`,
                            bottom: `${Math.floor(i / 7)}px`
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Field
