import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import moment from 'moment'
import {_} from 'lodash'
import ShiftForm from './ShiftForm'
import RoleForm from './RoleForm'
import formSerializer from "../libs/formSerializer"
import actions from "../actions"

function shiftInPeriod(shift, periodStart, periodEnd){
  //Finished after period began and started before period ended
  return periodStart.isBefore( shift.end ) && periodEnd.isAfter( shift.start )
}

const AppContainer = ( { calendar, shifts, roles, isAddingRole, dispatch } ) => {

  const findRoleById = (id) => {
    return roles.find( role => role.id === Number( id ) )
  }

  const addRole = ( e ) => {
    e.preventDefault();
    let role = formSerializer( e.target.children )
    role = Object.assign( {}, role, { id: roles.length + 1 } )
    dispatch( actions.addRole( role ) )
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

  const periods = _.range( calendar.numberOfUnits ).map( (unitAfterStart) => {
    const periodStart = startPoint.clone().add( unitAfterStart, calendar.timeUnit )
    const periodEnd = periodStart.clone().add( 1, calendar.timeUnit )

    const periodShifts = shifts.filter( (shift) => {
      return shiftInPeriod(shift, periodStart, periodEnd)
    })
    return {date: periodStart, shifts: periodShifts}
  })

  const columns = periods.map( ( period, index ) =>{
    const shiftCells = period.shifts.map( ( shift ) => {
      const shiftRole = findRoleById( shift.roleId )
      return (
        <div key={shift.id}>
          {shiftRole.name}
        </div>)
    } )
    const dateString = period.date.format('YYYY-MM-DDTHH:mm');

    let newShiftForm = <ShiftForm onSubmit={ addShift } roles={ roles } startDate={ dateString } />

    return(
      <div key={ dateString }>
        <div> { dateString } </div>
        { shiftCells }
        { newShiftForm }
        <Link to="/role/new">Add new role</Link>
      </div>
    )
  })

  const roleForm = isAddingRole ? <RoleForm onSubmit={ addRole } /> : null;

  return(
    <div>
      <div className="calendar">
        { columns }
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
