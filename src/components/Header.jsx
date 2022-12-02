import logo from '../assets/logo.svg'

function Header({ score }) {
  return (
    <header>
      <img src={logo} alt='Rock, Paper, Scissors' className='logo' />
      <div className='score--wrapper'>
        <div className='score--text'>SCORE</div>
        <div className='score'>{score}</div>
      </div>
    </header>
  )
}

export default Header;