import {configureStore} from '@reduxjs/toolkit';
import authReducer from './src/reducer/user/AuthReducer';
import AlertReducer from './src/reducer/AlertReducer';

export default configureStore({
  reducer: {
    auth: authReducer,
    alert: AlertReducer,
  },
});
