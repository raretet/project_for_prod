import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxstore } from '../config/store'
import { StateSchema } from '../config/StateSchema'
import { DeepPartial } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = ({
  children,
  initialState
}: StoreProviderProps) => {
  const store = createReduxstore(initialState as StateSchema)

  return <Provider store={store}>{children}</Provider>
}
