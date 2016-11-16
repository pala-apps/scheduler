import React from 'react'

const RoleForm = ( { onSubmit } ) => {

  return (
    <form onSubmit={ onSubmit }>
      <label>Role name:</label>
      <input name="name" type="text" />
      <label>Role duration:</label>
      <input name="duration" type="number" />
      <select name="timeUnit" >
        <option value="week">Weeks</option>
        <option value="day">Days</option>
        <option value="hour">Hours</option>
        <option value="minute">Minutes</option>
      </select>
      <input type="submit" />
    </form>
  )

}

export default RoleForm;
