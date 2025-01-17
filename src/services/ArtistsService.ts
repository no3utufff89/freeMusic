import axios, { AxiosResponse } from "axios";
import { ArtistDataType, CommonResponseType } from "../types";
import { Endpoints } from "../api/endpoints";
import { API_BASE_URL } from "../api/api_constants";

export default class ArtistsService {
    static async getArtists():Promise<AxiosResponse<CommonResponseType<ArtistDataType>>> {
        return axios.get<CommonResponseType<ArtistDataType>>(`${API_BASE_URL}/${Endpoints.ARTISTS.FETCH}/`, {
            params: {
                client_id: '851614aa',
                format: 'jsonpretty',
                limit: '30',
                order: 'popularity_total'
            }
        });
    }
}