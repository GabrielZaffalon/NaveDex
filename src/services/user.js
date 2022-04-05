import { api } from 'src/providers'
import { getToken } from 'src/utils'

export const getMe = async () => {
  const token = await getToken()
  if (!token) {
    return null
  }
  return api.get('/me')
}

export const login = credentials => api.post('/users/login', credentials)
