import React from 'react'


const CalendarHeaderRowView = ( {periods, timeUnit} )=> {
  const headers = periods.map( ( period, index ) =>{
    const dateString = period.date.format('YYYY-MM-DDTHH:mm');
    const viewString = timeUnit === "hour" ?  period.date.format( 'HH:mm' ) : period.date.format('DD MMM YYYY');
    return(
        <div key={ dateString } className="calendar-column l-flex-1">
          <div className="calendar-column-title"> { viewString } </div>
         </div>
    )
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
