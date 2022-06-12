import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authJwtReducer from './slices/authJwt';

import suimReducer from './slices/suim';
import userReducer from './slices/user';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['settings'],
};

const productPersistConfig = {
  key: 'product',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout'],
};

const authPersistConfig = {
  key: 'authJwt',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['isAuthenticated', 'user'],
};

const rootReducer = combineReducers({
  // firebase: firebaseReducer,
  firestore: firestoreReducer,
  mail: mailReducer,
  chat: chatReducer,
  blog: blogReducer,
  user: userReducer,
  settings: settingsReducer,
  calendar: calendarReducer,
  product: persistReducer(productPersistConfig, productReducer),
  authJwt: persistReducer(authPersistConfig, authJwtReducer),
});

export { rootPersistConfig, rootReducer };
