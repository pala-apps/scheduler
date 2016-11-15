// import { reduxForm, Field } from 'redux-form'
import React from 'react'

function formSerialize( formObjectChildren ) {
  const data = {}

  for ( let i = 0; i < formObjectChildren.length; i ++ ) {
    const child = formObjectChildren[i];
    const userInput = child.value;
    const isNumber = child.type === "number";
    const isCheckboxOrRadio = child.type === "checkbox" || child.type === "radio";
    const isTextBasedInput = [ "text", "date", "month", "email", "datetime-local" ].some( ( type, index ) => { return type === child.type } )

    if ( isNumber && userInput ) {
      data[ child.name ] = Number( child.value );
    }

    if ( ( ( isCheckboxOrRadio ) && child.checked ) || ( isTextBasedInput && userInput ) ) {
      data[child.name] = child.value
    }

  }

  console.log( data );
}

const PositionForm = () => {

  return(
    <form onSubmit={ (e) => { e.preventDefault(); console.dir( e.target.children ); formSerialize( e.target.children ) } }>
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
