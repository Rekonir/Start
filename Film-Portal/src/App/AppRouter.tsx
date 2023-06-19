import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes, authRoutes } from './routes';
import Layout from '../components/Layout/Layout';
import { useAppSelector } from '../hooks/redux';
import ScrollToTop from './ScrollToTop';

const AppRouter = () => {

  const { isAuth } = useAppSelector( state => state.userReducer)
  //const { isAdmin } = useAppSelector( state => state.userReducer.user)
  const isAdmin = true

  return (
    <ScrollToTop>
      <Routes>
        <Route element={<Layout/>}>

          {isAdmin && privateRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} Component={Component} />
          )}

          {!isAuth && authRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} Component={Component} />
          )}

          {publicRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} Component={Component} />
          )}

          <Route path='*' element={<Navigate to='/' />} />

        </Route>
      </Routes>
    </ScrollToTop>
  )
}

export default AppRouter