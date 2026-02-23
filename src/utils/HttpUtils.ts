
export const getObjectAsQueryParams = (obj: Record<string, any>): string => {
    const params = Object.entries(obj).reduce((acc, [key, val]) => {
        if (val !== undefined && val !== null && val !== "") {
            acc.append(key, String(val));
        }
        return acc;
    }, new URLSearchParams())

    return params.toString();
}