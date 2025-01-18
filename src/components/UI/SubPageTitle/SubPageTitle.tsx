import { ChevronLeft } from 'lucide-react';
import { MusicGenresDataType } from '../../../types';
import s from './subPageTitle.module.scss';
import { useNavigate } from 'react-router';
interface SubPageTitleType extends Partial<MusicGenresDataType> {
    subtitle?: string;
    hasIcon: boolean;
}
export const SubPageTitle: React.FC<SubPageTitleType> = (props) => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    }
    return (
        <div className={`${s.wrapper} mb-5`}>
            {props.hasIcon && (
                 <button onClick={handleBackClick} title='Назад' aria-label='back' className={s.backBtn}>
                 <ChevronLeft size={20} color='white'/>
             </button>
            )}
           
            <div className='flex flex-col gap-y-1'>
                <p className={s.header}>
                    {props.label}
                </p>
                {props.subtitle && <p className={s.subtitle}>{props.subtitle}</p>}
            </div>
            
        </div>
    )
}