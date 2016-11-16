export default function formSerializer( formObjectChildren ) {
  const textInputs = [ "text", "date", "month", "email", "datetime-local", "hidden" ];
  const numberInputs = [ "number" ];
  const checkedInputs = [ "checkbox", "radio" ]

  const data = {}

  for ( let i = 0; i < formObjectChildren.length; i ++ ) {
    const child = formObjectChildren[i];
    const userInput = child.value;
    const isNumberInput = numberInputs.some( type => type === child.type );
    const isCheckedInput = checkedInputs.some( type => type === child.type )
    const isTextInput = textInputs.some( type => type === child.type );
    const isDropDown = child.tagName === "SELECT";

    if ( isNumberInput && userInput ) {
      data[ child.name ] = Number( child.value );
    }

    if ( ( ( isCheckedInput ) && child.checked ) || ( isTextInput && userInput ) || isDropDown ) {
      data[child.name] = child.value
    }

  }

  return data;
}
