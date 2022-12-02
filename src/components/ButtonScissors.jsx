function ButtonScissors({ setPlayerPicked }) {
  const playerPicked = (e) => {
    setPlayerPicked(e.target.dataset.id)
  }
  return (
    <div className='button-wrapper button-wrapper-scissors' onClick={playerPicked}>
      <div className='button button--scissors' data-id='scissors'></div>
    </div>
  );
}

export default ButtonScissors;