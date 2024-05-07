import { API_PLAYERS } from "app/com/config/perfix"
import axios from "axios"



export const getNo2DslKey = ['getNo2Dsl']
export const getNo2Dsl = async () => {
    const fetchData = {q:'position-list', page:1,size:100,sort:['position','asc']}
    const { data } = await axios.get(`${API_PLAYERS}/search`,
        {params: fetchData,paramsSerializer:{indexes : null}}
    )
    return data
}
