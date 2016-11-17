import React from 'react'
import { connect } from 'react-redux'
import actions from "../actions"
import moment from 'moment'
import {_} from 'lodash'
import CalendarRowView from './CalendarRowView'
import CalendarHeaderRowView from './CalendarHeaderRowView'

import formSerializer from "../libs/formSerializer"

const CalendarContainer = ( {calendar, teams, roles, dispatch} ) => {

  const addShift = ( e ) => {
    e.preventDefault();
    let shift = formSerializer( e.target.children )
    const endDateTime = moment( shift.start ).add( 2, 'week' ).format()
    shift = Object.assign( {}, shift, { end: endDateTime } )
    dispatch( actions.addShift( shift ) )
  }

  const addPosition = (e) => {
    e.preventDefault();
    let position = formSerializer( e.target.children )
    dispatch( actions.addPosition( position ) )
  }

  const startPoint = moment( calendar.startTime )
  const endPoint = startPoint.clone().add( calendar.numberOfUnits, calendar.timeUnit )

  const periods = _.range( calendar.numberOfUnits ).map( (unitAfterStart) => {
    const periodStart = startPoint.clone().add( unitAfterStart, calendar.timeUnit )
    return {date: periodStart}
  })


  const totalDuration = endPoint.diff( startPoint )

  const rowGroups = teams.map( (team, teamIndex)=>{
    const rows = team.positions.map( ( position, positionIndex ) => {
      return(
        <CalendarRowView
          position={position}
          positionIndex={positionIndex}
          startPoint={ startPoint }
          totalDuration= {totalDuration}
          periods= {periods}
          numberOfUnits={ calendar.numberOfUnits}
          addShift={ addShift }
        />
    )
    })

    return(
      <div className="calendar-row-group">
        { team.name }
        {rows}
      </div>
    )
  })

  return (
    <div className="calendar">
      <CalendarHeaderRowView periods={periods} timeUnit={calendar.timeUnit}/>
      <div>
        { rowGroups }
        <form onSubmit={ addPosition }>
          <input type="text" name="name" />
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state, {params, location})=>{
  return state.toJS()
}

export default connect( mapStateToProps )( CalendarContainer )
