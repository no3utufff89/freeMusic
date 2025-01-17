import { musicGenres } from '../../../../staticData';
import { VibeButton } from '../../../UI/Btns/VibeButton';
import Slider from "react-slick";
import s from './sliderBlock.module.scss';
type IProps = {
    sliderRef: React.RefObject<Slider>
}
export const SliderBlock:React.FC<IProps> = (props) => {
 
    const settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        draggable: true,
        variableWidth: true,
       
    }    
    return (
        <div className='slider-container'>
            <Slider  ref={props.sliderRef} {...settings} >
                
                {musicGenres.map(item => {
                    return (
                        
                        <div key={item.name} className={s.sliderItem}>
                            <VibeButton title={item.label} name={item.name}/>
                        </div>
                       
                       
                    )
                })}
      
            </Slider>
        </div>
       
    )
}