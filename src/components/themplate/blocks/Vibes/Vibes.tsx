import clsx from 'clsx';
import { SectionHeader } from '../Reacomendations/SectionHeader';
import s from './vibes.module.scss';
import { SliderControls } from '../../../UI/SliderControls/SliderControls';
import { SliderBlock } from '../Slider/SliderBlock';
import { useRef } from 'react';
import Slider from 'react-slick';

export const Vibes:React.FC = () => {
   
    const sliderRef:React.RefObject<Slider> = useRef(null);
    return (
        <section className='section mr-[15px]'>
           <div className={clsx(s.row, 'flex justify-between items-center mb-5')}>
           <SectionHeader hasIcon={false} title='Больше открытий' subtitle='Музыка разных жанров под любое настроение'/>
           <SliderControls sliderRef={sliderRef}/>
           </div>
            <SliderBlock sliderRef={sliderRef}/>
        </section>
    )
}