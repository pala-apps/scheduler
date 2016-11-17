import React from 'react'
import { connect } from 'react-redux'
import formSerializer from "../libs/formSerializer"
import actions from "../actions"
import moment from 'moment'
import {_} from 'lodash'

const CalendarContainer = ( {calendar, teams, roles, dispatch} ) => {
  
  const addPosition = (e) => {
    e.preventDefault();
    let position = formSerializer( e.target.children )
    dispatch( actions.addPosition( position ) )
  }

  const addShift = ( e ) => {
    e.preventDefault();
    let shift = formSerializer( e.target.children )
    const endDateTime = moment( shift.start ).add( 2, 'week' ).format()
    shift = Object.assign( {}, shift, { end: endDateTime } )
    dispatch( actions.addShift( shift ) )
  }

  const startPoint = moment( calendar.startTime )
  const endPoint = startPoint.clone().add( calendar.numberOfUnits, calendar.timeUnit )

  const periods = _.range( calendar.numberOfUnits ).map( (unitAfterStart) => {
    const periodStart = startPoint.clone().add( unitAfterStart, calendar.timeUnit )
    return {date: periodStart}
  })

  const headers = periods.map( ( period, index ) =>{
    const dateString = period.date.format('YYYY-MM-DDTHH:mm');
    const viewString = calendar.timeUnit === "hour" ?  period.date.format( 'HH:mm' ) : period.date.format('DD MMM YYYY');
    return(
        <div key={ dateString } className="calendar-column l-flex-1">
          <div className="calendar-column-title"> { viewString } </div>
         </div>
    )
  })

  const totalDuration = endPoint.diff( startPoint )

  const rowGroups = teams.map( (team, teamIndex)=>{
    const rows = team.positions.map( ( position, positionIndex ) => {
      const shifts = position.shifts.map( ( shift ) => {
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
      })

      const shiftCells = periods.map( ( period ) => {
        return(
          <div style={ { width: `${ 100 / calendar.numberOfUnits }%` }}>
            <form onSubmit={ addShift } className="calendar-column">
              <input type="hidden" name="index" value={ positionIndex } />
              <input type="hidden" name="start" value={ period.date.format() } />
              <input type="text" name="id" />
            </form>
          </div>
        )
      })

      return (
        <div className="calendar-row">
          <div className="calendar-row-header">
            { position.name }
          </div>
          <div className="calendar-cells l-flex">
            { shiftCells }
            { shifts }
          </div>
        </div>
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
      <div className="calendar-column-title calendar-row-header">
        Positions
      </div>
      <div className="calendar-cells l-flex">
        { headers }
      </div>

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
