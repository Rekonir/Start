import { NavLink } from 'react-router-dom'
import FilmData from '../../FilmData.json'
import { BreadcrumbComponentType } from 'use-react-router-breadcrumbs'

const FilmCrumb: BreadcrumbComponentType<"id"> = ({match}) => {
    const film = FilmData.find(film => film.id.toString() == match.params.id)

  return (
    <>
    <NavLink to={film?.genre[0].name_en || '/'}>
        {film?.genre[0].name_ru}
    </NavLink>
        {film?.name_ru}
    </>
  )
}

export default FilmCrumb