import { env } from './../../env';
import axios from "axios";

export const Api = axios.create()

export function getIp(ipAddress: string){
    return Api.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${env.REACT_APP_API_KEY}&ip=${ipAddress}&lang=br`)
}