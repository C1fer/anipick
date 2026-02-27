export type MALImages = {
    jpg: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
    };
    webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
    };
};

export type MALTrailer = {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
    images: {
        image_url: string | null;
        small_image_url: string | null;
        medium_image_url: string | null;
        large_image_url: string | null;
        maximum_image_url: string | null;
    };
};

export type MALTitle = {
    type: string;
    title: string;
};

export type MALAiredProp = {
    day: number | null;
    month: number | null;
    year: number | null;
};

export type MALAired = {
    from: string | null;
    to: string | null;
    prop: {
        from: MALAiredProp;
        to: MALAiredProp;
    };
    string: string;
};

export type MALBroadcast = {
    day: string | null;
    time: string | null;
    timezone: string | null;
    string: string | null;
};

export type MALEntity = {
    mal_id: number;
    type?: string;
    name: string;
    url?: string;
};

export type MALRating =
    | "G - All Ages"
    | "PG - Children"
    | "PG-13 - Teens 13 or older"
    | "R - 17+ (violence & profanity)"
    | "R+ - Mild Nudity"
    | "Rx - Hentai";

export type MALStreamingOption = {
    name: string;
    url: string;
}