import { createSlice } from '@reduxjs/toolkit'

export const facilityListSlice = createSlice({
  name: 'facilityList',
  initialState: {
    byId: {},
    allIds: [],
    defaultId: null
  },
  reducers: {
    addFacility: (state, action) => {
      const facility = action.payload;  // action.payload is a facility object
      state.byId[facility.id] = facility;
      if (!state.allIds.includes(facility.id)) {
        state.allIds.push(facility.id);
      }

      // Set defaultId if necessary
      if (action.payload.isDefault) {
        state.defaultId = action.payload.id
      }
    },
    removeFacility: (state, action) => {
      const id = action.payload; // action.payload is an ID value
      delete state.byId[id];
      state.allIds = state.allIds.filter(sId => sId !== id);

      // Set new default if this facility was default
      if (state.defaultId === id) {
        state.defaultId = state.allIds.length > 0 ? state.allIds[0] : null;
      }
    }
  }
})

export const { addFacility, removeFacility } = facilityListSlice.actions

export default facilityListSlice.reducer