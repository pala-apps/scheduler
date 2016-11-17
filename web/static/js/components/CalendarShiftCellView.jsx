import React from 'react'
import moment from 'moment'

const CalendarShiftCellView = ({ shift, startPoint, totalDuration }) => {

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

}

export default CalendarShiftCellView
