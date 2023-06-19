import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilm } from "../../types/types"

interface FilmState {
    films: IFilm[];  
    loading: boolean;
    error: null | string;
}

const initialState: FilmState = {
    films: [],
    loading: false,
    error: null,
}

export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        filmsFetching(state) {
            state.loading = true;
        },

        filmsFetchingSuccess(state, action: PayloadAction<IFilm[]>) {
            state.loading = false;
            state.error = '';
            state.films = action.payload;
        },

        filmsFetchingError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = "Не удалось загрузить каталог фильмов";
        },

        // adminAdd(state, action: PayloadAction<AdminPayload>) {
        //     let isBarcode = false
        //     state.adminProducts.forEach((item, index) => {
        //         if (item.barcode == action.payload.product.barcode) isBarcode = true
        //     })
        //     if (!isBarcode) {
        //         state.adminProducts.push(action.payload.product)
        //         state.adminProductsContainer.push(action.payload.product)
        //     }
        // },

        // adminRemove(state, action: PayloadAction<AdminPayload>) {
        //     state.adminProducts.forEach((item, index) => {
        //         if (item.barcode == action.payload.product.barcode) {
        //             state.adminProducts.splice(index, 1)
        //         }
        //     })

        //     state.adminProductsContainer.forEach((item, index) => {
        //         if (item.barcode == action.payload.product.barcode) {
        //             state.adminProductsContainer.splice(index, 1)
        //         }
        //     })
        // },

        // adminEdit(state, action: PayloadAction<AdminPayload>) {
        //     state.adminProducts = state.adminProducts.map(item =>
        //         item.barcode == action.payload.product.barcode ? action.payload.product : item)

        //     state.adminProductsContainer = state.adminProductsContainer.map(item =>
        //         item.barcode == action.payload.product.barcode ? action.payload.product : item)
        // }
    }
})

export default filmSlice.reducer;