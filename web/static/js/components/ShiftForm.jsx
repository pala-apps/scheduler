import React from 'react'

const ShiftForm = ( { onSubmit, roles, startDate } ) => {

  const rolesDropdown = roles.map( role => <option key={ role.id } value={ role.id }>{ role.name }</option> )

  return(
    <form onSubmit={ onSubmit }>
      <input type="hidden" name="start" value={ startDate } />
      <select name="roleId">
        { rolesDropdown }
      </select>
      <input type="submit" />
    </form>
  )

}

export default ShiftForm;
