const preloadImage = (uri: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = uri;
        img.onload = () => resolve(true);
        img.onerror = () => reject(false);
    });
};


const preloadImages = async (imgUris: string[]) : Promise<Map<string, boolean>> => {
    const promises = imgUris.map((uri) => 
        preloadImage(uri)
        .then(() => ({ uri, status: "loaded" }))
        .catch(() => ({ uri, status: "error" }))
    );

    return Promise.all(promises).then(results => {
        return results.reduce((acc, { uri, status }) => {
            acc.set(uri, status === "loaded" ? true : false);
            return acc;
        }, new Map<string, boolean>());
    });

}

export const ImageUtils = Object.freeze({
    preloadImage,
    preloadImages,
})