import { api } from 'src/providers'

export const createNaver = naver => api.post('/navers', naver)
export const editNaver = (naver, id) => api.put(`/navers/${id}`, naver)
export const showNavers = () => api.get('/navers')
export const deleteNavers = id => api.delete(`/navers/${id}`)
