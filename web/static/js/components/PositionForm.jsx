import React from 'react'

const PositionForm = ( {onSubmit} ) => {

  return(
    <form onSubmit={ onSubmit }>
      <input name="position" type="text" placeholder="Position..." />
      <input type="submit" />
    </form>
  )

}

export default PositionForm;
