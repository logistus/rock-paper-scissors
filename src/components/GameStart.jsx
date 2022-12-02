import ButtonRock from './ButtonRock'
import ButtonPaper from './ButtonPaper'
import ButtonScissors from './ButtonScissors'

function GameStart({ setPlayerPicked }) {

  return (
    <main>
      <div className='buttons'>
        <ButtonPaper setPlayerPicked={setPlayerPicked} />
        <ButtonScissors setPlayerPicked={setPlayerPicked} />
        <ButtonRock setPlayerPicked={setPlayerPicked} />
      </div>
    </main>
  );
}

export default GameStart;