
import { API_PLAYERS } from "app/com/config/perfix"
import axios from "axios"


export const getAllPositionKey = ['getAllPosition']
export const getAllPosition = async () => {
    const { data } = await axios.get(`${process.env.API_URL}/players/search/position-list`,
        { params: { q: '2', oq: 'position' } }
    )
    return data
}
export const findAllPositionincludeNullKey = ['findAllPositionincludeNull']
export const findAllPositionincludeNull = async () => {
    const { data } = await axios.get(`${process.env.API_URL}/players/search/position-list-includeNull`,
        { params: { q: '3', oq: 'position' } }
    )
    return data
}
export const findAllByPositionAndTeamIDKey = ['findAllByPositionAndTeamID']
export const findAllByPositionAndTeamID = async () => {
    const { data } = await axios.get(`${process.env.API_URL}/players/search/findGK-SuwonTeamId`,
        { params: { q: '4', oq: 'position' } }
    )
    return data
}
export const findAllByPositionAndTeamNameKey = ['findAllByPositionAndTeamName']
export const findAllByPositionAndTeamName = async () => {
    const { data } = await axios.get(`${process.env.API_URL}/players/search/findGK-SuwonTeamName`,
        { params: { q: '5', oq: 'position' } }
    )
    return data
}
export const findAllByPlayerNameAndHeightAndTeamKey = ['findAllByPlayerNameAndHeightAndTeam']
export const findAllByPlayerNameAndHeightAndTeam = async () => {
    const { data } = await axios.get(`${process.env.API_URL}/players/search/findPlayer-Name-Height-team`,
        { params: { q: '6', oq: 'position' } }
    )
    return data
}
export const findAllByPlayerNameAndHeightKey = ['findAllByPlayerNameAndHeight']
export const findAllByPlayerNameAndHeight = async () => {
    const { data } = await axios.get(`${process.env.API_URL}/players/search/findPlayer-Name-Height`,
        { params: { q: '7', oq: 'position' } }
    )
    return data
}
