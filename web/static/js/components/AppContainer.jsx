import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import moment from 'moment'
import {_} from 'lodash'
import formSerializer from "../libs/formSerializer"
import actions from "../actions"
import CalendarNav from './CalendarNav'
import CalendarContainer from './CalendarContainer'


const AppContainer = ( { calendar, teams, roles, isAddingRole, dispatch } ) => {

  const startPoint = moment( calendar.startTime )
  const endPoint = startPoint.clone().add( calendar.numberOfUnits, calendar.timeUnit )

  const findRoleById = (id) => {
    return roles.find( role => role.id === Number( id ) )
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
      <CalendarContainer/>

    </div>
  )
}

const mapStateToProps = (state, {params, location})=>{
  return state.toJS()
}

export default connect( mapStateToProps )( AppContainer )
