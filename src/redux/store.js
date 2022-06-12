import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { rootPersistConfig, rootReducer } from './rootReducer';
import thunkMiddleware from 'redux-thunk';


// ----------------------------------------------------------------------

const defaultMiddleware = getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
  })

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: [...defaultMiddleware, thunkMiddleware]
});

const persistor = persistStore(store);

export { store, persistor };
