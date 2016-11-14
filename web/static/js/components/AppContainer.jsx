import React from 'react'
import { connect } from 'react-redux'


const AppContainer = ( { } ) => {


  const periods = [
    { date: "14/11/2016", positions: [ {name: "JS Teacher"}, {name: "JS Assist"}, {name: "JS Assist"} ] },
    { date: "21/11/2016", positions: [ {name: "JS Teacher"}, {name: "JS Assist"}, {name: "JS Assist"} ] },
    { date: "28/11/2016", positions: [ {name: "JS Teacher"}, {name: "JS Assist"}, {name: "JS Assist"} ] }
  ]

  const columns = periods.map( ( period ) =>{
    const positionCells = period.positions.map( position => <div> {position.name} </div> )
    return(
      <div>
        <div> { period.date } </div>
        { positionCells }
      </div>
    )
  })


  return(
    <div className="calendar">
      { columns }
    </div>
  )
}

const mapStateToProps = (state, {params, location})=>{
  return state
}

export default connect( mapStateToProps )( AppContainer )
