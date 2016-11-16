import React from 'react'


const CalendarNav = ( {
  goBack, goForward, showHours, showDays, showWeeks,
  startString, endString, userTimeUnit, numberOfUnits, updateDuration} ) => {

  const onDurationChange = (e)=>{
    const numUnits = Number(e.target.value)
    console.log('e', )
    updateDuration(numUnits)
  }

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
        <span className="navbar-title-center">{`${startString} - ${endString}`}</span>
        <button onClick={goForward}><i className="fa fa-caret-right" aria-hidden="true"></i></button>
      </div>
      <div className="l-flex-1 l-flex l-flex-align-center l-flex-justify-end">
        <input
          name="duration"
          type="number"
          defaultValue={numberOfUnits}
          onChange = { onDurationChange  }
        />
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
