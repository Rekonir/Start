import { languageSlice } from "../reducers/languageSlice";
import { AppDispatch } from "../store";


export const changeLanguage = () => (dispatch: AppDispatch) => {
    dispatch(languageSlice.actions.toogleLanguage())
}