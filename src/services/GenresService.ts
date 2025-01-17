import { AxiosResponse } from "axios";
import { DefaultResponseType } from "../types";
import instance from "../api/instance";

export default class genresservice {
    static fetchCurrentGenreAlbums(genre:string):Promise<AxiosResponse<DefaultResponseType>> {
        return instance.get<DefaultResponseType>(``)
    }
}