import React from 'react'

const TimeNav = ( { goBack, goForward, showHours, showDays, showWeeks} ) => {

  return(
    <div>
      <button onClick={goBack}> Back </button>
      <button onClick={goForward}> Forward </button>
      <a onClick={showHours}> Hours </a>
      <a onClick={showDays}> Days </a>
      <a onClick={showWeeks}> Weeks </a>
    </div>
  )

}

export default TimeNav;
