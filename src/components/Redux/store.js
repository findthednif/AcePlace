import { configureStore } from '@reduxjs/toolkit';

import inputReducer from './SearchINN/reducer';
import redirectReducer from './RedirectModal/reducer';

const store = configureStore({
  reducer: {
    inputReducer,
    redirectReducer,
  },
});
export default store;
