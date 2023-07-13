import { getProducts } from "./productsAPI"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")


// ========== Initial State ===========
const initialState = {
    products: ['ee'],
    isLoading: false,
    isError: false,
    error: "e"
}


// =========== Thunk Function ============
export const fetchProducts = createAsyncThunk('products/fetchProducts', async ({searchText})=>{
    const products = await getProducts(searchText);
    return products;
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(fetchProducts.pending, (state)=>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.isLoading = false;
            state.products = [];
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})

export default productsSlice.reducer;