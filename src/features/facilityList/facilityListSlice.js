import { createSlice } from '@reduxjs/toolkit'

export const facilityListSlice = createSlice({
  name: 'facilityList',
  initialState: {
    byId: {},
    allIds: []
  },
  reducers: {
    addFacility: (state, action) => {
      const facility = action.payload;
      state.byId[facility.id] = facility;
      if (!state.allIds.includes(facility.id)) {
        state.allIds.push(facility.id);
      }
    },
    setAddress: (state, action) => {
      const {id, address} = action.payload;
      if (state.byId[id]) {
        state.byId[id].address = address;
      }
    },
    removeFacility: (state, action) => {
      const facilityId = action.payload;
      delete state.byId[facilityId];
      state.allIds = state.allIds.filter(id => id !== facilityId);
    }
  }
})

export const { addFacility, setAddress, removeFacility } = facilityListSlice.actions

export default facilityListSlice.reducer