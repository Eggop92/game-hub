import useGenres from "./useGenres";

const findGenre = (id?: number) => {
    return useGenres().data?.results.find((genre) => genre.id === id);
};

export default findGenre;