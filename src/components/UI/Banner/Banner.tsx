import clsx from 'clsx';
import s from './banner.module.scss';
export const Banner = () => {
    return (
       <section className={clsx(s.wrapper, 'section')}>
            <img src="/banner.png" alt="banner"  className={s.banner}/>
            <h1 className={s.header}>Музыка на любой вкус</h1>
            <p className={s.subtitle}>
                Каждый день - новая
            </p>
       </section>
    )
}