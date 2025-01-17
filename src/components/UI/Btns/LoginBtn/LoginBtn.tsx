import clsx from 'clsx';
import s from './loginbBtn.module.scss';
export const LoginBtn:React.FC = () => {
    return (
        <button className={clsx(s.btn,'text-sm')}>Войти</button>
    )
}