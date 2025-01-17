import clsx from "clsx"
import s from './topMenu.module.scss';

import { NavLink } from "react-router"

export const TopMenu = () => {
    return (
        <nav className={clsx(s.nav, 'mb-5')}>
         <ul className={clsx(s.navlist)}>
         <li className={clsx(s.navlist__item)}>
                <NavLink to={'/'} className={({ isActive }) =>(!isActive ? `${clsx(s.navlist__link)}` : `${clsx(s.navlist__link_active)}`)}>
                    Всё
                </NavLink>
            </li>
         <li className={clsx(s.navlist__item)}>
                <NavLink to={'/chart'} className={({ isActive }) =>(!isActive ? `${clsx(s.navlist__link)}` : `${clsx(s.navlist__link_active)}`)}>
                    Чарт
                </NavLink>
            </li>
            <li className={clsx(s.navlist__item)}>
                <NavLink to={'/genres'} className={({ isActive }) =>(!isActive ? `${clsx(s.navlist__link)}` : `${clsx(s.navlist__link_active)}`)}>
                    Жанры
                </NavLink>
            </li>
            <li className={clsx(s.navlist__item)}>
                <NavLink to={'/radio'} className={({ isActive }) =>(!isActive ? `${clsx(s.navlist__link)}` : `${clsx(s.navlist__link_active)}`)}>
                    Радио
                </NavLink>
            </li>
         </ul>
           
        </nav>
    )
}