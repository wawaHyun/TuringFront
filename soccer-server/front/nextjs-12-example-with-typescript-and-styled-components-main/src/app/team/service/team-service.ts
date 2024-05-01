import axios from "axios"

export const queryKey = ['repoData']

export const getAllTeamList = async () => {
    const { data } = await axios.get(`${process.env.API_URL}/team/search`,
        { params: { 'q': 'team', 'oq': '' } })
    return data
}
