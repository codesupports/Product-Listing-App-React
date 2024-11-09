// src/features/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await fetch(`https://fakestoreapi.com/products/`);
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
    displayCount: 10,
    typeOfSort: ""
};

// Create the slice
const dataSlice = createSlice({
    name: 'data',
    initialState,

    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
            state.totalCategory.push(state.selectedCategory)
            state.filteredProducts = state.data.filter((product) =>
                product.category === state.selectedCategory[state.selectedCategory.length - 1]
            )

            // state.data = state.filteredProducts
        },
        setAllProducts: (state, action) => {
            state.filteredProducts = action.payload
        },
        setSort: (state, action) => {
            state.typeOfSort = action.payload;
            const { key, order } = action.payload;
            state.typeOfSort = order;

            state.data = state.data.sort((a, b) => {
                if (order === 'lowToHigh') {
                    return a[key] > b[key] ? 1 : -1;
                } else {
                    return a[key] < b[key] ? 1 : -1;
                }
            });

            state.filteredProducts = state.filteredProducts?.sort((a, b) => {
                if (order === 'lowToHigh') {
                    return a[key] > b[key] ? 1 : -1;
                } else {
                    return a[key] < b[key] ? 1 : -1;
                }
            });
        },
        loadMoreProducts: (state) => {
            state.displayCount += 10;
        },
        productLength: (state, action) => {
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

export const { setCategory, setAllProducts, setSort, productLength, loadMoreProducts } = dataSlice.actions;
export default dataSlice.reducer;
