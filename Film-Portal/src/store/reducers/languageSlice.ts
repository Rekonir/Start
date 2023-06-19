import { createSlice } from "@reduxjs/toolkit";

interface LanguageState {
    RusLanguage: boolean;
}
const initialState: LanguageState = {
    RusLanguage: true
}
export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        toogleLanguage(state) {
            state.RusLanguage = !state.RusLanguage;
        }
    }
})

export default languageSlice.reducer;