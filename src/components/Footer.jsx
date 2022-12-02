import { useState } from 'react'
import Rules from './Rules'

function Footer() {
  let [showRules, setShowRules] = useState(false)

  const toggleShowRules = () => {
    setShowRules(!showRules)
  }

  return (
    <>
      <footer>
        <a href='#' className='rules' onClick={toggleShowRules}>RULES</a>
      </footer>
      {showRules ? <Rules toggleShowRules={toggleShowRules} /> : ""}
    </>
  );
}

export default Footer;