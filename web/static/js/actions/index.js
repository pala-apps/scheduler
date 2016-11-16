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
