export type UseAnimeFilterViewResult = {
    lists: Lists;
    state: FilterOptions;
    handleChange: (key: keyof FilterOptions, value: string|boolean|Record<number, string>[]) => void;
    onToggleSFW: () => void;
    onSelectGenres: (genre: string) => void;
}

export type Lists = {
    releaseType: Record<string, string>;
    status: Record<string, string>;
    minEpisodes: Record<string, string>;
    genres: Record<number, string>;
    demographics: Record<number, string>;
}

export type FilterOptions = {
    releaseType: string;
    status: string;
    minEpisodes: string;
    genres: Record<number, string>[];
    demographics: Record<number, string>[];
    sfw: boolean;
}