import { TopChart } from "../components/themplate/blocks/Reacomendations/TopChart/TopChart"
import { useAppSelector } from "../hooks";

export const Chart = () => {
    const topChartMusicData = useAppSelector(state => state.defaultData.data.topChartData?.results);

    return (
       <TopChart data={topChartMusicData} title="Топ чарт" subtitle="Лучшие популярные треки для вас"/>
    )
}