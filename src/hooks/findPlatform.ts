import usePlatforms from "./usePlatforms";

const findPlatform = (id?: number) => {
    return usePlatforms().data?.results.find((platform) => platform.id === id);
}

export default findPlatform;
