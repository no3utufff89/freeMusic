import { ChevronLeft } from 'lucide-react';
import { SliderBtnType } from '../../../../types';
import s from './sliderBtn.module.scss';
import clsx from 'clsx';

export const SliderBtn = (props:SliderBtnType) => {
    return (
        <button type='button' className={clsx(s.btn,`${props.type === 'right' ? `slick-arrow slick-next`:`slick-arrow slick-prev`}`)} aria-label={props.title} onClick={props.handleClick}>
            <ChevronLeft className={props.type === 'left' ? `${s.left}` : `${s.right}`} color={props.iconColor}/>
        </button>
    )
}