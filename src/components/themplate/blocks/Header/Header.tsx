import s from './header.module.scss';
import { Logo } from '../../../UI/Logo/Logo';
import { SearchForm } from '../../../UI/Search/Search';
import clsx from 'clsx';
import { LoginBtn } from '../../../UI/Btns/LoginBtn/LoginBtn';

export const Header:React.FC = () => {
    return (
        <header className={clsx(s.header,'sdfsdf')}>
            <Logo width={50}/>
            <div className='p-3 flex items-center justify-between'>
            <SearchForm/>
            <LoginBtn/>
            </div>
        </header>
    )
}