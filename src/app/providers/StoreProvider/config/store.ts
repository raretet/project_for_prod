import { counterReducer } from 'entities/Counter'
import { StateSchema } from './StateSchema'
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'

export function createReduxstore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
  }

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
