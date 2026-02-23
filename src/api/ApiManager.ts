export const ApiManager = Object.freeze({
    get: async <T>(url: string, timeout: number): Promise<T> => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        return fetch(url, { signal: controller.signal })
            .then(res => {
                clearTimeout(timeoutId);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .catch(err => {
                console.error("API GET Error: " + err);
                throw err;
            });
    },
});