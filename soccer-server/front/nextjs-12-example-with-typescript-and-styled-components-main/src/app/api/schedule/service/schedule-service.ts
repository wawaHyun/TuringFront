import { API_SCHEDULES } from "app/com/config/perfix"
import axios from "axios"

export const queryKey = ['repoData']

export const getAllList = async () => {
    const { data } = await axios.get(`${API_SCHEDULES}/search`,
        { params: { 'q': 'schedule', 'oq': 'versus' } }
    )
    return data
}

export const getTeamAndRegion = async () => {
    const { data } = await axios.get(`${API_SCHEDULES}/search`,
        { params: { q: 'schedule', oq: 'match' } }
    )
    return data
}
