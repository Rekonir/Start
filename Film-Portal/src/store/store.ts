import { combineReducers, configureStore } from '@reduxjs/toolkit'
import filmReducer from './reducers/filmSlice'
import personReducer from './reducers/personSlice'
import languageReducer from './reducers/languageSlice'
import userReducer from './reducers/userSlice'

const rootReducer = combineReducers({
  filmReducer,
  personReducer,
  languageReducer,
  userReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export const store = setupStore()

export const getStoreWithState = (preloadedState?: RootState) => {
  return configureStore({ reducer: rootReducer, preloadedState })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']