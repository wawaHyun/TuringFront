import { API_STADIUMS } from "app/com/config/prefix";
import axios from "axios"

export const getStadiumsKey = ['getStadiums']
export const getStadiums = async () => {
    const fetchData = {q: 'stadiums-list', page:1, size:100, sort:['stadiumName','asc']}
    const { data } = await axios.get(`${API_STADIUMS}/search`,
        { params: fetchData, paramsSerializer:{indexes: null,}}
    );
    return data
}
