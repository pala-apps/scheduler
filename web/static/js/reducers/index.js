const intitalState = {
  calendar: {
    timeUnit: "days",
    startTime: "2016-11-14 00:00",
    numberOfUnits: 10
  },
  positions:[
    {id: 1, roleId: 1, start:"2016-11-14 00:00", end:"2016-12-14 00:00"},
    {id: 2, roleId: 2, start:"2016-11-14 00:00", end:"2016-12-14 00:00"},
    {id: 3, roleId: 2, start:"2016-11-14 00:00", end:"2016-11-21 00:00"},
  ],
  roles: [
    { id: 1, name: "JS Teacher", duration: 2, timeUnit: "days" },
    { id: 2, name: "JS Assistant", duration: 3, timeUnit: "weeks" }
  ]
}

export default function(state = intitalState, action){


  switch ( action.type ) {
    case "ADD_POSIITON":
      const newPositions = state.positions.concat( action.position )
      return Object.assign( {}, state, { positions: newPositions } )
    default:
      return state
  }
}
