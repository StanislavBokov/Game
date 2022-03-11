

import Field from "./components/field";
import MainButton from "./components/button";
import NumberOfTicket from "./components/numberOfTicket";
import React,{useState} from "react";
import Modal from "./components/modal";
const firstFieldNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
const secondFieldNumbers = [1,2]

const copyFirstArray1 = [...firstFieldNumbers]
const copyFirstArray2 = [...secondFieldNumbers]

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([])
  const [selectedNumbers2, setSelectedNumbers2] = useState([])
  const [countMatch,setCountMatch] = useState(0)
  const [visibleModal,setVisibleModal] = useState(false)

  return (
    <div className='container'>
      <NumberOfTicket
          setSelectedNumbers={setSelectedNumbers}
          setSelectedNumbers2={setSelectedNumbers2} 
          array={firstFieldNumbers}
          array2={secondFieldNumbers}
      />
      
      <Field 
          array={firstFieldNumbers}
          num={8} 
          selectedNumbers={selectedNumbers} 
          setSelectedNumbers={setSelectedNumbers}
      />
     
      <Field 
          array={secondFieldNumbers} 
          num={1} 
          selectedNumbers={selectedNumbers2} 
          setSelectedNumbers={setSelectedNumbers2}
      />
      <MainButton 
          selectedNumbers={selectedNumbers} 
          selectedNumbers2={selectedNumbers2} 
          array={copyFirstArray1} 
          array2={copyFirstArray2} 
          setCountMatch={setCountMatch}
          setVisibleModal={setVisibleModal}
      />
      {visibleModal && <Modal countMatch={countMatch}/>} 
    </div>
  );
}

export default App;
