import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPerson } from "../../types/types"

interface PersonState {
    persons: IPerson[];  
    loading: boolean;
    error: null | string;
}

const initialState: PersonState = {
    persons: [],
    loading: false,
    error: null,
}

export const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        personsFetching(state) {
            state.loading = true;
        },

        personsFetchingSuccess(state, action: PayloadAction<IPerson[]>) {
            state.loading = false;
            state.error = '';
            state.persons = action.payload;
        },

        personsFetchingError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = "Не удалось загрузить ";
        },
    }
})

export default personSlice.reducer;