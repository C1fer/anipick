
const cleanSynopsis = (synopsis: string | null): string  => {
    if (!synopsis) return "";
    const cleaned = synopsis
        .replace(/\(Source:.*?\)\n?/g, "")
        .replace(/\[Written by MAL Rewrite\]/g, "").trim();

    return cleaned || "";
}

export const StringUtils = Object.freeze({
    cleanSynopsis,
})