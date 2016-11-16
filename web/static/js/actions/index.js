const actions = {

  addShift: ( shift ) => {
    return {
      type: "ADD_SHIFT",
      shift
    }
  },

  alterStartTime: ( change ) => {
    return {
      type: "ALTER_START_TIME",
      change
    }
  }

}

export default actions;
