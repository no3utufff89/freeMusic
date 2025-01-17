import { Link } from "react-router";
import { ArtistDataType } from "../../../types"
import s from './Artist.module.scss';
export const Artist:React.FC<ArtistDataType> = (item) => {
    return (
        <li className={s.artistCard}>
            <Link to={item.id}>
            <img className={s.artistImage} src={item.image} alt={item.id} />
            <div className={s.artistInfo}>
                <span className={s.artistName}>{item.name}</span>
            </div>
            </Link>
         
        </li>
    )
}