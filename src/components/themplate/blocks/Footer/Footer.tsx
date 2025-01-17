import { useAppSelector } from '../../../../hooks';
import s from './footer.module.scss';
import telegramicon from '/public/Telegram.svg';
import gitIcon from '/public/github .svg';
export const Footer = () => {
const isActivePlayerBar = useAppSelector(state => state.playlistData.isActive);

    return (
        <footer className={`${s.footer} ${isActivePlayerBar? s.active : ''}`}>
           <p className={s.attention}>
           Данный сервис может содержать информацию, не предназначенную для несовершеннолетних.

           </p>
           <div className={s.info}>
           <p className="rights">
            made by <span>no3utufff</span>
           </p>
           <span>2025</span>
           </div>
           
           <div className={s.contacts}>
                <a href="">
                    <img className={s.icon} src={telegramicon} alt="Telegram" />
                </a>
                <a href="">
                    <img className={s.icon} src={gitIcon} alt="GitHub" />
                </a>
           </div>
        </footer>
    )
}