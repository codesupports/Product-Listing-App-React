// src/features/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    if (!response.ok) throw new Error('Failed to fetch data');
    const dataRes = await response.json()
    return dataRes;
}
);

// Initial state
const initialState = {
    data: [],
    status: '',
    error: null,
    selectedCategory: 'All',
    filteredProducts: [],
    totalCategory: [],
    productCount: "",
    limit: 10,
};

// Create the slice
const dataSlice = createSlice({
    name: 'data',
    initialState,

    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
            state.totalCategory.push(state.selectedCategory)
            state.filteredProducts = state.data.filter((product) => {
                return product.category === action.payload
            })
            // state.data = state.filteredProducts
        },
        setAllProducts: (state, action) => {
            state.filteredProducts = action.payload
        },
        setSort: (state, action) => {
            if (action.payload = "lowToHigh") {
                state.data.sort((a, b) => {
                    return a.price - b.price
                })
                // state.filteredProducts.sort((a, b) => {
                //     return a.price - b.price
                // })
            }
        },
        productLength: (state, action) => {
            console.log(action.payload)
            state.productCount = action.payload
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setCategory, setAllProducts, setSort, productLength } = dataSlice.actions;
export default dataSlice.reducer;
