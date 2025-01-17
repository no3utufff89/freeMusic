import { ArtistsBlock } from "../components/themplate/blocks/ArtistsBlock/ArtistsBlock";
import { TopChart } from "../components/themplate/blocks/Reacomendations/TopChart/TopChart"
import { Vibes } from "../components/themplate/blocks/Vibes/Vibes";
import { Banner } from "../components/UI/Banner/Banner";
import { useAppSelector } from "../hooks";

export const Home:React.FC = () => {
    const topChartMusicData = useAppSelector(state => state.defaultData.data.topChartData?.results);
    const newWeekMusicData = useAppSelector(state => state.defaultData.data.weekChartData?.results);
    const artistsData = useAppSelector(state => state.artistsData.data.artistsData?.results);
    return (
       <div>
        <div className="flex flex-col">
        <TopChart data={topChartMusicData} title="Топ чарт" subtitle="Лучшие популярные треки для вас"/>
              <Banner/>
              <TopChart data={newWeekMusicData}  title="Новинки недели" subtitle="Слушали больше всех за неделю"/>
              <Vibes/>
              <ArtistsBlock data={artistsData}/>
       
        </div>
       
       </div>
    )
}