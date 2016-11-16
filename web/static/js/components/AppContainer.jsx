import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import {_} from 'lodash'
import PositionForm from './PositionForm'
import formSerializer from "../libs/formSerializer"
import actions from "../actions"

function positionInPeriod(position, periodStart, periodEnd){
  //Finished after period began and started before period ended
  return periodStart.isBefore( position.end ) && periodEnd.isAfter( position.start )
}


const AppContainer = ( { calendar, positions, dispatch } ) => {

  const addPosition = ( e ) => {
    e.preventDefault();
    console.log( "add position container hit" )
    const position = formSerializer( e.target.children )
    console.log("position", position)
    dispatch( actions.addPosition( position ) )
  }

  const startPoint = moment( calendar.startTime )

  const periods = _.range( calendar.numberOfUnits ).map( (unitAfterStart) => {
    const periodStart = startPoint.clone().add( unitAfterStart, calendar.timeUnit )
    const periodEnd = periodStart.clone().add( 1, calendar.timeUnit )

    const periodPositions = positions.filter( (position) => {
      return positionInPeriod(position, periodStart, periodEnd)
    })
    return {date: periodStart, positions: periodPositions}
  })

  const columns = periods.map( ( period, index ) =>{
    const positionCells = period.positions.map( position => <div key={position.id}> {position.name} </div> )
    const dateString = period.date.format('YYYY/MM/DD HH MM');

    let newPositionForm = <PositionForm onSubmit={ addPosition } />

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
  console.log( "State", state )
  return state
}

export default connect( mapStateToProps )( AppContainer )
