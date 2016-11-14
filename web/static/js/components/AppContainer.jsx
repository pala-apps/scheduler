import React from 'react'
import { connect } from 'react-redux'


const AppContainer = ( { } ) => {

  const periods = [
    "14/11/2016", "21/11/2016", "28/11/2016", "05/12/2016"
  ]

  const departments = [

  ]
  //
  // const periods = [
  //   {
  //     date: "14/11/2015",
  //     departments;
  //   }
  // ]

  const headers = periods.map( periodString => <div key={periodString}> { periodString } </div> )
  return(
    <div className="l-flex">
      { headers }
    </div>
  )
}

const mapStateToProps = (state, {params, location})=>{
  return state
}

export default connect( mapStateToProps )( AppContainer )
