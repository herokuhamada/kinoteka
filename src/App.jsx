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

  function resetX() {
    setX(0)
  }

  function decreaseX() {
    setX(x - 1)
  }

  return (
    <>
      <Area backgroundColor={"white"}>
        <Square side={"100px"} backgroundColor={"red"} borderRadius={20} label={x} />

        <SquareController title={"Increase by One"} fn={changeX} />
        <SquareController title={"Reset"} fn={resetX} />
        <SquareController title={"Decrease by One"} fn={decreaseX} />
      </Area>
    </>
  )
}

export default App
