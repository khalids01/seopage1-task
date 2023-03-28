import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

const api = axios.create({baseURL: BASE_URL})

export const tasks = async () => {
    const res = await api.get('/tasks')
    return res
}

export const uploadTaskFile = async ({id, file}) =>{
    const res = await api.put('/upload-task-file', {id, file})
    return res
}