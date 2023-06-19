import axios from "axios";
import { AppDispatch } from "../store";
import {filmSlice} from "../reducers/filmSlice";
import { IFilm, IFilter, MainPageResponse, IPersonsFilms } from "../../types/types";


export const fetchFilms = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(filmSlice.actions.filmsFetching())
         const response = await axios.get<IFilm[]>('http://localhost:4998/movies')
        dispatch(filmSlice.actions.filmsFetchingSuccess(
            response.data
        ))
        //console.log('puk', response.data)
    } catch (e) {
        dispatch(filmSlice.actions.filmsFetchingError(e as Error))
    }
}

export const fetchFilteredFilms = ( filter: IFilter, setFilms: (films: IFilm[]) => void, genre?: string ) => async (dispatch: AppDispatch) => {
    try {
        dispatch(filmSlice.actions.filmsFetching())
        const url = genre? `http://localhost:4998/movies/${genre}` : 'http://localhost:4998/movies'
        console.log('fil', filter, genre)
        const response = await axios.post<IFilm[]>(url, {
            //pageIndex: 0, year: 1995, rating: 0, marks: 0, country: '', directors: '', actors: ''
            ...filter
        })
        setFilms(response.data)
        dispatch(filmSlice.actions.filmsFetchingSuccess(
            response.data
        ))
        console.log('puk', filter, genre, response.data)
    } catch (e) {
        dispatch(filmSlice.actions.filmsFetchingError(e as Error))
    }
}

export const fetchFilm = async ( id: string, setFilm: (film: IFilm) => void)  => {
    try {
        const response = await axios.get<IFilm>(`http://localhost:4998/film/${id}`)
        setFilm( response.data )
        console.log(response.data)
    } catch (e) {
        console.error
    }
}

export const fetchMainPageFilms = async (
        setDramaFilms: (film: IPersonsFilms[]) => void,
        setComedyFilms: (film: IPersonsFilms[]) => void,
        setTopFilms: (film: IPersonsFilms[]) => void
    )  => {
    try {
        const response = await axios.get<MainPageResponse>(`http://localhost:4998/`)
        setDramaFilms( response.data.drama )
        setComedyFilms( response.data.comedy )
        setTopFilms( response.data.rating )
        console.log('smth', response.data)
    } catch (e) {
        console.error
    }
}