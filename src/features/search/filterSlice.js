import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText : ''
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        addSearchText:(state, action) =>{
            state.searchText = action.payload;
        }
    }
})

export const {addSearchText} = filterSlice.actions;
export default filterSlice.reducer;