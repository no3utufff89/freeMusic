import axios, { AxiosResponse } from "axios";
import { RadioResponse } from "../types";
import { Endpoints } from "../api/endpoints";
import { API_BASE_URL } from "../api/api_constants";

export default class RadioService {
    static async getRadios():Promise<AxiosResponse<RadioResponse>> {
        return axios.get<RadioResponse>(`${API_BASE_URL}/${Endpoints.RADIO.FETCH}/`, {
            params: {
                client_id: '851614aa',
                format: 'jsonpretty',
                limit: 30,
            }
        });
    }
}