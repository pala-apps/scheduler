import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import {_} from 'lodash'
import PositionForm from './PositionForm'

const AppContainer = ( { calendar, positions, handleSubmit } ) => {
  const startPoint = moment( calendar.startTime )

  const periods = _.range( calendar.numberOfUnits ).map( (unitAfterStart) => {
    const date = startPoint.clone().add( unitAfterStart, calendar.timeUnit )
    const periodPositions = positions.filter( (position) => {
      return date.isBetween(position.start, position.end, null, []);
    })
    return {date: date, positions: periodPositions}
  })

  const columns = periods.map( ( period, index ) =>{
    const positionCells = period.positions.map( position => <div key={position.id}> {position.name} </div> )
    const dateString = period.date.format('YYYY/MM/DD HH MM');

    let newPositionForm = <PositionForm index={index} />

    return(
      <div key={ dateString }>
        <div> { dateString } </div>
        { positionCells }
        { newPositionForm }
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
