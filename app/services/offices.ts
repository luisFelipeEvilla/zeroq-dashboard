import { Office } from './../types/office';
import { apiClient } from ".";

type filterType = {
    name?: string;
}


export async function getOfficesService(filters : filterType = {}): Promise<Office[]>{
    const response = await apiClient.get("/offices", {
        // params: filters
    });

    return response.data;
}