import React from 'react'
import { Link } from 'react-router'

const CalendarNav = ( { goBack, goForward, showHours, showDays, showWeeks, userTimeUnit } ) => {

  const isActive = ( unit ) => {
    if ( unit === userTimeUnit ) {
      return " btn-active"
    }
    return ""
  }

  return(
    <div className="navbar l-flex">
      <div className="l-flex-1 l-flex"></div>
      <div className="l-flex-1 l-flex l-flex-align-center l-flex-justify-center">
        <button onClick={goBack}><i className="fa fa-caret-left" aria-hidden="true"></i></button>
        <span className="navbar-title-center">12 Nov 2016 - 16 Dec 2016</span>
        <button onClick={goForward}><i className="fa fa-caret-right" aria-hidden="true"></i></button>
      </div>
      <div className="l-flex-1 l-flex l-flex-align-center l-flex-justify-end">
        <div className="btn">
          <a className={ "btn-split" + isActive( 'hour' ) } onClick={showHours}>Hours</a>
          <a className={ "btn-split" + isActive( 'day' ) } onClick={showDays}> Days </a>
          <a className={ "btn-split" + isActive( 'week' ) } onClick={showWeeks}> Weeks </a>
        </div>
      </div>
    </div>
  )

}

export default CalendarNav;
