import { API_TEAMS } from "app/com/config/prefix"
import axios from "axios"

export const getAllTeamsDslKey = ['getAllTeamsDslKey']
export const getAllTeamsDsl = async () => {
    const fethData = { q: '119', page:1, limit:5, }
    const { data } = await axios.get(`${API_TEAMS}/search`,{
     params: fethData,paramsSerializer:{indexes:null,  }});
     console.log('119~!~!~!')
    return data
}
//sort:['id','asc']

export const getNo1DslKey = ['getNo1Dsl']
export const getNo1Dsl = async () => {
    const { data } = await axios.get(`${API_TEAMS}/search`,
        { params: { q: '1', position: '', regionName1:'',regionName2:'' } })
    return data
}

export const getNo10DslKey = ['getNo10Dsl']
export const getNo10Dsl = async () => {
    const { data } = await axios.get(`${API_TEAMS}/search`,
        { params: { q: '10', position: 'GK', regionName1:'K02',regionName2:'K10' } })
    return data
}

export const getNo12DslKey = ['getNo12Dsl']
export const getNo12Dsl = async () => {
    const { data } = await axios.get(`${API_TEAMS}/search`,
        { params: { q: '12', position: '',regionName1:'K02',regionName2:'K10' } })
    return data
}

export const getNo13DslKey = ['getNo13Dsl']
export const getNo13Dsl = async () => {
    const { data } = await axios.get(`${API_TEAMS}/search`,
        { params: { q: '13', position: '', regionName1:'',regionName2:'' } })
    return data
}

export const getNo19DslKey = ['getNo19Dsl']
export const getNo19Dsl = async () => {
    const { data } = await axios.get(`${API_TEAMS}/search`,
        { params: { q: '19', position: '', regionName1:'',regionName2:'' } })
    return data
}

export const getNo20DslKey = ['getNo20Dsl']
export const getNo20Dsl = async () => {
    const { data } = await axios.get(`${API_TEAMS}/search`,
        { params: { q: '20', position: 'MF', regionName1:'',regionName2:'' } })
    return data
}

export const getNo21DslKey = ['getNo21Dsl']
export const getNo21Dsl = async () => {
    const { data } = await axios.get(`${API_TEAMS}/search`,
        { params: { q: '21', position: '', regionName1:'',regionName2:'' } })
    return data
}
