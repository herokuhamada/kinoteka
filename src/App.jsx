import './App.css'
import Area from './components/Area'
import Square from './components/Square'
import SquareController from './components/SquareController'
import { useState } from 'react'


function App() {
  const [x, setX] = useState(0)

  function changeX() {
    setX(x + 1)
  }

  return (
    <>
      <Area backgroundColor={"white"}>
        <Square side={"100px"} backgroundColor={"red"} borderRadius={20} label={x} />

        <SquareController increase={changeX} />
      </Area>
    </>
  )
}

export default App
