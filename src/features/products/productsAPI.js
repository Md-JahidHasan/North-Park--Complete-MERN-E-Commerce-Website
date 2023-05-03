import axios from '../../utils/axios';

export const getProducts = async (searchText)=>{
    const response = await axios.get(`/shopProducts?search=${searchText}`);
    return response.data
}