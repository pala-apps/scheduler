import React from 'react'
import CalendarShiftCellView from "./CalendarShiftCellView"
import CalendarEmptyCellView from "./CalendarEmptyCellView"


const CalendarRowView = ( {position, positionIndex, startPoint, totalDuration, periods, numberOfUnits, addShift} ) => {

  const shiftCells = position.shifts.map( ( shift, index ) => {
    return <CalendarShiftCellView key={ index } shift={ shift } startPoint={ startPoint } totalDuration={ totalDuration } />
  })

  const emptyCells = periods.map( ( period, index ) => {
    return <CalendarEmptyCellView key={ index } addShift={ addShift } period={ period } numberOfUnits={ numberOfUnits } positionIndex={ positionIndex } />
  })

  return (
    <div className="calendar-row">
      <div className="calendar-row-header">
        { position.name }
      </div>
      <div className="calendar-cells l-flex">
        { emptyCells }
        { shiftCells }
      </div>
    </div>
  )
}

export default CalendarRowView
