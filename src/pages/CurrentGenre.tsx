import { useParams } from "react-router"
import { SubPageTitle } from "../components/UI/SubPageTitle/SubPageTitle";
import { musicGenres, randomColors } from "../staticData";
import { useEffect, useRef } from "react";
import { generateRandomColor } from "../utils";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getCurrentPlaylistData } from "../store/defaultDataSlice/requests";
import { TracksList } from "../components/themplate/blocks/TracksList/TracksList";

export const CurrentGenre = () => {
    const {genre} = useParams();
    const dispatch = useAppDispatch();
    const currentGenre = musicGenres.find(item => item.name === genre);
    const isLoading = useAppSelector(state => state.currentPlaylistdata.loading);
    const currentGrnreBlock:React.RefObject<HTMLDivElement> = useRef(null);
    useEffect(() => {
        currentGrnreBlock.current?.style.setProperty(
            "background-color", generateRandomColor(randomColors)
        );
    }, [])
    useEffect(() => {
        if (!genre) return;
        dispatch(getCurrentPlaylistData(genre))
    },[])
    return (
        <>
        {isLoading && <p>Загрузка</p>}
        <div>
            <SubPageTitle hasIcon={true} {...currentGenre} />
            <div ref={currentGrnreBlock} className="rounded bg-black w-[150px] h-[150px]">
            <img src={`/public/icons/${currentGenre?.icon}.svg`} alt={currentGenre?.label} />
            
            </div>
            <TracksList/>
        </div>
        </>
       
    )
}