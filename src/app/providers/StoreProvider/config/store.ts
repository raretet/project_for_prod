import { counterReducer } from 'entities/Counter'
import { StateSchema } from './StateSchema'
import { configureStore } from '@reduxjs/toolkit'

export function createReduxstore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
