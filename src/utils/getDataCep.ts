import axios from "axios"

export const getDataCep = async () => {
    return await axios.get(`https://viacep.com.br/ws/11310010/json/`)
}