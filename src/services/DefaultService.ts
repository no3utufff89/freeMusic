import { AxiosResponse } from "axios";
import instance from "../api/instance";
import { Endpoints } from "../api/endpoints";
import { DefaultResponseType } from "../types";

export default class DefaultService {
    static fetchDefaultSongs(limit:string, order: string ):Promise<AxiosResponse<DefaultResponseType>> {
        return instance.get<DefaultResponseType>(`${Endpoints.TRACKS.FETCH}`, {
            params: {
                limit: limit || '40',
                order: order || 'popularity_total',
                include: 'musicinfo',
                lang: 'en',
            }
        });

    }
    static fetchWeekMusicData():Promise<AxiosResponse<DefaultResponseType>> {
        return instance.get<DefaultResponseType>(`${Endpoints.TRACKS.FETCH}`, {
            params: {
                limit: '8',
                order: 'listens_week',
                include: 'musicinfo',
            }
        });
    }
}