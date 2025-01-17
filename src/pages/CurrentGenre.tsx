import { useParams } from "react-router"
import { SubPageTitle } from "../components/UI/SubPageTitle/SubPageTitle";
import { musicGenres } from "../staticData";

export const CurrentGenre = () => {
    const {genre} = useParams();
    const currentGenre = musicGenres.find(item => item.name === genre);
    return (
        <div>
            <SubPageTitle {...currentGenre} />
        </div>
    )
}