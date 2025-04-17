import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import facilityListReducer from '../features/facilityList/facilityListSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    facilityList: facilityListReducer
  }
})