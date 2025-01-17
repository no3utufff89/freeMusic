import clsx from "clsx";
import { Menu } from "../Menu/Menu";
import s from './aside.module.scss';
export const Aside = () => {
    return (
        <aside className={clsx(s.aside)}>
            <Menu />
        </aside>
    )
}