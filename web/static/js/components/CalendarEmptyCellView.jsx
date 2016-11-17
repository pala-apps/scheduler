import React from 'react'
import moment from 'moment'

const CalendarEmptyCellView = ({ addShift, period, numberOfUnits, positionIndex }) => {

  return(
    <div style={ { width: `${ 100 / numberOfUnits }%` }}>
      <form onSubmit={ addShift } className="calendar-column">
        <input type="hidden" name="index" value={ positionIndex } />
        <input type="hidden" name="start" value={ period.date.format() } />
        <input type="text" name="id" />
      </form>
    </div>
  )

}

export default CalendarEmptyCellView
