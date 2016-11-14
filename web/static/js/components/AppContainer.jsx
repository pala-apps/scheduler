import React from 'react'
import { connect } from 'react-redux'


const AppContainer = ( { } ) => {
  return(
    <div className="">
      AppContainer
    </div>
  )
}


const mapStateToProps = (state, {params, location})=>{
  return state
}

export default connect( mapStateToProps )( AppContainer )
