import { api } from 'src/providers'
import { getToken } from 'src/utils'

export const login = credentials => api.post('/users/login', credentials)
