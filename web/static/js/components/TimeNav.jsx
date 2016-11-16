import React from 'react'

const TimeNav = ( { goBack, goForward} ) => {

  return(
    <div>
      <button onClick={goBack}> Back </button>
      <button onClick={goForward}> Forward </button>
    </div>
  )

}

export default TimeNav;
