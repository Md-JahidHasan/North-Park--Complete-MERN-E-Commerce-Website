import axios from "../../utils/axios"

export const getNewProducts = async()=>{
    const response = await axios.get('/newProducts');
    return response.data;
}