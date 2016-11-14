// import

const intitalState = {
  calendar: {
    timeUnit: "week",
    startDate: "14/11/2016",
    endDate: "14/12/2016"
  },
  positions:[
    {id: 1, name: "JS Teacher", start:"14/11/2016", end:"14/12/2016"},
    {id: 2, name: "JS Assist", start:"14/11/2016", end:"14/12/2016"},
    {id: 3, name: "JS Assist", start:"14/11/2016", end:"14/12/2016"},
  ]
}

export default function(state = intitalState, action){
  return state
}
