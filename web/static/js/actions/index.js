const actions = {

  addShift: ( shift ) => {
    return {
      type: "ADD_SHIFT",
      shift
    }
  },


  addPosition: ( position ) => {
    return {
      type: "ADD_POSITION",
      position
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
  },

  setNumberOfCalendarUnits: ( length ) => {
    return {
      type: "SET_NUMBER_OF_CALENDAR_UNITS",
      length
    }
  }

}

export default actions;
