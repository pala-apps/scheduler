import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import moment from 'moment'
import {_} from 'lodash'
import ShiftForm from './ShiftForm'
import RoleForm from './RoleForm'
import formSerializer from "../libs/formSerializer"
import actions from "../actions"
import CalendarNav from './CalendarNav'


function shiftInPeriod(shift, periodStart, periodEnd){
  //Finished after period began and started before period ended
  return periodStart.isBefore( shift.end ) && periodEnd.isAfter( shift.start )
}

const AppContainer = ( { calendar, shifts, shiftGroups, roles, isAddingRole, dispatch } ) => {

  const findRoleById = (id) => {
    return roles.find( role => role.id === Number( id ) )
  }

  const addRole = ( e ) => {
    e.preventDefault();
    let role = formSerializer( e.target.children )
    role = Object.assign( {}, role, { id: roles.length + 1 } )
    dispatch( actions.addRole( role ) )
  }

  const alterStateTime = ( change ) => {
    return (e) => { dispatch( actions.alterStartTime( change ) ) }
  }

  const setTimeUnit = ( unit ) => {
    return (e) => { dispatch( actions.setTimeUnit( unit ) ) }
  }

  const setCalendarLength = ( length ) => {
    dispatch( actions.setNumberOfCalendarUnits( length ) )
  }

  const addShift = ( e ) => {
    e.preventDefault();
    let shift = formSerializer( e.target.children )
    const shiftRole = findRoleById( shift.roleId )
    const endDateTime = moment( shift.start ).add( shiftRole.duration, shiftRole.timeUnit ).format()
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
  console.log('totalDurations', totalDuration)

  const rows = shifts.map( ( shift ) => {
    const shiftStart =  moment(shift.start)
    const shiftEnd =  moment(shift.end)
    const shiftDuration = shiftEnd.diff( shiftStart )

    const shiftOffset = shiftStart.diff( startPoint )

    const widthPercentage = (shiftDuration / totalDuration) * 100
    const leftPercentage = (shiftOffset / totalDuration) * 100

    const role = findRoleById( shift.roleId )

    console.log( "role", role )

    return (
      <div className="calendar-row">
        <div className="calendar-row-header">
          { role.name }
        </div>
        <div className="calendar-cells">
          <div className="calendar-shift-active" style={ {left:`${leftPercentage}%`, width: `${widthPercentage}%`} }>
            {shift.id}
          </div>
        </div>
      </div>
    )
  })

  const shiftGroupsDisplay = shiftGroups.map( ( shiftGroup ) => {


    const shifts = shiftGroup.shifts.map( ( shift ) => {
      const shiftStart =  moment(shift.start)
      const shiftEnd =  moment(shift.end)
      const shiftDuration = shiftEnd.diff( shiftStart )

      const shiftOffset = shiftStart.diff( startPoint )

      const widthPercentage = (shiftDuration / totalDuration) * 100
      const leftPercentage = (shiftOffset / totalDuration) * 100

      // const role = findRoleById( shift.roleId )
      return (
        <div className="calendar-shift-active" style={ {left:`${leftPercentage}%`, width: `${widthPercentage}%`} }>
          {shift.id}
        </div>
      )

    })

    return (

      <div className="calendar-row">
        <div className="calendar-row-header">
          { shiftGroup.name }
        </div>
        <div className="calendar-cells">
          { shifts }
        </div>
      </div>
    )


  })




  const roleForm = isAddingRole ? <RoleForm onSubmit={ addRole } /> : null;

  return(
    <div>
      <CalendarNav
        userTimeUnit={ calendar.timeUnit }
        startString={startPoint.format('DD MMM YYYY')}
        endString={endPoint.format('DD MMM YYYY')}
        showHours={ setTimeUnit("hour") }
        showDays={ setTimeUnit("day") }
        showWeeks={ setTimeUnit("week") }
        goBack={ alterStateTime(-1) }
        goForward={ alterStateTime(1) }
        numberOfUnits={ calendar.numberOfUnits }
        updateDuration = { setCalendarLength }
        />
      <div className="calendar">
        <div className="calendar-column-title calendar-row-header">
          Roles
        </div>
        <div className="calendar-cells l-flex">
          { headers }
        </div>



        <div>
          { shiftGroupsDisplay }
          { rows }
        </div>



      </div>
      <div>
        { roleForm }
      </div>

    </div>
  )
}

const mapStateToProps = (state, {params, location})=>{
  console.log( state, "state" )
  const isAddingRole = location.pathname === "/role/new"
  return Object.assign( {}, state, { isAddingRole } )
}

export default connect( mapStateToProps )( AppContainer )
