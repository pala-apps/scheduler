import React from 'react'
import CalendarHeaderCellView from './CalendarHeaderCellView'

const CalendarHeaderRowView = ( {periods, timeUnit} )=> {
  const headers = periods.map( ( period ) =>{
    return (<CalendarHeaderCellView period={period} timeUnit={timeUnit} />)
  })

  return(
      <div>
      <div className="calendar-column-title calendar-row-header">
        Positions
      </div>
      <div className="calendar-cells l-flex">
        { headers }
      </div>
    </div>
  )
}

export default CalendarHeaderRowView
