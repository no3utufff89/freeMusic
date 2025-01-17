import { Search } from 'lucide-react';
import s from './search.module.scss';

export const SearchForm:React.FC = () => {
    return (
        <form action="" className={s.form}>
            <input disabled className={s.form__input} type="search" placeholder='Поиск пока не работает.....'/>
            <button disabled className={s.form__btn} aria-label='Найти любимую мызыку' title='Найти любимую мызыку'>
                <Search color='#F2F3F7'/>
            </button>
        </form>
    )
}