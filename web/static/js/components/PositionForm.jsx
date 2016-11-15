import React from 'react'
import formSerializer from "../libs/formSerializer"

const PositionForm = () => {

  return(
    <form onSubmit={ (e) => { e.preventDefault(); console.dir( formSerializer( e.target.children ) ); } }>
      <input name="firstName" type="text" placeholder="First Name" />
      <input name="number" type="number" placeholder="Number" />
      <input name="email" type="email" placeholder="email" />
      <input name="month" type="month" placeholder="email" />

      <input type="radio" name="gender" value="male" />
      <input type="radio" name="gender" value="female" />
      <input type="radio" name="gender" value="other" />

      <input type="checkbox" name="vehicle1" value="Bike" />
      <input type="checkbox" name="vehicle2" value="Car" />

      <input type="date" name="bday" />

      <input type="datetime-local" name="bdayTime" />

      <input type="submit" />
    </form>
  )

}

export default PositionForm;
