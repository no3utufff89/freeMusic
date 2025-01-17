import { NavLink } from "react-router"
import { AsideMenuItem } from "../../../types"

export const MenuElement = (item: AsideMenuItem) => {
    return (
        <li>
            <NavLink to={item.url} className={({ isActive }) =>(isActive ? "flex items-center text-[#61DADF] gap-x-4" : "flex items-center gap-x-4 text-[#838383]")}>
                <item.icon color={item.iconColor}/>
                <span className=" text-xl">{item.title}</span>
            </NavLink>
        </li>
    )
}