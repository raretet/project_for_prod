import { StateSchema } from 'entities/Counter'

export const getLoginState = (state: StateSchema) => state?.loginForm
