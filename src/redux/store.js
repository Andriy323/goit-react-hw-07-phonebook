import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

import rootReducer from './contactSlice';
export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  }
});

// export const persistor = persistStore(store);
