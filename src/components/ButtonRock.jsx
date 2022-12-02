function ButtonRock({ setPlayerPicked }) {
  const playerPicked = (e) => {
    setPlayerPicked(e.target.dataset.id)
  }
  return (
    <div className='button-wrapper button-wrapper-rock' onClick={playerPicked}>
      <div className='button button--rock' data-id='rock'></div>
    </div>
  );
}

export default ButtonRock;