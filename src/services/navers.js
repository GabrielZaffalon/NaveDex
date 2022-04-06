import { api } from 'src/providers'

export const createNaver = naver => api.post('/navers', naver)
export const showNavers = () => api.get('/navers')
