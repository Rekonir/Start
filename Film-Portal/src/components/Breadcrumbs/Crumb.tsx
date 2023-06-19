import { FC } from "react"
import { NavLink } from "react-router-dom"
import { BreadcrumbComponentProps, BreadcrumbComponentType } from "use-react-router-breadcrumbs"


const Crumb: BreadcrumbComponentType = ({match, key}) => {
  return (
    <div>
        <NavLink to={match.pathname}>
            {key}
        </NavLink>
        <span>&gt;</span>
    </div>
  )
}

export default Crumb