import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import {_} from 'lodash'


const AppContainer = ( { calendar, positions } ) => {
  const startPoint = moment( calendar.startTime )

  const periods = _.range( calendar.numberOfUnits ).map( (unitAfterStart) => {
    const date = startPoint.clone().add( unitAfterStart, calendar.timeUnit )
    const periodPositions = positions.filter( (position) => {
      return date.isBetween(position.start, position.end, null, []);
    })
    return {date: date, positions: periodPositions}
  })

  const columns = periods.map( ( period ) =>{
    const positionCells = period.positions.map( position => <div key={position.id}> {position.name} </div> )
    const dateString = period.date.format('YYYY/MM/DD HH MM')
    return(
      <div key={ dateString }>
        <div> { dateString } </div>
        { positionCells }
      </div>
    )
  })


  return(
    <div className="calendar">
      { columns }
    </div>
  )
}

const mapStateToProps = (state, {params, location})=>{
  return state
}

export default connect( mapStateToProps )( AppContainer )
