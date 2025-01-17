import { Outlet } from "react-router"
import { TopMenu } from "../TopMenu/TopMenu"
import s from './content.module.scss';
import clsx from "clsx";
import { useAppSelector } from "../../../../hooks";
import { Footer } from "../Footer/Footer";
export const Content = () => {
  const isLoading = useAppSelector(state => state.defaultData.loading);

    return (
        <section className={clsx(s.content,'pl-3 pt-3')}>
          <div className="contentHeader">
            <TopMenu/>
          </div>

        {isLoading ? <p>Загрузка</p> : (
          <>
          <Outlet/>
          <Footer/>
          </>
        )}
           
          
        </section>
    )
}