import { menuItems } from "../../../../staticData"
import { MenuElement } from "../../../UI/MenuElement/MenuElement"

export const Menu:React.FC = () => {
    return (
        <nav className="nav mb-[25px]">
            <ul className="nav-list flex flex-col gap-y-6">   
            {menuItems.map(item => {
            return <MenuElement key={item.title} {...item} />
           })}
            </ul>
        </nav>
    )
}