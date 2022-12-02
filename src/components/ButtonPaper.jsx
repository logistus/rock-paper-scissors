function ButtonPaper({ setPlayerPicked }) {
  const playerPicked = (e) => {
    setPlayerPicked(e.target.dataset.id)
  }
  return (
    <div className='button-wrapper button-wrapper-paper' onClick={playerPicked}>
      <div className='button button--paper' data-id='paper'></div>
    </div >
  );
}

export default ButtonPaper;