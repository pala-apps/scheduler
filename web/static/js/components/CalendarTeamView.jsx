import React from 'react'

const CalendarTeamView = ({period, timeUnit})=>{
  const dateString = period.date.format('YYYY-MM-DDTHH:mm');
  const viewString = timeUnit === "hour" ?  period.date.format( 'HH:mm' ) : period.date.format('DD MMM YYYY');
  return(
      <div key={ dateString } className="calendar-column l-flex-1">
        <div className="calendar-column-title"> { viewString } </div>
       </div>
  )
}

export default CalendarTeamView
