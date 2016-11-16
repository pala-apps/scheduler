import React from 'react'

const CalendarNav = ( { goBack, goForward, showHours, showDays, showWeeks} ) => {

  return(
    <div className="navbar l-flex">
      <div className="l-flex-1"></div>
      <div className="l-flex-1 text-center">
        <button onClick={goBack}><i className="fa fa-caret-left" aria-hidden="true"></i></button>
        <span className="navbar-title-center">12 Nov 2016 - 16 Dec 2016</span>
        <button onClick={goForward}><i className="fa fa-caret-right" aria-hidden="true"></i></button>
      </div>
      <div className="l-flex-1 text-right">
        <a onClick={showHours}> Hours </a>
        <a onClick={showDays}> Days </a>
        <a onClick={showWeeks}> Weeks </a>
      </div>
    </div>
  )

}

export default CalendarNav;
