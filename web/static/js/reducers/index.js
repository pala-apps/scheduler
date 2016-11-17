import moment from 'moment'
import Immutable from "immutable"

const newInitialState = Immutable.fromJS({
  calendar: {
    timeUnit: "week",
    startTime: "2016-11-07T00:00",
    numberOfUnits: 21
  },
  teams:[
      {
        name: "Misc.",
        positions: []
      }
    // { name: "Cohort 9",
    //   positions: [
    //     { name:"Instructor 1",
    //       shifts: [
    //         {id: 1, roleId: 1, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
    //         {id: 5, roleId: 4, start:"2017-01-09T00:00", end:"2017-01-27T00:00"},
    //         {id: 9, roleId: 5, start:"2017-01-30T00:00", end:"2017-02-04T00:00"},
    //         {id: 10, roleId: 6, start:"2017-02-06T00:00", end:"2017-03-03T00:00"},
    //         {id: 11, roleId: 7, start:"2017-03-06T00:00", end:"2017-03-24T00:00"}
    //       ]
    //     },
    //     { name:"Instructor 2",
    //       shifts: [
    //         {id: 1, roleId: 1, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
    //         {id: 5, roleId: 4, start:"2017-01-09T00:00", end:"2017-01-27T00:00"},
    //         {id: 9, roleId: 5, start:"2017-01-30T00:00", end:"2017-02-04T00:00"},
    //         {id: 10, roleId: 6, start:"2017-02-06T00:00", end:"2017-03-03T00:00"},
    //         {id: 11, roleId: 7, start:"2017-03-06T00:00", end:"2017-03-24T00:00"}
    //       ]
    //     },
    //     {
    //       name: "TA 1",
    //       shifts: [
    //         {id: 3, roleId: 2, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
    //         {id: 7, roleId: 3, start:"2017-01-09T00:00", end:"2017-03-24T00:00"}
    //       ]
    //     },
    //     {
    //       name: "TA 2",
    //       shifts: [
    //         {id: 3, roleId: 2, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
    //         {id: 7, roleId: 3, start:"2017-01-09T00:00", end:"2017-03-24T00:00"}
    //       ]
    //     }
    //   ]
    // },
    // { name: "Cohort 10",
    //   positions: [
    //     { name:"Instructor 1",
    //       shifts: [
    //         {id: 1, roleId: 1, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
    //         {id: 5, roleId: 4, start:"2017-01-09T00:00", end:"2017-01-27T00:00"},
    //         {id: 9, roleId: 5, start:"2017-01-30T00:00", end:"2017-02-04T00:00"},
    //         {id: 10, roleId: 6, start:"2017-02-06T00:00", end:"2017-03-03T00:00"},
    //         {id: 11, roleId: 7, start:"2017-03-06T00:00", end:"2017-03-24T00:00"}
    //       ]
    //     },
    //     { name:"Instructor 2",
    //       shifts: [
    //         {id: 1, roleId: 1, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
    //         {id: 5, roleId: 4, start:"2017-01-09T00:00", end:"2017-01-27T00:00"},
    //         {id: 9, roleId: 5, start:"2017-01-30T00:00", end:"2017-02-04T00:00"},
    //         {id: 10, roleId: 6, start:"2017-02-06T00:00", end:"2017-03-03T00:00"},
    //         {id: 11, roleId: 7, start:"2017-03-06T00:00", end:"2017-03-24T00:00"}
    //       ]
    //     },
    //     {
    //       name: "TA 1",
    //       shifts: [
    //         {id: 3, roleId: 2, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
    //         {id: 7, roleId: 3, start:"2017-01-09T00:00", end:"2017-03-24T00:00"}
    //       ]
    //     },
    //     {
    //       name: "TA 2",
    //       shifts: [
    //         {id: 3, roleId: 2, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
    //         {id: 7, roleId: 3, start:"2017-01-09T00:00", end:"2017-03-24T00:00"}
    //       ]
    //     }
    //   ]
    // }
  ],
  roles: [
    { id: 1, name: "Ruby Instructor", duration: 5, timeUnit: "week" },
    { id: 2, name: "Teaching Assistant", duration: 5, timeUnit: "week" },
    { id: 3, name: "Teaching Assistant", duration: 11, timeUnit: "week" },
    { id: 4, name: "Java Instructor", duration: 3, timeUnit: "week" },
    { id: 5, name: "CS Instructor", duration: 1, timeUnit: "week" },
    { id: 6, name: "JS Instructor", duration: 4, timeUnit: "week" },
    { id: 7, name: "Web Framework Instructor", duration: 3, timeUnit: "week" },
  ]
})

