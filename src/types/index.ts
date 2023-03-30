export interface ApiData {
    ip: string,
    continent_name: string,
    continent_code: string,
    country_code2: string,
    country_code3: string,
    country_name: string,
    state_prov: string,
    latitude: string,
    longitude: string,
    isp: string,
    zipcode: string,
    time_zone: TimeZone
}

interface TimeZone {
    current_time: string,
    current_time_unix: number,
}