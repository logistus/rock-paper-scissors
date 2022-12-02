import close from '../assets/icon-close.svg'
import rules from '../assets/rules.png'

function Rules({ toggleShowRules }) {
  return (
    <div className='rules--modal--wrapper'>
      <div className='rules--modal'>
        <div className='rules--title--mobile'>RULES</div>
        <div className='rules--title--desktop'>
          <div>RULES</div>
          <img src={close} alt='Close' className='rules--close rules--close--desktop' onClick={toggleShowRules} />
        </div>
        <img src={rules} className='rules--img' alt='Rules' />
        <img src={close} alt='Close' className='rules--close rules--close--mobile' onClick={toggleShowRules} />
      </div>
    </div>
  );
}

export default Rules;