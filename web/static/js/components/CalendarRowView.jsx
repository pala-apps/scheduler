import React from 'react'
import moment from 'moment'
import formSerializer from "../libs/formSerializer"


const CalendarRowView = ( {position, positionIndex, startPoint,totalDuration, periods, numberOfUnits, addShift} ) => {

  const shifts = position.shifts.map( ( shift ) => {
    const shiftStart =  moment(shift.start)
    const shiftEnd =  moment(shift.end)
    const shiftDuration = shiftEnd.diff( shiftStart )

    const shiftOffset = shiftStart.diff( startPoint )

    const widthPercentage = (shiftDuration / totalDuration) * 100
    const leftPercentage = (shiftOffset / totalDuration) * 100

    return (
      <div className="calendar-shift-active" style={ {left:`${leftPercentage}%`, width: `${widthPercentage}%`} }>
        {shift.id}
      </div>
    )
  })

  const shiftCells = periods.map( ( period ) => {
    return(
      <div style={ { width: `${ 100 / numberOfUnits }%` }}>
        <form onSubmit={ addShift } className="calendar-column">
          <input type="hidden" name="index" value={ positionIndex } />
          <input type="hidden" name="start" value={ period.date.format() } />
          <input type="text" name="id" />
        </form>
      </div>
    )
  })

  return (
    <div className="calendar-row">
      <div className="calendar-row-header">
        { position.name }
      </div>
      <div className="calendar-cells l-flex">
        { shiftCells }
        { shifts }
      </div>
    </div>
  )
}

export default CalendarRowView
