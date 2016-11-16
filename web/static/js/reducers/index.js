import moment from 'moment'

const intitalState = {
  calendar: {
    timeUnit: "week",
    startTime: "2016-11-12T00:00",
    numberOfUnits: 5
  },
  shifts:[
    {id: 1, roleId: 1, start:"2016-11-14T00:00", end:"2016-12-14T00:00"},
    {id: 2, roleId: 2, start:"2016-11-14T00:00", end:"2016-12-14T00:00"},
    {id: 3, roleId: 2, start:"2016-11-14T00:00", end:"2016-11-21T00:00"}
  ],
  roles: [
    { id: 1, name: "JS Teacher", duration: 2, timeUnit: "day" },
    { id: 2, name: "JS Assistant", duration: 3, timeUnit: "week" }
  ]
}



export default function(state = intitalState, action){
  switch ( action.type ) {
    case "ADD_ROLE":
      const newRoles = state.roles.concat( action.role );
      return Object.assign( {}, state, { roles: newRoles } )
    case "ADD_SHIFT":
      const newShifts = state.shifts.concat( action.shift )
      return Object.assign( {}, state, { shifts: newShifts } )
    case "ALTER_START_TIME":
      const alteredTime = moment(state.calendar.startTime).add(action.change, state.calendar.timeUnit).format()
      const newCalendar = Object.assign( {}, state.calendar, { startTime: alteredTime })
      return Object.assign( {}, state, { calendar: newCalendar })
    case "SET_TIME_UNIT":
      const calendarNewtime = Object.assign( {}, state.calendar, { timeUnit: action.unit })
      return Object.assign( {}, state, { calendar: calendarNewtime })
    default:
      return state
  }
}
