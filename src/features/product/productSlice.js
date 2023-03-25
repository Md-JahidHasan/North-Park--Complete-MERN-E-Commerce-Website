import { getProduct } from "./productAPI"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    product:{},
    isLoading:false,
    isError: false,
    error: ""
}

//========== Thunk function =========
export const fetchProduct = createAsyncThunk('product/fetchProduct', async(id)=>{
    const product = await getProduct(id);
    return product;
})

const productSlice = createSlice({
    name:"product",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProduct.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.product = {};
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})


export default productSlice.reducer;