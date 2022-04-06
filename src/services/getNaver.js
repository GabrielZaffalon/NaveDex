import { api } from 'src/providers'

export const showNavers = naver => api.get('/navers', naver)
