import React from 'react'
import { getGenerationArray } from '../utils'

const MainButton = ({
    selectedNumbers,
    selectedNumbers2,
    array,
    array2,
    setCountMatch,
    setVisibleModal,
}) => {
    const handleSubmit = () => {
        const generationFirstArray = getGenerationArray(array, 8)
        const generationSecondArray = getGenerationArray(array2, 1)
        let obj = {}
        let obj2 = {}
        let result = []
        let result2 = []

        for (let num of selectedNumbers) {
            obj[num] = obj[num] + 1 || 1
        }
        for (let num of selectedNumbers2) {
            obj2[num] = obj2[num] + 1 || 1
        }
        for (let num of generationFirstArray) {
            if (obj[num]) {
                result.push(num)
            }
        }
        for (let num of generationSecondArray) {
            if (obj2[num]) {
                result2.push(num)
            }
        }
        const count = [...result, ...result2].length
        setCountMatch(count)
        setVisibleModal(true)
    }
    return (
        <button
            disabled={
                selectedNumbers.length + selectedNumbers2.length === 9
                    ? false
                    : true
            }
            className="main-btn"
            onClick={() => handleSubmit()}
        >
            Показать результат
        </button>
    )
}

export default MainButton
