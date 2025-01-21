import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './itemSilce'
import fetchStatusSlice from './fetchStatusSlice';
import bagSlice from './bagSilce';
const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus : fetchStatusSlice.reducer,
    bag: bagSlice.reducer
  }
})

export default myntraStore;