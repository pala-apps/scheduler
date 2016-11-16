const intitalState = {
  calendar: {
    timeUnit: "week",
    startTime: "2016-11-12T00:00",
    numberOfUnits: 5
  },
  shifts:[
    {id: 1, roleId: 1, start:"2016-11-14T00:00", end:"2016-12-14T00:00"},
    {id: 2, roleId: 2, start:"2016-11-14T00:00", end:"2016-12-14T00:00"},
    {id: 3, roleId: 2, start:"2016-11-14T00:00", end:"2016-11-21T00:00"},
  ],
  roles: [
    { id: 1, name: "JS Teacher", duration: 2, timeUnit: "day" },
    { id: 2, name: "JS Assistant", duration: 3, timeUnit: "week" }
  ]
}

export default function(state = intitalState, action){


  switch ( action.type ) {
    case "ADD_SHIFT":
      const newShifts = state.shifts.concat( action.shift )
      return Object.assign( {}, state, { shifts: newShifts } )
    default:
      return state
  }
}
