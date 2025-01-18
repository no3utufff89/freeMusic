import { ChevronRight } from "lucide-react"
import s from './SectionHeader.module.scss';
import { Chartprops } from "../../../../types";

   

export const SectionHeader:React.FC<Chartprops> = (props) => {
    return (
        <div className="flex items-center gap-x-3 mb-5">
                {/* <img src="/public/some_icon.png" alt="group icon" width={60} height={60}/> */}
                <div className={`${s.content} flex flex-col gap-x-2`}>
                <div className={`${s.contentHeader}`}>
                    <p className="text-[#1E2023] font-semibold text-[24px]">{props.title}</p>
                    {props.hasIcon && (
 <ChevronRight className={s.contentIcon} size={24} color="#7786ef"/>
                    )}
                   
                </div>
                <span className="text-[#7786ef] text-sm">{props.subtitle}</span>
                </div>
            </div>
    )
}