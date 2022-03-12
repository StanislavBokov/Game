import React from 'react'
import { getGenerationArray } from '../../utils'
import classes from './Button.module.css'

const Button = ({
    selectedNumbers,
    selectedNumbers2,
    array,
    array2,
    setCountMatch,
    setVisibleModal
}) => {
    const handleSubmit = () => {
        const generationFirstArray = getGenerationArray(array, 8)
        const generationSecondArray = getGenerationArray(array2, 1)
        const mapOfFirstArray = {}
        const mapOfSecondaryArray = {}
        const intersectOfFirstArray = []
        const intersectOfSecondaryArray = []

        for (const num of selectedNumbers) {
            mapOfFirstArray[num] = mapOfFirstArray[num] + 1 || 1
        }
        for (const num of selectedNumbers2) {
            mapOfSecondaryArray[num] = mapOfSecondaryArray[num] + 1 || 1
        }
        for (const num of generationFirstArray) {
            if (mapOfFirstArray[num]) {
                intersectOfFirstArray.push(num)
            }
        }
        for (const num of generationSecondArray) {
            if (mapOfSecondaryArray[num]) {
                intersectOfSecondaryArray.push(num)
            }
        }
        const count = [...intersectOfFirstArray, ...intersectOfSecondaryArray]
            .length
        setCountMatch(count)
        setVisibleModal(true)
    }
    return (
        <button
            disabled={selectedNumbers.length + selectedNumbers2.length !== 9}
            className={classes.mainBtn}
            onClick={() => handleSubmit()}
        >
            Показать результат
        </button>
    )
}

export default Button
