import { useEffect, useState } from 'react'
import ButtonPaper from './ButtonPaper'
import ButtonRock from './ButtonRock'
import ButtonScissors from './ButtonScissors';

function GameResult({ setScore, setPlayerPicked, playerPicked, score, computerPicked, setGameResult, newComputerPick, setComputerPicked, gameResult }) {

  useEffect(() => {
    if (playerPicked === "rock" && computerPicked === "paper") {
      setGameResult("YOU LOSE")
    } else if (playerPicked === "rock" && computerPicked === "scissors") {
      setGameResult("YOU WIN")
      setScore(parseInt(score) + 1)
      localStorage.setItem("score", parseInt(score) + 1)
    } else if (playerPicked === "rock" && computerPicked === "rock") {
      setGameResult("DRAW")
    } else if (playerPicked === "paper" && computerPicked === "rock") {
      setGameResult("YOU WIN")
      setScore(parseInt(score) + 1)
      localStorage.setItem("score", parseInt(score) + 1)
    } else if (playerPicked === "paper" && computerPicked === "scissors") {
      setGameResult("YOU LOSE")
    } else if (playerPicked === "paper" && computerPicked === "paper") {
      setGameResult("DRAW")
    } else if (playerPicked === "scissors" && computerPicked === "rock") {
      setGameResult("YOU LOSE")
    } else if (playerPicked === "scissors" && computerPicked === "paper") {
      setGameResult("YOU WIN")
      setScore(parseInt(score) + 1)
      localStorage.setItem("score", parseInt(score) + 1)
    } else if (playerPicked === "scissors" && computerPicked === "scissors") {
      setGameResult("DRAW")
    }
  }, [])

  return (
    <main>
      <div className='game--playing'>
        <div className='player-pick'>
          <div className="pick-button">
            {gameResult === "YOU WIN" ? <div className='winner-wrapper'>
              {
                playerPicked === "rock" ? <ButtonRock /> :
                  playerPicked === "paper" ? <ButtonPaper /> :
                    playerPicked === "scissors" ? <ButtonScissors /> : 'Invalid Choice'
              }
            </div> :
              playerPicked === "rock" ? <ButtonRock /> :
                playerPicked === "paper" ? <ButtonPaper /> :
                  playerPicked === "scissors" ? <ButtonScissors /> : 'Invalid Choice'

            }
          </div>
          <div className='pick-text'>YOU PICKED</div>
        </div>
        <div className='computer-pick'>
          <div className="pick-button">
            <div className={computerPicked ? 'remove' : 'computer-pick-placeholder'}></div>
            {gameResult === "YOU LOSE" ? <div className='winner-wrapper'>
              {
                computerPicked === "rock" ? <ButtonRock /> :
                  computerPicked === "paper" ? <ButtonPaper /> :
                    computerPicked === "scissors" ? <ButtonScissors /> : 'Invalid Choice'
              }
            </div> : computerPicked === "rock" ? <ButtonRock /> :
              computerPicked === "paper" ? <ButtonPaper /> :
                computerPicked === "scissors" ? <ButtonScissors /> : 'Invalid Choice'
            }
          </div>
          <div className='pick-text'>THE HOUSE PICKED</div>
        </div>
        <div className='result'>
          <div className={gameResult ? 'game-result show' : 'game-result hide'}>{gameResult}</div>
          <a href="#" className='again' onClick={() => { setPlayerPicked(""); setComputerPicked(newComputerPick) }}>PLAY AGAIN</a>
        </div>
      </div>
    </main>
  );
}

export default GameResult;