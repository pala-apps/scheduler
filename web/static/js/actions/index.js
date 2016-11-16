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
  },

  setTimeUnit: ( unit ) => {
    return {
      type: "SET_TIME_UNIT",
      unit
    }
  }

}

export default actions;
