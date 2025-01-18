import { AxiosResponse } from "axios";
import { DefaultResponseType } from "../types";
import instance from "../api/instance";
import { Endpoints } from "../api/endpoints";

export default class Genresservice {
    static fetchCurrentGenreAlbums(genre:string):Promise<AxiosResponse<DefaultResponseType>> {
        return instance.get<DefaultResponseType>(`${Endpoints.TRACKS.FETCH}`, {
            params: {
                fuzzytags: genre,
                limit: '10',
                include: 'musicinfo',
                lang: 'en',
            }
        });
    }
}