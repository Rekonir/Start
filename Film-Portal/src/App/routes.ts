import Catalog from '../pages/CatalogPage/CatalogPage'
import Person from '../pages/PersonPage/PersonPage'
import Film from '../pages/FilmPage/FilmPage'
import Main from '../pages/MainPage/MainPage'
import { BreadcrumbsRoute } from 'use-react-router-breadcrumbs';
import FilmCrumb from '../components/Breadcrumbs/FilmCrumb';
import Admin from '../pages/AdminPage/AdminPage';
import SignIn from '../pages/SignInPage/SignInPage'
import SignUp from '../pages/SignUpPage/SignUpPage'

export const privateRoutes: BreadcrumbsRoute<string>[] = [
    {
        path: '/admin',
        Component: Admin,
        breadcrumb: 'Фильмы'
    },
    {
        path: '/admin/:genre',
        Component: Admin,
        breadcrumb: 'Фильмы'
    },
]


export const publicRoutes: BreadcrumbsRoute<string>[] = [
    {
        path: '/',
        Component: Main,
        breadcrumb: 'Главная'
    },
    {
        path: '/movies',
        Component: Catalog,
        breadcrumb: 'Фильмы'
    },
    {
        path: '/film/:id',
        Component: Film,
        breadcrumb: FilmCrumb
    },
    {
        path: '/persons/:id',
        Component: Person,
        breadcrumb: ''
    },
    {
        path: '/movies/:genre',
        Component: Catalog,
        breadcrumb: 'Фильмы'
    },
]

export const authRoutes: BreadcrumbsRoute<string>[] = [
    {
        path: '/signin',
        Component: SignIn,
        breadcrumb: 'Фильмы'
    },
    {
        path: '/signup',
        Component: SignUp,
        breadcrumb: 'Фильмы'
    }
]