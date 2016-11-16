import React from 'react'

const PositionForm = ( {onSubmit} ) => {

  return(
    <form onSubmit={ onSubmit }>
      <input name="name" type="text" placeholder="Position..." />
      <input name="start" type="datetime-local" />
      <input name="end" type="datetime-local" />
      <input type="submit" />
    </form>
  )

}

export default PositionForm;
