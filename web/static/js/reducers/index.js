const intitalState = {
  calendar: {
    timeUnit: "week",
    startTime: "2016-11-14 00:00",
    numberOfUnits: 4
  },
  positions:[
    {id: 1, name: "JS Teacher", start:"2016-11-14 00:00", end:"2016-12-14 00:00"},
    {id: 2, name: "JS Assist One", start:"2016-11-14 00:00", end:"2016-12-14 00:00"},
    {id: 3, name: "JS Assist Two", start:"2016-11-14 00:00", end:"2016-11-21 00:00"},
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
