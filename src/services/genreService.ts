import APIClient, { FetchResponse } from "./api-client";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const getAllGenres = () => {
    return APIClient.get<FetchResponse<Genre>>('/genres').then(res => res.data);
}

export default getAllGenres;
