
const cleanSynopsis = (synopsis: string | null): string | null => {
    if (!synopsis) return null;
    const cleaned = synopsis
        .replace(/\(Source:.*?\)\n?/g, "")
        .replace(/\[Written by MAL Rewrite\]/g, "").trim();

    console.log(cleaned)
    return cleaned || null;
}

export const StringUtils = Object.freeze({
    cleanSynopsis,
})