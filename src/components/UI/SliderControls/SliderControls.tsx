import { SliderBtn } from '../Btns/SliderBtn/SliderBtn';
import Slider from "react-slick";

import s from './sliderControls.module.scss';
type IProps = {
    sliderRef: React.RefObject<Slider>
}
export const SliderControls:React.FC<IProps> = (props) => {
    
    const handleMoveLeft = () => {        
        props.sliderRef.current?.slickPrev();
    }
    const handleMoveRight = () => {
        props.sliderRef.current?.slickNext();
    }
    return (
        <div className={s.controls}>
            <SliderBtn active={true} handleClick={handleMoveLeft} type='left' iconColor='#fff'/>
            <SliderBtn active={true} handleClick={handleMoveRight} type='right' iconColor='#fff'/>
        </div>
    )
}