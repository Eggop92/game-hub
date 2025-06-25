import apiClient, { FetchResponse } from "./api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const getAllPlatforms = () => {
    return apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data);
}

export default getAllPlatforms;