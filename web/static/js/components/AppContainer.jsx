import React from 'react'
import { connect } from 'react-redux'


const AppContainer = ( { } ) => {

  const periods = [
    "14/11/2016", "21/11/2016", "28/11/2016", "05/12/2016"
  ]

  const departments = [
    { name: "Cohort 7",
      periods: [1,1,1,1]
    },
    { name: "Cohort 8",
      periods: [2,2,2,1]
    }
  ]

  const teams = {
    1: { name:"Java" },
    2: { name:"JS" }
  }

  //
  // const periods = [
  //   {
  //     date: "14/11/2015",
  //     departments;
  //   }
  // ]

  const headers = periods.map( periodString => <div key={periodString}> { periodString } </div> )

  const rows = departments.map( (department) =>{
    const periodItems = department.periods.map( teamId => <div> { teams[teamId].name } </div> )
    return(
      <div className="row">
        { periodItems }
      </div>
    )
  })


  return(
    <div className="calendar">
      <div className="row">
        { headers }
      </div>
      { rows }
    </div>
  )
}

const mapStateToProps = (state, {params, location})=>{
  return state
}

export default connect( mapStateToProps )( AppContainer )