const intitalState = {
  calendar: {
    timeUnit: "week",
    startTime: "2016-11-12T00:00",
    numberOfUnits: 21
  },
  shiftGroups: [
    {
      name: "Cohort 9 Instructor",
      shifts: [
        {id: 1, roleId: 1, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
        {id: 5, roleId: 4, start:"2017-01-09T00:00", end:"2017-01-27T00:00"},
        {id: 9, roleId: 5, start:"2017-01-30T00:00", end:"2017-02-04T00:00"},
        {id: 10, roleId: 6, start:"2017-02-06T00:00", end:"2017-03-03T00:00"},
        {id: 11, roleId: 7, start:"2017-03-06T00:00", end:"2017-03-24T00:00"}
      ]
    },
    {
      name: "Cohort 9 Instructor",
      shifts: [
        {id: 1, roleId: 1, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
        {id: 5, roleId: 4, start:"2017-01-09T00:00", end:"2017-01-27T00:00"},
        {id: 9, roleId: 5, start:"2017-01-30T00:00", end:"2017-02-04T00:00"},
        {id: 10, roleId: 6, start:"2017-02-06T00:00", end:"2017-03-03T00:00"},
        {id: 11, roleId: 7, start:"2017-03-06T00:00", end:"2017-03-24T00:00"}
      ]
    },
    {
      name: "Cohort 9 TA",
      shifts: [
        {id: 3, roleId: 2, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
        {id: 7, roleId: 3, start:"2017-01-09T00:00", end:"2017-03-24T00:00"}
      ]
    },
    {
      name: "Cohort 9 TA",
      shifts: [
        {id: 3, roleId: 2, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
        {id: 7, roleId: 3, start:"2017-01-09T00:00", end:"2017-03-24T00:00"}
      ]
    }
  ],
  shifts:[
    // {id: 1, roleId: 1, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
    // {id: 2, roleId: 1, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
    // {id: 3, roleId: 2, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
    // {id: 4, roleId: 2, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
    // {id: 5, roleId: 4, start:"2017-01-09T00:00", end:"2017-01-27T00:00"},
    // {id: 6, roleId: 4, start:"2017-01-09T00:00", end:"2017-01-27T00:00"},
    // {id: 7, roleId: 3, start:"2017-01-09T00:00", end:"2017-03-24T00:00"},
    // {id: 8, roleId: 3, start:"2017-01-09T00:00", end:"2017-03-24T00:00"},
    // {id: 9, roleId: 5, start:"2017-01-30T00:00", end:"2017-02-04T00:00"},
    // {id: 10, roleId: 6, start:"2017-02-06T00:00", end:"2017-03-03T00:00"},
    // {id: 11, roleId: 7, start:"2017-03-06T00:00", end:"2017-03-24T00:00"}
  ],
  roles: [
    { id: 1, name: "Ruby Instructor", duration: 5, timeUnit: "week" },
    { id: 2, name: "Teaching Assistant", duration: 5, timeUnit: "week" },
    { id: 3, name: "Teaching Assistant", duration: 11, timeUnit: "week" },
    { id: 4, name: "Java Instructor", duration: 3, timeUnit: "week" },
    { id: 5, name: "CS Instructor", duration: 1, timeUnit: "week" },
    { id: 6, name: "JS Instructor", duration: 4, timeUnit: "week" },
    { id: 7, name: "Web Framework Instructor", duration: 3, timeUnit: "week" },
  ]
}



export default function(state = newInitialState, action){
  switch ( action.type ) {
    // case "ADD_ROLE":
    //   const newRoles = state.roles.concat( action.role );
    //   return Object.assign( {}, state, { roles: newRoles } )
    // case "ADD_SHIFT":
    //   const newShifts = state.shifts.concat( action.shift )
    //   return Object.assign( {}, state, { shifts: newShifts } )
    case "ADD_POSITION":
      let position = Immutable.fromJS(action.position)
      return state.updateIn( [ 'teams', 0, 'positions' ], list => list.push( position.set( "shifts", [] ) ) )
    case "ALTER_START_TIME":
      return state.updateIn( ['calendar', 'startTime'], (oldTime) =>{
        return moment( oldTime ).add( action.change, state.getIn( ["calendar", "timeUnit"] ) ).format()
      })
    case "SET_TIME_UNIT":
      return state.update( "calendar", (calendar) =>{
        const momentUnit = action.unit === "week" ? "isoweek" : action.unit  // using just week moment start week on Sunday
        const roundedTime = moment( calendar.get("startTime") ).startOf(momentUnit).format()
        return calendar.merge( { timeUnit: action.unit, startTime: roundedTime })
      })
    case "SET_NUMBER_OF_CALENDAR_UNITS":
      return state.setIn(["calendar", "numberOfUnits"], action.length )
    default:
      return state
  }
}
