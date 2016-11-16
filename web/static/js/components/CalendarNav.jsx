import React from 'react'


const CalendarNav = ( {
  goBack, goForward, showHours, showDays, showWeeks,
  startString, endString, numberOfUnits, updateDuration} ) => {

  const onDurationChange = (e)=>{
    const numUnits = Number(e.target.value)
    console.log('e', )
    updateDuration(numUnits)
  }

  return(
    <div className="navbar l-flex">
      <div className="l-flex-1"></div>
      <div className="l-flex-1 text-center">
        <button onClick={goBack}><i className="fa fa-caret-left" aria-hidden="true"></i></button>
        <span className="navbar-title-center">{`${startString} - ${endString}`}</span>
        <button onClick={goForward}><i className="fa fa-caret-right" aria-hidden="true"></i></button>
      </div>
      <div className="l-flex-1 text-right">
        <input
          name="duration"
          type="number"
          defaultValue={numberOfUnits}
          onChange = { onDurationChange  }
        />
        <a onClick={showHours}> Hours </a>
        <a onClick={showDays}> Days </a>
        <a onClick={showWeeks}> Weeks </a>
      </div>
    </div>
  )

}

export default CalendarNav;
