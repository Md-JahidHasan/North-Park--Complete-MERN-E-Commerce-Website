import { getNewProducts } from "./newProductsAPI";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

// ==========Initial State==============
const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: ""
}

// =============Thunk Function=============
export const fetchNewProducts = createAsyncThunk('newProducts/fetchNewProducts', async()=>{
    const newProducts = await getNewProducts();
    return newProducts;
})


const newProductsSlice = createSlice({
    name:"newProducts",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(fetchNewProducts.pending, (state)=>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchNewProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.products = action.payload;
        })
        .addCase(fetchNewProducts.rejected, (state, action)=>{
            state.isLoading = false;
            state.products = [];
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})

export default newProductsSlice.reducer;