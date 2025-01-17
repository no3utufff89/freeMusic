import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks"
import { getRadios } from "../store/defaultDataSlice/requests";
import { RadioElement } from "../components/UI/RadioElement/RadioElement";
import { SectionHeader } from "../components/themplate/blocks/Reacomendations/SectionHeader";

export const Radio = () => {
    const radioData = useAppSelector(state => state.radioData.data.radioData?.results);
    const isLoading = useAppSelector(state => state.radioData.loading);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(!radioData) {
            dispatch(getRadios());
            
        }
    }, [])
    return (
        <div>
            {isLoading && <p>Загрузка</p>}
            <SectionHeader title='Наши радиостанции' subtitle='Бесконечный поток музыки'/>
            <ul className="flex flex-wrap gap-5">
            {radioData?.map(item => (
                <RadioElement key={item.dispname} {...item}/>
        ))}
            </ul>
        </div>
    )
}