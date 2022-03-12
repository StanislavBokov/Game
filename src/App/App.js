import Field from '../components/Field/Field'
import Button from '../components/Button/Button'
import NumberOfTicket from '../components/NumberOfTicket/NumberOfTicket'
import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'
import { createArray } from '../utils'
import classes from './App.module.css'

const firstFieldNumbers = createArray(19)
const secondFieldNumbers = createArray(2)

const copyFirstArray1 = [...firstFieldNumbers]
const copyFirstArray2 = [...secondFieldNumbers]

function App() {
    const [selectedNumbers, setSelectedNumbers] = useState([])
    const [selectedNumbers2, setSelectedNumbers2] = useState([])
    const [countMatch, setCountMatch] = useState(0)
    const [visibleModal, setVisibleModal] = useState(false)

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <NumberOfTicket
                    setSelectedNumbers={setSelectedNumbers}
                    setSelectedNumbers2={setSelectedNumbers2}
                    array={firstFieldNumbers}
                    array2={secondFieldNumbers}
                />

                <Field
                    array={firstFieldNumbers}
                    defaultText="Отметьте 8 чисел"
                    defaultText2="Поле 1"
                    selectedNumbers={selectedNumbers}
                    setSelectedNumbers={setSelectedNumbers}
                    num={8}
                />

                <Field
                    array={secondFieldNumbers}
                    defaultText="Отметьте 1 число"
                    defaultText2="Поле 2"
                    selectedNumbers={selectedNumbers2}
                    setSelectedNumbers={setSelectedNumbers2}
                    num={1}
                />
                <Button
                    selectedNumbers={selectedNumbers}
                    selectedNumbers2={selectedNumbers2}
                    array={copyFirstArray1}
                    array2={copyFirstArray2}
                    setCountMatch={setCountMatch}
                    setVisibleModal={setVisibleModal}
                />
                {visibleModal && (
                    <Modal
                        countMatch={countMatch}
                        setVisibleModal={setVisibleModal}
                    />
                )}
            </div>
        </div>
    )
}

export default App
