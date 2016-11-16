const actions = {

  addShift: ( shift ) => {
    return {
      type: "ADD_SHIFT",
      shift
    }
  },

  addRole: ( role ) => {
    return {
      type: "ADD_ROLE",
      role
    }
  }

}

export default actions;
