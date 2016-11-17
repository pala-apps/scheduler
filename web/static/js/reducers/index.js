import moment from 'moment'

const newInitialState = {
  calendar: {
    timeUnit: "week",
    startTime: "2016-11-07T00:00",
    numberOfUnits: 21
  },
  teams:[
    { name: "Cohort 9",
      positions: [
        { name:"Instructor 1",
          shifts: [
            {id: 1, roleId: 1, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
            {id: 5, roleId: 4, start:"2017-01-09T00:00", end:"2017-01-27T00:00"},
            {id: 9, roleId: 5, start:"2017-01-30T00:00", end:"2017-02-04T00:00"},
            {id: 10, roleId: 6, start:"2017-02-06T00:00", end:"2017-03-03T00:00"},
            {id: 11, roleId: 7, start:"2017-03-06T00:00", end:"2017-03-24T00:00"}
          ]
        },
        { name:"Instructor 2",
          shifts: [
            {id: 1, roleId: 1, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
            {id: 5, roleId: 4, start:"2017-01-09T00:00", end:"2017-01-27T00:00"},
            {id: 9, roleId: 5, start:"2017-01-30T00:00", end:"2017-02-04T00:00"},
            {id: 10, roleId: 6, start:"2017-02-06T00:00", end:"2017-03-03T00:00"},
            {id: 11, roleId: 7, start:"2017-03-06T00:00", end:"2017-03-24T00:00"}
          ]
        },
        {
          name: "TA 1",
          shifts: [
            {id: 3, roleId: 2, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
            {id: 7, roleId: 3, start:"2017-01-09T00:00", end:"2017-03-24T00:00"}
          ]
        },
        {
          name: "TA 2",
          shifts: [
            {id: 3, roleId: 2, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
            {id: 7, roleId: 3, start:"2017-01-09T00:00", end:"2017-03-24T00:00"}
          ]
        }
      ]
    },
    { name: "Cohort 10",
      positions: [
        { name:"Instructor 1",
          shifts: [
            {id: 1, roleId: 1, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
            {id: 5, roleId: 4, start:"2017-01-09T00:00", end:"2017-01-27T00:00"},
            {id: 9, roleId: 5, start:"2017-01-30T00:00", end:"2017-02-04T00:00"},
            {id: 10, roleId: 6, start:"2017-02-06T00:00", end:"2017-03-03T00:00"},
            {id: 11, roleId: 7, start:"2017-03-06T00:00", end:"2017-03-24T00:00"}
          ]
        },
        { name:"Instructor 2",
          shifts: [
            {id: 1, roleId: 1, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
            {id: 5, roleId: 4, start:"2017-01-09T00:00", end:"2017-01-27T00:00"},
            {id: 9, roleId: 5, start:"2017-01-30T00:00", end:"2017-02-04T00:00"},
            {id: 10, roleId: 6, start:"2017-02-06T00:00", end:"2017-03-03T00:00"},
            {id: 11, roleId: 7, start:"2017-03-06T00:00", end:"2017-03-24T00:00"}
          ]
        },
        {
          name: "TA 1",
          shifts: [
            {id: 3, roleId: 2, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
            {id: 7, roleId: 3, start:"2017-01-09T00:00", end:"2017-03-24T00:00"}
          ]
        },
        {
          name: "TA 2",
          shifts: [
            {id: 3, roleId: 2, start:"2016-11-21T00:00", end:"2016-12-24T00:00"},
            {id: 7, roleId: 3, start:"2017-01-09T00:00", end:"2017-03-24T00:00"}
          ]
        }
      ]
    }
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
      const momentUnit = action.unit === "week" ? "isoweek" : action.unit  // using just week moment start week on Sunday
      const roundedTime = moment(state.calendar.startTime).startOf(momentUnit).format()
      const calendarNewtime = Object.assign( {}, state.calendar, { timeUnit: action.unit, startTime: roundedTime })
      return Object.assign( {}, state, { calendar: calendarNewtime })
    case "SET_NUMBER_OF_CALENDAR_UNITS":
      const calendarWithNewLength= Object.assign( {}, state.calendar, { numberOfUnits: action.length })
      return Object.assign( {}, state, { calendar: calendarWithNewLength })
    default:
      return state
  }
}
