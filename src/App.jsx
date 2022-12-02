import Header from './components/Header'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import GameStart from './components/GameStart'
import GameResult from './components/GameResult'

function App() {
  let [playerPicked, setPlayerPicked] = useState("")
  let [computerPicked, setComputerPicked] = useState("")
  let [gameResult, setGameResult] = useState("")
  let [score, setScore] = useState(0)

  const newComputerPick = () => {
    const choices = ['rock', 'paper', 'scissors']
    setComputerPicked(choices[Math.floor(Math.random() * 3)])
  }

  useEffect(() => {
    newComputerPick()
    setScore(localStorage.getItem("score") ? localStorage.getItem("score") : 0)
  }, [])

  return (
    <>
      <Header score={score} />
      {!playerPicked ?
        <GameStart setPlayerPicked={setPlayerPicked} /> :
        <GameResult setScore={setScore} setPlayerPicked={setPlayerPicked} playerPicked={playerPicked} score={score} computerPicked={computerPicked} setGameResult={setGameResult} newComputerPick={newComputerPick} setComputerPicked={setComputerPicked} gameResult={gameResult} />}
      <Footer />
    </>
  )
}

export default App
