import { env } from './../../env';
import axios, { AxiosResponse } from "axios";
import { ApiData } from '../types';

export const Api = axios.create()

export function getIp(ipAddress: string): Promise<AxiosResponse<ApiData, any>>{
    return Api.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${env.REACT_APP_API_KEY}&ip=${ipAddress}`)
}