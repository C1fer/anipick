import type { MALAnime } from "@/types/anime";
import type { MALStreamingOption } from "@/types/mal";
import type { MALManga } from "@/types/manga";

export const mockStreamingOptions : MALStreamingOption[] = [
    {
        "name": "Crunchyroll",
        "url": "http://www.crunchyroll.com/series-263087"
    },
    {
        "name": "Netflix",
        "url": "https://www.netflix.com/title/80041089"
    }
]

export const mockDataV3 : MALAnime[] = [
        {
            "mal_id": 8687,
            "url": "https:\/\/myanimelist.net\/anime\/8687\/Doraemon_2005",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/23935.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/23935t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/23935l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/23935.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/23935t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/23935l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Doraemon (2005)"
                },
                {
                    "type": "Japanese",
                    "title": "\u30c9\u30e9\u3048\u3082\u3093 (2005)"
                }
            ],
            "title": "Doraemon (2005)",
            "title_english": null,
            "title_japanese": "\u30c9\u30e9\u3048\u3082\u3093 (2005)",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": null,
            "status": "Currently Airing",
            "airing": true,
            "aired": {
                "from": "2005-04-22T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 22,
                        "month": 4,
                        "year": 2005
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 22, 2005 to ?"
            },
            "duration": "25 min",
            "rating": "PG - Children",
            "score": 7.75,
            "scored_by": 10164,
            "rank": 1227,
            "popularity": 5146,
            "members": 23064,
            "favorites": 258,
            "synopsis": "Doraemon (2005) is the most recent anime series based on Fujiko Fujio's manga of the same name.\n\nIt is the 2005 version of 1979 series.  This \"remake\" features upgrades to production staff, voice actors, character design, and sound.\n\nDoraemon is a cat-like robot from the 22nd Century who appears in the present to steer Nobita\/Noby, a dumb clumsy boy, onto the right path in order to secure a better future. Nobita's love interest is Shizuka Minamoto\/Sue, his frenemies are Takeshi \"Gian\" Goda\/Big G and Suneo\/Sneech.  Each episode features Doraemon showing Nobita a cool gadget from the 22nd Century to help him overcome the main conflict in the episode.\n\n(Source: Wikipedia)",
            "background": "",
            "season": "spring",
            "year": 2005,
            "broadcast": {
                "day": "Fridays",
                "time": "19:00",
                "timezone": "Asia\/Tokyo",
                "string": "Fridays at 19:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 55,
                    "type": "anime",
                    "name": "TV Asahi",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/55\/TV_Asahi"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 247,
                    "type": "anime",
                    "name": "Shin-Ei Animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/247\/Shin-Ei_Animation"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/24\/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 51,
                    "type": "anime",
                    "name": "Anthropomorphic",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/51\/Anthropomorphic"
                }
            ],
            "demographics": [
                {
                    "mal_id": 15,
                    "type": "anime",
                    "name": "Kids",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/15\/Kids"
                },
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 530,
            "url": "https:\/\/myanimelist.net\/anime\/530\/Bishoujo_Senshi_Sailor_Moon",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1440\/92258.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1440\/92258t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1440\/92258l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1440\/92258.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1440\/92258t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1440\/92258l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/UL_F6L1tSAM?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Bishoujo Senshi Sailor Moon"
                },
                {
                    "type": "Synonym",
                    "title": "Pretty Soldier Sailor Moon"
                },
                {
                    "type": "Japanese",
                    "title": "\u7f8e\u5c11\u5973\u6226\u58eb\u30bb\u30fc\u30e9\u30fc\u30e0\u30fc\u30f3"
                },
                {
                    "type": "English",
                    "title": "Sailor Moon"
                },
                {
                    "type": "German",
                    "title": "Sailor Moon"
                },
                {
                    "type": "Spanish",
                    "title": "Sailor Moon"
                },
                {
                    "type": "French",
                    "title": "Sailor Moon"
                }
            ],
            "title": "Bishoujo Senshi Sailor Moon",
            "title_english": "Sailor Moon",
            "title_japanese": "\u7f8e\u5c11\u5973\u6226\u58eb\u30bb\u30fc\u30e9\u30fc\u30e0\u30fc\u30f3",
            "title_synonyms": [
                "Pretty Soldier Sailor Moon"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 46,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1992-03-07T00:00:00+00:00",
                "to": "1993-02-27T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 7,
                        "month": 3,
                        "year": 1992
                    },
                    "to": {
                        "day": 27,
                        "month": 2,
                        "year": 1993
                    }
                },
                "string": "Mar 7, 1992 to Feb 27, 1993"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.75,
            "scored_by": 200964,
            "rank": 1224,
            "popularity": 647,
            "members": 411962,
            "favorites": 11021,
            "synopsis": "Usagi Tsukino is an average student and crybaby klutz who constantly scores low on her tests. Unexpectedly, her humdrum life is turned upside down when she saves a cat with a crescent moon on its head from danger. The cat, named Luna, later reveals that their meeting was not an accident: Usagi is destined to become Sailor Moon, a planetary guardian with the power to protect the Earth. Given a special brooch that allows her to transform, she must use her new powers to save the city from evil energy-stealing monsters sent by the malevolent Queen Beryl of the Dark Kingdom.\n\nBut getting accustomed to her powers and fighting villains are not the only things she has to worry about. She must find the lost princess of the Moon Kingdom, the other Sailor Guardians, and the Legendary Silver Crystal in order to save the planet from destruction.\n\n[Written by MAL Rewrite]",
            "background": "The series won the 1992 Animage's Anime Grand Prix Award.",
            "season": "spring",
            "year": 1992,
            "broadcast": {
                "day": "Saturdays",
                "time": "19:00",
                "timezone": "Asia\/Tokyo",
                "string": "Saturdays at 19:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 55,
                    "type": "anime",
                    "name": "TV Asahi",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/55\/TV_Asahi"
                },
                {
                    "mal_id": 2292,
                    "type": "anime",
                    "name": "Toei Advertising",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2292\/Toei_Advertising"
                }
            ],
            "licensors": [
                {
                    "mal_id": 97,
                    "type": "anime",
                    "name": "ADV Films",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/97\/ADV_Films"
                },
                {
                    "mal_id": 119,
                    "type": "anime",
                    "name": "VIZ Media",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/119\/VIZ_Media"
                },
                {
                    "mal_id": 269,
                    "type": "anime",
                    "name": "DiC Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/269\/DiC_Entertainment"
                }
            ],
            "studios": [
                {
                    "mal_id": 18,
                    "type": "anime",
                    "name": "Toei Animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/18\/Toei_Animation"
                }
            ],
            "genres": [
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/22\/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 66,
                    "type": "anime",
                    "name": "Mahou Shoujo",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/66\/Mahou_Shoujo"
                }
            ],
            "demographics": [
                {
                    "mal_id": 25,
                    "type": "anime",
                    "name": "Shoujo",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/25\/Shoujo"
                }
            ]
        },
        {
            "mal_id": 49220,
            "url": "https:\/\/myanimelist.net\/anime\/49220\/Isekai_Ojisan",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1743\/125204.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1743\/125204t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1743\/125204l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1743\/125204.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1743\/125204t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1743\/125204l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/p73c08lLJc8?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Isekai Ojisan"
                },
                {
                    "type": "Synonym",
                    "title": "Isekai Uncle"
                },
                {
                    "type": "Synonym",
                    "title": "Ojisan in Another World"
                },
                {
                    "type": "Japanese",
                    "title": "\u7570\u4e16\u754c\u304a\u3058\u3055\u3093"
                },
                {
                    "type": "English",
                    "title": "Uncle from Another World"
                }
            ],
            "title": "Isekai Ojisan",
            "title_english": "Uncle from Another World",
            "title_japanese": "\u7570\u4e16\u754c\u304a\u3058\u3055\u3093",
            "title_synonyms": [
                "Isekai Uncle",
                "Ojisan in Another World"
            ],
            "type": "TV",
            "source": "Web manga",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2022-07-06T00:00:00+00:00",
                "to": "2023-03-08T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 6,
                        "month": 7,
                        "year": 2022
                    },
                    "to": {
                        "day": 8,
                        "month": 3,
                        "year": 2023
                    }
                },
                "string": "Jul 6, 2022 to Mar 8, 2023"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.75,
            "scored_by": 196640,
            "rank": 1234,
            "popularity": 629,
            "members": 421505,
            "favorites": 2307,
            "synopsis": "After a fatal encounter with a truck, Takafumi Takaoka's uncle, Yousuke \"Ojisan\" Shibazaki, lies comatose for 17 years. When he finally regains consciousness, Ojisan begins to ramble in a foreign tongue and reveals that he had been transported to a magical world called Gran Bahamal. Takafumi dismisses his uncle's claims as nonsense until an incantation makes a cup of water hover in the air. In a flash of brilliance, the pair creates a YouTube channel to showcase Ojisan's magical abilities.\n\nThe responsibility now falls on Takafumi's shoulders to acquaint Ojisan with everything that has transpired during his absence, including getting him up to speed with the internet, new technology, and surprisingly, the outcome of the '90s console war\u2014the result of which was especially distressing for a hardcore SEGA fan. With Ojisan's wisdom from his other world experiences, they grow their YouTube channel and tackle online comments and trolls. The journey of this uncle-nephew duo promises to be anything but conventional.\n\n[Written by MAL Rewrite]",
            "background": "Isekai Ojisan was released on Blu-ray and DVD in three volumes from September 28, 2022, to March 24, 2023.",
            "season": "summer",
            "year": 2022,
            "broadcast": {
                "day": "Wednesdays",
                "time": "22:00",
                "timezone": "Asia\/Tokyo",
                "string": "Wednesdays at 22:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 166,
                    "type": "anime",
                    "name": "Movic",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/166\/Movic"
                },
                {
                    "mal_id": 238,
                    "type": "anime",
                    "name": "AT-X",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/238\/AT-X"
                },
                {
                    "mal_id": 1345,
                    "type": "anime",
                    "name": "Sammy",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1345\/Sammy"
                },
                {
                    "mal_id": 1416,
                    "type": "anime",
                    "name": "BS11",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1416\/BS11"
                },
                {
                    "mal_id": 1551,
                    "type": "anime",
                    "name": "Kadokawa Media House",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1551\/Kadokawa_Media_House"
                },
                {
                    "mal_id": 1696,
                    "type": "anime",
                    "name": "Kadokawa",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1696\/Kadokawa"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 2298,
                    "type": "anime",
                    "name": "Atelier Pontdarc",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2298\/Atelier_Pontdarc"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 50,
                    "type": "anime",
                    "name": "Adult Cast",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/50\/Adult_Cast"
                },
                {
                    "mal_id": 62,
                    "type": "anime",
                    "name": "Isekai",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/62\/Isekai"
                },
                {
                    "mal_id": 69,
                    "type": "anime",
                    "name": "Otaku Culture",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/69\/Otaku_Culture"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/20\/Parody"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 48896,
            "url": "https:\/\/myanimelist.net\/anime\/48896\/Overlord_Movie_3__Sei_Oukoku-hen",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1954\/144101.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1954\/144101t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1954\/144101l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1954\/144101.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1954\/144101t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1954\/144101l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/vniS5g48wHA?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Overlord Movie 3: Sei Oukoku-hen"
                },
                {
                    "type": "Synonym",
                    "title": "Gekijouban Overlord: Sei Oukoku-hen"
                },
                {
                    "type": "Japanese",
                    "title": "\u5287\u5834\u7248\u300c\u30aa\u30fc\u30d0\u30fc\u30ed\u30fc\u30c9\u300d\u8056\u738b\u56fd\u7de8"
                },
                {
                    "type": "English",
                    "title": "Overlord: The Sacred Kingdom"
                }
            ],
            "title": "Overlord Movie 3: Sei Oukoku-hen",
            "title_english": "Overlord: The Sacred Kingdom",
            "title_japanese": "\u5287\u5834\u7248\u300c\u30aa\u30fc\u30d0\u30fc\u30ed\u30fc\u30c9\u300d\u8056\u738b\u56fd\u7de8",
            "title_synonyms": [
                "Gekijouban Overlord: Sei Oukoku-hen"
            ],
            "type": "Movie",
            "source": "Light novel",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2024-09-20T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 20,
                        "month": 9,
                        "year": 2024
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Sep 20, 2024"
            },
            "duration": "2 hr 12 min",
            "rating": "R - 17+ (violence & profanity)",
            "score": 7.75,
            "scored_by": 43271,
            "rank": 1241,
            "popularity": 2152,
            "members": 114984,
            "favorites": 433,
            "synopsis": "The Sacred Kingdom has enjoyed a great many years without war thanks to a colossal wall constructed after a historic tragedy. They understand best how fragile peace can be. When the terrible demon Jaldabaoth takes to the field at the head of a united army of monstrous tribes, the Sacred Kingdom's leaders know their defenses are not enough. With the very existence of the country at stake, the pious have no choice but to seek help wherever they can get it, even if it means breaking taboo and parlaying with the undead king of the Nation of Darkness!\n\n(Source: Yen Press)",
            "background": "Overlord Movie 3: Sei Oukoku-hen adapts novels 12 and 13.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 238,
                    "type": "anime",
                    "name": "AT-X",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/238\/AT-X"
                },
                {
                    "mal_id": 689,
                    "type": "anime",
                    "name": "NTT Docomo",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/689\/NTT_Docomo"
                },
                {
                    "mal_id": 1333,
                    "type": "anime",
                    "name": "Hakuhodo DY Music & Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1333\/Hakuhodo_DY_Music___Pictures"
                },
                {
                    "mal_id": 1696,
                    "type": "anime",
                    "name": "Kadokawa",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1696\/Kadokawa"
                },
                {
                    "mal_id": 1916,
                    "type": "anime",
                    "name": "Kadokawa Animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1916\/Kadokawa_Animation"
                },
                {
                    "mal_id": 2074,
                    "type": "anime",
                    "name": "Bit grooove promotion",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2074\/Bit_grooove_promotion"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 11,
                    "type": "anime",
                    "name": "Madhouse",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/11\/Madhouse"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 62,
                    "type": "anime",
                    "name": "Isekai",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/62\/Isekai"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 3603,
            "url": "https:\/\/myanimelist.net\/anime\/3603\/JoJo_no_Kimyou_na_Bouken__Phantom_Blood",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/5\/50055.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/5\/50055t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/5\/50055l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/5\/50055.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/5\/50055t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/5\/50055l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "JoJo no Kimyou na Bouken: Phantom Blood"
                },
                {
                    "type": "Synonym",
                    "title": "JoJo's Bizarre Adventure: Phantom Blood"
                },
                {
                    "type": "Japanese",
                    "title": "\u30b8\u30e7\u30b8\u30e7\u306e\u5947\u5999\u306a\u5192\u967a \u30d5\u30a1\u30f3\u30c8\u30e0 \u30d6\u30e9\u30c3\u30c9"
                },
                {
                    "type": "English",
                    "title": "JoJo's Bizarre Adventure: Phantom Blood"
                }
            ],
            "title": "JoJo no Kimyou na Bouken: Phantom Blood",
            "title_english": "JoJo's Bizarre Adventure: Phantom Blood",
            "title_japanese": "\u30b8\u30e7\u30b8\u30e7\u306e\u5947\u5999\u306a\u5192\u967a \u30d5\u30a1\u30f3\u30c8\u30e0 \u30d6\u30e9\u30c3\u30c9",
            "title_synonyms": [
                "JoJo's Bizarre Adventure: Phantom Blood"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2007-02-17T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 17,
                        "month": 2,
                        "year": 2007
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Feb 17, 2007"
            },
            "duration": "1 hr 30 min",
            "rating": "R - 17+ (violence & profanity)",
            "score": 7.75,
            "scored_by": 31284,
            "rank": 1235,
            "popularity": 2836,
            "members": 74325,
            "favorites": 629,
            "synopsis": "An adaptation of the original five volume arc of the popular JoJo's Bizarre Adventure manga, covering the Phantom Blood chapters. Jonathan Joestar is an aristocratic boy whose life is suddenly turned upside down by a mysterious new boy who arrives, Dio Brando. Dio has a connection to his father, and over time, a rivalry forms as Dio becomes obsessed with a mysterious, ancient, and mystical stone mask that Jonathan's father keeps.",
            "background": "The film was never released on home video as Shueisha terminated their relationship with studio A.P.P.P.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/16\/TV_Tokyo"
                },
                {
                    "mal_id": 230,
                    "type": "anime",
                    "name": "Bandai",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/230\/Bandai"
                },
                {
                    "mal_id": 460,
                    "type": "anime",
                    "name": "KlockWorx",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/460\/KlockWorx"
                },
                {
                    "mal_id": 517,
                    "type": "anime",
                    "name": "Asmik Ace",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/517\/Asmik_Ace"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                },
                {
                    "mal_id": 1507,
                    "type": "anime",
                    "name": "Sumitomo",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1507\/Sumitomo"
                },
                {
                    "mal_id": 1516,
                    "type": "anime",
                    "name": "Sony PCL",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1516\/Sony_PCL"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 77,
                    "type": "anime",
                    "name": "APPP",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/77\/APPP"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Horror",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/14\/Horror"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 32,
                    "type": "anime",
                    "name": "Vampire",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/32\/Vampire"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 1281,
            "url": "https:\/\/myanimelist.net\/anime\/1281\/Gakkou_no_Kaidan",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1414\/112029.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1414\/112029t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1414\/112029l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1414\/112029.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1414\/112029t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1414\/112029l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/jbXkfSG-rpg?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gakkou no Kaidan"
                },
                {
                    "type": "Synonym",
                    "title": "Ghosts at School"
                },
                {
                    "type": "Synonym",
                    "title": "School Ghost Stories"
                },
                {
                    "type": "Japanese",
                    "title": "\u5b66\u6821\u306e\u602a\u8ac7"
                },
                {
                    "type": "English",
                    "title": "Ghost Stories"
                },
                {
                    "type": "German",
                    "title": "Ghost Stories"
                },
                {
                    "type": "Spanish",
                    "title": "Ghost Stories"
                },
                {
                    "type": "French",
                    "title": "Ghost Stories"
                }
            ],
            "title": "Gakkou no Kaidan",
            "title_english": "Ghost Stories",
            "title_japanese": "\u5b66\u6821\u306e\u602a\u8ac7",
            "title_synonyms": [
                "Ghosts at School",
                "School Ghost Stories"
            ],
            "type": "TV",
            "source": "Novel",
            "episodes": 19,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2000-10-22T00:00:00+00:00",
                "to": "2001-03-25T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 22,
                        "month": 10,
                        "year": 2000
                    },
                    "to": {
                        "day": 25,
                        "month": 3,
                        "year": 2001
                    }
                },
                "string": "Oct 22, 2000 to Mar 25, 2001"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.75,
            "scored_by": 104981,
            "rank": 1230,
            "popularity": 1117,
            "members": 248629,
            "favorites": 2394,
            "synopsis": "Years ago, all of the ghosts in a haunted schoolhouse were banished by a certain student. Now, they're back\u2014and they want revenge...\n \nSatsuki and Keiichirou Miyanoshita are two siblings recovering from the tragic loss of their mother. After moving to their mother's hometown, they learn that the local school they have transferred to is an old building\u2014one said to be haunted. Despite initially brushing it off as a silly rumor, the two soon discover that ghosts are indeed real and that they're after them! Gakkou no Kaidan is the creepy tale of the lives of these siblings and their newfound friends as they try to survive the school's ghosts\u2014with a little help from their pet cat along the way.\n\n[Written by MAL Rewrite]",
            "background": "Gakkou no Kaidan is notable for having an English dub by ADV Films that utlized a comedic script as opposed to the original serious one.",
            "season": "fall",
            "year": 2000,
            "broadcast": {
                "day": "Saturdays",
                "time": "19:30",
                "timezone": "Asia\/Tokyo",
                "string": "Saturdays at 19:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 169,
                    "type": "anime",
                    "name": "Fuji TV",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/169\/Fuji_TV"
                }
            ],
            "licensors": [
                {
                    "mal_id": 97,
                    "type": "anime",
                    "name": "ADV Films",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/97\/ADV_Films"
                },
                {
                    "mal_id": 467,
                    "type": "anime",
                    "name": "Discotek Media",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/467\/Discotek_Media"
                }
            ],
            "studios": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Studio Pierrot",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1\/Studio_Pierrot"
                }
            ],
            "genres": [
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Horror",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/14\/Horror"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/7\/Mystery"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        },
        {
            "mal_id": 5005,
            "url": "https:\/\/myanimelist.net\/anime\/5005\/Tentai_Senshi_Sunred",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/11740.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/11740t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/11740l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/11740.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/11740t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/11740l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Tentai Senshi Sunred"
                },
                {
                    "type": "Synonym",
                    "title": "Astro Fighter Sunred"
                },
                {
                    "type": "Japanese",
                    "title": "\u5929\u4f53\u6226\u58eb\u30b5\u30f3\u30ec\u30c3\u30c9"
                }
            ],
            "title": "Tentai Senshi Sunred",
            "title_english": null,
            "title_japanese": "\u5929\u4f53\u6226\u58eb\u30b5\u30f3\u30ec\u30c3\u30c9",
            "title_synonyms": [
                "Astro Fighter Sunred"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 26,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2008-10-03T00:00:00+00:00",
                "to": "2009-03-28T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 3,
                        "month": 10,
                        "year": 2008
                    },
                    "to": {
                        "day": 28,
                        "month": 3,
                        "year": 2009
                    }
                },
                "string": "Oct 3, 2008 to Mar 28, 2009"
            },
            "duration": "13 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.75,
            "scored_by": 7018,
            "rank": 1248,
            "popularity": 5134,
            "members": 23257,
            "favorites": 202,
            "synopsis": "Tentai Senshi Sunred is the magnificent story of the conflict between good and evil that takes place in the city of Kawasaki. Sunred, ally of justice, is dedicated to stopping the evil organization Florsheim on their quest for world domination, while General Vamp and his minions are constantly thinking up new schemes to defeat Sunred. In what sounds like a typical story, the characters make all the difference. \n\nOur hero Sunred is rude, violent, and lazy, playing pachinko all day and leeching off of his girlfriend Kayoko Uchida. Meanwhile General Vamp is polite, conscientious, and an ideal homemaker who cooks, mothers his minions, and discusses housekeeping with Kayoko, who bickers constantly with Sunred. Even the monsters of Florsheim tend to be adorable and harmless.\n\nEach episode is comprised of several shorts weighing in at anywhere from a few minutes to a few seconds, and explores the daily lives of these sworn enemies. This is the story of the battle between good and evil that takes place in Kawasaki.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2008,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": "Unknown"
            },
            "producers": [
                {
                    "mal_id": 464,
                    "type": "anime",
                    "name": "flying DOG",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/464\/flying_DOG"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 88,
                    "type": "anime",
                    "name": "AIC ASTA",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/88\/AIC_ASTA"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/57\/Gag_Humor"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/20\/Parody"
                },
                {
                    "mal_id": 31,
                    "type": "anime",
                    "name": "Super Power",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/31\/Super_Power"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/42\/Seinen"
                }
            ]
        },
        {
            "mal_id": 6115,
            "url": "https:\/\/myanimelist.net\/anime\/6115\/Lupin_III_vs_Meitantei_Conan",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1849\/134190.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1849\/134190t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1849\/134190l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1849\/134190.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1849\/134190t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1849\/134190l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Lupin III vs. Meitantei Conan"
                },
                {
                    "type": "Synonym",
                    "title": "Lupin Sansei vs Meitantei Conan"
                },
                {
                    "type": "Japanese",
                    "title": "\u30eb\u30d1\u30f3\u4e09\u4e16 vs \u540d\u63a2\u5075\u30b3\u30ca\u30f3"
                },
                {
                    "type": "English",
                    "title": "Lupin III vs. Detective Conan"
                },
                {
                    "type": "German",
                    "title": "Lupin the 3rd vs. Detektiv Conan special"
                },
                {
                    "type": "Spanish",
                    "title": "Lupin III Vs Detective Conan Especial"
                }
            ],
            "title": "Lupin III vs. Meitantei Conan",
            "title_english": "Lupin III vs. Detective Conan",
            "title_japanese": "\u30eb\u30d1\u30f3\u4e09\u4e16 vs \u540d\u63a2\u5075\u30b3\u30ca\u30f3",
            "title_synonyms": [
                "Lupin Sansei vs Meitantei Conan"
            ],
            "type": "TV Special",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2009-03-27T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 27,
                        "month": 3,
                        "year": 2009
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Mar 27, 2009"
            },
            "duration": "1 hr 44 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.75,
            "scored_by": 20544,
            "rank": 1238,
            "popularity": 4066,
            "members": 38966,
            "favorites": 49,
            "synopsis": "In a country called Vesparand, a new mineral with super stealth properties has been discovered which attracts Lupin's attention. At the same time the untimely deaths of Queen Sakura and her son, Prince Gill, leave Princess Mira next in succession to the throne. During a trip to Japan, Princess Mira finds her double in Ran and takes the opportunity to trade places, which ends with Ran being spirited away to Vesparand with Conan, Zenigata, Kogoro Mouri, Lupin and Fujiko in tow. There they meet a waiting Jigen and solve the mystery of the deaths of the Queen and Prince.\n\n(Source: ANN)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 65,
                    "type": "anime",
                    "name": "Tokyo Movie Shinsha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/65\/Tokyo_Movie_Shinsha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 467,
                    "type": "anime",
                    "name": "Discotek Media",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/467\/Discotek_Media"
                }
            ],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/73\/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/7\/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 7044,
            "url": "https:\/\/myanimelist.net\/anime\/7044\/Zan_Sayonara_Zetsubou_Sensei_Bangaichi",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/17699.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/17699t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/17699l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/17699.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/17699t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/17699l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Zan Sayonara Zetsubou Sensei Bangaichi"
                },
                {
                    "type": "Synonym",
                    "title": "Zan Sayonara Zetsubou Sensei OVA"
                },
                {
                    "type": "Synonym",
                    "title": "Zan Sayonara Zetsubou Sensei No Man's Land"
                },
                {
                    "type": "Synonym",
                    "title": "ZSZSB"
                },
                {
                    "type": "Japanese",
                    "title": "\u61fa\u3055\u3088\u306a\u3089\u7d76\u671b\u5148\u751f \u756a\u5916\u5730"
                }
            ],
            "title": "Zan Sayonara Zetsubou Sensei Bangaichi",
            "title_english": null,
            "title_japanese": "\u61fa\u3055\u3088\u306a\u3089\u7d76\u671b\u5148\u751f \u756a\u5916\u5730",
            "title_synonyms": [
                "Zan Sayonara Zetsubou Sensei OVA",
                "Zan Sayonara Zetsubou Sensei No Man's Land",
                "ZSZSB"
            ],
            "type": "OVA",
            "source": "Manga",
            "episodes": 2,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2009-11-17T00:00:00+00:00",
                "to": "2010-02-17T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 17,
                        "month": 11,
                        "year": 2009
                    },
                    "to": {
                        "day": 17,
                        "month": 2,
                        "year": 2010
                    }
                },
                "string": "Nov 17, 2009 to Feb 17, 2010"
            },
            "duration": "26 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 7.75,
            "scored_by": 17656,
            "rank": 1251,
            "popularity": 3894,
            "members": 42584,
            "favorites": 38,
            "synopsis": "A new Sayonara Zetsubou Sensei OVA.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 2981,
                    "type": "anime",
                    "name": "Omnibus Promotion",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2981\/Omnibus_Promotion"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 44,
                    "type": "anime",
                    "name": "Shaft",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/44\/Shaft"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/57\/Gag_Humor"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/20\/Parody"
                },
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "School",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/23\/School"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 41219,
            "url": "https:\/\/myanimelist.net\/anime\/41219\/Fanren_Xiu_Xian_Zhuan",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1085\/109745.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1085\/109745t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1085\/109745l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1085\/109745.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1085\/109745t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1085\/109745l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/bHTAKELdJTw?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Fanren Xiu Xian Zhuan"
                },
                {
                    "type": "Synonym",
                    "title": "A Mortal's Journey"
                },
                {
                    "type": "Synonym",
                    "title": "A Record of a Mortal's Journey to Immortality"
                },
                {
                    "type": "Synonym",
                    "title": "A Mortal's Journey to Immortality"
                },
                {
                    "type": "Synonym",
                    "title": "\u5c0f\u5c0f\u51e1\u4eba\u4fee\u4ed9\u4f20"
                },
                {
                    "type": "Synonym",
                    "title": "Fanren Xiu Xian Zhuan: Fanren Feng Qi Tian Nan"
                },
                {
                    "type": "Synonym",
                    "title": "\u51e1\u4eba\u4fee\u4ed9\u4f20\u4e4b\u51e1\u4eba\u98ce\u8d77\u5929\u5357"
                },
                {
                    "type": "Synonym",
                    "title": "Fanren Xiu Xian Chuan"
                },
                {
                    "type": "Synonym",
                    "title": "RMJI"
                },
                {
                    "type": "Japanese",
                    "title": "\u51e1\u4eba\u4fee\u4ed9\u4f20"
                },
                {
                    "type": "English",
                    "title": "A Record Of Mortal's Journey To Immortality"
                }
            ],
            "title": "Fanren Xiu Xian Zhuan",
            "title_english": "A Record Of Mortal's Journey To Immortality",
            "title_japanese": "\u51e1\u4eba\u4fee\u4ed9\u4f20",
            "title_synonyms": [
                "A Mortal's Journey",
                "A Record of a Mortal's Journey to Immortality",
                "A Mortal's Journey to Immortality",
                "\u5c0f\u5c0f\u51e1\u4eba\u4fee\u4ed9\u4f20",
                "Fanren Xiu Xian Zhuan: Fanren Feng Qi Tian Nan",
                "\u51e1\u4eba\u4fee\u4ed9\u4f20\u4e4b\u51e1\u4eba\u98ce\u8d77\u5929\u5357",
                "Fanren Xiu Xian Chuan",
                "RMJI"
            ],
            "type": "ONA",
            "source": "Web novel",
            "episodes": 17,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2020-07-25T00:00:00+00:00",
                "to": "2020-11-29T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 25,
                        "month": 7,
                        "year": 2020
                    },
                    "to": {
                        "day": 29,
                        "month": 11,
                        "year": 2020
                    }
                },
                "string": "Jul 25, 2020 to Nov 29, 2020"
            },
            "duration": "18 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.75,
            "scored_by": 2852,
            "rank": 1228,
            "popularity": 7804,
            "members": 8076,
            "favorites": 78,
            "synopsis": "A poor and ordinary boy from a village joins a minor sect in Jiang Hu and becomes an Unofficial Disciple by chance. How will Han Li, a commoner by birth, establish a foothold for himself in in his sect? With his mediocre aptitude, he must successfully traverse the treacherous path of cultivation and avoid the notice of those who may do him harm. This is a story of an ordinary mortal who, against all odds, clashes with devilish demons and ancient celestials in order to find his own path towards immortality.\n\n(Source: Wuxia World)",
            "background": "Adaptation of Wang Yu's (\u5fd8\u8bed) web novel of the same title.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 1414,
                    "type": "anime",
                    "name": "bilibili",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1414\/bilibili"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 2065,
                    "type": "anime",
                    "name": "Original Force",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2065\/Original_Force"
                },
                {
                    "mal_id": 2471,
                    "type": "anime",
                    "name": "Wonder Cat Animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2471\/Wonder_Cat_Animation"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Martial Arts",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/17\/Martial_Arts"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 3782,
            "url": "https:\/\/myanimelist.net\/anime\/3782\/Kara_no_Kyoukai_Movie_2__Satsujin_Kousatsu_Zen",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/21737.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/21737t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/21737l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/21737.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/21737t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/21737l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/djYFAV1gO6U?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Kara no Kyoukai Movie 2: Satsujin Kousatsu (Zen)"
                },
                {
                    "type": "Synonym",
                    "title": "Kara no Kyoukai: The Garden of Sinners Movie 2"
                },
                {
                    "type": "Synonym",
                    "title": "Borderline of Emptiness: Murder Speculation"
                },
                {
                    "type": "Synonym",
                    "title": "The Garden of Sinners: A Study in Murder"
                },
                {
                    "type": "Synonym",
                    "title": "The Garden of Sinners: \u2026and nothing heart."
                },
                {
                    "type": "Japanese",
                    "title": "\u5287\u5834\u7248 \u7a7a\u306e\u5883\u754c the Garden of sinners \u7b2c\u4e8c\u7ae0\u300e\u6bba\u4eba\u8003\u5bdf\uff08\u524d\uff09\u300f"
                },
                {
                    "type": "English",
                    "title": "The Garden of Sinners Chapter 2: A Study in Murder - Part 1"
                },
                {
                    "type": "German",
                    "title": "The Garden of Sinners Film 2: Mordverdacht Teil 1"
                },
                {
                    "type": "French",
                    "title": "The Garden of Sinners Film 2: Enqu\u00eate criminelle Partie 1"
                }
            ],
            "title": "Kara no Kyoukai Movie 2: Satsujin Kousatsu (Zen)",
            "title_english": "The Garden of Sinners Chapter 2: A Study in Murder - Part 1",
            "title_japanese": "\u5287\u5834\u7248 \u7a7a\u306e\u5883\u754c the Garden of sinners \u7b2c\u4e8c\u7ae0\u300e\u6bba\u4eba\u8003\u5bdf\uff08\u524d\uff09\u300f",
            "title_synonyms": [
                "Kara no Kyoukai: The Garden of Sinners Movie 2",
                "Borderline of Emptiness: Murder Speculation",
                "The Garden of Sinners: A Study in Murder",
                "The Garden of Sinners: \u2026and nothing heart."
            ],
            "type": "Movie",
            "source": "Light novel",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2007-12-29T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 29,
                        "month": 12,
                        "year": 2007
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Dec 29, 2007"
            },
            "duration": "1 hr",
            "rating": "R - 17+ (violence & profanity)",
            "score": 7.75,
            "scored_by": 155553,
            "rank": 1236,
            "popularity": 1089,
            "members": 254201,
            "favorites": 485,
            "synopsis": "In the winter of 1995, Mikiya Kokutou passes a young woman during a late night stroll in the snow. Clad in a striking white kimono and bearing an enigmatic gaze, Shiki Ryougi smiles at Mikiya who stares back with curiosity. Later that spring, Mikiya notices Shiki at his high school entrance ceremony, and they become acquaintances through lunchtime conversations. As Shiki begins opening up to him, Mikiya learns about her unique upbringing.\n\nMeanwhile, a series of unprecedented murders takes place across Mifune City. Seemingly related, these murders are particularly brutal and warrant a large scale police investigation. Because of his cousin's work as a police investigator, Mikiya is given insight into the investigation. Concerned for Shiki's safety, Mikiya decides to monitor her actions, but in doing so, he stumbles upon a truly frightening discovery that changes his life forever.\n\n[Written by MAL Rewrite]",
            "background": "Includes claymation short which was shown before the movie in theaters.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/159\/Kodansha"
                },
                {
                    "mal_id": 703,
                    "type": "anime",
                    "name": "Notes",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/703\/Notes"
                }
            ],
            "licensors": [
                {
                    "mal_id": 493,
                    "type": "anime",
                    "name": "Aniplex of America",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/493\/Aniplex_of_America"
                }
            ],
            "studios": [
                {
                    "mal_id": 43,
                    "type": "anime",
                    "name": "ufotable",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/43\/ufotable"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/7\/Mystery"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/22\/Romance"
                },
                {
                    "mal_id": 41,
                    "type": "anime",
                    "name": "Suspense",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/41\/Suspense"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 82,
                    "type": "anime",
                    "name": "Urban Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/82\/Urban_Fantasy"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 33263,
            "url": "https:\/\/myanimelist.net\/anime\/33263\/Kubikiri_Cycle__Aoiro_Savant_to_Zaregotozukai",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/81588.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/81588t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/81588l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/81588.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/81588t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/81588l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/GSIyTJ0f1zE?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Kubikiri Cycle: Aoiro Savant to Zaregotozukai"
                },
                {
                    "type": "Synonym",
                    "title": "Zaregoto Series"
                },
                {
                    "type": "Synonym",
                    "title": "The Headless Cycle"
                },
                {
                    "type": "Synonym",
                    "title": "The Beheading Cycle: The Blue Savant and the Nonsense Bearer"
                },
                {
                    "type": "Japanese",
                    "title": "\u30af\u30d3\u30ad\u30ea\u30b5\u30a4\u30af\u30eb \u9752\u8272\u30b5\u30f4\u30a1\u30f3\u3068\u622f\u8a00\u9063\u3044"
                },
                {
                    "type": "English",
                    "title": "The Kubikiri Cycle"
                }
            ],
            "title": "Kubikiri Cycle: Aoiro Savant to Zaregotozukai",
            "title_english": "The Kubikiri Cycle",
            "title_japanese": "\u30af\u30d3\u30ad\u30ea\u30b5\u30a4\u30af\u30eb \u9752\u8272\u30b5\u30f4\u30a1\u30f3\u3068\u622f\u8a00\u9063\u3044",
            "title_synonyms": [
                "Zaregoto Series",
                "The Headless Cycle",
                "The Beheading Cycle: The Blue Savant and the Nonsense Bearer"
            ],
            "type": "OVA",
            "source": "Light novel",
            "episodes": 8,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2016-10-26T00:00:00+00:00",
                "to": "2017-09-27T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 26,
                        "month": 10,
                        "year": 2016
                    },
                    "to": {
                        "day": 27,
                        "month": 9,
                        "year": 2017
                    }
                },
                "string": "Oct 26, 2016 to Sep 27, 2017"
            },
            "duration": "29 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 7.75,
            "scored_by": 35994,
            "rank": 1237,
            "popularity": 2178,
            "members": 112803,
            "favorites": 917,
            "synopsis": "Due to a mysterious disease, the genius Iria Akagami has been forced by her family to stay in a mansion on the isolated Wet Crow's Feather Island with only a handful of maids. To keep herself entertained, Iria invites a variety of fellow geniuses to stay as guests in her home, including computer savant Tomo Kunagisa and her unnamed assistant, skilled fortune-teller Maki Himena, famous artist Kanami Ibuki, academic scholar Akane Sonoyama, and renowned cook Yayoi Sashirono.\n\nThese visits progress as normal until one of the guests is found gruesomely murdered in the night without a single clue as to the identity of the killer or a possible motive. Tensions rise between those on the island as the killer remains at large, and Tomo's assistant takes it upon himself to uncover the culprit's identity before the murderous events progress any further.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/159\/Kodansha"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 44,
                    "type": "anime",
                    "name": "Shaft",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/44\/Shaft"
                }
            ],
            "genres": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/7\/Mystery"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 50,
                    "type": "anime",
                    "name": "Adult Cast",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/50\/Adult_Cast"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 37959,
            "url": "https:\/\/myanimelist.net\/anime\/37959\/Gakuen_Babysitters_Special",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1925\/100826.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1925\/100826t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1925\/100826l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1925\/100826.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1925\/100826t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1925\/100826l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gakuen Babysitters Special"
                },
                {
                    "type": "Synonym",
                    "title": "Gakuen Babysitters Episode 13"
                },
                {
                    "type": "Japanese",
                    "title": "\u5b66\u5712\u30d9\u30d3\u30fc\u30b7\u30c3\u30bf\u30fc\u30ba"
                },
                {
                    "type": "English",
                    "title": "School Babysitters Episode 13"
                },
                {
                    "type": "German",
                    "title": "School Babysitters Folge 13 \u2013 Untitled"
                },
                {
                    "type": "French",
                    "title": "School Babysitters \u00c9pisode 13 \u2013 Untitled"
                }
            ],
            "title": "Gakuen Babysitters Special",
            "title_english": "School Babysitters Episode 13",
            "title_japanese": "\u5b66\u5712\u30d9\u30d3\u30fc\u30b7\u30c3\u30bf\u30fc\u30ba",
            "title_synonyms": [
                "Gakuen Babysitters Episode 13"
            ],
            "type": "Special",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2018-09-26T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 26,
                        "month": 9,
                        "year": 2018
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Sep 26, 2018"
            },
            "duration": "27 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.75,
            "scored_by": 24634,
            "rank": 1231,
            "popularity": 3586,
            "members": 48748,
            "favorites": 58,
            "synopsis": "With the onset of exams Ryuuichi and Kotaro spend less time together and a special version of Snow White is put on by the cast of Gakuen Babysitters. This special episode is bundled with the 7th Blu-ray volume.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 112,
                    "type": "anime",
                    "name": "Brain's Base",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/112\/Brains_Base"
                }
            ],
            "genres": [
                {
                    "mal_id": 36,
                    "type": "anime",
                    "name": "Slice of Life",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/36\/Slice_of_Life"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Childcare",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/53\/Childcare"
                },
                {
                    "mal_id": 63,
                    "type": "anime",
                    "name": "Iyashikei",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/63\/Iyashikei"
                }
            ],
            "demographics": [
                {
                    "mal_id": 25,
                    "type": "anime",
                    "name": "Shoujo",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/25\/Shoujo"
                }
            ]
        },
        {
            "mal_id": 38400,
            "url": "https:\/\/myanimelist.net\/anime\/38400\/Free_Movie_4__The_Final_Stroke_-_Zenpen",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1450\/117893.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1450\/117893t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1450\/117893l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1450\/117893.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1450\/117893t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1450\/117893l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/J5xtbQi6c_0?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Free! Movie 4: The Final Stroke - Zenpen"
                },
                {
                    "type": "Synonym",
                    "title": "Gekijouban Free! The Final Stroke Zenpen"
                },
                {
                    "type": "Japanese",
                    "title": "\u5287\u5834\u7248 Free!-the Final Stroke-"
                },
                {
                    "type": "English",
                    "title": "Free! the Final Stroke: The First Volume"
                }
            ],
            "title": "Free! Movie 4: The Final Stroke - Zenpen",
            "title_english": "Free! the Final Stroke: The First Volume",
            "title_japanese": "\u5287\u5834\u7248 Free!-the Final Stroke-",
            "title_synonyms": [
                "Gekijouban Free! The Final Stroke Zenpen"
            ],
            "type": "Movie",
            "source": "Original",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2021-09-17T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 17,
                        "month": 9,
                        "year": 2021
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Sep 17, 2021"
            },
            "duration": "1 hr 26 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.75,
            "scored_by": 12191,
            "rank": 1229,
            "popularity": 3095,
            "members": 64124,
            "favorites": 217,
            "synopsis": "Haruka Nanase's new stage is Sydney, the place of his dreams that he once visited. One day while taking a short break before his departure, Haru has a chance confrontation with a fellow athlete from the All-Japan Invitational. Carrying all the feelings from those he's swam with in his heart, Haru takes his first step forward into a new world.\n\nWaiting for him there is the unmistakable champion, Albert Volandel.\n\nIn the lead up to the Sydney tournament, all the competitors attempt to boost their morale. What is each competitor feeling, and what do they swim for, as they attempt to compete at the top of the world?\n\nTheir passionate struggle against the water begins from here\u2015\u2015\uff01\n\n(Source: Free! website, Translated)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 144,
                    "type": "anime",
                    "name": "Pony Canyon",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/144\/Pony_Canyon"
                },
                {
                    "mal_id": 1500,
                    "type": "anime",
                    "name": "ABC Animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1500\/ABC_Animation"
                },
                {
                    "mal_id": 1840,
                    "type": "anime",
                    "name": "Bandai Namco Arts",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1840\/Bandai_Namco_Arts"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Kyoto Animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2\/Kyoto_Animation"
                }
            ],
            "genres": [
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/30\/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "School",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/23\/School"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 29829,
            "url": "https:\/\/myanimelist.net\/anime\/29829\/Tamayura__Sotsugyou_Shashin_Part_2_-_Hibiki",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/76028.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/76028t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/76028l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/76028.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/76028t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/76028l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/V-kbJCtkHpE?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Tamayura: Sotsugyou Shashin Part 2 - Hibiki"
                },
                {
                    "type": "Synonym",
                    "title": "Tamayura Kanketsu-hen Movie 2"
                },
                {
                    "type": "Japanese",
                    "title": "\u305f\u307e\u3086\u3089\uff5e\u5352\u696d\u5199\u771f\uff5e \u7b2c2\u90e8 \u97ff-\u3072\u3073\u304d-"
                }
            ],
            "title": "Tamayura: Sotsugyou Shashin Part 2 - Hibiki",
            "title_english": null,
            "title_japanese": "\u305f\u307e\u3086\u3089\uff5e\u5352\u696d\u5199\u771f\uff5e \u7b2c2\u90e8 \u97ff-\u3072\u3073\u304d-",
            "title_synonyms": [
                "Tamayura Kanketsu-hen Movie 2"
            ],
            "type": "Movie",
            "source": "Original",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2015-08-29T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 29,
                        "month": 8,
                        "year": 2015
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Aug 29, 2015"
            },
            "duration": "52 min",
            "rating": "G - All Ages",
            "score": 7.75,
            "scored_by": 4314,
            "rank": 1247,
            "popularity": 6573,
            "members": 12398,
            "favorites": 11,
            "synopsis": "The second movie of a four-part finale of Tamayura.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 109,
                    "type": "anime",
                    "name": "Shochiku",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/109\/Shochiku"
                },
                {
                    "mal_id": 464,
                    "type": "anime",
                    "name": "flying DOG",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/464\/flying_DOG"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 333,
                    "type": "anime",
                    "name": "TYO Animations",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/333\/TYO_Animations"
                }
            ],
            "genres": [
                {
                    "mal_id": 36,
                    "type": "anime",
                    "name": "Slice of Life",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/36\/Slice_of_Life"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 52,
                    "type": "anime",
                    "name": "CGDCT",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/52\/CGDCT"
                },
                {
                    "mal_id": 63,
                    "type": "anime",
                    "name": "Iyashikei",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/63\/Iyashikei"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 35320,
            "url": "https:\/\/myanimelist.net\/anime\/35320\/Cardcaptor_Sakura__Clear_Card-hen_Prologue_-_Sakura_to_Futatsu_no_Kuma",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/89305.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/89305t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/89305l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/89305.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/89305t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/89305l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Cardcaptor Sakura: Clear Card-hen Prologue - Sakura to Futatsu no Kuma"
                },
                {
                    "type": "Japanese",
                    "title": "\u30ab\u30fc\u30c9\u30ad\u30e3\u30d7\u30bf\u30fc\u3055\u304f\u3089 \u30af\u30ea\u30a2\u30ab\u30fc\u30c9\u7de8 \u30d7\u30ed\u30ed\u30fc\u30b0 \u3055\u304f\u3089\u3068\u3075\u305f\u3064\u306e\u304f\u307e"
                },
                {
                    "type": "English",
                    "title": "Cardcaptor Sakura: Clear Card Prologue \u2013 Sakura and the Two Bears"
                },
                {
                    "type": "Spanish",
                    "title": "Cardcaptor Sakura: Clear Clard. Episodio 23: Sakura y los dos Osos."
                }
            ],
            "title": "Cardcaptor Sakura: Clear Card-hen Prologue - Sakura to Futatsu no Kuma",
            "title_english": "Cardcaptor Sakura: Clear Card Prologue \u2013 Sakura and the Two Bears",
            "title_japanese": "\u30ab\u30fc\u30c9\u30ad\u30e3\u30d7\u30bf\u30fc\u3055\u304f\u3089 \u30af\u30ea\u30a2\u30ab\u30fc\u30c9\u7de8 \u30d7\u30ed\u30ed\u30fc\u30b0 \u3055\u304f\u3089\u3068\u3075\u305f\u3064\u306e\u304f\u307e",
            "title_synonyms": [],
            "type": "OVA",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2017-09-13T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 13,
                        "month": 9,
                        "year": 2017
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Sep 13, 2017"
            },
            "duration": "26 min",
            "rating": "G - All Ages",
            "score": 7.75,
            "scored_by": 21311,
            "rank": 1225,
            "popularity": 3697,
            "members": 46571,
            "favorites": 98,
            "synopsis": "After the conclusion of the Sakura Card Arc, life is going back to normal. There are no more mysteries, no more disturbances of evil, no more tests of strength. Everyone is moving on with their lives and Sakura feels a sadness in her heart. Even through the goodbyes, Sakura perseveres to keep everyone and a special someone, dear to her heart.",
            "background": "This episode was released bundled with the special edition of the third volume of Cardcaptor Sakura: Clear Card. It adapts the ending of the original manga accurately as opposed to the original series and The Sealed Card which had an original ending. However, the TV anime of Cardcaptor Sakura: Clear Card follows the original anime's continuity rather than the manga or prologue OVA.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 111,
                    "type": "anime",
                    "name": "NHK",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/111\/NHK"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 11,
                    "type": "anime",
                    "name": "Madhouse",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/11\/Madhouse"
                }
            ],
            "genres": [
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/22\/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 66,
                    "type": "anime",
                    "name": "Mahou Shoujo",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/66\/Mahou_Shoujo"
                }
            ],
            "demographics": [
                {
                    "mal_id": 25,
                    "type": "anime",
                    "name": "Shoujo",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/25\/Shoujo"
                }
            ]
        },
        {
            "mal_id": 53126,
            "url": "https:\/\/myanimelist.net\/anime\/53126\/Yamada-kun_to_Lv999_no_Koi_wo_Suru",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1298\/134178.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1298\/134178t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1298\/134178l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1298\/134178.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1298\/134178t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1298\/134178l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/LpZI3j6Axlo?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Yamada-kun to Lv999 no Koi wo Suru"
                },
                {
                    "type": "Synonym",
                    "title": "Loving Yamada at Lv999"
                },
                {
                    "type": "Japanese",
                    "title": "\u5c71\u7530\u304f\u3093\u3068Lv999\u306e\u604b\u3092\u3059\u308b"
                },
                {
                    "type": "English",
                    "title": "My Love Story with Yamada-kun at Lv999"
                }
            ],
            "title": "Yamada-kun to Lv999 no Koi wo Suru",
            "title_english": "My Love Story with Yamada-kun at Lv999",
            "title_japanese": "\u5c71\u7530\u304f\u3093\u3068Lv999\u306e\u604b\u3092\u3059\u308b",
            "title_synonyms": [
                "Loving Yamada at Lv999"
            ],
            "type": "TV",
            "source": "Web manga",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2023-04-02T00:00:00+00:00",
                "to": "2023-06-25T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 2,
                        "month": 4,
                        "year": 2023
                    },
                    "to": {
                        "day": 25,
                        "month": 6,
                        "year": 2023
                    }
                },
                "string": "Apr 2, 2023 to Jun 25, 2023"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.75,
            "scored_by": 282091,
            "rank": 1250,
            "popularity": 465,
            "members": 535242,
            "favorites": 5179,
            "synopsis": "After her boyfriend breaks up with her for another girl, college student Akane Kinoshita wrestles with a broken heart and the memories he left behind. Loading up Forest of Savior, the MMO they used to play together, she forms a plan to get back at her ex-boyfriend through an in-person event for the game. In the process, she runs into someone unexpected: Akito Yamada, a gaming legend who just happens to be her guildmate.\n\nDesperate for support, Akane ropes the asocial Yamada into helping with her scheme and lending her a shoulder to cry on. The differences between Akane and Yamada soon become apparent as they spend time together, yet they cannot help but notice each other's inner qualities. As the two gain more experience with one another in and out of the game, their tentative acquaintance may level up in a way neither expects.\n\n[Written by MAL Rewrite]",
            "background": "Yamada-kun to Lv999 no Koi wo Suru was released on Blu-ray and DVD in seven volumes from June 28, 2023, to December 24, 2023.",
            "season": "spring",
            "year": 2023,
            "broadcast": {
                "day": "Sundays",
                "time": "00:30",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 00:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 166,
                    "type": "anime",
                    "name": "Movic",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/166\/Movic"
                },
                {
                    "mal_id": 1211,
                    "type": "anime",
                    "name": "Tokyo MX",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1211\/Tokyo_MX"
                },
                {
                    "mal_id": 1416,
                    "type": "anime",
                    "name": "BS11",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1416\/BS11"
                },
                {
                    "mal_id": 1444,
                    "type": "anime",
                    "name": "Egg Firm",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1444\/Egg_Firm"
                },
                {
                    "mal_id": 1696,
                    "type": "anime",
                    "name": "Kadokawa",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1696\/Kadokawa"
                },
                {
                    "mal_id": 1902,
                    "type": "anime",
                    "name": "COMICSMART",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1902\/COMICSMART"
                }
            ],
            "licensors": [
                {
                    "mal_id": 493,
                    "type": "anime",
                    "name": "Aniplex of America",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/493\/Aniplex_of_America"
                }
            ],
            "studios": [
                {
                    "mal_id": 11,
                    "type": "anime",
                    "name": "Madhouse",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/11\/Madhouse"
                }
            ],
            "genres": [
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/22\/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 79,
                    "type": "anime",
                    "name": "Video Game",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/79\/Video_Game"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 51769,
            "url": "https:\/\/myanimelist.net\/anime\/51769\/Xingchen_Bian_5th_Season",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1593\/126730.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1593\/126730t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1593\/126730l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1593\/126730.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1593\/126730t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1593\/126730l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/yshWhTNYng8?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Xingchen Bian 5th Season"
                },
                {
                    "type": "Synonym",
                    "title": "\u661f\u8fb0\u53d8 \u6697\u661f\u754c\u7bc7"
                },
                {
                    "type": "Synonym",
                    "title": "Xingchen Bian: An Xing Jie Pian"
                },
                {
                    "type": "Synonym",
                    "title": "Xing Chen Bian 5th Season"
                },
                {
                    "type": "Synonym",
                    "title": "Legend of Immortals 5th Season"
                },
                {
                    "type": "Japanese",
                    "title": "\u661f\u8fb0\u53d8 \u7b2c5\u5b63"
                },
                {
                    "type": "English",
                    "title": "Stellar Transformation 5th Season"
                }
            ],
            "title": "Xingchen Bian 5th Season",
            "title_english": "Stellar Transformation 5th Season",
            "title_japanese": "\u661f\u8fb0\u53d8 \u7b2c5\u5b63",
            "title_synonyms": [
                "\u661f\u8fb0\u53d8 \u6697\u661f\u754c\u7bc7",
                "Xingchen Bian: An Xing Jie Pian",
                "Xing Chen Bian 5th Season",
                "Legend of Immortals 5th Season"
            ],
            "type": "ONA",
            "source": "Web novel",
            "episodes": 28,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2022-12-26T00:00:00+00:00",
                "to": "2023-07-31T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 26,
                        "month": 12,
                        "year": 2022
                    },
                    "to": {
                        "day": 31,
                        "month": 7,
                        "year": 2023
                    }
                },
                "string": "Dec 26, 2022 to Jul 31, 2023"
            },
            "duration": "25 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.75,
            "scored_by": 1042,
            "rank": 1249,
            "popularity": 11503,
            "members": 2715,
            "favorites": 27,
            "synopsis": "Qin Yu ascends to the realm of immortals, demons, and monsters, where he encounters Liu Hanshu by chance. Seeing his former self reflected in Liu, Qin Yu decides to take him as a disciple and teach him how to protect himself. However, due to the treasured Star Map, he incurs the wrath of the Liu family and the Jade Sword Sect, ultimately ending with Liu Hanshu's death. Qin Yu embarks on a path of confrontation with powerful adversaries, diligently cultivating to become stronger, upholding his core principles of justice, and striving to protect those he cares about. The three brothers ascend and separate. To find his brothers, Qin Yu embarks on a long journey. Where are Xiao Hei and Hou Fei? Will they ever reunite?\n\n(Source: Tencent, translated)",
            "background": "Episodes 53-80 of Xingchen Bian.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 1727,
                    "type": "anime",
                    "name": "Tencent Video",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1727\/Tencent_Video"
                },
                {
                    "mal_id": 1728,
                    "type": "anime",
                    "name": "China Literature Limited",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1728\/China_Literature_Limited"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1667,
                    "type": "anime",
                    "name": "Foch Film",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1667\/Foch_Film"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/22\/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Martial Arts",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/17\/Martial_Arts"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 54035,
            "url": "https:\/\/myanimelist.net\/anime\/54035\/Huangjin_Tingyuan__Dongri_Li_de_Xinnian_Yuanwang",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1830\/134820.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1830\/134820t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1830\/134820l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1830\/134820.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1830\/134820t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1830\/134820l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/LvTrAeiqmag?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Huangjin Tingyuan: Dongri Li de Xinnian Yuanwang"
                },
                {
                    "type": "Japanese",
                    "title": "\u9ec4\u91d1\u5ead\u9662\uff1a\u51ac\u65e5\u91cc\u7684\u65b0\u5e74\u613f\u671b"
                },
                {
                    "type": "English",
                    "title": "Golden Courtyard: New Year Wishes in Winter"
                }
            ],
            "title": "Huangjin Tingyuan: Dongri Li de Xinnian Yuanwang",
            "title_english": "Golden Courtyard: New Year Wishes in Winter",
            "title_japanese": "\u9ec4\u91d1\u5ead\u9662\uff1a\u51ac\u65e5\u91cc\u7684\u65b0\u5e74\u613f\u671b",
            "title_synonyms": [],
            "type": "ONA",
            "source": "Game",
            "episodes": 2,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2023-01-20T00:00:00+00:00",
                "to": "2023-01-21T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 20,
                        "month": 1,
                        "year": 2023
                    },
                    "to": {
                        "day": 21,
                        "month": 1,
                        "year": 2023
                    }
                },
                "string": "Jan 20, 2023 to Jan 21, 2023"
            },
            "duration": "16 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.75,
            "scored_by": 1505,
            "rank": 1233,
            "popularity": 10198,
            "members": 3992,
            "favorites": 47,
            "synopsis": "On this wintry day, I'll stay with everyone at Golden Courtyard to do adorable things and create special memories, and then we'll embrace the new year in our unique way. Haha, does this sound ceremonious? After all, I want to create more such wonderful memories with every one of you, because I love you all \u266a  \n\n(Source: Honkai Impact 3rd Official Youtube Channel)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 2253,
                    "type": "anime",
                    "name": "miHoYoAnime",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2253\/miHoYoAnime"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 2415,
                    "type": "anime",
                    "name": "HuaMei Animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2415\/HuaMei_Animation"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        },
        {
            "mal_id": 55151,
            "url": "https:\/\/myanimelist.net\/anime\/55151\/Da_Zhuzai__Nian_Fan",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1805\/155123.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1805\/155123t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1805\/155123l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1805\/155123.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1805\/155123t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1805\/155123l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/39_alppTSeA?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Da Zhuzai: Nian Fan"
                },
                {
                    "type": "Synonym",
                    "title": "Da Zhuzai: Nian Fan 1"
                },
                {
                    "type": "Synonym",
                    "title": "\u5927\u4e3b\u5bb0 \u5e74\u756a1"
                },
                {
                    "type": "Synonym",
                    "title": "Da Zhuzai (2023)"
                },
                {
                    "type": "Synonym",
                    "title": "The Grand Lord"
                },
                {
                    "type": "Synonym",
                    "title": "Da Zhu Zai"
                },
                {
                    "type": "Synonym",
                    "title": "Grand Master 3D"
                },
                {
                    "type": "Synonym",
                    "title": "Da Zhuzai 3D"
                },
                {
                    "type": "Synonym",
                    "title": "TGR"
                },
                {
                    "type": "Japanese",
                    "title": "\u5927\u4e3b\u5bb0 \u5e74\u756a"
                },
                {
                    "type": "English",
                    "title": "The Great Ruler"
                }
            ],
            "title": "Da Zhuzai: Nian Fan",
            "title_english": "The Great Ruler",
            "title_japanese": "\u5927\u4e3b\u5bb0 \u5e74\u756a",
            "title_synonyms": [
                "Da Zhuzai: Nian Fan 1",
                "\u5927\u4e3b\u5bb0 \u5e74\u756a1",
                "Da Zhuzai (2023)",
                "The Grand Lord",
                "Da Zhu Zai",
                "Grand Master 3D",
                "Da Zhuzai 3D",
                "TGR"
            ],
            "type": "ONA",
            "source": "Web novel",
            "episodes": 52,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2023-06-30T00:00:00+00:00",
                "to": "2024-06-07T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 30,
                        "month": 6,
                        "year": 2023
                    },
                    "to": {
                        "day": 7,
                        "month": 6,
                        "year": 2024
                    }
                },
                "string": "Jun 30, 2023 to Jun 7, 2024"
            },
            "duration": "19 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.75,
            "scored_by": 1013,
            "rank": 1226,
            "popularity": 10971,
            "members": 3146,
            "favorites": 22,
            "synopsis": "In the vast world, planes converge and numerous races thrive. A gathering of extraordinary talents unfolds, where one after another, supreme beings from the lower planes come forth. In this boundless realm, they weave captivating legends that inspire admiration, pursuing the path to dominance.\n\n(Source: iQIYI International)",
            "background": "Adaptation of Tian Can Tudou's (\u5929\u8695\u571f\u8c46) web novel of the same title.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 1806,
                    "type": "anime",
                    "name": "iQIYI",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1806\/iQIYI"
                },
                {
                    "mal_id": 2472,
                    "type": "anime",
                    "name": "High Energy Studio",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2472\/High_Energy_Studio"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1827,
                    "type": "anime",
                    "name": "Motion Magic",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1827\/Motion_Magic"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/22\/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Martial Arts",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/17\/Martial_Arts"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 56768,
            "url": "https:\/\/myanimelist.net\/anime\/56768\/Tadaima_Okaeri",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1272\/139785.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1272\/139785t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1272\/139785l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1272\/139785.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1272\/139785t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1272\/139785l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/iGDprJ__H_s?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Tadaima, Okaeri"
                },
                {
                    "type": "Japanese",
                    "title": "\u305f\u3060\u3044\u307e\u3001\u304a\u304b\u3048\u308a"
                },
                {
                    "type": "English",
                    "title": "Tadaima, Okaeri"
                }
            ],
            "title": "Tadaima, Okaeri",
            "title_english": "Tadaima, Okaeri",
            "title_japanese": "\u305f\u3060\u3044\u307e\u3001\u304a\u304b\u3048\u308a",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2024-04-09T00:00:00+00:00",
                "to": "2024-06-25T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 9,
                        "month": 4,
                        "year": 2024
                    },
                    "to": {
                        "day": 25,
                        "month": 6,
                        "year": 2024
                    }
                },
                "string": "Apr 9, 2024 to Jun 25, 2024"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.75,
            "scored_by": 16567,
            "rank": 1245,
            "popularity": 3725,
            "members": 45914,
            "favorites": 385,
            "synopsis": "Hoping for a fresh start, househusband Masaki Fujiyoshi, his spouse Hiromu, and their toddler son, Hikari, move to a new neighborhood. The couple's union was frowned upon by many due to Masaki's status as an omega\u2014a secondary gender that allows an individual to give birth. Even for an alpha\u2014seen as the superior secondary gender\u2014such as Hiromu, discrimination seems to be commonplace and a hindrance to a life of domestic bliss.\n\nFortunately, the new family is not alone. Little Hikari becomes attached to Yuuki Hirai, the Fujiyoshis' lonely college student neighbor. Despite his initial reluctance, Yuuki ends up befriending the infant. Moreover, the family can also confide in Hiromu's childhood friend and coworker Tomohiro \"Matsu\" Matsuo.\n\nAlthough everything is going well for the young couple and their child, a sudden presence from the past might pose a problem for the peaceful life they dream of.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "spring",
            "year": 2024,
            "broadcast": {
                "day": "Tuesdays",
                "time": "00:30",
                "timezone": "Asia\/Tokyo",
                "string": "Tuesdays at 00:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 15,
                    "type": "anime",
                    "name": "Sony Pictures Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/15\/Sony_Pictures_Entertainment"
                },
                {
                    "mal_id": 140,
                    "type": "anime",
                    "name": "Animax",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/140\/Animax"
                },
                {
                    "mal_id": 166,
                    "type": "anime",
                    "name": "Movic",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/166\/Movic"
                },
                {
                    "mal_id": 323,
                    "type": "anime",
                    "name": "Nippon Columbia",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/323\/Nippon_Columbia"
                },
                {
                    "mal_id": 513,
                    "type": "anime",
                    "name": "Nikkatsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/513\/Nikkatsu"
                },
                {
                    "mal_id": 1468,
                    "type": "anime",
                    "name": "Crunchyroll",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1468\/Crunchyroll"
                },
                {
                    "mal_id": 2017,
                    "type": "anime",
                    "name": "Culture Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2017\/Culture_Entertainment"
                },
                {
                    "mal_id": 2074,
                    "type": "anime",
                    "name": "Bit grooove promotion",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2074\/Bit_grooove_promotion"
                },
                {
                    "mal_id": 2926,
                    "type": "anime",
                    "name": "Fusion Product",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2926\/Fusion_Product"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Studio Deen",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/37\/Studio_Deen"
                }
            ],
            "genres": [
                {
                    "mal_id": 28,
                    "type": "anime",
                    "name": "Boys Love",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/28\/Boys_Love"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Childcare",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/53\/Childcare"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 60564,
            "url": "https:\/\/myanimelist.net\/anime\/60564\/Ranma_\u00bd_2024_2nd_Season",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1011\/152084.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1011\/152084t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1011\/152084l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1011\/152084.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1011\/152084t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1011\/152084l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/qf_pRksXtTw?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Ranma \u00bd (2024) 2nd Season"
                },
                {
                    "type": "Synonym",
                    "title": "Ranma 1\/2 (2024) 2nd Season"
                },
                {
                    "type": "Japanese",
                    "title": "\u3089\u3093\u307e1\/2 \u7b2c2\u671f"
                },
                {
                    "type": "English",
                    "title": "Ranma \u00bd (2024) Season 2"
                }
            ],
            "title": "Ranma \u00bd (2024) 2nd Season",
            "title_english": "Ranma \u00bd (2024) Season 2",
            "title_japanese": "\u3089\u3093\u307e1\/2 \u7b2c2\u671f",
            "title_synonyms": [
                "Ranma 1\/2 (2024) 2nd Season"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2025-10-05T00:00:00+00:00",
                "to": "2025-12-21T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 5,
                        "month": 10,
                        "year": 2025
                    },
                    "to": {
                        "day": 21,
                        "month": 12,
                        "year": 2025
                    }
                },
                "string": "Oct 5, 2025 to Dec 21, 2025"
            },
            "duration": "22 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.75,
            "scored_by": 29886,
            "rank": 1242,
            "popularity": 2879,
            "members": 72416,
            "favorites": 223,
            "synopsis": "Things have been lively ever since Ranma Saotome took up residence in the Tendou household. He still turns into a girl whenever doused with cold water, but that has not stopped his unrelenting martial arts training and meeting countless new individuals. Moreover, Ranma and his fianc\u00e9e, Akane Tendou, have grown closer despite their rocky start and constant quarreling.\n\nHowever, some people are not pleased with Ranma and Akane's engagement. A Chinese girl, Shampoo, is set on marrying Ranma, while he is also targeted by other men infatuated with Akane, who resort to anything to defeat him. Nevertheless, Ranma is determined to take on any challenger while navigating through his chaotic life with Akane.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2025,
            "broadcast": {
                "day": "Sundays",
                "time": "00:55",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 00:55 (JST)"
            },
            "producers": [
                {
                    "mal_id": 62,
                    "type": "anime",
                    "name": "Shogakukan-Shueisha Productions",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/62\/Shogakukan-Shueisha_Productions"
                },
                {
                    "mal_id": 474,
                    "type": "anime",
                    "name": "Shogakukan Music & Digital Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/474\/Shogakukan_Music___Digital_Entertainment"
                },
                {
                    "mal_id": 1003,
                    "type": "anime",
                    "name": "Nippon Television Network",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1003\/Nippon_Television_Network"
                },
                {
                    "mal_id": 1430,
                    "type": "anime",
                    "name": "Shogakukan",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1430\/Shogakukan"
                },
                {
                    "mal_id": 1856,
                    "type": "anime",
                    "name": "dugout",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1856\/dugout"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 569,
                    "type": "anime",
                    "name": "MAPPA",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/569\/MAPPA"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/22\/Romance"
                },
                {
                    "mal_id": 9,
                    "type": "anime",
                    "name": "Ecchi",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/9\/Ecchi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 65,
                    "type": "anime",
                    "name": "Magical Sex Shift",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/65\/Magical_Sex_Shift"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Martial Arts",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/17\/Martial_Arts"
                },
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "School",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/23\/School"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 60658,
            "url": "https:\/\/myanimelist.net\/anime\/60658\/Hibi_wa_Sugiredo_Meshi_Umashi",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1221\/148863.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1221\/148863t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1221\/148863l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1221\/148863.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1221\/148863t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1221\/148863l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/FtAmzXI4q_Y?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Hibi wa Sugiredo Meshi Umashi"
                },
                {
                    "type": "Synonym",
                    "title": "Hibimeshi"
                },
                {
                    "type": "Japanese",
                    "title": "\u65e5\u3005\u306f\u904e\u304e\u308c\u3069\u98ef\u3046\u307e\u3057"
                },
                {
                    "type": "English",
                    "title": "Food for the Soul"
                }
            ],
            "title": "Hibi wa Sugiredo Meshi Umashi",
            "title_english": "Food for the Soul",
            "title_japanese": "\u65e5\u3005\u306f\u904e\u304e\u308c\u3069\u98ef\u3046\u307e\u3057",
            "title_synonyms": [
                "Hibimeshi"
            ],
            "type": "TV",
            "source": "Original",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2025-04-13T00:00:00+00:00",
                "to": "2025-06-29T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 13,
                        "month": 4,
                        "year": 2025
                    },
                    "to": {
                        "day": 29,
                        "month": 6,
                        "year": 2025
                    }
                },
                "string": "Apr 13, 2025 to Jun 29, 2025"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.75,
            "scored_by": 17692,
            "rank": 1232,
            "popularity": 3615,
            "members": 48239,
            "favorites": 311,
            "synopsis": "Introverted university student Mako Kawai has a hobby of watching food videos and cooking what she learns from them. She is now a far cry from her energetic self back in elementary school\u2014due to her growing social anxiety, she fears trying new things, such as going to restaurants alone or even making friends.\n\nEnter Shinon Ogawa, one of Mako's childhood friends with whom she reunites in college. Still as extroverted as ever, Shinon quickly adopts Mako into her friend group, which includes the easygoing Tsutsuji Higa and the level-headed Kurea Furutachi. Together, they are planning to start a Food Culture Research Club and invite Mako to join as their fourth member. Though she initially declines, Mako soon realizes that this is her chance to finally brighten up her days, enjoy life surrounded by friends, and eat delicious food with everyone!\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "spring",
            "year": 2025,
            "broadcast": {
                "day": "Sundays",
                "time": "01:30",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 01:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 166,
                    "type": "anime",
                    "name": "Movic",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/166\/Movic"
                },
                {
                    "mal_id": 306,
                    "type": "anime",
                    "name": "Magic Capsule",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/306\/Magic_Capsule"
                },
                {
                    "mal_id": 1211,
                    "type": "anime",
                    "name": "Tokyo MX",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1211\/Tokyo_MX"
                },
                {
                    "mal_id": 1366,
                    "type": "anime",
                    "name": "Nagoya Broadcasting Network",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1366\/Nagoya_Broadcasting_Network"
                },
                {
                    "mal_id": 1416,
                    "type": "anime",
                    "name": "BS11",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1416\/BS11"
                },
                {
                    "mal_id": 1500,
                    "type": "anime",
                    "name": "ABC Animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1500\/ABC_Animation"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 132,
                    "type": "anime",
                    "name": "P.A. Works",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/132\/PA_Works"
                }
            ],
            "genres": [
                {
                    "mal_id": 47,
                    "type": "anime",
                    "name": "Gourmet",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/47\/Gourmet"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 50,
                    "type": "anime",
                    "name": "Adult Cast",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/50\/Adult_Cast"
                },
                {
                    "mal_id": 52,
                    "type": "anime",
                    "name": "CGDCT",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/52\/CGDCT"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 32673,
            "url": "https:\/\/myanimelist.net\/anime\/32673\/Udon_no_Kuni_no_Kiniro_Kemari",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/82343.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/82343t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/82343l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/82343.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/82343t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/82343l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/JcYEz3B0oDM?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Udon no Kuni no Kiniro Kemari"
                },
                {
                    "type": "Synonym",
                    "title": "Gaogao-chan to Aoi Sora"
                },
                {
                    "type": "Japanese",
                    "title": "\u3046\u3069\u3093\u306e\u56fd\u306e\u91d1\u8272\u6bdb\u97a0"
                },
                {
                    "type": "English",
                    "title": "Poco's Udon World"
                },
                {
                    "type": "German",
                    "title": "Poco's Udon World"
                },
                {
                    "type": "Spanish",
                    "title": "Pocok's Udon World"
                },
                {
                    "type": "French",
                    "title": "Poco's Udon World"
                }
            ],
            "title": "Udon no Kuni no Kiniro Kemari",
            "title_english": "Poco's Udon World",
            "title_japanese": "\u3046\u3069\u3093\u306e\u56fd\u306e\u91d1\u8272\u6bdb\u97a0",
            "title_synonyms": [
                "Gaogao-chan to Aoi Sora"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2016-10-09T00:00:00+00:00",
                "to": "2016-12-25T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 9,
                        "month": 10,
                        "year": 2016
                    },
                    "to": {
                        "day": 25,
                        "month": 12,
                        "year": 2016
                    }
                },
                "string": "Oct 9, 2016 to Dec 25, 2016"
            },
            "duration": "22 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.74,
            "scored_by": 56567,
            "rank": 1257,
            "popularity": 1813,
            "members": 143919,
            "favorites": 684,
            "synopsis": "Taking a break from the hustle and bustle of Tokyo, Souta Tawara returns to his hometown in Kagawa. Though his parents are no longer around, his former home and family-owned udon restaurant reminds him of the times his family was still together. Reminiscing about his childhood, Souta enters the udon restaurant and discovers a grimy young boy sleeping.\n\nAt first, Souta thinks nothing of the chance encounter and provides the boy with food and clothing. However, to his surprise, the boy suddenly sprouts a furry pair of ears and a tail! Souta soon learns that the nameless boy is actually the rumored shapeshifting tanuki that has been inhabiting Kagawa for many years. Thinking that the boy has been living a lonely life, he decides to take him in and name him Poko.\n\nUdon no Kuni no Kiniro Kemari follows the heartwarming relationship between Souta and Poko, and through the time they spend together, Souta recalls his own past, the place he left behind for the city, and the relationship he had with his father.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2016,
            "broadcast": {
                "day": "Sundays",
                "time": "01:55",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 01:55 (JST)"
            },
            "producers": [
                {
                    "mal_id": 29,
                    "type": "anime",
                    "name": "VAP",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/29\/VAP"
                },
                {
                    "mal_id": 1003,
                    "type": "anime",
                    "name": "Nippon Television Network",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1003\/Nippon_Television_Network"
                },
                {
                    "mal_id": 1418,
                    "type": "anime",
                    "name": "Nippon Television Music",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1418\/Nippon_Television_Music"
                },
                {
                    "mal_id": 1548,
                    "type": "anime",
                    "name": "Nishinippon Broadcasting",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1548\/Nishinippon_Broadcasting"
                },
                {
                    "mal_id": 1549,
                    "type": "anime",
                    "name": "Dai Nippon Printing",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1549\/Dai_Nippon_Printing"
                },
                {
                    "mal_id": 1550,
                    "type": "anime",
                    "name": "Shinchosha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1550\/Shinchosha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 467,
                    "type": "anime",
                    "name": "Discotek Media",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/467\/Discotek_Media"
                }
            ],
            "studios": [
                {
                    "mal_id": 839,
                    "type": "anime",
                    "name": "LIDENFILMS",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/839\/LIDENFILMS"
                }
            ],
            "genres": [
                {
                    "mal_id": 36,
                    "type": "anime",
                    "name": "Slice of Life",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/36\/Slice_of_Life"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 51,
                    "type": "anime",
                    "name": "Anthropomorphic",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/51\/Anthropomorphic"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Childcare",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/53\/Childcare"
                },
                {
                    "mal_id": 63,
                    "type": "anime",
                    "name": "Iyashikei",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/63\/Iyashikei"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/42\/Seinen"
                }
            ]
        },
        {
            "mal_id": 39196,
            "url": "https:\/\/myanimelist.net\/anime\/39196\/Mairimashita_Iruma-kun",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1009\/103187.jpg",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1009\/103187t.jpg",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1009\/103187l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1009\/103187.webp",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1009\/103187t.webp",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1009\/103187l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/kkeuJt0DE7g?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Mairimashita! Iruma-kun"
                },
                {
                    "type": "Japanese",
                    "title": "\u9b54\u5165\u308a\u307e\u3057\u305f\uff01\u5165\u9593\u304f\u3093"
                },
                {
                    "type": "English",
                    "title": "Welcome to Demon School! Iruma-kun"
                },
                {
                    "type": "German",
                    "title": "Welcome to Demon School! Iruma-kun"
                },
                {
                    "type": "Spanish",
                    "title": "Welcome to Demon School! Iruma-kun"
                },
                {
                    "type": "French",
                    "title": "Welcome to Demon School! Iruma-kun"
                }
            ],
            "title": "Mairimashita! Iruma-kun",
            "title_english": "Welcome to Demon School! Iruma-kun",
            "title_japanese": "\u9b54\u5165\u308a\u307e\u3057\u305f\uff01\u5165\u9593\u304f\u3093",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 23,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2019-10-05T00:00:00+00:00",
                "to": "2020-03-07T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 5,
                        "month": 10,
                        "year": 2019
                    },
                    "to": {
                        "day": 7,
                        "month": 3,
                        "year": 2020
                    }
                },
                "string": "Oct 5, 2019 to Mar 7, 2020"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.74,
            "scored_by": 292030,
            "rank": 1277,
            "popularity": 442,
            "members": 556620,
            "favorites": 4942,
            "synopsis": "Fourteen-year-old Iruma Suzuki has been unfortunate all his life, having to work to earn money for his irresponsible parents despite being underage. One day, he finds out that his parents sold him to the demon Sullivan. However, Iruma's worries about what will become of him are soon relieved, for Sullivan merely wants a grandchild, pampering him and making him attend the demon school Babyls. \n\nAt first, Iruma tries to keep a low profile in fear of his peers discovering that he is human. Unfortunately, this ends up being more difficult than he expected. It turns out that Sullivan himself is the chairman of the school, and everyone expects him to become the next Demon King!\n\nIruma immediately finds himself in an outrageous situation when he has to chant a forbidden spell in front of the entire school. With this, Iruma instantly earns a reputation he does not want. Even so, he is bound to be roped into more bizarre circumstances.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2019,
            "broadcast": {
                "day": "Saturdays",
                "time": "17:35",
                "timezone": "Asia\/Tokyo",
                "string": "Saturdays at 17:35 (JST)"
            },
            "producers": [
                {
                    "mal_id": 111,
                    "type": "anime",
                    "name": "NHK",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/111\/NHK"
                },
                {
                    "mal_id": 1797,
                    "type": "anime",
                    "name": "NHK Enterprises",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1797\/NHK_Enterprises"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1258,
                    "type": "anime",
                    "name": "Bandai Namco Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1258\/Bandai_Namco_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "School",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/23\/School"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 37521,
            "url": "https:\/\/myanimelist.net\/anime\/37521\/Vinland_Saga",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1500\/103005.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1500\/103005t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1500\/103005l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1500\/103005.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1500\/103005t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1500\/103005l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/f8JrZ7Q_p-8?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Vinland Saga"
                },
                {
                    "type": "Japanese",
                    "title": "\u30f4\u30a3\u30f3\u30e9\u30f3\u30c9\u30fb\u30b5\u30ac"
                }
            ],
            "title": "Vinland Saga",
            "title_english": null,
            "title_japanese": "\u30f4\u30a3\u30f3\u30e9\u30f3\u30c9\u30fb\u30b5\u30ac",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 24,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2019-07-08T00:00:00+00:00",
                "to": "2019-12-30T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 8,
                        "month": 7,
                        "year": 2019
                    },
                    "to": {
                        "day": 30,
                        "month": 12,
                        "year": 2019
                    }
                },
                "string": "Jul 8, 2019 to Dec 30, 2019"
            },
            "duration": "24 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.78,
            "scored_by": 1044611,
            "rank": 39,
            "popularity": 62,
            "members": 1790701,
            "favorites": 56546,
            "synopsis": "Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland. It's said to be warm and fertile, a place where there would be no need for fighting\u2014not at all like the frozen village in Iceland where he was born, and certainly not like his current life as a mercenary. War is his home now. Though his father once told him, \"You have no enemies, nobody does. There is nobody who it's okay to hurt,\" as he grew, Thorfinn knew that nothing was further from the truth.\n\nThe war between England and the Danes grows worse with each passing year. Death has become commonplace, and the viking mercenaries are loving every moment of it. Allying with either side will cause a massive swing in the balance of power, and the vikings are happy to make names for themselves and take any spoils they earn along the way. Among the chaos, Thorfinn must take his revenge and kill Askeladd, the man who murdered his father. The only paradise for the vikings, it seems, is the era of war and death that rages on.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "summer",
            "year": 2019,
            "broadcast": {
                "day": "Mondays",
                "time": "00:10",
                "timezone": "Asia\/Tokyo",
                "string": "Mondays at 00:10 (JST)"
            },
            "producers": [
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Production I.G",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/10\/Production_IG"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/159\/Kodansha"
                },
                {
                    "mal_id": 1747,
                    "type": "anime",
                    "name": "Twin Engine",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1747\/Twin_Engine"
                }
            ],
            "licensors": [
                {
                    "mal_id": 376,
                    "type": "anime",
                    "name": "Sentai Filmworks",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/376\/Sentai_Filmworks"
                }
            ],
            "studios": [
                {
                    "mal_id": 858,
                    "type": "anime",
                    "name": "Wit Studio",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/858\/Wit_Studio"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 58,
                    "type": "anime",
                    "name": "Gore",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/58\/Gore"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/42\/Seinen"
                }
            ]
        },
        {
            "mal_id": 40028,
            "url": "https:\/\/myanimelist.net\/anime\/40028\/Shingeki_no_Kyojin__The_Final_Season",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1000\/110531.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1000\/110531t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1000\/110531l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1000\/110531.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1000\/110531t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1000\/110531l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/SlNpRThS9t8?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Shingeki no Kyojin: The Final Season"
                },
                {
                    "type": "Synonym",
                    "title": "Shingeki no Kyojin Season 4"
                },
                {
                    "type": "Synonym",
                    "title": "Attack on Titan Season 4"
                },
                {
                    "type": "Japanese",
                    "title": "\u9032\u6483\u306e\u5de8\u4eba The Final Season"
                },
                {
                    "type": "English",
                    "title": "Attack on Titan: Final Season"
                },
                {
                    "type": "German",
                    "title": "Attack on Titan Final Season"
                },
                {
                    "type": "Spanish",
                    "title": "Ataque a los Titanes Temporada Final"
                },
                {
                    "type": "French",
                    "title": "L'Attaque des Titans Saison Finale"
                }
            ],
            "title": "Shingeki no Kyojin: The Final Season",
            "title_english": "Attack on Titan: Final Season",
            "title_japanese": "\u9032\u6483\u306e\u5de8\u4eba The Final Season",
            "title_synonyms": [
                "Shingeki no Kyojin Season 4",
                "Attack on Titan Season 4"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 16,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2020-12-07T00:00:00+00:00",
                "to": "2021-03-29T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 7,
                        "month": 12,
                        "year": 2020
                    },
                    "to": {
                        "day": 29,
                        "month": 3,
                        "year": 2021
                    }
                },
                "string": "Dec 7, 2020 to Mar 29, 2021"
            },
            "duration": "23 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.78,
            "scored_by": 1503653,
            "rank": 38,
            "popularity": 30,
            "members": 2260274,
            "favorites": 53900,
            "synopsis": "Gabi Braun and Falco Grice have been training their entire lives to inherit one of the seven Titans under Marley's control and aid their nation in eradicating the Eldians on Paradis. However, just as all seems well for the two cadets, their peace is suddenly shaken by the arrival of Eren Yeager and the remaining members of the Survey Corps.\n\nHaving finally reached the Yeager family basement and learned about the dark history surrounding the Titans, the Survey Corps has at long last found the answer they so desperately fought to uncover. With the truth now in their hands, the group set out for the world beyond the walls.\n\nIn Shingeki no Kyojin: The Final Season, two utterly different worlds collide as each party pursues its own agenda in the long-awaited conclusion to Paradis' fight for freedom.\n\n[Written by MAL Rewrite]",
            "background": "Shingeki no Kyojin: The Final Season adapts content from volumes 23-28 of Hajime Isayama's award-winning manga.",
            "season": "winter",
            "year": 2021,
            "broadcast": {
                "day": "Mondays",
                "time": "00:10",
                "timezone": "Asia\/Tokyo",
                "string": "Mondays at 00:10 (JST)"
            },
            "producers": [
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Production I.G",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/10\/Production_IG"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 143,
                    "type": "anime",
                    "name": "Mainichi Broadcasting System",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/143\/Mainichi_Broadcasting_System"
                },
                {
                    "mal_id": 144,
                    "type": "anime",
                    "name": "Pony Canyon",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/144\/Pony_Canyon"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/159\/Kodansha"
                },
                {
                    "mal_id": 1499,
                    "type": "anime",
                    "name": "Techno Sound",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1499\/Techno_Sound"
                },
                {
                    "mal_id": 1557,
                    "type": "anime",
                    "name": "Pony Canyon Enterprises",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1557\/Pony_Canyon_Enterprises"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/102\/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 569,
                    "type": "anime",
                    "name": "MAPPA",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/569\/MAPPA"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 41,
                    "type": "anime",
                    "name": "Suspense",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/41\/Suspense"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 58,
                    "type": "anime",
                    "name": "Gore",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/58\/Gore"
                },
                {
                    "mal_id": 38,
                    "type": "anime",
                    "name": "Military",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/38\/Military"
                },
                {
                    "mal_id": 76,
                    "type": "anime",
                    "name": "Survival",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/76\/Survival"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 2921,
            "url": "https:\/\/myanimelist.net\/anime\/2921\/Ashita_no_Joe_2",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/45028.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/45028t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/45028l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/45028.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/45028t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/45028l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Ashita no Joe 2"
                },
                {
                    "type": "Synonym",
                    "title": "Rocky Joe 2"
                },
                {
                    "type": "Japanese",
                    "title": "\u3042\u3057\u305f\u306e\u30b8\u30e7\u30fc\uff12"
                },
                {
                    "type": "English",
                    "title": "Tomorrow's Joe 2"
                },
                {
                    "type": "German",
                    "title": "N\/A"
                },
                {
                    "type": "Spanish",
                    "title": "El Campe\u00f3n\/ El ma\u00f1ana de Joe 2"
                }
            ],
            "title": "Ashita no Joe 2",
            "title_english": "Tomorrow's Joe 2",
            "title_japanese": "\u3042\u3057\u305f\u306e\u30b8\u30e7\u30fc\uff12",
            "title_synonyms": [
                "Rocky Joe 2"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 47,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1980-10-13T00:00:00+00:00",
                "to": "1981-08-31T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 13,
                        "month": 10,
                        "year": 1980
                    },
                    "to": {
                        "day": 31,
                        "month": 8,
                        "year": 1981
                    }
                },
                "string": "Oct 13, 1980 to Aug 31, 1981"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.78,
            "scored_by": 25793,
            "rank": 36,
            "popularity": 3034,
            "members": 66529,
            "favorites": 3331,
            "synopsis": "Yabuki Joe is left downhearted and hopeless after a certain tragic event. In attempt to put the past behind him, Joe leaves the gym behind and begins wandering. On his travels he comes across the likes of Wolf Kanagushi and Goromaki Gondo, men who unintentionally fan the dying embers inside him, leading him to putting his wanderings to an end. His return home puts Joe back on the path to boxing, but unknown to himself and his trainer, he now suffers deep-set issues holding him back from fighting. In attempt to quell those issues, Carlos Rivera, a world renowned boxer is invited from Venezuela to help Joe recover.",
            "background": "",
            "season": "fall",
            "year": 1980,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": "Unknown"
            },
            "producers": [
                {
                    "mal_id": 583,
                    "type": "anime",
                    "name": "Annapuru",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/583\/Annapuru"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 65,
                    "type": "anime",
                    "name": "Tokyo Movie Shinsha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/65\/Tokyo_Movie_Shinsha"
                }
            ],
            "genres": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/30\/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 54,
                    "type": "anime",
                    "name": "Combat Sports",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/54\/Combat_Sports"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 37510,
            "url": "https:\/\/myanimelist.net\/anime\/37510\/Mob_Psycho_100_II",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1918\/96303.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1918\/96303t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1918\/96303l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1918\/96303.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1918\/96303t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1918\/96303l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/Pr43Sayk37s?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Mob Psycho 100 II"
                },
                {
                    "type": "Synonym",
                    "title": "Mob Psycho 100 2nd Season"
                },
                {
                    "type": "Synonym",
                    "title": "Mob Psycho Hyaku"
                },
                {
                    "type": "Synonym",
                    "title": "Mob Psycho One Hundred"
                },
                {
                    "type": "Japanese",
                    "title": "\u30e2\u30d6\u30b5\u30a4\u30b3100 II"
                },
                {
                    "type": "English",
                    "title": "Mob Psycho 100 II"
                }
            ],
            "title": "Mob Psycho 100 II",
            "title_english": "Mob Psycho 100 II",
            "title_japanese": "\u30e2\u30d6\u30b5\u30a4\u30b3100 II",
            "title_synonyms": [
                "Mob Psycho 100 2nd Season",
                "Mob Psycho Hyaku",
                "Mob Psycho One Hundred"
            ],
            "type": "TV",
            "source": "Web manga",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2019-01-07T00:00:00+00:00",
                "to": "2019-04-01T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 7,
                        "month": 1,
                        "year": 2019
                    },
                    "to": {
                        "day": 1,
                        "month": 4,
                        "year": 2019
                    }
                },
                "string": "Jan 7, 2019 to Apr 1, 2019"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.78,
            "scored_by": 1078670,
            "rank": 41,
            "popularity": 73,
            "members": 1708592,
            "favorites": 33760,
            "synopsis": "Shigeo \"Mob\" Kageyama is now maturing and understanding his role as a supernatural psychic that has the power to drastically affect the livelihood of others. He and his mentor Reigen Arataka continue to deal with supernatural requests from clients, whether it be exorcizing evil spirits or tackling urban legends that haunt the citizens.\n\nWhile the workflow remains the same, Mob isn't just blindly following Reigen around anymore. With all his experiences as a ridiculously strong psychic, Mob's supernatural adventures now have more weight to them. Things take on a serious and darker tone as the dangers Mob and Reigen face are much more tangible and unsettling than ever before.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "winter",
            "year": 2019,
            "broadcast": {
                "day": "Mondays",
                "time": "23:00",
                "timezone": "Asia\/Tokyo",
                "string": "Mondays at 23:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 415,
                    "type": "anime",
                    "name": "Warner Bros. Japan",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/415\/Warner_Bros_Japan"
                },
                {
                    "mal_id": 460,
                    "type": "anime",
                    "name": "KlockWorx",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/460\/KlockWorx"
                },
                {
                    "mal_id": 843,
                    "type": "anime",
                    "name": "BS Fuji",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/843\/BS_Fuji"
                },
                {
                    "mal_id": 1333,
                    "type": "anime",
                    "name": "Hakuhodo DY Music & Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1333\/Hakuhodo_DY_Music___Pictures"
                },
                {
                    "mal_id": 1430,
                    "type": "anime",
                    "name": "Shogakukan",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1430\/Shogakukan"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/102\/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Bones",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/4\/Bones"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        },
        {
            "mal_id": 48583,
            "url": "https:\/\/myanimelist.net\/anime\/48583\/Shingeki_no_Kyojin__The_Final_Season_Part_2",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1948\/120625.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1948\/120625t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1948\/120625l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1948\/120625.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1948\/120625t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1948\/120625l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/EIVVnLlhzr0?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Shingeki no Kyojin: The Final Season Part 2"
                },
                {
                    "type": "Synonym",
                    "title": "Shingeki no Kyojin Season 4"
                },
                {
                    "type": "Synonym",
                    "title": "Attack on Titan Season 4"
                },
                {
                    "type": "Japanese",
                    "title": "\u9032\u6483\u306e\u5de8\u4eba The Final Season Part 2"
                },
                {
                    "type": "English",
                    "title": "Attack on Titan: Final Season Part 2"
                }
            ],
            "title": "Shingeki no Kyojin: The Final Season Part 2",
            "title_english": "Attack on Titan: Final Season Part 2",
            "title_japanese": "\u9032\u6483\u306e\u5de8\u4eba The Final Season Part 2",
            "title_synonyms": [
                "Shingeki no Kyojin Season 4",
                "Attack on Titan Season 4"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2022-01-10T00:00:00+00:00",
                "to": "2022-04-04T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 10,
                        "month": 1,
                        "year": 2022
                    },
                    "to": {
                        "day": 4,
                        "month": 4,
                        "year": 2022
                    }
                },
                "string": "Jan 10, 2022 to Apr 4, 2022"
            },
            "duration": "23 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.77,
            "scored_by": 916761,
            "rank": 44,
            "popularity": 92,
            "members": 1534733,
            "favorites": 32214,
            "synopsis": "Turning against his former allies and enemies alike, Eren Yeager sets a disastrous plan in motion. Under the guidance of the Beast Titan, Zeke, Eren takes extreme measures to end the ancient conflict between Marley and Eldia\u2014but his true intentions remain a mystery. Delving deep into his family's past, Eren fights to control his own destiny.\n\nMeanwhile, the long-feuding nations of Marley and Eldia utilize both soldiers and Titans in a brutal race to eliminate the other. Reiner Braun uses his own powers in a desperate bid to hold off Eren's own militaristic force, and his fellow Eldians\u2014children Falco Grice and Gabi Braun\u2014struggle to survive in the unfolding chaos.\n\nElsewhere, Eren's childhood friends Mikasa Ackerman and Armin Arlert remain imprisoned alongside Eren's former Survey Corps companions, all disturbed by Eren's monstrous transformation. Under the blind belief that Eren still secretly harbors good intentions, Mikasa and the others enter the fray in an attempt to save their friend's very soul.\n\n[Written by MAL Rewrite]",
            "background": "Shingeki no Kyojin: The Final Season Part 2 adapts content from volumes 29-32 of the original manga.",
            "season": "winter",
            "year": 2022,
            "broadcast": {
                "day": "Mondays",
                "time": "00:05",
                "timezone": "Asia\/Tokyo",
                "string": "Mondays at 00:05 (JST)"
            },
            "producers": [
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Production I.G",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/10\/Production_IG"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 143,
                    "type": "anime",
                    "name": "Mainichi Broadcasting System",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/143\/Mainichi_Broadcasting_System"
                },
                {
                    "mal_id": 144,
                    "type": "anime",
                    "name": "Pony Canyon",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/144\/Pony_Canyon"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/159\/Kodansha"
                },
                {
                    "mal_id": 1557,
                    "type": "anime",
                    "name": "Pony Canyon Enterprises",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1557\/Pony_Canyon_Enterprises"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/102\/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 569,
                    "type": "anime",
                    "name": "MAPPA",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/569\/MAPPA"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 41,
                    "type": "anime",
                    "name": "Suspense",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/41\/Suspense"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 58,
                    "type": "anime",
                    "name": "Gore",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/58\/Gore"
                },
                {
                    "mal_id": 38,
                    "type": "anime",
                    "name": "Military",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/38\/Military"
                },
                {
                    "mal_id": 76,
                    "type": "anime",
                    "name": "Survival",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/76\/Survival"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 32935,
            "url": "https:\/\/myanimelist.net\/anime\/32935\/Haikyuu_Karasuno_Koukou_vs_Shiratorizawa_Gakuen_Koukou",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/7\/81992.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/7\/81992t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/7\/81992l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/7\/81992.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/7\/81992t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/7\/81992l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/kJfU5boNUIE?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Haikyuu!! Karasuno Koukou vs. Shiratorizawa Gakuen Koukou"
                },
                {
                    "type": "Synonym",
                    "title": "Haikyuu!! Third Season"
                },
                {
                    "type": "Synonym",
                    "title": "Haikyuu!! Karasuno High VS Shiratorizawa Academy"
                },
                {
                    "type": "Japanese",
                    "title": "\u30cf\u30a4\u30ad\u30e5\u30fc!! \u70cf\u91ce\u9ad8\u6821 VS \u767d\u9ce5\u6ca2\u5b66\u5712\u9ad8\u6821"
                },
                {
                    "type": "English",
                    "title": "Haikyu!! 3rd Season"
                },
                {
                    "type": "German",
                    "title": "Haikyuu!!Staffel 3 Karasuno vs. Shiratorizawa"
                },
                {
                    "type": "Spanish",
                    "title": "Haikyu!! Los Ases del V\u00f3ley Temporada 3"
                },
                {
                    "type": "French",
                    "title": "Haikyuu!! Saison 3"
                }
            ],
            "title": "Haikyuu!! Karasuno Koukou vs. Shiratorizawa Gakuen Koukou",
            "title_english": "Haikyu!! 3rd Season",
            "title_japanese": "\u30cf\u30a4\u30ad\u30e5\u30fc!! \u70cf\u91ce\u9ad8\u6821 VS \u767d\u9ce5\u6ca2\u5b66\u5712\u9ad8\u6821",
            "title_synonyms": [
                "Haikyuu!! Third Season",
                "Haikyuu!! Karasuno High VS Shiratorizawa Academy"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 10,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2016-10-08T00:00:00+00:00",
                "to": "2016-12-10T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 8,
                        "month": 10,
                        "year": 2016
                    },
                    "to": {
                        "day": 10,
                        "month": 12,
                        "year": 2016
                    }
                },
                "string": "Oct 8, 2016 to Dec 10, 2016"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.77,
            "scored_by": 868098,
            "rank": 42,
            "popularity": 117,
            "members": 1316896,
            "favorites": 15969,
            "synopsis": "After the victory against Aoba Jousai High, Karasuno High School, once called \u201ca fallen powerhouse, a crow that can\u2019t fly,\u201d has finally reached the climax of the heated Spring tournament. Now, to advance to nationals, the Karasuno team has to defeat the powerhouse Shiratorizawa Academy. Karasuno\u2019s greatest hurdle is their adversary\u2019s ace, Wakatoshi Ushijima, the number one player in the Miyagi Prefecture, and one of the country\u2019s top three aces.\n\nOnly the strongest team will make it to the national tournament. Since this match is the third-year players\u2019 last chance to qualify for nationals, Karasuno has to use everything they learned during the training camp and prior matches to attain victory. Filled with restlessness and excitement, both teams are determined to come out on top in the third season of Haikyuu!!.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2016,
            "broadcast": {
                "day": "Saturdays",
                "time": "01:55",
                "timezone": "Asia\/Tokyo",
                "string": "Saturdays at 01:55 (JST)"
            },
            "producers": [
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 143,
                    "type": "anime",
                    "name": "Mainichi Broadcasting System",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/143\/Mainichi_Broadcasting_System"
                },
                {
                    "mal_id": 166,
                    "type": "anime",
                    "name": "Movic",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/166\/Movic"
                },
                {
                    "mal_id": 757,
                    "type": "anime",
                    "name": "Sony Music Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/757\/Sony_Music_Entertainment"
                },
                {
                    "mal_id": 1143,
                    "type": "anime",
                    "name": "TOHO animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1143\/TOHO_animation"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 376,
                    "type": "anime",
                    "name": "Sentai Filmworks",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/376\/Sentai_Filmworks"
                }
            ],
            "studios": [
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Production I.G",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/10\/Production_IG"
                }
            ],
            "genres": [
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/30\/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "School",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/23\/School"
                },
                {
                    "mal_id": 77,
                    "type": "anime",
                    "name": "Team Sports",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/77\/Team_Sports"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 17074,
            "url": "https:\/\/myanimelist.net\/anime\/17074\/Monogatari_Series__Second_Season",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1807\/121534.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1807\/121534t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1807\/121534l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1807\/121534.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1807\/121534t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1807\/121534l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/YrAdRp69BBY?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Monogatari Series: Second Season"
                },
                {
                    "type": "Synonym",
                    "title": "Nekomonogatari: Shiro"
                },
                {
                    "type": "Synonym",
                    "title": "Kabukimonogatari"
                },
                {
                    "type": "Synonym",
                    "title": "Otorimonogatari"
                },
                {
                    "type": "Synonym",
                    "title": "Onimonogatari"
                },
                {
                    "type": "Synonym",
                    "title": "Koimonogatari"
                },
                {
                    "type": "Japanese",
                    "title": "\u3008\u7269\u8a9e\u3009\u30b7\u30ea\u30fc\u30ba \u30bb\u30ab\u30f3\u30c9\u30b7\u30fc\u30ba\u30f3"
                },
                {
                    "type": "English",
                    "title": "Monogatari Series: Second Season"
                },
                {
                    "type": "French",
                    "title": "Monogatari Seconde Saison"
                }
            ],
            "title": "Monogatari Series: Second Season",
            "title_english": "Monogatari Series: Second Season",
            "title_japanese": "\u3008\u7269\u8a9e\u3009\u30b7\u30ea\u30fc\u30ba \u30bb\u30ab\u30f3\u30c9\u30b7\u30fc\u30ba\u30f3",
            "title_synonyms": [
                "Nekomonogatari: Shiro",
                "Kabukimonogatari",
                "Otorimonogatari",
                "Onimonogatari",
                "Koimonogatari"
            ],
            "type": "TV",
            "source": "Light novel",
            "episodes": 26,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2013-07-07T00:00:00+00:00",
                "to": "2013-12-29T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 7,
                        "month": 7,
                        "year": 2013
                    },
                    "to": {
                        "day": 29,
                        "month": 12,
                        "year": 2013
                    }
                },
                "string": "Jul 7, 2013 to Dec 29, 2013"
            },
            "duration": "25 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.76,
            "scored_by": 378454,
            "rank": 46,
            "popularity": 326,
            "members": 714864,
            "favorites": 24261,
            "synopsis": "Apparitions, oddities, and gods continue to manifest around Koyomi Araragi and his close-knit group of friends: Tsubasa Hanekawa, the group's modest genius; Shinobu Oshino, the resident doughnut-loving vampire; athletic deviant Suruga Kanbaru; bite-happy spirit Mayoi Hachikuji; Koyomi's cute admirer Nadeko Sengoku; and Hitagi Senjougahara, Koyomi's eclectic girlfriend.\n\nA new semester has begun and with graduation looming over Koyomi, he must quickly decide the paths he will walk, as well as the relationships he will form and friends that he will save. But as strange events begin to unfold, Koyomi is nowhere to be found, and a vicious tiger apparition has appeared in his absence. Hanekawa has become its target, and she quickly finds she must fend for herself.\n\n[Written by MAL Rewrite]",
            "background": "Monogatari Series: Second Season adapts all but the third volume of NisiOisiN's light novel series of the same title. The third volume's adaptation, Hanamonogatari, was aired separately in August 2014. The complete Blu-ray release includes each arc under its novel title and places Hanamonogatari between episodes 11 and 12 of Monogatari Series: Second Season to reflect the original novel order.",
            "season": "summer",
            "year": 2013,
            "broadcast": {
                "day": "Sundays",
                "time": "00:00",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 00:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/159\/Kodansha"
                },
                {
                    "mal_id": 1099,
                    "type": "anime",
                    "name": "Cyclone Graphics",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1099\/Cyclone_Graphics"
                }
            ],
            "licensors": [
                {
                    "mal_id": 493,
                    "type": "anime",
                    "name": "Aniplex of America",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/493\/Aniplex_of_America"
                }
            ],
            "studios": [
                {
                    "mal_id": 44,
                    "type": "anime",
                    "name": "Shaft",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/44\/Shaft"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/7\/Mystery"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/22\/Romance"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 32,
                    "type": "anime",
                    "name": "Vampire",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/32\/Vampire"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 1,
            "url": "https:\/\/myanimelist.net\/anime\/1\/Cowboy_Bebop",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/19644.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/19644t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/19644l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/19644.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/19644t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/19644l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/gY5nDXOtv_o?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Cowboy Bebop"
                },
                {
                    "type": "Japanese",
                    "title": "\u30ab\u30a6\u30dc\u30fc\u30a4\u30d3\u30d0\u30c3\u30d7"
                },
                {
                    "type": "English",
                    "title": "Cowboy Bebop"
                }
            ],
            "title": "Cowboy Bebop",
            "title_english": "Cowboy Bebop",
            "title_japanese": "\u30ab\u30a6\u30dc\u30fc\u30a4\u30d3\u30d0\u30c3\u30d7",
            "title_synonyms": [],
            "type": "TV",
            "source": "Original",
            "episodes": 26,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1998-04-03T00:00:00+00:00",
                "to": "1999-04-24T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 3,
                        "month": 4,
                        "year": 1998
                    },
                    "to": {
                        "day": 24,
                        "month": 4,
                        "year": 1999
                    }
                },
                "string": "Apr 3, 1998 to Apr 24, 1999"
            },
            "duration": "24 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.75,
            "scored_by": 1052582,
            "rank": 47,
            "popularity": 42,
            "members": 2038006,
            "favorites": 89112,
            "synopsis": "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters.\n\nSpike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh corgi.\n\nWhile developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds.\n\n[Written by MAL Rewrite]",
            "background": "When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes 2-3, 7-15, and 18 were broadcast, it was concluded with a recap special known as Yose Atsume Blues. This was due to anime censorship having increased following the big controversies over Evangelion, as a result most of the series was pulled from the air due to violent content. Satellite channel WOWOW picked up the series in the fall of that year and aired it in its entirety uncensored. Cowboy Bebop was not a ratings hit in Japan, but sold over 19,000 DVD units in the initial release run, and 81,000 overall. Protagonist Spike Spiegel won Best Male Character, and Megumi Hayashibara won Best Voice Actor for her role as Faye Valentine in the 1999 and 2000 Anime Grand Prix, respectively. Cowboy Bebop's biggest influence has been in the United States, where it premiered on Adult Swim in 2001 with many reruns since. The show's heavy Western influence struck a chord with American viewers, where it became a \"gateway drug\" to anime aimed at adult audiences.",
            "season": "spring",
            "year": 1998,
            "broadcast": {
                "day": "Saturdays",
                "time": "01:00",
                "timezone": "Asia\/Tokyo",
                "string": "Saturdays at 01:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "Bandai Visual",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/23\/Bandai_Visual"
                },
                {
                    "mal_id": 123,
                    "type": "anime",
                    "name": "Victor Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/123\/Victor_Entertainment"
                },
                {
                    "mal_id": 1506,
                    "type": "anime",
                    "name": "Audio Planning U",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1506\/Audio_Planning_U"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/102\/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Sunrise",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/14\/Sunrise"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 46,
                    "type": "anime",
                    "name": "Award Winning",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/46\/Award_Winning"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/24\/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 50,
                    "type": "anime",
                    "name": "Adult Cast",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/50\/Adult_Cast"
                },
                {
                    "mal_id": 29,
                    "type": "anime",
                    "name": "Space",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/29\/Space"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 21,
            "url": "https:\/\/myanimelist.net\/anime\/21\/One_Piece",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1244\/138851.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1244\/138851t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1244\/138851l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1244\/138851.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1244\/138851t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1244\/138851l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/-tviZNY6CSw?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "One Piece"
                },
                {
                    "type": "Synonym",
                    "title": "OP"
                },
                {
                    "type": "Japanese",
                    "title": "ONE PIECE"
                },
                {
                    "type": "English",
                    "title": "One Piece"
                }
            ],
            "title": "One Piece",
            "title_english": "One Piece",
            "title_japanese": "ONE PIECE",
            "title_synonyms": [
                "OP"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": null,
            "status": "Currently Airing",
            "airing": true,
            "aired": {
                "from": "1999-10-20T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 20,
                        "month": 10,
                        "year": 1999
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Oct 20, 1999 to ?"
            },
            "duration": "24 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.73,
            "scored_by": 1508502,
            "rank": 52,
            "popularity": 17,
            "members": 2644041,
            "favorites": 249318,
            "synopsis": "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.\n\nThe late King of the Pirates, Gol D. Roger, stirred up the world before his death by disclosing the whereabouts of his hoard of riches and daring everyone to obtain it. Ever since then, countless powerful pirates have sailed dangerous seas for the prized One Piece only to never return. Although Luffy lacks a crew and a proper ship, he is endowed with a superhuman ability and an unbreakable spirit that make him not only a formidable adversary but also an inspiration to many.\n\nAs he faces numerous challenges with a big smile on his face, Luffy gathers one-of-a-kind companions to join him in his ambitious endeavor, together embracing perils and wonders on their once-in-a-lifetime adventure.\n\n[Written by MAL Rewrite]",
            "background": "The anime had a hiatus from October 13, 2024, to April 6, 2025. The airing time was Wednesdays 19:00 between October 20, 1999 - March 2001. The airing time was changed to Sundays 19:30 between April 2001 - December 2004. The airing time was changed to Sundays 9:30 between October 6, 2006 - October 13, 2024. The airing time was again changed to Sundays 23:15 on April 6, 2025. Several anime-original arcs have been adapted into light novels, and the series has inspired 50+ video games as of 2023. In June 2004, One Piece was licensed in North America by 4Kids Entertainment, which partnered with Viz Media for home video distribution. As One Piece proved unsuitable for their target demographic, 4Kids Entertainment censored the show to meet their standards, and, in December 2006, they stopped its production. In April 2007, Funimation took over the series licensing, providing an uncut version that remained faithful to the original release. In Japan, the anime's first 574 episodes were released exclusively on DVD by Avex Pictures from February 21, 2001, to December 4, 2013. Blu-rays also became available with the DVDs starting on January 8, 2014. In North America, Viz Media released the anime on DVD between February 28, 2006, and June 26, 2007. Funimation has re-released and continued the series since May 27, 2008. From March 23, 2021, the DVDs were accompanied by Blu-rays as well.",
            "season": "fall",
            "year": 1999,
            "broadcast": {
                "day": "Sundays",
                "time": "23:15",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 23:15 (JST)"
            },
            "producers": [
                {
                    "mal_id": 169,
                    "type": "anime",
                    "name": "Fuji TV",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/169\/Fuji_TV"
                },
                {
                    "mal_id": 416,
                    "type": "anime",
                    "name": "TAP",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/416\/TAP"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/102\/Funimation"
                },
                {
                    "mal_id": 252,
                    "type": "anime",
                    "name": "4Kids Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/252\/4Kids_Entertainment"
                }
            ],
            "studios": [
                {
                    "mal_id": 18,
                    "type": "anime",
                    "name": "Toei Animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/18\/Toei_Animation"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 50160,
            "url": "https:\/\/myanimelist.net\/anime\/50160\/Kingdom_4th_Season",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1566\/122794.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1566\/122794t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1566\/122794l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1566\/122794.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1566\/122794t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1566\/122794l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/qv8eDYnEIQ4?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Kingdom 4th Season"
                },
                {
                    "type": "Japanese",
                    "title": "\u30ad\u30f3\u30b0\u30c0\u30e0 \u7b2c4\u30b7\u30ea\u30fc\u30ba"
                },
                {
                    "type": "English",
                    "title": "Kingdom Season 4"
                }
            ],
            "title": "Kingdom 4th Season",
            "title_english": "Kingdom Season 4",
            "title_japanese": "\u30ad\u30f3\u30b0\u30c0\u30e0 \u7b2c4\u30b7\u30ea\u30fc\u30ba",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 26,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2022-04-10T00:00:00+00:00",
                "to": "2022-10-02T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 10,
                        "month": 4,
                        "year": 2022
                    },
                    "to": {
                        "day": 2,
                        "month": 10,
                        "year": 2022
                    }
                },
                "string": "Apr 10, 2022 to Oct 2, 2022"
            },
            "duration": "24 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.73,
            "scored_by": 39918,
            "rank": 50,
            "popularity": 2544,
            "members": 88674,
            "favorites": 1195,
            "synopsis": "Following the conclusion of the large-scale coalition campaign, the entirety of China is in a state of economic recovery. The victor of the battle, the state of Qin, is no different. There, the political parties led by Ying Zheng and Buwei L\u00fc continue their inner conflict. Having played the role of king in the coalition battle, Zheng has the trust of the people\u2014but L\u00fc is far from out of the fight. In 18 months, he plans to interrupt Zheng's coming-of-age ceremony.\n\nMeanwhile, a Zhao army numbering 20,000 troops has set out toward Qin. In the royal court, due to the lack of generals capable of responding to the incoming threat, L\u00fc slyly suggests that Zheng take command. However, Cheng Jiao, Zheng's half-brother, volunteers instead. As they grew to trust each other during the coalition battle, Zheng now accepts Jiao as his replacement.\n\nHowever, the Zhao forces retreat a mere half-day after clashing with Jiao's army. With trouble quickly brewing in the shadows, the internal struggle of Qin is only complicated further. There are only two men Zheng feels he can rely on: Bi, a general who commands 30,000 men; and Xin, the leader of the Fei Xin force.\n\n[Written by MAL Rewrite]",
            "background": "Kingdom 4th Season adapts chapters 364-441 of the original manga. Kingdom 4th Season was released on Blu-ray in three volumes from August 26, 2022 to November 25, 2022.",
            "season": "spring",
            "year": 2022,
            "broadcast": {
                "day": "Sundays",
                "time": "00:00",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 00:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 1284,
                    "type": "anime",
                    "name": "Avex Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1284\/Avex_Pictures"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                },
                {
                    "mal_id": 1797,
                    "type": "anime",
                    "name": "NHK Enterprises",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1797\/NHK_Enterprises"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Studio Pierrot",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1\/Studio_Pierrot"
                },
                {
                    "mal_id": 1998,
                    "type": "anime",
                    "name": "Studio Signpost",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1998\/Studio_Signpost"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                },
                {
                    "mal_id": 38,
                    "type": "anime",
                    "name": "Military",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/38\/Military"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/42\/Seinen"
                }
            ]
        },
        {
            "mal_id": 47917,
            "url": "https:\/\/myanimelist.net\/anime\/47917\/Bocchi_the_Rock",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1448\/127956.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1448\/127956t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1448\/127956l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1448\/127956.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1448\/127956t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1448\/127956l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/1-o7fmQqSNg?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Bocchi the Rock!"
                },
                {
                    "type": "Japanese",
                    "title": "\u307c\u3063\u3061\u30fb\u3056\u30fb\u308d\u3063\u304f\uff01"
                },
                {
                    "type": "English",
                    "title": "Bocchi the Rock!"
                }
            ],
            "title": "Bocchi the Rock!",
            "title_english": "Bocchi the Rock!",
            "title_japanese": "\u307c\u3063\u3061\u30fb\u3056\u30fb\u308d\u3063\u304f\uff01",
            "title_synonyms": [],
            "type": "TV",
            "source": "4-koma manga",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2022-10-09T00:00:00+00:00",
                "to": "2022-12-25T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 9,
                        "month": 10,
                        "year": 2022
                    },
                    "to": {
                        "day": 25,
                        "month": 12,
                        "year": 2022
                    }
                },
                "string": "Oct 9, 2022 to Dec 25, 2022"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.73,
            "scored_by": 467456,
            "rank": 48,
            "popularity": 294,
            "members": 772770,
            "favorites": 36103,
            "synopsis": "Yearning to make friends and perform live with a band, lonely and socially anxious Hitori \"Bocchi\" Gotou devotes her time to playing the guitar. On a fateful day, Bocchi meets the outgoing drummer Nijika Ijichi, who invites her to join Kessoku Band when their guitarist, Ikuyo Kita, flees before their first show. Soon after, Bocchi meets her final bandmate\u2014the cool bassist Ryou Yamada. \n\nAlthough their first performance together is subpar, the girls feel empowered by their shared love for music, and they are soon rejoined by Kita. Finding happiness in performing, Bocchi and her bandmates put their hearts into improving as musicians while making the most of their fleeting high school days.\n\n[Written by MAL Rewrite]",
            "background": "Bocchi the Rock! was released on Blu-ray and DVD in six volumes from December 28, 2022, to May 24, 2023.",
            "season": "fall",
            "year": 2022,
            "broadcast": {
                "day": "Sundays",
                "time": "00:00",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 00:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 797,
                    "type": "anime",
                    "name": "Houbunsha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/797\/Houbunsha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 1468,
                    "type": "anime",
                    "name": "Crunchyroll",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1468\/Crunchyroll"
                }
            ],
            "studios": [
                {
                    "mal_id": 1835,
                    "type": "anime",
                    "name": "CloverWorks",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1835\/CloverWorks"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 52,
                    "type": "anime",
                    "name": "CGDCT",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/52\/CGDCT"
                },
                {
                    "mal_id": 19,
                    "type": "anime",
                    "name": "Music",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/19\/Music"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 53223,
            "url": "https:\/\/myanimelist.net\/anime\/53223\/Kingdom_5th_Season",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1050\/139641.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1050\/139641t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1050\/139641l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1050\/139641.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1050\/139641t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1050\/139641l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/jYztdVfUZX8?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Kingdom 5th Season"
                },
                {
                    "type": "Japanese",
                    "title": "\u30ad\u30f3\u30b0\u30c0\u30e0 \u7b2c5\u30b7\u30ea\u30fc\u30ba"
                },
                {
                    "type": "English",
                    "title": "Kingdom Season 5"
                }
            ],
            "title": "Kingdom 5th Season",
            "title_english": "Kingdom Season 5",
            "title_japanese": "\u30ad\u30f3\u30b0\u30c0\u30e0 \u7b2c5\u30b7\u30ea\u30fc\u30ba",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2024-01-14T00:00:00+00:00",
                "to": "2024-03-31T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 14,
                        "month": 1,
                        "year": 2024
                    },
                    "to": {
                        "day": 31,
                        "month": 3,
                        "year": 2024
                    }
                },
                "string": "Jan 14, 2024 to Mar 31, 2024"
            },
            "duration": "24 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.73,
            "scored_by": 27697,
            "rank": 51,
            "popularity": 3179,
            "members": 60806,
            "favorites": 617,
            "synopsis": "Fifth season of Kingdom.",
            "background": "Kingdom 5th Season adapts chapters 442-489 of the original manga.",
            "season": "winter",
            "year": 2024,
            "broadcast": {
                "day": "Sundays",
                "time": "00:00",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 00:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 1284,
                    "type": "anime",
                    "name": "Avex Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1284\/Avex_Pictures"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                },
                {
                    "mal_id": 1517,
                    "type": "anime",
                    "name": "Jinnan Studio",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1517\/Jinnan_Studio"
                },
                {
                    "mal_id": 1797,
                    "type": "anime",
                    "name": "NHK Enterprises",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1797\/NHK_Enterprises"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Studio Pierrot",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1\/Studio_Pierrot"
                },
                {
                    "mal_id": 1998,
                    "type": "anime",
                    "name": "Studio Signpost",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1998\/Studio_Signpost"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                },
                {
                    "mal_id": 38,
                    "type": "anime",
                    "name": "Military",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/38\/Military"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/42\/Seinen"
                }
            ]
        },
        {
            "mal_id": 60098,
            "url": "https:\/\/myanimelist.net\/anime\/60098\/Boku_no_Hero_Academia__Final_Season",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1959\/151055.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1959\/151055t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1959\/151055l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1959\/151055.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1959\/151055t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1959\/151055l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/wQgQij8Ry4g?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Boku no Hero Academia: Final Season"
                },
                {
                    "type": "Synonym",
                    "title": "My Hero Academia 8"
                },
                {
                    "type": "Japanese",
                    "title": "\u50d5\u306e\u30d2\u30fc\u30ed\u30fc\u30a2\u30ab\u30c7\u30df\u30a2 FINAL SEASON"
                },
                {
                    "type": "English",
                    "title": "My Hero Academia Final Season"
                }
            ],
            "title": "Boku no Hero Academia: Final Season",
            "title_english": "My Hero Academia Final Season",
            "title_japanese": "\u50d5\u306e\u30d2\u30fc\u30ed\u30fc\u30a2\u30ab\u30c7\u30df\u30a2 FINAL SEASON",
            "title_synonyms": [
                "My Hero Academia 8"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 11,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2025-10-04T00:00:00+00:00",
                "to": "2025-12-13T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 4,
                        "month": 10,
                        "year": 2025
                    },
                    "to": {
                        "day": 13,
                        "month": 12,
                        "year": 2025
                    }
                },
                "string": "Oct 4, 2025 to Dec 13, 2025"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.73,
            "scored_by": 137814,
            "rank": 49,
            "popularity": 994,
            "members": 279910,
            "favorites": 2649,
            "synopsis": "The final stages of an all-out war between heroes and villains unfold as the world watches its symbols of peace and destruction collide. When All Might is critically injured, global fear takes hold as the fate of society hangs in the balance, and the threat of All For One and Tomura Shigaraki makes it clear that the conflict is far from over.\n\nAs hope begins to fade, Izuku \"Deku\" Midoriya stands at the forefront, refusing to let the war end in despair. Pushed beyond his limits and supported by Katsuki Bakugou and other heroes fighting beside him, Deku becomes the central force opposing collapse. The conflict becomes a defining turning point for society\u2014one where the future will be entrusted to the victorious side.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2025,
            "broadcast": {
                "day": "Saturdays",
                "time": "17:30",
                "timezone": "Asia\/Tokyo",
                "string": "Saturdays at 17:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Bones",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/4\/Bones"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 76,
                    "type": "anime",
                    "name": "Yomiuri Telecasting",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/76\/Yomiuri_Telecasting"
                },
                {
                    "mal_id": 166,
                    "type": "anime",
                    "name": "Movic",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/166\/Movic"
                },
                {
                    "mal_id": 757,
                    "type": "anime",
                    "name": "Sony Music Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/757\/Sony_Music_Entertainment"
                },
                {
                    "mal_id": 1143,
                    "type": "anime",
                    "name": "TOHO animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1143\/TOHO_animation"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                },
                {
                    "mal_id": 1499,
                    "type": "anime",
                    "name": "Techno Sound",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1499\/Techno_Sound"
                },
                {
                    "mal_id": 2229,
                    "type": "anime",
                    "name": "Toho Music",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2229\/Toho_Music"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 3045,
                    "type": "anime",
                    "name": "Bones Film",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/3045\/Bones_Film"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "School",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/23\/School"
                },
                {
                    "mal_id": 31,
                    "type": "anime",
                    "name": "Super Power",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/31\/Super_Power"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 48569,
            "url": "https:\/\/myanimelist.net\/anime\/48569\/86_Part_2",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1321\/117508.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1321\/117508t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1321\/117508l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1321\/117508.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1321\/117508t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1321\/117508l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/Oo8ICn48l6E?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "86 Part 2"
                },
                {
                    "type": "Japanese",
                    "title": "86\u2015\u30a8\u30a4\u30c6\u30a3\u30b7\u30c3\u30af\u30b9\u2015"
                },
                {
                    "type": "English",
                    "title": "86 Eighty-Six Part 2"
                }
            ],
            "title": "86 Part 2",
            "title_english": "86 Eighty-Six Part 2",
            "title_japanese": "86\u2015\u30a8\u30a4\u30c6\u30a3\u30b7\u30c3\u30af\u30b9\u2015",
            "title_synonyms": [],
            "type": "TV",
            "source": "Light novel",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2021-10-03T00:00:00+00:00",
                "to": "2022-03-19T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 3,
                        "month": 10,
                        "year": 2021
                    },
                    "to": {
                        "day": 19,
                        "month": 3,
                        "year": 2022
                    }
                },
                "string": "Oct 3, 2021 to Mar 19, 2022"
            },
            "duration": "23 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.72,
            "scored_by": 367199,
            "rank": 55,
            "popularity": 388,
            "members": 629602,
            "favorites": 18287,
            "synopsis": "The disappearance of the Spearhead Squadron beyond the horizon does little to hide the intensity of the Republic of San Magnolia's endless propaganda. Vladilena Miliz\u00e9 continues to operate as \"Handler One,\" the commander of yet another dehumanized 86th faction's squadron in the continuous war against the Legion.\n\nOn the Western Front, Shinei Nouzen and his squad are quarantined in a military base controlled by the Federal Republic of Giad, formerly known as the Giadian Empire. The newly-established government grants the saved Eighty-Six full citizenship and freedom. Housed by the president Ernst Zimmerman himself, the group meets his adoptive daughter and the last Empress, Augusta Frederica Adel-Adler.\n\nHowever, within the calm of this tender society, Shinei and his team feel that their purpose is on the battlefield. Before long, they are once again in the midst of the Legion's onslaught as a part of the Federacy's Nordlicht Squadron, accompanied by Augusta Frederica. But, as history repeats itself, they realize that no matter the side, death and pain on the front lines are the only comfort they know.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2021,
            "broadcast": {
                "day": "Sundays",
                "time": "00:00",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 00:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 1696,
                    "type": "anime",
                    "name": "Kadokawa",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1696\/Kadokawa"
                },
                {
                    "mal_id": 1992,
                    "type": "anime",
                    "name": "Bandai Spirits",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1992\/Bandai_Spirits"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 56,
                    "type": "anime",
                    "name": "A-1 Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/56\/A-1_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/24\/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 18,
                    "type": "anime",
                    "name": "Mecha",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/18\/Mecha"
                },
                {
                    "mal_id": 38,
                    "type": "anime",
                    "name": "Military",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/38\/Military"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 24701,
            "url": "https:\/\/myanimelist.net\/anime\/24701\/Mushishi_Zoku_Shou_2nd_Season",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/9\/68095.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/9\/68095t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/9\/68095l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/9\/68095.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/9\/68095t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/9\/68095l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/zuX3P6ynAgc?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Mushishi Zoku Shou 2nd Season"
                },
                {
                    "type": "Synonym",
                    "title": "Mushishi Zoku Shou 2nd Season"
                },
                {
                    "type": "Japanese",
                    "title": "\u87f2\u5e2b \u7d9a\u7ae0"
                },
                {
                    "type": "English",
                    "title": "Mushi-shi: Next Passage Part 2"
                }
            ],
            "title": "Mushishi Zoku Shou 2nd Season",
            "title_english": "Mushi-shi: Next Passage Part 2",
            "title_japanese": "\u87f2\u5e2b \u7d9a\u7ae0",
            "title_synonyms": [
                "Mushishi Zoku Shou 2nd Season"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 10,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2014-10-19T00:00:00+00:00",
                "to": "2014-12-21T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 19,
                        "month": 10,
                        "year": 2014
                    },
                    "to": {
                        "day": 21,
                        "month": 12,
                        "year": 2014
                    }
                },
                "string": "Oct 19, 2014 to Dec 21, 2014"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.72,
            "scored_by": 115944,
            "rank": 54,
            "popularity": 947,
            "members": 291000,
            "favorites": 1580,
            "synopsis": "Ghostly, primordial beings known as Mushi continue to cause mysterious changes in the lives of humans. The travelling Mushishi, Ginko, persists in trying to set right the strange and unsettling situations he encounters. Time loops, living shadows, and telepathy are among the overt effects of interference from Mushi, but more subtle symptoms that take years to be noticed also rouse Ginko's concern as he passes from village to village.\n\nThrough circumstance, Ginko has become an arbiter, determining which Mushi are blessings and which are curses. But the lines that he seeks to draw are subjective. Some of his patients would rather exercise their new powers until they are utterly consumed by them; others desperately strive to rid themselves of afflictions which are in fact protecting their lives from devastation. Those who cross paths with Mushi must learn to accept seemingly impossible consequences for their actions, and heal wounds they did not know they had. Otherwise, they risk meeting with fates beyond their comprehension.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2014,
            "broadcast": {
                "day": "Sundays",
                "time": "00:30",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 00:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/159\/Kodansha"
                },
                {
                    "mal_id": 711,
                    "type": "anime",
                    "name": "Delfi Sound",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/711\/Delfi_Sound"
                }
            ],
            "licensors": [
                {
                    "mal_id": 493,
                    "type": "anime",
                    "name": "Aniplex of America",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/493\/Aniplex_of_America"
                }
            ],
            "studios": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Artland",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/8\/Artland"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/7\/Mystery"
                },
                {
                    "mal_id": 36,
                    "type": "anime",
                    "name": "Slice of Life",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/36\/Slice_of_Life"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 50,
                    "type": "anime",
                    "name": "Adult Cast",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/50\/Adult_Cast"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                },
                {
                    "mal_id": 63,
                    "type": "anime",
                    "name": "Iyashikei",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/63\/Iyashikei"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/42\/Seinen"
                }
            ]
        },
        {
            "mal_id": 39894,
            "url": "https:\/\/myanimelist.net\/anime\/39894\/Hibike_Euphonium_3",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1216\/142086.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1216\/142086t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1216\/142086l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1216\/142086.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1216\/142086t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1216\/142086l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/dzSh0bjmUVA?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Hibike! Euphonium 3"
                },
                {
                    "type": "Synonym",
                    "title": "Hibike! Euphonium Third Season"
                },
                {
                    "type": "Japanese",
                    "title": "\u97ff\u3051\uff01\u30e6\u30fc\u30d5\u30a9\u30cb\u30a2\u30e03"
                },
                {
                    "type": "English",
                    "title": "Sound! Euphonium 3"
                }
            ],
            "title": "Hibike! Euphonium 3",
            "title_english": "Sound! Euphonium 3",
            "title_japanese": "\u97ff\u3051\uff01\u30e6\u30fc\u30d5\u30a9\u30cb\u30a2\u30e03",
            "title_synonyms": [
                "Hibike! Euphonium Third Season"
            ],
            "type": "TV",
            "source": "Novel",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2024-04-07T00:00:00+00:00",
                "to": "2024-06-30T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 7,
                        "month": 4,
                        "year": 2024
                    },
                    "to": {
                        "day": 30,
                        "month": 6,
                        "year": 2024
                    }
                },
                "string": "Apr 7, 2024 to Jun 30, 2024"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.72,
            "scored_by": 37840,
            "rank": 56,
            "popularity": 2425,
            "members": 95896,
            "favorites": 2086,
            "synopsis": "With the ensemble contest behind them, the members of the Kitauji High School concert band now aim to win a gold medal at the national competition. For third-year club president Kumiko Oumae and her friends, it is their last chance before graduation. Filled with anticipation and anxiety, Kumiko worries if she can successfully lead the band.\n\nAmid her struggles, Kumiko encounters transfer student Mayu Kuroe. From her gentle demeanor to her talented euphonium skills, Mayu was a member of the Seira Girls' School concert band\u2014a regular at nationals. While Mayu is friendly, Kumiko cannot help but have an indescribable feeling from their meeting.\n\nAs new members arrive and plans are set in motion, the club, with an insatiable hunger for a gold medal, learns what it truly takes to propel themselves to reach the national level.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "spring",
            "year": 2024,
            "broadcast": {
                "day": "Sundays",
                "time": "17:00",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 17:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 104,
                    "type": "anime",
                    "name": "Lantis",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/104\/Lantis"
                },
                {
                    "mal_id": 144,
                    "type": "anime",
                    "name": "Pony Canyon",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/144\/Pony_Canyon"
                },
                {
                    "mal_id": 211,
                    "type": "anime",
                    "name": "Rakuonsha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/211\/Rakuonsha"
                },
                {
                    "mal_id": 1500,
                    "type": "anime",
                    "name": "ABC Animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1500\/ABC_Animation"
                },
                {
                    "mal_id": 2147,
                    "type": "anime",
                    "name": "Heart Company",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2147\/Heart_Company"
                },
                {
                    "mal_id": 2425,
                    "type": "anime",
                    "name": "Bandai Namco Music Live",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2425\/Bandai_Namco_Music_Live"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Kyoto Animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2\/Kyoto_Animation"
                }
            ],
            "genres": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 19,
                    "type": "anime",
                    "name": "Music",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/19\/Music"
                },
                {
                    "mal_id": 70,
                    "type": "anime",
                    "name": "Performing Arts",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/70\/Performing_Arts"
                },
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "School",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/23\/School"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 51009,
            "url": "https:\/\/myanimelist.net\/anime\/51009\/Jujutsu_Kaisen_2nd_Season",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1792\/138022.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1792\/138022t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1792\/138022l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1792\/138022.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1792\/138022t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1792\/138022l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/PKHQuQF1S8k?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Jujutsu Kaisen 2nd Season"
                },
                {
                    "type": "Synonym",
                    "title": "Jujutsu Kaisen: Kaigyoku Gyokusetsu"
                },
                {
                    "type": "Synonym",
                    "title": "Jujutsu Kaisen: Shibuya Jihen"
                },
                {
                    "type": "Synonym",
                    "title": "Jujutsu Kaisen: Hidden Inventory Arc"
                },
                {
                    "type": "Synonym",
                    "title": "Jujutsu Kaisen: Shibuya Incident Arc"
                },
                {
                    "type": "Synonym",
                    "title": "Sorcery Fight"
                },
                {
                    "type": "Synonym",
                    "title": "JJK"
                },
                {
                    "type": "Japanese",
                    "title": "\u546a\u8853\u5efb\u6226 \u61d0\u7389\u30fb\u7389\u6298\uff0f\u6e0b\u8c37\u4e8b\u5909"
                },
                {
                    "type": "English",
                    "title": "Jujutsu Kaisen Season 2"
                }
            ],
            "title": "Jujutsu Kaisen 2nd Season",
            "title_english": "Jujutsu Kaisen Season 2",
            "title_japanese": "\u546a\u8853\u5efb\u6226 \u61d0\u7389\u30fb\u7389\u6298\uff0f\u6e0b\u8c37\u4e8b\u5909",
            "title_synonyms": [
                "Jujutsu Kaisen: Kaigyoku Gyokusetsu",
                "Jujutsu Kaisen: Shibuya Jihen",
                "Jujutsu Kaisen: Hidden Inventory Arc",
                "Jujutsu Kaisen: Shibuya Incident Arc",
                "Sorcery Fight",
                "JJK"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 23,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2023-07-06T00:00:00+00:00",
                "to": "2023-12-28T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 6,
                        "month": 7,
                        "year": 2023
                    },
                    "to": {
                        "day": 28,
                        "month": 12,
                        "year": 2023
                    }
                },
                "string": "Jul 6, 2023 to Dec 28, 2023"
            },
            "duration": "23 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.71,
            "scored_by": 792328,
            "rank": 60,
            "popularity": 110,
            "members": 1349022,
            "favorites": 25893,
            "synopsis": "The year is 2006, and the halls of Tokyo Prefectural Jujutsu High School echo with the endless bickering and intense debate between two inseparable best friends. Exuding unshakeable confidence, Satoru Gojou and Suguru Getou believe there is no challenge too great for young and powerful Special Grade sorcerers such as themselves. They are tasked with safely delivering a sensible girl named Riko Amanai to the entity whose existence is the very essence of the jujutsu world. However, the mission plunges them into an exhausting swirl of moral conflict that threatens to destroy the already feeble amity between sorcerers and ordinary humans.\n\nTwelve years later, students and sorcerers are the frontline defense against the rising number of high-level curses born from humans' negative emotions. As the entities grow in power, their self-awareness and ambition increase too. The curses unite for the common goal of eradicating humans and creating a world of only cursed energy users, led by a dangerous, ancient cursed spirit. To dispose of their greatest obstacle\u2014the strongest sorcerer, Gojou\u2014they orchestrate an attack at Shibuya Station on Halloween. Dividing into teams, the sorcerers enter the fight prepared to risk everything to protect the innocent and their own kind.\n\n[Written by MAL Rewrite]",
            "background": "Jujutsu Kaisen 2nd Season was released on Blu-ray and DVD in eight volumes from October 18, 2023, to May 22, 2024.",
            "season": "summer",
            "year": 2023,
            "broadcast": {
                "day": "Thursdays",
                "time": "23:56",
                "timezone": "Asia\/Tokyo",
                "string": "Thursdays at 23:56 (JST)"
            },
            "producers": [
                {
                    "mal_id": 143,
                    "type": "anime",
                    "name": "Mainichi Broadcasting System",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/143\/Mainichi_Broadcasting_System"
                },
                {
                    "mal_id": 1143,
                    "type": "anime",
                    "name": "TOHO animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1143\/TOHO_animation"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                },
                {
                    "mal_id": 1856,
                    "type": "anime",
                    "name": "dugout",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1856\/dugout"
                },
                {
                    "mal_id": 2260,
                    "type": "anime",
                    "name": "Sumzap",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2260\/Sumzap"
                }
            ],
            "licensors": [
                {
                    "mal_id": 1468,
                    "type": "anime",
                    "name": "Crunchyroll",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1468\/Crunchyroll"
                }
            ],
            "studios": [
                {
                    "mal_id": 569,
                    "type": "anime",
                    "name": "MAPPA",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/569\/MAPPA"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 58,
                    "type": "anime",
                    "name": "Gore",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/58\/Gore"
                },
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "School",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/23\/School"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 50172,
            "url": "https:\/\/myanimelist.net\/anime\/50172\/Mob_Psycho_100_III",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1228\/125011.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1228\/125011t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1228\/125011l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1228\/125011.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1228\/125011t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1228\/125011l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/b1miJsAVYJA?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Mob Psycho 100 III"
                },
                {
                    "type": "Synonym",
                    "title": "Mob Psycho 100 3rd Season"
                },
                {
                    "type": "Synonym",
                    "title": "Mob Psycho Hyaku"
                },
                {
                    "type": "Synonym",
                    "title": "Mob Psycho One Hundred"
                },
                {
                    "type": "Japanese",
                    "title": "\u30e2\u30d6\u30b5\u30a4\u30b3100 III"
                },
                {
                    "type": "English",
                    "title": "Mob Psycho 100 III"
                }
            ],
            "title": "Mob Psycho 100 III",
            "title_english": "Mob Psycho 100 III",
            "title_japanese": "\u30e2\u30d6\u30b5\u30a4\u30b3100 III",
            "title_synonyms": [
                "Mob Psycho 100 3rd Season",
                "Mob Psycho Hyaku",
                "Mob Psycho One Hundred"
            ],
            "type": "TV",
            "source": "Web manga",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2022-10-06T00:00:00+00:00",
                "to": "2022-12-22T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 6,
                        "month": 10,
                        "year": 2022
                    },
                    "to": {
                        "day": 22,
                        "month": 12,
                        "year": 2022
                    }
                },
                "string": "Oct 6, 2022 to Dec 22, 2022"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.71,
            "scored_by": 436124,
            "rank": 61,
            "popularity": 257,
            "members": 844777,
            "favorites": 12469,
            "synopsis": "After foiling a world-threatening plot, Shigeo \"Mob\" Kageyama returns to tackle the more exhausting aspects of his mundane life\u2014starting with filling out his school's nerve-racking career form. Meanwhile, he continues to assist his mentor Arataka Reigen and the office's new recruit, Katsuya Serizawa, in solving paranormal cases of their clients. While continuing his duties, Mob also works on gaining more independence in his esper and human lives, as well as trying to integrate better with the people around him.\n\nHowever, new supernatural and ordinary challenges test Mob\u2019s emotional stability and force him to confront the realities around him. As he strives to continue forward on the path to maturity, Mob must resolve his emotional crises and reassess the naivety he has held on for so long.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2022,
            "broadcast": {
                "day": "Thursdays",
                "time": "00:00",
                "timezone": "Asia\/Tokyo",
                "string": "Thursdays at 00:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 62,
                    "type": "anime",
                    "name": "Shogakukan-Shueisha Productions",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/62\/Shogakukan-Shueisha_Productions"
                },
                {
                    "mal_id": 415,
                    "type": "anime",
                    "name": "Warner Bros. Japan",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/415\/Warner_Bros_Japan"
                },
                {
                    "mal_id": 460,
                    "type": "anime",
                    "name": "KlockWorx",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/460\/KlockWorx"
                },
                {
                    "mal_id": 843,
                    "type": "anime",
                    "name": "BS Fuji",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/843\/BS_Fuji"
                },
                {
                    "mal_id": 1333,
                    "type": "anime",
                    "name": "Hakuhodo DY Music & Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1333\/Hakuhodo_DY_Music___Pictures"
                },
                {
                    "mal_id": 1430,
                    "type": "anime",
                    "name": "Shogakukan",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1430\/Shogakukan"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Bones",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/4\/Bones"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        },
        {
            "mal_id": 1575,
            "url": "https:\/\/myanimelist.net\/anime\/1575\/Code_Geass__Hangyaku_no_Lelouch",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1032\/135088.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1032\/135088t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1032\/135088l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1032\/135088.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1032\/135088t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1032\/135088l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Code Geass: Hangyaku no Lelouch"
                },
                {
                    "type": "Japanese",
                    "title": "\u30b3\u30fc\u30c9\u30ae\u30a2\u30b9 \u53cd\u9006\u306e\u30eb\u30eb\u30fc\u30b7\u30e5"
                },
                {
                    "type": "English",
                    "title": "Code Geass: Lelouch of the Rebellion"
                },
                {
                    "type": "German",
                    "title": "Code Geass: Lelouch of the Rebellion"
                },
                {
                    "type": "Spanish",
                    "title": "Code Geass: Lelouch, el de la Rebeli\u00f3n"
                },
                {
                    "type": "French",
                    "title": "Code Geass: Lelouch of the Rebellion"
                }
            ],
            "title": "Code Geass: Hangyaku no Lelouch",
            "title_english": "Code Geass: Lelouch of the Rebellion",
            "title_japanese": "\u30b3\u30fc\u30c9\u30ae\u30a2\u30b9 \u53cd\u9006\u306e\u30eb\u30eb\u30fc\u30b7\u30e5",
            "title_synonyms": [],
            "type": "TV",
            "source": "Original",
            "episodes": 25,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2006-10-06T00:00:00+00:00",
                "to": "2007-07-29T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 6,
                        "month": 10,
                        "year": 2006
                    },
                    "to": {
                        "day": 29,
                        "month": 7,
                        "year": 2007
                    }
                },
                "string": "Oct 6, 2006 to Jul 29, 2007"
            },
            "duration": "24 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.71,
            "scored_by": 1510181,
            "rank": 58,
            "popularity": 22,
            "members": 2448711,
            "favorites": 116405,
            "synopsis": "In the year 2010, the Holy Empire of Britannia is establishing itself as a dominant military nation, starting with the conquest of Japan. Renamed to Area 11 after its swift defeat, Japan has seen significant resistance against these tyrants in an attempt to regain independence.\n\nLelouch Lamperouge, a Britannian student, unfortunately finds himself caught in a crossfire between the Britannian and the Area 11 rebel armed forces. He is able to escape, however, thanks to the timely appearance of a mysterious girl named C.C., who bestows upon him Geass, the \"Power of Kings.\" Realizing the vast potential of his newfound \"power of absolute obedience,\" Lelouch embarks upon a perilous journey as the masked vigilante known as Zero, leading a merciless onslaught against Britannia in order to get revenge once and for all.\n\n[Written by MAL Rewrite]",
            "background": "Code Geass: Hangyaku no Lelouch is an original anime series by Sunrise animation studio with original character designs by the all-female Japanese manga artist group Clamp. Manga and light novels based off the show have been published by Kadokawa Shoten. The show has sold millions of DVDs and Blu-ray volumes and is extremely popular in both Japan and North America. The show is known for its multi-genre appeal and for its diverse cast of characters who face many moral dilemmas over the course of the series. The series won: \"The Best Anime TV Series\" award at the 2007 Tokyo International Anime Fair, \"The Best TV animation\" award at the twelfth Animation Kobe, and \"The Most Popular Anime\" award at the Animage\u200a's 29th Annual Anime Grand Prix. The series was rebroadcasted during October 2021 on the Animeism programming block to celebrate its 15th anniversary.",
            "season": "fall",
            "year": 2006,
            "broadcast": {
                "day": "Fridays",
                "time": "01:25",
                "timezone": "Asia\/Tokyo",
                "string": "Fridays at 01:25 (JST)"
            },
            "producers": [
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "Bandai Visual",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/23\/Bandai_Visual"
                },
                {
                    "mal_id": 143,
                    "type": "anime",
                    "name": "Mainichi Broadcasting System",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/143\/Mainichi_Broadcasting_System"
                },
                {
                    "mal_id": 230,
                    "type": "anime",
                    "name": "Bandai",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/230\/Bandai"
                },
                {
                    "mal_id": 757,
                    "type": "anime",
                    "name": "Sony Music Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/757\/Sony_Music_Entertainment"
                },
                {
                    "mal_id": 1233,
                    "type": "anime",
                    "name": "Bandai Namco Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1233\/Bandai_Namco_Entertainment"
                },
                {
                    "mal_id": 1488,
                    "type": "anime",
                    "name": "Hakuhodo DY Media Partners",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1488\/Hakuhodo_DY_Media_Partners"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/102\/Funimation"
                },
                {
                    "mal_id": 233,
                    "type": "anime",
                    "name": "Bandai Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/233\/Bandai_Entertainment"
                }
            ],
            "studios": [
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Sunrise",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/14\/Sunrise"
                }
            ],
            "genres": [
                {
                    "mal_id": 46,
                    "type": "anime",
                    "name": "Award Winning",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/46\/Award_Winning"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/24\/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 18,
                    "type": "anime",
                    "name": "Mecha",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/18\/Mecha"
                },
                {
                    "mal_id": 38,
                    "type": "anime",
                    "name": "Military",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/38\/Military"
                },
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "School",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/23\/School"
                },
                {
                    "mal_id": 31,
                    "type": "anime",
                    "name": "Super Power",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/31\/Super_Power"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 52215,
            "url": "https:\/\/myanimelist.net\/anime\/52215\/Chi_Chikyuu_no_Undou_ni_Tsuite",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1749\/145922.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1749\/145922t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1749\/145922l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1749\/145922.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1749\/145922t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1749\/145922l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/Aju1yusWVKo?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Chi. Chikyuu no Undou ni Tsuite"
                },
                {
                    "type": "Synonym",
                    "title": "About the Movement of the Earth"
                },
                {
                    "type": "Japanese",
                    "title": "\u30c1\u3002\u2015\u5730\u7403\u306e\u904b\u52d5\u306b\u3064\u3044\u3066\u2015"
                },
                {
                    "type": "English",
                    "title": "Orb: On the Movements of the Earth"
                }
            ],
            "title": "Chi. Chikyuu no Undou ni Tsuite",
            "title_english": "Orb: On the Movements of the Earth",
            "title_japanese": "\u30c1\u3002\u2015\u5730\u7403\u306e\u904b\u52d5\u306b\u3064\u3044\u3066\u2015",
            "title_synonyms": [
                "About the Movement of the Earth"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 25,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2024-10-05T00:00:00+00:00",
                "to": "2025-03-15T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 5,
                        "month": 10,
                        "year": 2024
                    },
                    "to": {
                        "day": 15,
                        "month": 3,
                        "year": 2025
                    }
                },
                "string": "Oct 5, 2024 to Mar 15, 2025"
            },
            "duration": "25 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.71,
            "scored_by": 111695,
            "rank": 57,
            "popularity": 995,
            "members": 279285,
            "favorites": 7036,
            "synopsis": "Twelve-year-old prodigy Rafal believes in living rationally, so as to earn praise and respect from society while not being led astray by his emotions. To this end, he publicly states his intention to study theology\u2014the academic field held in highest regard in early 15th century Poland. However, an encounter with a mysterious man upends Rafal's life, sparking an illogical desire to instead pursue his passion for astronomy.\n\nRafal is determined to prove the beauty and rationality of heliocentrism\u2014the theory that the Earth revolves around the Sun. This belief is considered heretical by the powerful Church, which promotes geocentrism\u2014the Sun revolving around the Earth\u2014as the sole truth of the universe. Those whose beliefs do not align with the will of the Church suffer unfathomably gruesome consequences.\n\nIn pursuit of evidence for a heliocentric model of the universe, Rafal grapples with obtaining precise calculations and building empirical theories. His greatest challenge, however, lies in conducting this research discreetly\u2014lest he wish to meet the same fate as other heretics.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2024,
            "broadcast": {
                "day": "Saturdays",
                "time": "23:45",
                "timezone": "Asia\/Tokyo",
                "string": "Saturdays at 23:45 (JST)"
            },
            "producers": [
                {
                    "mal_id": 62,
                    "type": "anime",
                    "name": "Shogakukan-Shueisha Productions",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/62\/Shogakukan-Shueisha_Productions"
                },
                {
                    "mal_id": 1430,
                    "type": "anime",
                    "name": "Shogakukan",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1430\/Shogakukan"
                },
                {
                    "mal_id": 1797,
                    "type": "anime",
                    "name": "NHK Enterprises",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1797\/NHK_Enterprises"
                },
                {
                    "mal_id": 3020,
                    "type": "anime",
                    "name": "SKY Perfect Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/3020\/SKY_Perfect_Pictures"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 11,
                    "type": "anime",
                    "name": "Madhouse",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/11\/Madhouse"
                }
            ],
            "genres": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/42\/Seinen"
                }
            ]
        },
        {
            "mal_id": 47778,
            "url": "https:\/\/myanimelist.net\/anime\/47778\/Kimetsu_no_Yaiba__Yuukaku-hen",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1908\/120036.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1908\/120036t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1908\/120036l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1908\/120036.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1908\/120036t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1908\/120036l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/QwvWdnd2Ktg?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Kimetsu no Yaiba: Yuukaku-hen"
                },
                {
                    "type": "Japanese",
                    "title": "\u9b3c\u6ec5\u306e\u5203 \u904a\u90ed\u7de8"
                },
                {
                    "type": "English",
                    "title": "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc"
                }
            ],
            "title": "Kimetsu no Yaiba: Yuukaku-hen",
            "title_english": "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
            "title_japanese": "\u9b3c\u6ec5\u306e\u5203 \u904a\u90ed\u7de8",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 11,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2021-12-05T00:00:00+00:00",
                "to": "2022-02-13T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 5,
                        "month": 12,
                        "year": 2021
                    },
                    "to": {
                        "day": 13,
                        "month": 2,
                        "year": 2022
                    }
                },
                "string": "Dec 5, 2021 to Feb 13, 2022"
            },
            "duration": "26 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.7,
            "scored_by": 1101094,
            "rank": 62,
            "popularity": 72,
            "members": 1714713,
            "favorites": 25154,
            "synopsis": "The devastation of the Mugen Train incident still weighs heavily on the members of the Demon Slayer Corps. Despite being given time to recover, life must go on, as the wicked never sleep: a vicious demon is terrorizing the alluring women of the Yoshiwara Entertainment District. The Sound Hashira, Tengen Uzui, and his three wives are on the case. However, when he soon loses contact with his spouses, Tengen fears the worst and enlists the help of Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira to infiltrate the district's most prominent houses and locate the depraved Upper Rank Demon.\n\n[Written by MAL Rewrite]",
            "background": "Kimetsu no Yaiba: Yuukaku-hen adapts chapters 67 to 97 of the original manga.",
            "season": "winter",
            "year": 2022,
            "broadcast": {
                "day": "Sundays",
                "time": "23:15",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 23:15 (JST)"
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 719,
                    "type": "anime",
                    "name": "Studio Mausu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/719\/Studio_Mausu"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 493,
                    "type": "anime",
                    "name": "Aniplex of America",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/493\/Aniplex_of_America"
                },
                {
                    "mal_id": 1468,
                    "type": "anime",
                    "name": "Crunchyroll",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1468\/Crunchyroll"
                }
            ],
            "studios": [
                {
                    "mal_id": 43,
                    "type": "anime",
                    "name": "ufotable",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/43\/ufotable"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 53998,
            "url": "https:\/\/myanimelist.net\/anime\/53998\/Bleach__Sennen_Kessen-hen_-_Ketsubetsu-tan",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1164\/138058.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1164\/138058t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1164\/138058l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1164\/138058.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1164\/138058t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1164\/138058l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/m_i2PinZ_X4?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Bleach: Sennen Kessen-hen - Ketsubetsu-tan"
                },
                {
                    "type": "Synonym",
                    "title": "Bleach: Thousand-Year Blood War Arc Part 2"
                },
                {
                    "type": "Japanese",
                    "title": "BLEACH \u5343\u5e74\u8840\u6226\u7bc7-\u8a23\u5225\u8b5a-"
                },
                {
                    "type": "English",
                    "title": "Bleach: Thousand-Year Blood War - The Separation"
                }
            ],
            "title": "Bleach: Sennen Kessen-hen - Ketsubetsu-tan",
            "title_english": "Bleach: Thousand-Year Blood War - The Separation",
            "title_japanese": "BLEACH \u5343\u5e74\u8840\u6226\u7bc7-\u8a23\u5225\u8b5a-",
            "title_synonyms": [
                "Bleach: Thousand-Year Blood War Arc Part 2"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2023-07-08T00:00:00+00:00",
                "to": "2023-09-30T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 8,
                        "month": 7,
                        "year": 2023
                    },
                    "to": {
                        "day": 30,
                        "month": 9,
                        "year": 2023
                    }
                },
                "string": "Jul 8, 2023 to Sep 30, 2023"
            },
            "duration": "24 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.7,
            "scored_by": 227965,
            "rank": 63,
            "popularity": 671,
            "members": 402248,
            "favorites": 5039,
            "synopsis": "After a brutal surprise attack by the forces of Quincy King Yhwach, the resident Reapers of the Soul Society lick their wounds and mourn their losses. Many of the surviving Soul Reaper captains train to battle without their Bankai, the ultimate technique wielded by the fiercest warriors.\n\nIn the previous assault, Ichigo Kurosaki narrowly managed to help fend off Yhwach's fearsome wrath. However, to ultimately defeat his godly adversary and save his allies, Ichigo must now undergo severe training that will push him beyond his physical, emotional, and mental limits.\n\nThough Yhwach already holds the upper hand in this ongoing blood feud, he also successfully recruits Uryuu Ishida, Ichigo's close friend and rival, to be his successor. Yhwach strikes out once again at the weakened Soul Society, intent on finally obliterating his long-standing enemies. As Ichigo struggles to attain new power, the Soul Reaper captains fight for survival and borrowed time.\n\n[Written by MAL Rewrite]",
            "background": "Bleach: Sennen Kessen-hen - Ketsubetsu-tan was released on Blu-ray and DVD by Aniplex on February 28, 2024. It adapts volumes 61-67 of the original manga.",
            "season": "summer",
            "year": 2023,
            "broadcast": {
                "day": "Saturdays",
                "time": "23:00",
                "timezone": "Asia\/Tokyo",
                "string": "Saturdays at 23:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/16\/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                },
                {
                    "mal_id": 1392,
                    "type": "anime",
                    "name": "Zack Promotion",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1392\/Zack_Promotion"
                }
            ],
            "licensors": [
                {
                    "mal_id": 119,
                    "type": "anime",
                    "name": "VIZ Media",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/119\/VIZ_Media"
                }
            ],
            "studios": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Studio Pierrot",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1\/Studio_Pierrot"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 55690,
            "url": "https:\/\/myanimelist.net\/anime\/55690\/Boku_no_Kokoro_no_Yabai_Yatsu_2nd_Season",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1643\/138581.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1643\/138581t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1643\/138581l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1643\/138581.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1643\/138581t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1643\/138581l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/DAbLNzr4cC8?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Boku no Kokoro no Yabai Yatsu 2nd Season"
                },
                {
                    "type": "Synonym",
                    "title": "Bokuyaba"
                },
                {
                    "type": "Japanese",
                    "title": "\u50d5\u306e\u5fc3\u306e\u30e4\u30d0\u30a4\u3084\u3064 \u7b2c2\u671f"
                },
                {
                    "type": "English",
                    "title": "The Dangers in My Heart Season 2"
                }
            ],
            "title": "Boku no Kokoro no Yabai Yatsu 2nd Season",
            "title_english": "The Dangers in My Heart Season 2",
            "title_japanese": "\u50d5\u306e\u5fc3\u306e\u30e4\u30d0\u30a4\u3084\u3064 \u7b2c2\u671f",
            "title_synonyms": [
                "Bokuyaba"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2024-01-07T00:00:00+00:00",
                "to": "2024-03-31T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 7,
                        "month": 1,
                        "year": 2024
                    },
                    "to": {
                        "day": 31,
                        "month": 3,
                        "year": 2024
                    }
                },
                "string": "Jan 7, 2024 to Mar 31, 2024"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.7,
            "scored_by": 171293,
            "rank": 64,
            "popularity": 920,
            "members": 300348,
            "favorites": 6065,
            "synopsis": "After an eventful winter break, Kyoutarou Ichikawa and Anna Yamada reunite with a stronger bond. They continue to grow in their own ways, with Yamada taking on more challenging photoshoots and Ichikawa maturing both physically and emotionally as he tackles his affections for Yamada. However, spending time together outside of school allows for their relationship to deepen, and it becomes increasingly difficult to deny their budding romantic feelings.\n\nGrappling with these unexpected and new emotions, Ichikawa and Yamada realize that, with the passage of time, their relationship is bound to change\u2014and they must ultimately decide whether they wish to remain close friends or finally become a couple.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "winter",
            "year": 2024,
            "broadcast": {
                "day": "Sundays",
                "time": "01:30",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 01:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 55,
                    "type": "anime",
                    "name": "TV Asahi",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/55\/TV_Asahi"
                },
                {
                    "mal_id": 166,
                    "type": "anime",
                    "name": "Movic",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/166\/Movic"
                },
                {
                    "mal_id": 306,
                    "type": "anime",
                    "name": "Magic Capsule",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/306\/Magic_Capsule"
                },
                {
                    "mal_id": 1284,
                    "type": "anime",
                    "name": "Avex Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1284\/Avex_Pictures"
                },
                {
                    "mal_id": 1373,
                    "type": "anime",
                    "name": "Akita Shoten",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1373\/Akita_Shoten"
                },
                {
                    "mal_id": 2185,
                    "type": "anime",
                    "name": "BS Asahi",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2185\/BS_Asahi"
                },
                {
                    "mal_id": 2234,
                    "type": "anime",
                    "name": "TV Asahi Music",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2234\/TV_Asahi_Music"
                }
            ],
            "licensors": [
                {
                    "mal_id": 376,
                    "type": "anime",
                    "name": "Sentai Filmworks",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/376\/Sentai_Filmworks"
                }
            ],
            "studios": [
                {
                    "mal_id": 247,
                    "type": "anime",
                    "name": "Shin-Ei Animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/247\/Shin-Ei_Animation"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/22\/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "School",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/23\/School"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 33352,
            "url": "https:\/\/myanimelist.net\/anime\/33352\/Violet_Evergarden",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1795\/95088.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1795\/95088t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1795\/95088l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1795\/95088.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1795\/95088t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1795\/95088l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/g5xWqjFglsk?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Violet Evergarden"
                },
                {
                    "type": "Japanese",
                    "title": "\u30f4\u30a1\u30a4\u30aa\u30ec\u30c3\u30c8\u30fb\u30a8\u30f4\u30a1\u30fc\u30ac\u30fc\u30c7\u30f3"
                },
                {
                    "type": "English",
                    "title": "Violet Evergarden"
                }
            ],
            "title": "Violet Evergarden",
            "title_english": "Violet Evergarden",
            "title_japanese": "\u30f4\u30a1\u30a4\u30aa\u30ec\u30c3\u30c8\u30fb\u30a8\u30f4\u30a1\u30fc\u30ac\u30fc\u30c7\u30f3",
            "title_synonyms": [],
            "type": "TV",
            "source": "Light novel",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2018-01-11T00:00:00+00:00",
                "to": "2018-04-05T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 11,
                        "month": 1,
                        "year": 2018
                    },
                    "to": {
                        "day": 5,
                        "month": 4,
                        "year": 2018
                    }
                },
                "string": "Jan 11, 2018 to Apr 5, 2018"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.69,
            "scored_by": 1080658,
            "rank": 69,
            "popularity": 46,
            "members": 1976744,
            "favorites": 68588,
            "synopsis": "The Great War finally came to an end after four long years of conflict; fractured in two, the continent of Telesis slowly began to flourish once again. Caught up in the bloodshed was Violet Evergarden, a young girl raised for the sole purpose of decimating enemy lines. Hospitalized and maimed in a bloody skirmish during the War's final leg, she was left with only words from the person she held dearest, but with no understanding of their meaning.\n\nRecovering from her wounds, Violet starts a new life working at CH Postal Services after a falling out with her new intended guardian family. There, she witnesses by pure chance the work of an \"Auto Memory Doll,\" amanuenses that transcribe people's thoughts and feelings into words on paper. Moved by the notion, Violet begins work as an Auto Memory Doll, a trade that will take her on an adventure, one that will reshape the lives of her clients and hopefully lead to self-discovery.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "winter",
            "year": 2018,
            "broadcast": {
                "day": "Thursdays",
                "time": "00:00",
                "timezone": "Asia\/Tokyo",
                "string": "Thursdays at 00:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 104,
                    "type": "anime",
                    "name": "Lantis",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/104\/Lantis"
                },
                {
                    "mal_id": 144,
                    "type": "anime",
                    "name": "Pony Canyon",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/144\/Pony_Canyon"
                },
                {
                    "mal_id": 211,
                    "type": "anime",
                    "name": "Rakuonsha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/211\/Rakuonsha"
                },
                {
                    "mal_id": 1500,
                    "type": "anime",
                    "name": "ABC Animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1500\/ABC_Animation"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/102\/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Kyoto Animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2\/Kyoto_Animation"
                }
            ],
            "genres": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        },
        {
            "mal_id": 33095,
            "url": "https:\/\/myanimelist.net\/anime\/33095\/Shouwa_Genroku_Rakugo_Shinjuu__Sukeroku_Futatabi-hen",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1493\/124765.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1493\/124765t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1493\/124765l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1493\/124765.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1493\/124765t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1493\/124765l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/wxFCi-ybQ5k?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Shouwa Genroku Rakugo Shinjuu: Sukeroku Futatabi-hen"
                },
                {
                    "type": "Synonym",
                    "title": "Shouwa Genroku Rakugo Shinjuu 2nd Season"
                },
                {
                    "type": "Synonym",
                    "title": "Showa and Genroku Era Lover's Suicide Through Rakugo 2nd Season"
                },
                {
                    "type": "Japanese",
                    "title": "\u662d\u548c\u5143\u7984\u843d\u8a9e\u5fc3\u4e2d\uff5e\u52a9\u516d\u518d\u3073\u7bc7\uff5e"
                },
                {
                    "type": "English",
                    "title": "Descending Stories: Showa Genroku Rakugo Shinju"
                },
                {
                    "type": "French",
                    "title": "Le Rakugo ou la Vie 2"
                }
            ],
            "title": "Shouwa Genroku Rakugo Shinjuu: Sukeroku Futatabi-hen",
            "title_english": "Descending Stories: Showa Genroku Rakugo Shinju",
            "title_japanese": "\u662d\u548c\u5143\u7984\u843d\u8a9e\u5fc3\u4e2d\uff5e\u52a9\u516d\u518d\u3073\u7bc7\uff5e",
            "title_synonyms": [
                "Shouwa Genroku Rakugo Shinjuu 2nd Season",
                "Showa and Genroku Era Lover's Suicide Through Rakugo 2nd Season"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2017-01-07T00:00:00+00:00",
                "to": "2017-03-25T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 7,
                        "month": 1,
                        "year": 2017
                    },
                    "to": {
                        "day": 25,
                        "month": 3,
                        "year": 2017
                    }
                },
                "string": "Jan 7, 2017 to Mar 25, 2017"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.69,
            "scored_by": 69579,
            "rank": 67,
            "popularity": 1373,
            "members": 201093,
            "favorites": 3239,
            "synopsis": "Even after having risen to the utmost rank of shin'uchi, Yotarou struggles to find his own identity in the world of rakugo. Caught between his master's teachings and the late Sukeroku's unique style, his performance lacks an important ingredient\u2014ego. And while his popularity packs the theaters, he is but one of the few; rakugo is under threat of being eclipsed.\n\nMeanwhile Yakumo, regarded by many as the last bastion of preserving the popularity of rakugo, struggles to cope with his elderly state. Even though his performances are still stellar, he fears that he is nearing his limits. His doubts grow stronger as an old friend creeps ever closer. Konatsu, for her part, attempts to raise her son as a single mother, which Yotarou is heavily opposed to. Instead, he seeks to persuade her to marry him and in turn raise her son as his own.\n\nIn Shouwa Genroku Rakugo Shinjuu: Sukeroku Futatabi-hen, the curtains fall on Yotarou and Yakumo's story, tasked with restoring the near-obsolete art form as well as overcoming their internal conflicts.\n\n[Written by MAL Rewrite]",
            "background": "Shouwa Genroku Rakugo Shinjuu: Sukeroku Futatabi-hen covers volumes 6 through 10 of the manga.",
            "season": "winter",
            "year": 2017,
            "broadcast": {
                "day": "Saturdays",
                "time": "02:25",
                "timezone": "Asia\/Tokyo",
                "string": "Saturdays at 02:25 (JST)"
            },
            "producers": [
                {
                    "mal_id": 143,
                    "type": "anime",
                    "name": "Mainichi Broadcasting System",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/143\/Mainichi_Broadcasting_System"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/159\/Kodansha"
                },
                {
                    "mal_id": 315,
                    "type": "anime",
                    "name": "DAX Production",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/315\/DAX_Production"
                },
                {
                    "mal_id": 1344,
                    "type": "anime",
                    "name": "King Records",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1344\/King_Records"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Studio Deen",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/37\/Studio_Deen"
                }
            ],
            "genres": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 50,
                    "type": "anime",
                    "name": "Adult Cast",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/50\/Adult_Cast"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                },
                {
                    "mal_id": 64,
                    "type": "anime",
                    "name": "Love Polygon",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/64\/Love_Polygon"
                },
                {
                    "mal_id": 70,
                    "type": "anime",
                    "name": "Performing Arts",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/70\/Performing_Arts"
                }
            ],
            "demographics": [
                {
                    "mal_id": 43,
                    "type": "anime",
                    "name": "Josei",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/43\/Josei"
                }
            ]
        },
        {
            "mal_id": 12365,
            "url": "https:\/\/myanimelist.net\/anime\/12365\/Bakuman_3rd_Season",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/41845.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/41845t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/41845l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/41845.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/41845t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/41845l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Bakuman. 3rd Season"
                },
                {
                    "type": "Synonym",
                    "title": "Bakuman Season 3"
                },
                {
                    "type": "Japanese",
                    "title": "\u30d0\u30af\u30de\u30f3\u3002"
                },
                {
                    "type": "English",
                    "title": "Bakuman. Season 3"
                }
            ],
            "title": "Bakuman. 3rd Season",
            "title_english": "Bakuman. Season 3",
            "title_japanese": "\u30d0\u30af\u30de\u30f3\u3002",
            "title_synonyms": [
                "Bakuman Season 3"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 25,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2012-10-06T00:00:00+00:00",
                "to": "2013-03-30T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 6,
                        "month": 10,
                        "year": 2012
                    },
                    "to": {
                        "day": 30,
                        "month": 3,
                        "year": 2013
                    }
                },
                "string": "Oct 6, 2012 to Mar 30, 2013"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.52,
            "scored_by": 202961,
            "rank": 148,
            "popularity": 784,
            "members": 346845,
            "favorites": 2948,
            "synopsis": "Onto their third serialization, manga duo Moritaka Mashiro and Akito Takagi\u2014also known by their pen name, Muto Ashirogi\u2014are ever closer to their dream of an anime adaption. However, the real challenge is only just beginning: if they are unable to compete with the artist Eiji Niizuma in the rankings within the span of six months, they will be canceled. To top it off, numerous rivals are close behind and declaring war. They don't even have enough time to spare thinking about an anime!\n\nIn Bakuman. 3rd Season, Muto Ashirogi must find a way to stay atop the colossal mountain known as the Shounen Jack rankings. With new problems and new assistants, the pair continue to strive for their dream.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2012,
            "broadcast": {
                "day": "Saturdays",
                "time": "17:30",
                "timezone": "Asia\/Tokyo",
                "string": "Saturdays at 17:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 111,
                    "type": "anime",
                    "name": "NHK",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/111\/NHK"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "J.C.Staff",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/7\/JCStaff"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/22\/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 69,
                    "type": "anime",
                    "name": "Otaku Culture",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/69\/Otaku_Culture"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 7472,
            "url": "https:\/\/myanimelist.net\/anime\/7472\/Gintama_Movie_1__Shinyaku_Benizakura-hen",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/28803.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/28803t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/28803l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/28803.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/28803t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/28803l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/ZHAZCsDXecE?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama Movie 1: Shinyaku Benizakura-hen"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama: Benizakura Arc - A New Retelling"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama Movie: Crimson Sakura Chapter New Edition"
                },
                {
                    "type": "Synonym",
                    "title": "Gintama: Shin-yaku Benizakura-hen"
                },
                {
                    "type": "Japanese",
                    "title": "\u5287\u5834\u7248 \u9280\u9b42 \u65b0\u8a33\u7d05\u685c\u7bc7"
                },
                {
                    "type": "English",
                    "title": "Gintama: The Movie"
                },
                {
                    "type": "German",
                    "title": "Gintama: Der Film"
                }
            ],
            "title": "Gintama Movie 1: Shinyaku Benizakura-hen",
            "title_english": "Gintama: The Movie",
            "title_japanese": "\u5287\u5834\u7248 \u9280\u9b42 \u65b0\u8a33\u7d05\u685c\u7bc7",
            "title_synonyms": [
                "Gintama: Benizakura Arc - A New Retelling",
                "Gintama Movie: Crimson Sakura Chapter New Edition",
                "Gintama: Shin-yaku Benizakura-hen"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2010-04-24T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 24,
                        "month": 4,
                        "year": 2010
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 24, 2010"
            },
            "duration": "1 hr 35 min",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.52,
            "scored_by": 101731,
            "rank": 150,
            "popularity": 1547,
            "members": 176537,
            "favorites": 638,
            "synopsis": "Gintoki and his Yorozuya friends (or rather, employees suffering under labor violations), Shinpachi and Kagura, continue to scrape by in the futuristic, alien-infested city of Edo. They take on whatever work they can find while trying not to get involved in anything too dangerous. But when Katsura, the leader of the Joui rebels and Gintoki's long-time acquaintance, disappears after being brutally attacked by an unknown assassin, Shinpachi and Kagura begin an investigation into his whereabouts and the identity of the assailant. Meanwhile, Gintoki takes on a seemingly unrelated job: the blacksmith Tetsuya requests that Gin recover a strange and powerful sword called the Benizakura which was recently stolen.\n\nAs the two investigations gradually intersect, the Yorozuya crew find themselves in the midst of a major conspiracy that hinges on the sinister nature of the Benizakura sword. Gintoki resolves to take the fight directly to the enemy headquarters, and together with a few unexpected allies, sets out on one of his most perilous jobs yet.\n\n[Written by MAL Rewrite]",
            "background": "Gintama Movie 1: Shinyaku Benizakura-hen is a remake of episodes 58-61 of Gintama.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/16\/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 230,
                    "type": "anime",
                    "name": "Bandai",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/230\/Bandai"
                },
                {
                    "mal_id": 415,
                    "type": "anime",
                    "name": "Warner Bros. Japan",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/415\/Warner_Bros_Japan"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 376,
                    "type": "anime",
                    "name": "Sentai Filmworks",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/376\/Sentai_Filmworks"
                }
            ],
            "studios": [
                {
                    "mal_id": 14,
                    "type": "anime",
                    "name": "Sunrise",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/14\/Sunrise"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/24\/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/20\/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/21\/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 21329,
            "url": "https:\/\/myanimelist.net\/anime\/21329\/Mushishi__Hihamukage",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1559\/147521.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1559\/147521t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1559\/147521l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1559\/147521.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1559\/147521t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1559\/147521l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/Q9PiKDPIgPg?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Mushishi: Hihamukage"
                },
                {
                    "type": "Synonym",
                    "title": "Mushi-shi Tokubetsu-hen: Hihamu Kage"
                },
                {
                    "type": "Synonym",
                    "title": "Mushishi Special: Hihamukage"
                },
                {
                    "type": "Japanese",
                    "title": "\u87f2\u5e2b \u7279\u5225\u7bc7\u300c\u65e5\u8755\u3080\u7ff3\u300d"
                },
                {
                    "type": "English",
                    "title": "Mushi-shi: The Shadow that Devours the Sun"
                }
            ],
            "title": "Mushishi: Hihamukage",
            "title_english": "Mushi-shi: The Shadow that Devours the Sun",
            "title_japanese": "\u87f2\u5e2b \u7279\u5225\u7bc7\u300c\u65e5\u8755\u3080\u7ff3\u300d",
            "title_synonyms": [
                "Mushi-shi Tokubetsu-hen: Hihamu Kage",
                "Mushishi Special: Hihamukage"
            ],
            "type": "TV Special",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2014-01-04T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 4,
                        "month": 1,
                        "year": 2014
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jan 4, 2014"
            },
            "duration": "44 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.52,
            "scored_by": 72889,
            "rank": 153,
            "popularity": 1728,
            "members": 152408,
            "favorites": 214,
            "synopsis": "The entire countryside comes to a halt midday to witness a rare solar eclipse that is rumored to allow the average person to see Mushi. Unable to avert their gaze, the air is full of awe and wonder\u2014but those who know the Mushi are preparing for the eclipse's aftermath.\n\nBased on a prediction from Tanyuu Karibusa, the cursed recorder, Mushishi Ginko finds himself in a very unlucky farming village. Immediately following the solar eclipse, a strange black cloud begins to gather in the sky and blocks the sun once more. Suspecting it to be the work of a Mushi known as Hihami, Ginko seeks to liberate the village from perpetual darkness. However, it seems that not all of the villagers are eager to return to the light.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/159\/Kodansha"
                },
                {
                    "mal_id": 711,
                    "type": "anime",
                    "name": "Delfi Sound",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/711\/Delfi_Sound"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Artland",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/8\/Artland"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/7\/Mystery"
                },
                {
                    "mal_id": 36,
                    "type": "anime",
                    "name": "Slice of Life",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/36\/Slice_of_Life"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 50,
                    "type": "anime",
                    "name": "Adult Cast",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/50\/Adult_Cast"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                },
                {
                    "mal_id": 63,
                    "type": "anime",
                    "name": "Iyashikei",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/63\/Iyashikei"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/42\/Seinen"
                }
            ]
        },
        {
            "mal_id": 55791,
            "url": "https:\/\/myanimelist.net\/anime\/55791\/Oshi_no_Ko_2nd_Season",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1006\/143302.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1006\/143302t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1006\/143302l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1006\/143302.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1006\/143302t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1006\/143302l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/QMuajQlx64c?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "[Oshi no Ko] 2nd Season"
                },
                {
                    "type": "Synonym",
                    "title": "My Star Season 2"
                },
                {
                    "type": "Japanese",
                    "title": "\u3010\u63a8\u3057\u306e\u5b50\u3011\u7b2c2\u671f"
                },
                {
                    "type": "English",
                    "title": "[Oshi No Ko] Season 2"
                }
            ],
            "title": "[Oshi no Ko] 2nd Season",
            "title_english": "[Oshi No Ko] Season 2",
            "title_japanese": "\u3010\u63a8\u3057\u306e\u5b50\u3011\u7b2c2\u671f",
            "title_synonyms": [
                "My Star Season 2"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2024-07-03T00:00:00+00:00",
                "to": "2024-10-06T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 3,
                        "month": 7,
                        "year": 2024
                    },
                    "to": {
                        "day": 6,
                        "month": 10,
                        "year": 2024
                    }
                },
                "string": "Jul 3, 2024 to Oct 6, 2024"
            },
            "duration": "25 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.52,
            "scored_by": 246646,
            "rank": 152,
            "popularity": 510,
            "members": 501186,
            "favorites": 6043,
            "synopsis": "With the help of producer Masaya Kaburagi, Aquamarine \"Aqua\" Hoshino and Kana Arima have landed the roles of Touki and Tsurugi in Lala Lai Theatrical Company's stage adaptation of the popular manga series Tokyo Blade. Co-starring with them is Aqua's girlfriend, Akane Kurokawa, who plays Touki's fianc\u00e9e, Princess Saya. Due to the fanbase preferring Tsurugi as Touki's love interest, Saya has made fewer and fewer appearances in the manga, making it difficult for Akane to fully immerse herself in the role. Her struggles are compounded by differences between the play's script and the original work\u2014differences that also frustrate Tokyo Blade's author, Abiko Samejima.\n\nAqua, however, is more concerned with his personal goals than he is with the play. He has only one objective in mind: to grow closer to director Toshirou Kindaichi and find out what he knows about Aqua's mother, Ai.\n\n[Written by MAL Rewrite]",
            "background": "[Oshi no Ko] 2nd Season was released on Blu-ray and DVD in six volumes from October 25, 2024, to March 26, 2025.",
            "season": "summer",
            "year": 2024,
            "broadcast": {
                "day": "Wednesdays",
                "time": "23:00",
                "timezone": "Asia\/Tokyo",
                "string": "Wednesdays at 23:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 711,
                    "type": "anime",
                    "name": "Delfi Sound",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/711\/Delfi_Sound"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                },
                {
                    "mal_id": 1422,
                    "type": "anime",
                    "name": "CyberAgent",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1422\/CyberAgent"
                },
                {
                    "mal_id": 1696,
                    "type": "anime",
                    "name": "Kadokawa",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1696\/Kadokawa"
                }
            ],
            "licensors": [
                {
                    "mal_id": 376,
                    "type": "anime",
                    "name": "Sentai Filmworks",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/376\/Sentai_Filmworks"
                }
            ],
            "studios": [
                {
                    "mal_id": 95,
                    "type": "anime",
                    "name": "Doga Kobo",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/95\/Doga_Kobo"
                }
            ],
            "genres": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 72,
                    "type": "anime",
                    "name": "Reincarnation",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/72\/Reincarnation"
                },
                {
                    "mal_id": 75,
                    "type": "anime",
                    "name": "Showbiz",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/75\/Showbiz"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/42\/Seinen"
                }
            ]
        },
        {
            "mal_id": 61322,
            "url": "https:\/\/myanimelist.net\/anime\/61322\/Dr_Stone__Science_Future_Part_2",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1785\/151710.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1785\/151710t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1785\/151710l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1785\/151710.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1785\/151710t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1785\/151710l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/qbthdPHU8FQ?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Dr. Stone: Science Future Part 2"
                },
                {
                    "type": "Synonym",
                    "title": "Dr. Stone 4th Season Part 2"
                },
                {
                    "type": "Japanese",
                    "title": "Dr.STONE SCIENCE FUTURE \u7b2c2\u30af\u30fc\u30eb"
                },
                {
                    "type": "English",
                    "title": "Dr. Stone: Science Future Part 2"
                }
            ],
            "title": "Dr. Stone: Science Future Part 2",
            "title_english": "Dr. Stone: Science Future Part 2",
            "title_japanese": "Dr.STONE SCIENCE FUTURE \u7b2c2\u30af\u30fc\u30eb",
            "title_synonyms": [
                "Dr. Stone 4th Season Part 2"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2025-07-10T00:00:00+00:00",
                "to": "2025-09-25T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 10,
                        "month": 7,
                        "year": 2025
                    },
                    "to": {
                        "day": 25,
                        "month": 9,
                        "year": 2025
                    }
                },
                "string": "Jul 10, 2025 to Sep 25, 2025"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.52,
            "scored_by": 102079,
            "rank": 149,
            "popularity": 1331,
            "members": 207627,
            "favorites": 821,
            "synopsis": "After a strategic maneuver, Senkuu Ishigami's team stalls Dr. Xeno's more scientifically advanced forces. A ceasefire between the two factions allows for the establishment of Corn City in North America, a hope for a future thriving population. Meanwhile, Senkuu and some of his teammates rush toward the Amazon in South America\u2014the epicenter of the petrification beam's impact\u2014to create Superalloy City and progress their spaceship project.\n\nWith dangerous enemies still pursuing Senkuu and his companions, it is a race against time to reach the heart of the dense Amazon. As unexpected allies and scientific creations further fuel this leg of their journey, Senkuu is closer than ever to finally uncovering the mystery behind the petrification phenomenon.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "summer",
            "year": 2025,
            "broadcast": {
                "day": "Thursdays",
                "time": "22:00",
                "timezone": "Asia\/Tokyo",
                "string": "Thursdays at 22:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 1143,
                    "type": "anime",
                    "name": "TOHO animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1143\/TOHO_animation"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/73\/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 40748,
            "url": "https:\/\/myanimelist.net\/anime\/40748\/Jujutsu_Kaisen",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1171\/109222.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1171\/109222t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1171\/109222l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1171\/109222.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1171\/109222t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1171\/109222l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/4A_X-Dvl0ws?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Jujutsu Kaisen"
                },
                {
                    "type": "Synonym",
                    "title": "Sorcery Fight"
                },
                {
                    "type": "Synonym",
                    "title": "JJK"
                },
                {
                    "type": "Japanese",
                    "title": "\u546a\u8853\u5efb\u6226"
                },
                {
                    "type": "English",
                    "title": "Jujutsu Kaisen"
                },
                {
                    "type": "German",
                    "title": "Jujutsu Kaisen"
                },
                {
                    "type": "Spanish",
                    "title": "Jujutsu Kaisen"
                },
                {
                    "type": "French",
                    "title": "Jujutsu Kaisen"
                }
            ],
            "title": "Jujutsu Kaisen",
            "title_english": "Jujutsu Kaisen",
            "title_japanese": "\u546a\u8853\u5efb\u6226",
            "title_synonyms": [
                "Sorcery Fight",
                "JJK"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 24,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2020-10-03T00:00:00+00:00",
                "to": "2021-03-27T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 3,
                        "month": 10,
                        "year": 2020
                    },
                    "to": {
                        "day": 27,
                        "month": 3,
                        "year": 2021
                    }
                },
                "string": "Oct 3, 2020 to Mar 27, 2021"
            },
            "duration": "23 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.51,
            "scored_by": 1965679,
            "rank": 155,
            "popularity": 13,
            "members": 2982689,
            "favorites": 95503,
            "synopsis": "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses\u2014dreadful beings formed from human malice and negativity\u2014after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the King of Curses.\n\nYuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Prefectural Jujutsu High School, he begins to walk down a path from which he cannot return\u2014the path of a Jujutsu sorcerer.\n\n[Written by MAL Rewrite]",
            "background": "Winner of the Anime of the Year (TV Series) at the 2022 Tokyo Anime Award Festival (TAAF).",
            "season": "fall",
            "year": 2020,
            "broadcast": {
                "day": "Saturdays",
                "time": "01:25",
                "timezone": "Asia\/Tokyo",
                "string": "Saturdays at 01:25 (JST)"
            },
            "producers": [
                {
                    "mal_id": 143,
                    "type": "anime",
                    "name": "Mainichi Broadcasting System",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/143\/Mainichi_Broadcasting_System"
                },
                {
                    "mal_id": 1143,
                    "type": "anime",
                    "name": "TOHO animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1143\/TOHO_animation"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                },
                {
                    "mal_id": 1856,
                    "type": "anime",
                    "name": "dugout",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1856\/dugout"
                },
                {
                    "mal_id": 2260,
                    "type": "anime",
                    "name": "Sumzap",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2260\/Sumzap"
                }
            ],
            "licensors": [
                {
                    "mal_id": 119,
                    "type": "anime",
                    "name": "VIZ Media",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/119\/VIZ_Media"
                }
            ],
            "studios": [
                {
                    "mal_id": 569,
                    "type": "anime",
                    "name": "MAPPA",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/569\/MAPPA"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 46,
                    "type": "anime",
                    "name": "Award Winning",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/46\/Award_Winning"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "School",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/23\/School"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 801,
            "url": "https:\/\/myanimelist.net\/anime\/801\/Koukaku_Kidoutai__Stand_Alone_Complex_2nd_GIG",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1646\/135390.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1646\/135390t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1646\/135390l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1646\/135390.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1646\/135390t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1646\/135390l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/D522fRIFfhI?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Koukaku Kidoutai: Stand Alone Complex 2nd GIG"
                },
                {
                    "type": "Synonym",
                    "title": "Ghost In The Shell S.A.C. 2nd GIG"
                },
                {
                    "type": "Japanese",
                    "title": "\u653b\u6bbb\u6a5f\u52d5\u968a S.A.C. 2nd GIG"
                },
                {
                    "type": "English",
                    "title": "Ghost in the Shell: Stand Alone Complex 2nd GIG"
                },
                {
                    "type": "German",
                    "title": "Ghost in the Shell: Stand Alone Complex 2nd GIG"
                },
                {
                    "type": "Spanish",
                    "title": "Ghost in the Shell: Stand Alone Complex 2nd GIG"
                },
                {
                    "type": "French",
                    "title": "Ghost in the Shell: Stand Alone Complex 2nd GIG"
                }
            ],
            "title": "Koukaku Kidoutai: Stand Alone Complex 2nd GIG",
            "title_english": "Ghost in the Shell: Stand Alone Complex 2nd GIG",
            "title_japanese": "\u653b\u6bbb\u6a5f\u52d5\u968a S.A.C. 2nd GIG",
            "title_synonyms": [
                "Ghost In The Shell S.A.C. 2nd GIG"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 26,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2004-01-01T00:00:00+00:00",
                "to": "2005-01-08T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 1,
                        "month": 1,
                        "year": 2004
                    },
                    "to": {
                        "day": 8,
                        "month": 1,
                        "year": 2005
                    }
                },
                "string": "Jan 1, 2004 to Jan 8, 2005"
            },
            "duration": "25 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.51,
            "scored_by": 108963,
            "rank": 156,
            "popularity": 1165,
            "members": 240850,
            "favorites": 3279,
            "synopsis": "Following the closure of the \"Laughing Man\" case, Section 9 is re-established by Japan's newly elected Prime Minister, Youko Kayabuki, to combat the persistent threat of cyber-terrorism.\n\nA group calling themselves \"The Individual Eleven\" has begun committing acts of terror across Japan. While Motoko Kusanagi, Daisuke Aramaki, Batou, and the other members of Section 9 investigate this new menace, the Japanese government faces a separate crisis, as foreign refugees displaced by the Third World War seek asylum in Japan. But as the members of the special-ops team continually encounter Gouda Kazundo\u2014a leading member of the Cabinet Intelligence Service\u2014in their hunt, they begin to suspect that he may be involved, and that the events of the refugee crisis and The Individual Eleven may be more connected than they realize...\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "winter",
            "year": 2004,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": "Unknown"
            },
            "producers": [
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "Bandai Visual",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/23\/Bandai_Visual"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 123,
                    "type": "anime",
                    "name": "Victor Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/123\/Victor_Entertainment"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/159\/Kodansha"
                },
                {
                    "mal_id": 382,
                    "type": "anime",
                    "name": "Tokuma Shoten",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/382\/Tokuma_Shoten"
                },
                {
                    "mal_id": 1003,
                    "type": "anime",
                    "name": "Nippon Television Network",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1003\/Nippon_Television_Network"
                },
                {
                    "mal_id": 3024,
                    "type": "anime",
                    "name": "Fonishia",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/3024\/Fonishia"
                }
            ],
            "licensors": [
                {
                    "mal_id": 233,
                    "type": "anime",
                    "name": "Bandai Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/233\/Bandai_Entertainment"
                },
                {
                    "mal_id": 947,
                    "type": "anime",
                    "name": "Manga Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/947\/Manga_Entertainment"
                }
            ],
            "studios": [
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Production I.G",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/10\/Production_IG"
                }
            ],
            "genres": [
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/7\/Mystery"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/24\/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 50,
                    "type": "anime",
                    "name": "Adult Cast",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/50\/Adult_Cast"
                },
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/39\/Detective"
                },
                {
                    "mal_id": 18,
                    "type": "anime",
                    "name": "Mecha",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/18\/Mecha"
                },
                {
                    "mal_id": 38,
                    "type": "anime",
                    "name": "Military",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/38\/Military"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/42\/Seinen"
                }
            ]
        },
        {
            "mal_id": 35843,
            "url": "https:\/\/myanimelist.net\/anime\/35843\/Gintama_Porori-hen",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/11\/88325.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/11\/88325t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/11\/88325l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/11\/88325.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/11\/88325t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/11\/88325l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/sznFcl1O3GI?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Gintama. Porori-hen"
                },
                {
                    "type": "Japanese",
                    "title": "\u9280\u9b42\u3002\u30dd\u30ed\u30ea\u7de8"
                },
                {
                    "type": "English",
                    "title": "Gintama. Slip Arc"
                },
                {
                    "type": "German",
                    "title": "Gintama Staffel 6"
                },
                {
                    "type": "Spanish",
                    "title": "Gintama Temporada 6"
                },
                {
                    "type": "French",
                    "title": "Gintama Saison 6"
                }
            ],
            "title": "Gintama. Porori-hen",
            "title_english": "Gintama. Slip Arc",
            "title_japanese": "\u9280\u9b42\u3002\u30dd\u30ed\u30ea\u7de8",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2017-10-02T00:00:00+00:00",
                "to": "2017-12-25T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 2,
                        "month": 10,
                        "year": 2017
                    },
                    "to": {
                        "day": 25,
                        "month": 12,
                        "year": 2017
                    }
                },
                "string": "Oct 2, 2017 to Dec 25, 2017"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.51,
            "scored_by": 111974,
            "rank": 159,
            "popularity": 1259,
            "members": 220725,
            "favorites": 956,
            "synopsis": "Following the grim events of Iga, Kokujou Island, Rakuyou, and multiple fruitless confrontations with the Tenshouin Naraku and Tendoshuu, Gintama. Porori-hen takes its viewers on a trip down memory lane to when Yorozuya were mostly doing what they did best\u2014odd jobs. The great space hunter Umibouzu has returned to Edo and is livid when he finds out that his daughter Kagura has a boyfriend. He blames Gintoki for being an incompetent guardian, but has the time finally come for him to let go of his daughter?\n\nBack with shameless parodies, risqu\u00e9 humor, and lively camaraderie, Gintoki, Kagura, and Shinpachi are faced with unforeseen situations that manage to be both hilarious and emotionally stirring.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2017,
            "broadcast": {
                "day": "Mondays",
                "time": "01:35",
                "timezone": "Asia\/Tokyo",
                "string": "Mondays at 01:35 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/16\/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1258,
                    "type": "anime",
                    "name": "Bandai Namco Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1258\/Bandai_Namco_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/24\/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/57\/Gag_Humor"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/20\/Parody"
                },
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Samurai",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/21\/Samurai"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 53273,
            "url": "https:\/\/myanimelist.net\/anime\/53273\/JoJo_no_Kimyou_na_Bouken_Part_6__Stone_Ocean_Part_3",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1233\/128920.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1233\/128920t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1233\/128920l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1233\/128920.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1233\/128920t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1233\/128920l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/KZ3RCnoZlLw?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "JoJo no Kimyou na Bouken Part 6: Stone Ocean Part 3"
                },
                {
                    "type": "Japanese",
                    "title": "\u30b8\u30e7\u30b8\u30e7\u306e\u5947\u5999\u306a\u5192\u967a \u30b9\u30c8\u30fc\u30f3\u30aa\u30fc\u30b7\u30e3\u30f3"
                },
                {
                    "type": "English",
                    "title": "JoJo's Bizarre Adventure: Stone Ocean Part 3"
                }
            ],
            "title": "JoJo no Kimyou na Bouken Part 6: Stone Ocean Part 3",
            "title_english": "JoJo's Bizarre Adventure: Stone Ocean Part 3",
            "title_japanese": "\u30b8\u30e7\u30b8\u30e7\u306e\u5947\u5999\u306a\u5192\u967a \u30b9\u30c8\u30fc\u30f3\u30aa\u30fc\u30b7\u30e3\u30f3",
            "title_synonyms": [],
            "type": "ONA",
            "source": "Manga",
            "episodes": 14,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2022-12-01T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 1,
                        "month": 12,
                        "year": 2022
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Dec 1, 2022"
            },
            "duration": "24 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.51,
            "scored_by": 191221,
            "rank": 154,
            "popularity": 950,
            "members": 290158,
            "favorites": 3495,
            "synopsis": "After finally escaping the confines of Green Dolphin Street Jail, Jolyne Kuujou\u2014alongside her companions Ermes Costello and Emporio Alni\u00f1o\u2014pursues the villainous priest Enrico Pucci across the state of Florida. Jolyne's allies, Weather Report and Narciso Anasui, struggle to catch up with her in order to help bring an end to Pucci's plot. As both parties pursue the priest, they must battle against Pucci's band of enemy Stand users.\n\nWhile Jolyne's comrades fight for their lives, Pucci races to the Kennedy Space Center. There he hopes to enact his ultimate goal, one he believes God has entrusted to him. He aims to fulfill the will of the Joestars' blood enemy Dio Brando and\u2014by robbing humanity of free will and making them slaves to fate\u2014to create a world where all humans are blissfully happy.\n\nUnable to rely on the aid of her comatose father Joutarou, Jolyne must weaponize all she has learned in prison to confront Pucci in a climactic battle while the world itself hangs in the balance.\n\n[Written by MAL Rewrite]",
            "background": "JoJo no Kimyou na Bouken Part 6: Stone Ocean Part 3 adapts chapters 103-158 of the original manga.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 415,
                    "type": "anime",
                    "name": "Warner Bros. Japan",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/415\/Warner_Bros_Japan"
                },
                {
                    "mal_id": 460,
                    "type": "anime",
                    "name": "KlockWorx",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/460\/KlockWorx"
                },
                {
                    "mal_id": 1337,
                    "type": "anime",
                    "name": "Medicos Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1337\/Medicos_Entertainment"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 119,
                    "type": "anime",
                    "name": "VIZ Media",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/119\/VIZ_Media"
                }
            ],
            "studios": [
                {
                    "mal_id": 287,
                    "type": "anime",
                    "name": "David Production",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/287\/David_Production"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 31,
                    "type": "anime",
                    "name": "Super Power",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/31\/Super_Power"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 55830,
            "url": "https:\/\/myanimelist.net\/anime\/55830\/Fate_strange_Fake",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1752\/150192.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1752\/150192t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1752\/150192l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1752\/150192.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1752\/150192t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1752\/150192l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/EzbZP62K1-Q?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Fate\/strange Fake"
                },
                {
                    "type": "Japanese",
                    "title": "Fate\/strange Fake"
                },
                {
                    "type": "English",
                    "title": "Fate\/strange Fake"
                }
            ],
            "title": "Fate\/strange Fake",
            "title_english": "Fate\/strange Fake",
            "title_japanese": "Fate\/strange Fake",
            "title_synonyms": [],
            "type": "TV",
            "source": "Light novel",
            "episodes": 13,
            "status": "Currently Airing",
            "airing": true,
            "aired": {
                "from": "2026-01-03T00:00:00+00:00",
                "to": "2026-03-28T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 3,
                        "month": 1,
                        "year": 2026
                    },
                    "to": {
                        "day": 28,
                        "month": 3,
                        "year": 2026
                    }
                },
                "string": "Jan 3, 2026 to Mar 28, 2026"
            },
            "duration": "24 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.51,
            "scored_by": 18153,
            "rank": 158,
            "popularity": 1885,
            "members": 137536,
            "favorites": 739,
            "synopsis": "A new Holy Grail War is emerging in Snowfield, Nevada, where mages from around the world summon Servants, heroic spirits drawn from myth and history, to fight on their behalf. However, this war seems to differ from previous ones. The organization behind it appears to have used data from the Fuyuki Grail War for their ritual, resulting in strange happenings. \n\nUnbeknownst to most participants, this budding conflict is actually a fake Grail War. There exists another set of seven true Servants who are summoned to fight in the genuine Holy Grail War. One of these Servants is a powerful Saber-class who saves the life of Ayaka Sajou, his apparent master, after being summoned. \n\nWith hidden agendas and unpredictable forces at play, the line between the fake and true Grail War becomes unclear, turning Snowfield into a dangerous battlefield.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "winter",
            "year": 2026,
            "broadcast": {
                "day": "Saturdays",
                "time": "23:30",
                "timezone": "Asia\/Tokyo",
                "string": "Saturdays at 23:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 703,
                    "type": "anime",
                    "name": "Notes",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/703\/Notes"
                },
                {
                    "mal_id": 1211,
                    "type": "anime",
                    "name": "Tokyo MX",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1211\/Tokyo_MX"
                },
                {
                    "mal_id": 1416,
                    "type": "anime",
                    "name": "BS11",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1416\/BS11"
                },
                {
                    "mal_id": 1554,
                    "type": "anime",
                    "name": "Contents Seed",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1554\/Contents_Seed"
                },
                {
                    "mal_id": 2640,
                    "type": "anime",
                    "name": "INSPION Edge",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2640\/INSPION_Edge"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 56,
                    "type": "anime",
                    "name": "A-1 Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/56\/A-1_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 82,
                    "type": "anime",
                    "name": "Urban Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/82\/Urban_Fantasy"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 62896,
            "url": "https:\/\/myanimelist.net\/anime\/62896\/Chou_Kaguya-hime",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1544\/154878.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1544\/154878t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1544\/154878l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1544\/154878.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1544\/154878t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1544\/154878l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/XbIRhHAMByI?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Chou Kaguya-hime!"
                },
                {
                    "type": "Japanese",
                    "title": "\u8d85\u304b\u3050\u3084\u59eb\uff01"
                },
                {
                    "type": "English",
                    "title": "Cosmic Princess Kaguya!"
                }
            ],
            "title": "Chou Kaguya-hime!",
            "title_english": "Cosmic Princess Kaguya!",
            "title_japanese": "\u8d85\u304b\u3050\u3084\u59eb\uff01",
            "title_synonyms": [],
            "type": "ONA",
            "source": "Original",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2026-01-22T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 22,
                        "month": 1,
                        "year": 2026
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jan 22, 2026"
            },
            "duration": "2 hr 20 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.51,
            "scored_by": 30013,
            "rank": 157,
            "popularity": 3049,
            "members": 65838,
            "favorites": 1487,
            "synopsis": "Tsukuyomi is a virtual realm where hopes and dreams come together. Iroha Sakayori, a 17-year-old high school student in Tokyo, leads an extremely busy life trying to balance part-time work and academics. She finds peace by watching a popular streamer named Yachiyo Runami, who is the administrator of an online virtual space called Tsukuyomi.\n\nIroha frequents Tsukuyomi, where people can live different lives and freely pursue their creativity, and she passes the time by supporting Yachiyo and playing battle games to earn a little extra money. On her way home one day, Iroha finds a telephone pole shining with iridescent hues. To her surprise, an adorable baby emerges from the pole. Unable to abandon it, Iroha takes the infant home and watches her rapidly grow into a girl her own age.\n\n\"Are you Princess Kaguya?\"\n\nThe grown-up Kaguya develops a self-indulgent personality. At Kaguya's fervent request, Iroha helps her start streaming in Tsukuyomi. With Iroha as producer and songwriter and Kaguya as streamer and singer, the two grow steadily closer. Little do they know that ominous forces lie in wait, eager to take Kaguya back to the moon.\n\nThis is the tale of Princess Kaguya as never seen before.\n\n(Source: Netflix, edited)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 1747,
                    "type": "anime",
                    "name": "Twin Engine",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1747\/Twin_Engine"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1033,
                    "type": "anime",
                    "name": "Studio Colorido",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1033\/Studio_Colorido"
                },
                {
                    "mal_id": 3226,
                    "type": "anime",
                    "name": "Studio Chromato",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/3226\/Studio_Chromato"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/24\/Sci-Fi"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 19,
                    "type": "anime",
                    "name": "Music",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/19\/Music"
                },
                {
                    "mal_id": 6,
                    "type": "anime",
                    "name": "Mythology",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/6\/Mythology"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 40664,
            "url": "https:\/\/myanimelist.net\/anime\/40664\/Shoujo\u2606Kageki_Revue_Starlight_Movie",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1378\/119190.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1378\/119190t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1378\/119190l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1378\/119190.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1378\/119190t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1378\/119190l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/z5hfWlnhTqk?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Shoujo\u2606Kageki Revue Starlight Movie"
                },
                {
                    "type": "Japanese",
                    "title": "\u5287\u5834\u7248 \u5c11\u5973\u2606\u6b4c\u5287 \u30ec\u30f4\u30e5\u30fc\u30b9\u30bf\u30a1\u30e9\u30a4\u30c8"
                },
                {
                    "type": "English",
                    "title": "Revue Starlight: The Movie"
                }
            ],
            "title": "Shoujo\u2606Kageki Revue Starlight Movie",
            "title_english": "Revue Starlight: The Movie",
            "title_japanese": "\u5287\u5834\u7248 \u5c11\u5973\u2606\u6b4c\u5287 \u30ec\u30f4\u30e5\u30fc\u30b9\u30bf\u30a1\u30e9\u30a4\u30c8",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Original",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2021-06-04T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 4,
                        "month": 6,
                        "year": 2021
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jun 4, 2021"
            },
            "duration": "2 hr",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.5,
            "scored_by": 11232,
            "rank": 164,
            "popularity": 4915,
            "members": 25877,
            "favorites": 1051,
            "synopsis": "With the arrival of a new generation of talented girls, another lively year at Seishou Music Academy begins. The graduating 99th class is already preparing for the much-anticipated rendition of Starlight, a bittersweet story about the parting of two girls.\n\nIt seems like all students in the Actor Training Department have their post-graduation future figured out\u2014except for the cheerful Karen Aijou. Having fulfilled her promise of performing in a play with Hikari Kagura, her ambitious childhood friend, Karen struggles to find her purpose. What lies beyond their promise is a mystery to Karen, as Hikari was the fuel that kept her passion for performing aflame. Now alone, Karen must confront the reality of stage girls and find her way toward the future\u2014her very own stage.\n\n[Written by MAL Rewrite]",
            "background": "Shoujo\u2606Kageki Revue Starlight Movie was originally scheduled to premiere in theaters on May 21, 2021 but was delayed due to the COVID-19 pandemic and Japan's extended period of state of emergency. The film premiered in North America as Revue Starlight: The Movie at Anime Central 2022 on May 20, 2022, and in theaters on June 5, 2022. The movie was released on Blu-ray in Japan on December 22, 2021.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 775,
                    "type": "anime",
                    "name": "Bushiroad",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/775\/Bushiroad"
                }
            ],
            "licensors": [
                {
                    "mal_id": 376,
                    "type": "anime",
                    "name": "Sentai Filmworks",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/376\/Sentai_Filmworks"
                }
            ],
            "studios": [
                {
                    "mal_id": 290,
                    "type": "anime",
                    "name": "Kinema Citrus",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/290\/Kinema_Citrus"
                }
            ],
            "genres": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 19,
                    "type": "anime",
                    "name": "Music",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/19\/Music"
                },
                {
                    "mal_id": 70,
                    "type": "anime",
                    "name": "Performing Arts",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/70\/Performing_Arts"
                },
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "School",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/23\/School"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 31933,
            "url": "https:\/\/myanimelist.net\/anime\/31933\/JoJo_no_Kimyou_na_Bouken_Part_4__Diamond_wa_Kudakenai",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/79156.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/79156t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/79156l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/79156.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/79156t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/79156l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/gagUdy3AY14?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "JoJo no Kimyou na Bouken Part 4: Diamond wa Kudakenai"
                },
                {
                    "type": "Synonym",
                    "title": "JoJo no Kimyou na Bouken Part 4: Diamond wa Kudakenai"
                },
                {
                    "type": "Synonym",
                    "title": "Diamond is not Crash"
                },
                {
                    "type": "Japanese",
                    "title": "\u30b8\u30e7\u30b8\u30e7\u306e\u5947\u5999\u306a\u5192\u967a \u30c0\u30a4\u30e4\u30e2\u30f3\u30c9\u306f\u7815\u3051\u306a\u3044"
                },
                {
                    "type": "English",
                    "title": "JoJo's Bizarre Adventure: Diamond Is Unbreakable"
                },
                {
                    "type": "Spanish",
                    "title": "Jojo's Bizarre Adventure: Diamond Is Unbreakable Temporada 3"
                },
                {
                    "type": "French",
                    "title": "JoJo's Bizarre Adventure: Diamond is Unbreakable"
                }
            ],
            "title": "JoJo no Kimyou na Bouken Part 4: Diamond wa Kudakenai",
            "title_english": "JoJo's Bizarre Adventure: Diamond Is Unbreakable",
            "title_japanese": "\u30b8\u30e7\u30b8\u30e7\u306e\u5947\u5999\u306a\u5192\u967a \u30c0\u30a4\u30e4\u30e2\u30f3\u30c9\u306f\u7815\u3051\u306a\u3044",
            "title_synonyms": [
                "JoJo no Kimyou na Bouken Part 4: Diamond wa Kudakenai",
                "Diamond is not Crash"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 39,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2016-04-02T00:00:00+00:00",
                "to": "2016-12-24T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 2,
                        "month": 4,
                        "year": 2016
                    },
                    "to": {
                        "day": 24,
                        "month": 12,
                        "year": 2016
                    }
                },
                "string": "Apr 2, 2016 to Dec 24, 2016"
            },
            "duration": "23 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.5,
            "scored_by": 864892,
            "rank": 161,
            "popularity": 129,
            "members": 1251800,
            "favorites": 43272,
            "synopsis": "The year is 1999. Morioh, a normally quiet and peaceful town, has recently become a hotbed of strange activity. Joutarou Kuujou, now a marine biologist, heads to the mysterious town to meet Jousuke Higashikata. While the two may seem like strangers at first, Jousuke is actually the illegitimate child of Joutarou's grandfather, Joseph Joestar. When they meet, Joutarou realizes that he may have more in common with Jousuke than just a blood relation.\n\nAlong with the mild-mannered Kouichi Hirose and the boisterous Okuyasu Nijimura, the group dedicates themselves to investigating recent disappearances and other suspicious occurrences within Morioh. Aided by the power of Stands, the four men will encounter danger at every street corner, as it is up to them to unravel the town's secrets, before another occurs.\n\n[Written by MAL Rewrite]",
            "background": "JoJo no Kimyou na Bouken: Diamond wa Kudakenai is a full adaptation of the fourth part of the JoJo no Kimyou na Bouken manga series.",
            "season": "spring",
            "year": 2016,
            "broadcast": {
                "day": "Saturdays",
                "time": "00:30",
                "timezone": "Asia\/Tokyo",
                "string": "Saturdays at 00:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 415,
                    "type": "anime",
                    "name": "Warner Bros. Japan",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/415\/Warner_Bros_Japan"
                },
                {
                    "mal_id": 460,
                    "type": "anime",
                    "name": "KlockWorx",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/460\/KlockWorx"
                },
                {
                    "mal_id": 1337,
                    "type": "anime",
                    "name": "Medicos Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1337\/Medicos_Entertainment"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 119,
                    "type": "anime",
                    "name": "VIZ Media",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/119\/VIZ_Media"
                }
            ],
            "studios": [
                {
                    "mal_id": 287,
                    "type": "anime",
                    "name": "David Production",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/287\/David_Production"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 31,
                    "type": "anime",
                    "name": "Super Power",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/31\/Super_Power"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 4282,
            "url": "https:\/\/myanimelist.net\/anime\/4282\/Kara_no_Kyoukai_Movie_5__Mujun_Rasen",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/75851.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/75851t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/75851l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/75851.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/75851t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/75851l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/o3nYOOkXRfM?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Kara no Kyoukai Movie 5: Mujun Rasen"
                },
                {
                    "type": "Synonym",
                    "title": "Kara no Kyoukai: The Garden of Sinners Movie 5"
                },
                {
                    "type": "Synonym",
                    "title": "Borderline of Emptiness: Paradox Spiral"
                },
                {
                    "type": "Synonym",
                    "title": "The Garden of Sinners: Paradox Paradigm"
                },
                {
                    "type": "Japanese",
                    "title": "\u5287\u5834\u7248 \u7a7a\u306e\u5883\u754c the Garden of sinners \u7b2c\u4e94\u7ae0\u300e\u77db\u76fe\u87ba\u65cb\u300f"
                },
                {
                    "type": "English",
                    "title": "The Garden of Sinners Chapter 5: Paradox Spiral"
                },
                {
                    "type": "German",
                    "title": "the Garden of Sinners Film 5: Paradoxe Helix"
                },
                {
                    "type": "French",
                    "title": "the Garden of sinners Film 5: Spirale Contradictoire"
                }
            ],
            "title": "Kara no Kyoukai Movie 5: Mujun Rasen",
            "title_english": "The Garden of Sinners Chapter 5: Paradox Spiral",
            "title_japanese": "\u5287\u5834\u7248 \u7a7a\u306e\u5883\u754c the Garden of sinners \u7b2c\u4e94\u7ae0\u300e\u77db\u76fe\u87ba\u65cb\u300f",
            "title_synonyms": [
                "Kara no Kyoukai: The Garden of Sinners Movie 5",
                "Borderline of Emptiness: Paradox Spiral",
                "The Garden of Sinners: Paradox Paradigm"
            ],
            "type": "Movie",
            "source": "Light novel",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2008-08-16T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 16,
                        "month": 8,
                        "year": 2008
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Aug 16, 2008"
            },
            "duration": "1 hr 54 min",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.5,
            "scored_by": 139094,
            "rank": 162,
            "popularity": 1098,
            "members": 252650,
            "favorites": 4699,
            "synopsis": "In November 1998, a double homicide occurs at the newly constructed Ogawa apartment complex in the heart of Mifune City. The murderer, Tomoe Enjou, has fled in a panic. To his astonishment, he is not pursued by the police and news of the incident has not been reported through media outlets. After Shiki Ryougi defends Tomoe from a group of thugs, she allows him to use her residence as a hideout. However, a few days later, Tomoe is shaken to discover that his mother is alive, even though he is convinced that he killed her.\n \nCoincidentally, Mikiya Kokutou is investigating a tip that his associate Touko Aozaki receives regarding the murder at the unique apartment complex. As he uncovers more information about the incident, Mikiya takes a particular interest in Tomoe. Deciding to investigate him further, Mikiya soon discovers the disturbing truth of the foreboding Ogawa complex.\n\nThe fifth installment of the Kara no Kyoukai film series, Mujun Rasen combines an intricately constructed mystery with established themes and characters to produce a dark, thought-provoking story.\n\n[Written by MAL Rewrite]",
            "background": "Includes claymation short which was shown before the movie in theaters.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/159\/Kodansha"
                },
                {
                    "mal_id": 703,
                    "type": "anime",
                    "name": "Notes",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/703\/Notes"
                }
            ],
            "licensors": [
                {
                    "mal_id": 493,
                    "type": "anime",
                    "name": "Aniplex of America",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/493\/Aniplex_of_America"
                }
            ],
            "studios": [
                {
                    "mal_id": 43,
                    "type": "anime",
                    "name": "ufotable",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/43\/ufotable"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/7\/Mystery"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/22\/Romance"
                },
                {
                    "mal_id": 41,
                    "type": "anime",
                    "name": "Suspense",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/41\/Suspense"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 82,
                    "type": "anime",
                    "name": "Urban Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/82\/Urban_Fantasy"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 35839,
            "url": "https:\/\/myanimelist.net\/anime\/35839\/Sora_yori_mo_Tooi_Basho",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/89879.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/89879t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/89879l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/89879.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/89879t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/89879l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/jFgvK5BzGck?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Sora yori mo Tooi Basho"
                },
                {
                    "type": "Synonym",
                    "title": "Uchuu yori mo Tooi Basho"
                },
                {
                    "type": "Synonym",
                    "title": "A Story That Leads to the Antarctica"
                },
                {
                    "type": "Synonym",
                    "title": "Yorimoi"
                },
                {
                    "type": "Japanese",
                    "title": "\u5b87\u5b99\u3088\u308a\u3082\u9060\u3044\u5834\u6240"
                },
                {
                    "type": "English",
                    "title": "A Place Further Than The Universe"
                },
                {
                    "type": "German",
                    "title": "A Place Further Than the Universe"
                },
                {
                    "type": "Spanish",
                    "title": "A Place Further than the Universe"
                },
                {
                    "type": "French",
                    "title": "A Place Further Than The Universe"
                }
            ],
            "title": "Sora yori mo Tooi Basho",
            "title_english": "A Place Further Than The Universe",
            "title_japanese": "\u5b87\u5b99\u3088\u308a\u3082\u9060\u3044\u5834\u6240",
            "title_synonyms": [
                "Uchuu yori mo Tooi Basho",
                "A Story That Leads to the Antarctica",
                "Yorimoi"
            ],
            "type": "TV",
            "source": "Original",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2018-01-02T00:00:00+00:00",
                "to": "2018-03-27T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 2,
                        "month": 1,
                        "year": 2018
                    },
                    "to": {
                        "day": 27,
                        "month": 3,
                        "year": 2018
                    }
                },
                "string": "Jan 2, 2018 to Mar 27, 2018"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.5,
            "scored_by": 234933,
            "rank": 165,
            "popularity": 454,
            "members": 550165,
            "favorites": 14778,
            "synopsis": "Filled with an overwhelming sense of wonder for the world around her, Mari Tamaki has always dreamt of what lies beyond the reaches of the universe. However, despite harboring such large aspirations on the inside, her fear of the unknown and anxiety over her own possible limitations have always held her back from chasing them. But now, in her second year of high school, Mari is more determined than ever to not let any more of her youth go to waste. Still, her fear continues to prevent her from taking that ambitious step forward\u2014that is, until she has a chance encounter with a girl who has grand dreams of her own.\n\nSpurred by her mother's disappearance, Shirase Kobuchizawa has been working hard to fund her trip to Antarctica. Despite facing doubt and ridicule from virtually everyone, Shirase is determined to embark on this expedition to search for her mother in a place further than the universe itself. Inspired by Shirase's resolve, Mari jumps at the chance to join her. Soon, their efforts attract the attention of the bubbly Hinata Miyake, who is eager to stand out, and Yuzuki Shiraishi, a polite girl from a high class background. Together, the four spirited girls set sail toward the frozen south, all in search of something great.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "winter",
            "year": 2018,
            "broadcast": {
                "day": "Tuesdays",
                "time": "20:30",
                "timezone": "Asia\/Tokyo",
                "string": "Tuesdays at 20:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 166,
                    "type": "anime",
                    "name": "Movic",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/166\/Movic"
                },
                {
                    "mal_id": 238,
                    "type": "anime",
                    "name": "AT-X",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/238\/AT-X"
                },
                {
                    "mal_id": 737,
                    "type": "anime",
                    "name": "Sony Music Communications",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/737\/Sony_Music_Communications"
                },
                {
                    "mal_id": 1334,
                    "type": "anime",
                    "name": "Docomo Anime Store",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1334\/Docomo_Anime_Store"
                },
                {
                    "mal_id": 1551,
                    "type": "anime",
                    "name": "Kadokawa Media House",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1551\/Kadokawa_Media_House"
                },
                {
                    "mal_id": 1696,
                    "type": "anime",
                    "name": "Kadokawa",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1696\/Kadokawa"
                },
                {
                    "mal_id": 1779,
                    "type": "anime",
                    "name": "NewGin",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1779\/NewGin"
                },
                {
                    "mal_id": 1784,
                    "type": "anime",
                    "name": "Crunchyroll SC Anime Fund",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1784\/Crunchyroll_SC_Anime_Fund"
                }
            ],
            "licensors": [
                {
                    "mal_id": 3051,
                    "type": "anime",
                    "name": "Anime Limited",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/3051\/Anime_Limited"
                }
            ],
            "studios": [
                {
                    "mal_id": 11,
                    "type": "anime",
                    "name": "Madhouse",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/11\/Madhouse"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 52,
                    "type": "anime",
                    "name": "CGDCT",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/52\/CGDCT"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 11981,
            "url": "https:\/\/myanimelist.net\/anime\/11981\/Mahou_Shoujo_Madoka\u2605Magica_Movie_3__Hangyaku_no_Monogatari",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/5\/54231.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/5\/54231t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/5\/54231l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/5\/54231.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/5\/54231t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/5\/54231l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/aic9EjX2A8Y?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Mahou Shoujo Madoka\u2605Magica Movie 3: Hangyaku no Monogatari"
                },
                {
                    "type": "Synonym",
                    "title": "Mahou Shoujo Madoka Magika Movie 3"
                },
                {
                    "type": "Synonym",
                    "title": "Magical Girl Madoka Magica Movie 3"
                },
                {
                    "type": "Japanese",
                    "title": "\u5287\u5834\u7248 \u9b54\u6cd5\u5c11\u5973\u307e\u3069\u304b\u2606\u30de\u30ae\u30ab \u53db\u9006\u306e\u7269\u8a9e"
                },
                {
                    "type": "English",
                    "title": "Puella Magi Madoka Magica the Movie: Rebellion"
                },
                {
                    "type": "German",
                    "title": "Puella Magi Madoka Magica Film 3: Rebellion"
                },
                {
                    "type": "Spanish",
                    "title": "Puella Magi Madoka Magica la Pel\u00edcula: Rebellion"
                },
                {
                    "type": "French",
                    "title": "Puella Magi Madoka Magica-Film 3: Rebellion"
                }
            ],
            "title": "Mahou Shoujo Madoka\u2605Magica Movie 3: Hangyaku no Monogatari",
            "title_english": "Puella Magi Madoka Magica the Movie: Rebellion",
            "title_japanese": "\u5287\u5834\u7248 \u9b54\u6cd5\u5c11\u5973\u307e\u3069\u304b\u2606\u30de\u30ae\u30ab \u53db\u9006\u306e\u7269\u8a9e",
            "title_synonyms": [
                "Mahou Shoujo Madoka Magika Movie 3",
                "Magical Girl Madoka Magica Movie 3"
            ],
            "type": "Movie",
            "source": "Original",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2013-10-26T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 26,
                        "month": 10,
                        "year": 2013
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Oct 26, 2013"
            },
            "duration": "1 hr 56 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.5,
            "scored_by": 247644,
            "rank": 163,
            "popularity": 638,
            "members": 417257,
            "favorites": 9688,
            "synopsis": "The young girls of Mitakihara happily live their lives, occasionally fighting off evil, but otherwise going about their peaceful, everyday routines. However, Homura Akemi feels that something is wrong with this unusually pleasant atmosphere\u2014though the others remain oblivious, she can't help but suspect that there is more to what is going on than meets the eye: someone who should not exist is currently present to join in on their activities.\n\nMahou Shoujo Madoka\u2605Magica Movie 3: Hangyaku no Monogatari follows Homura in her struggle to uncover the painful truth behind the mysterious circumstances, as she selfishly and desperately fights for the sake of her undying love in this despair-ridden conclusion to the story of five magical girls.\n\n[Written by MAL Rewrite]",
            "background": "Mahou Shoujo Madoka\u2605Magica Movie 3: Hangyaku no Monogatari is an original story which takes place after the events of the previous films. The film was released in Japanese theaters by Warner Bros. Pictures on October 26, 2013, with a manga adaptation by Hanokage released by Houbunsha between November 2013 and January 2014. Rebellion was one of 19 animated films submitted for Best Animated Feature for the 86th Academy Awards, but was not nominated. The film earned 2.25 billion yen in the Japanese box office. Rebellion was nominated for the Japan Academy Prize for Animation of the Year at the 37th Japan Academy Prize and won the Best Theatrical Film Award at the 19th Animation Kobe Awards.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 143,
                    "type": "anime",
                    "name": "Mainichi Broadcasting System",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/143\/Mainichi_Broadcasting_System"
                },
                {
                    "mal_id": 166,
                    "type": "anime",
                    "name": "Movic",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/166\/Movic"
                },
                {
                    "mal_id": 459,
                    "type": "anime",
                    "name": "Nitroplus",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/459\/Nitroplus"
                },
                {
                    "mal_id": 797,
                    "type": "anime",
                    "name": "Houbunsha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/797\/Houbunsha"
                },
                {
                    "mal_id": 1488,
                    "type": "anime",
                    "name": "Hakuhodo DY Media Partners",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1488\/Hakuhodo_DY_Media_Partners"
                }
            ],
            "licensors": [
                {
                    "mal_id": 493,
                    "type": "anime",
                    "name": "Aniplex of America",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/493\/Aniplex_of_America"
                }
            ],
            "studios": [
                {
                    "mal_id": 44,
                    "type": "anime",
                    "name": "Shaft",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/44\/Shaft"
                }
            ],
            "genres": [
                {
                    "mal_id": 46,
                    "type": "anime",
                    "name": "Award Winning",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/46\/Award_Winning"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 41,
                    "type": "anime",
                    "name": "Suspense",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/41\/Suspense"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 66,
                    "type": "anime",
                    "name": "Mahou Shoujo",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/66\/Mahou_Shoujo"
                },
                {
                    "mal_id": 40,
                    "type": "anime",
                    "name": "Psychological",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/40\/Psychological"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 38474,
            "url": "https:\/\/myanimelist.net\/anime\/38474\/Yuru_Camp\u25b3_Season_2",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1255\/110636.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1255\/110636t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1255\/110636l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1255\/110636.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1255\/110636t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1255\/110636l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/ciGB8qOyXrM?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Yuru Camp\u25b3 Season 2"
                },
                {
                    "type": "Synonym",
                    "title": "Yuru Camp 2nd Season"
                },
                {
                    "type": "Synonym",
                    "title": "Yurukyan"
                },
                {
                    "type": "Japanese",
                    "title": "\u3086\u308b\u30ad\u30e3\u30f3\u25b3 SEASON2"
                },
                {
                    "type": "English",
                    "title": "Laid-Back Camp Season 2"
                },
                {
                    "type": "German",
                    "title": "Laid Back Camp Staffel 2"
                },
                {
                    "type": "Spanish",
                    "title": "Laid-Back Camp Temporada 2"
                },
                {
                    "type": "French",
                    "title": "Yuru Camp \u2013 Au grand air Saison 2"
                }
            ],
            "title": "Yuru Camp\u25b3 Season 2",
            "title_english": "Laid-Back Camp Season 2",
            "title_japanese": "\u3086\u308b\u30ad\u30e3\u30f3\u25b3 SEASON2",
            "title_synonyms": [
                "Yuru Camp 2nd Season",
                "Yurukyan"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2021-01-07T00:00:00+00:00",
                "to": "2021-04-01T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 7,
                        "month": 1,
                        "year": 2021
                    },
                    "to": {
                        "day": 1,
                        "month": 4,
                        "year": 2021
                    }
                },
                "string": "Jan 7, 2021 to Apr 1, 2021"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.5,
            "scored_by": 112370,
            "rank": 166,
            "popularity": 1105,
            "members": 251830,
            "favorites": 3194,
            "synopsis": "Having spent Christmas camping with her new friends, Rin Shima embarks on a solo-camping trip to see the New Year sunrise by the sea. All goes according to plan until unforeseen weather blocks the roads back home, making a return trip impossible. Rin, who is now stranded for a few days, is invited by Nadeshiko Kagamihara to stay at her grandmother's house. \n\nWhat is supposed to be a two-day trip becomes an extended period of sightseeing and new experiences for Rin, and she encounters some new and old faces along the way. Yuru Camp\u25b3 Season 2 continues the story of Rin, Nadeshiko, and their friends as they further explore the joys of camping.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "winter",
            "year": 2021,
            "broadcast": {
                "day": "Thursdays",
                "time": "23:00",
                "timezone": "Asia\/Tokyo",
                "string": "Thursdays at 23:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 213,
                    "type": "anime",
                    "name": "Half H.P Studio",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/213\/Half_HP_Studio"
                },
                {
                    "mal_id": 963,
                    "type": "anime",
                    "name": "MAGES.",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/963\/MAGES"
                },
                {
                    "mal_id": 1576,
                    "type": "anime",
                    "name": "DeNA",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1576\/DeNA"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1075,
                    "type": "anime",
                    "name": "C-Station",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1075\/C-Station"
                }
            ],
            "genres": [
                {
                    "mal_id": 36,
                    "type": "anime",
                    "name": "Slice of Life",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/36\/Slice_of_Life"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 52,
                    "type": "anime",
                    "name": "CGDCT",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/52\/CGDCT"
                },
                {
                    "mal_id": 63,
                    "type": "anime",
                    "name": "Iyashikei",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/63\/Iyashikei"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 59986,
            "url": "https:\/\/myanimelist.net\/anime\/59986\/Grand_Blue_Season_2",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1108\/150583.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1108\/150583t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1108\/150583l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1108\/150583.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1108\/150583t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1108\/150583l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/rQ119Lo7aF8?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Grand Blue Season 2"
                },
                {
                    "type": "Japanese",
                    "title": "\u3050\u3089\u3093\u3076\u308b Season 2"
                },
                {
                    "type": "English",
                    "title": "Grand Blue Dreaming Season 2"
                }
            ],
            "title": "Grand Blue Season 2",
            "title_english": "Grand Blue Dreaming Season 2",
            "title_japanese": "\u3050\u3089\u3093\u3076\u308b Season 2",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2025-07-08T00:00:00+00:00",
                "to": "2025-09-23T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 8,
                        "month": 7,
                        "year": 2025
                    },
                    "to": {
                        "day": 23,
                        "month": 9,
                        "year": 2025
                    }
                },
                "string": "Jul 8, 2025 to Sep 23, 2025"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.5,
            "scored_by": 81822,
            "rank": 160,
            "popularity": 1445,
            "members": 188992,
            "favorites": 1267,
            "synopsis": "Three months have passed since Iori Kitahara began living above Grand Blue, his uncle's scuba diving shop, and joined his university's Diving Club. Alongside the other members, he has spent his days drinking and recklessly having fun. However, when Iori's sister, Shiori, hears about his behavior, she decides to take matters into her own hands\u2014and bring him back home to make him take over their family's inn.\n\nDespite her best efforts, Shiori temporarily gives up as she sees how Iori has grown attached to Grand Blue and his friends. As Iori and the rest of the Diving Club continue to party like there is no tomorrow, they end up in all kinds of bizarrely amusing situations, still somehow managing to hone their scuba diving skills!\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "summer",
            "year": 2025,
            "broadcast": {
                "day": "Tuesdays",
                "time": "00:30",
                "timezone": "Asia\/Tokyo",
                "string": "Tuesdays at 00:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 143,
                    "type": "anime",
                    "name": "Mainichi Broadcasting System",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/143\/Mainichi_Broadcasting_System"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/159\/Kodansha"
                },
                {
                    "mal_id": 1113,
                    "type": "anime",
                    "name": "NBCUniversal Entertainment Japan",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1113\/NBCUniversal_Entertainment_Japan"
                },
                {
                    "mal_id": 1284,
                    "type": "anime",
                    "name": "Avex Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1284\/Avex_Pictures"
                },
                {
                    "mal_id": 1501,
                    "type": "anime",
                    "name": "JR East Marketing & Communications",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1501\/JR_East_Marketing___Communications"
                },
                {
                    "mal_id": 2671,
                    "type": "anime",
                    "name": "Saber Links",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2671\/Saber_Links"
                },
                {
                    "mal_id": 2840,
                    "type": "anime",
                    "name": "qooop",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2840\/qooop"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1379,
                    "type": "anime",
                    "name": "Zero-G",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1379\/Zero-G"
                },
                {
                    "mal_id": 2527,
                    "type": "anime",
                    "name": "Liber",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2527\/Liber"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 50,
                    "type": "anime",
                    "name": "Adult Cast",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/50\/Adult_Cast"
                },
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/57\/Gag_Humor"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/42\/Seinen"
                }
            ]
        },
        {
            "mal_id": 44070,
            "url": "https:\/\/myanimelist.net\/anime\/44070\/Tian_Guan_Cifu_Special",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1043\/110306.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1043\/110306t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1043\/110306l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1043\/110306.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1043\/110306t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1043\/110306l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/O-584_wk3mw?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Tian Guan Cifu Special"
                },
                {
                    "type": "Synonym",
                    "title": "\u5929\u5b98\u8d50\u798f\u7279\u522b\u8282\u76ee"
                },
                {
                    "type": "Synonym",
                    "title": "TGCF Special"
                },
                {
                    "type": "Synonym",
                    "title": "Tian Guan Ci Fu Special"
                },
                {
                    "type": "Japanese",
                    "title": "\u5929\u5b98\u8d50\u798f \u7279\u522b\u7bc7"
                },
                {
                    "type": "English",
                    "title": "Heaven Official's Blessing Special"
                }
            ],
            "title": "Tian Guan Cifu Special",
            "title_english": "Heaven Official's Blessing Special",
            "title_japanese": "\u5929\u5b98\u8d50\u798f \u7279\u522b\u7bc7",
            "title_synonyms": [
                "\u5929\u5b98\u8d50\u798f\u7279\u522b\u8282\u76ee",
                "TGCF Special",
                "Tian Guan Ci Fu Special"
            ],
            "type": "ONA",
            "source": "Web novel",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2021-02-16T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 16,
                        "month": 2,
                        "year": 2021
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Feb 16, 2021"
            },
            "duration": "21 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.49,
            "scored_by": 30844,
            "rank": 167,
            "popularity": 3203,
            "members": 60175,
            "favorites": 531,
            "synopsis": "Xie Lian and Hua Cheng recount their recent adventures during a quiet night at Puqi Shrine. Amidst the serenity, the Crimson Rain Sought Flower reveals a little more about Xie Lian's true character, and an embarrassing memory reminds him of how much he has changed since his previous ascensions. However, no matter how much time has passed, Xie Lian never fails to believe in the good he sees in the people around him. Though the heavens may ridicule him, his words and actions have earned him the most devout of followers.\n\n[Written by MAL Rewrite]",
            "background": "Adaptation based on a Chinese web novel of the same name, written by Mo Xiang Tong Xiu (\u58a8\u9999\u94dc\u81ed). The show falls into the xianxia genre (a fantasy genre influence by Taoism, Buddhism, and Chinese mythology).",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 1414,
                    "type": "anime",
                    "name": "bilibili",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1414\/bilibili"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1325,
                    "type": "anime",
                    "name": "Haoliners Animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1325\/Haoliners_Animation"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                },
                {
                    "mal_id": 6,
                    "type": "anime",
                    "name": "Mythology",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/6\/Mythology"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 32182,
            "url": "https:\/\/myanimelist.net\/anime\/32182\/Mob_Psycho_100",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/8\/80356.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/8\/80356t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/8\/80356l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/8\/80356.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/8\/80356t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/8\/80356l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/F8g3TuKsQHs?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Mob Psycho 100"
                },
                {
                    "type": "Synonym",
                    "title": "Mob Psycho Hyaku"
                },
                {
                    "type": "Synonym",
                    "title": "Mob Psycho One Hundred"
                },
                {
                    "type": "Japanese",
                    "title": "\u30e2\u30d6\u30b5\u30a4\u30b3100"
                },
                {
                    "type": "English",
                    "title": "Mob Psycho 100"
                }
            ],
            "title": "Mob Psycho 100",
            "title_english": "Mob Psycho 100",
            "title_japanese": "\u30e2\u30d6\u30b5\u30a4\u30b3100",
            "title_synonyms": [
                "Mob Psycho Hyaku",
                "Mob Psycho One Hundred"
            ],
            "type": "TV",
            "source": "Web manga",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2016-07-11T00:00:00+00:00",
                "to": "2016-09-27T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 11,
                        "month": 7,
                        "year": 2016
                    },
                    "to": {
                        "day": 27,
                        "month": 9,
                        "year": 2016
                    }
                },
                "string": "Jul 11, 2016 to Sep 27, 2016"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.49,
            "scored_by": 1407937,
            "rank": 169,
            "popularity": 28,
            "members": 2296137,
            "favorites": 53990,
            "synopsis": "Eighth-grader Shigeo \"Mob\" Kageyama has tapped into his inner wellspring of psychic prowess at a young age. But the power quickly proves to be a liability when he realizes the potential danger in his skills. Choosing to suppress his power, Mob's only present use for his ability is to impress his longtime crush, Tsubomi, who soon grows bored of the same tricks.\n\nIn order to effectuate control on his skills, Mob enlists himself under the wing of Arataka Reigen, a con artist claiming to be a psychic, who exploits Mob's powers for pocket change. Now, exorcising evil spirits on command has become a part of Mob's daily, monotonous life. However, the psychic energy he exerts is barely the tip of the iceberg; if his vast potential and unrestrained emotions run berserk, a cataclysmic event that would render him completely unrecognizable will be triggered. The progression toward Mob's explosion is rising and attempting to stop it is futile.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "summer",
            "year": 2016,
            "broadcast": {
                "day": "Tuesdays",
                "time": "00:00",
                "timezone": "Asia\/Tokyo",
                "string": "Tuesdays at 00:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 415,
                    "type": "anime",
                    "name": "Warner Bros. Japan",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/415\/Warner_Bros_Japan"
                },
                {
                    "mal_id": 460,
                    "type": "anime",
                    "name": "KlockWorx",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/460\/KlockWorx"
                },
                {
                    "mal_id": 843,
                    "type": "anime",
                    "name": "BS Fuji",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/843\/BS_Fuji"
                },
                {
                    "mal_id": 1333,
                    "type": "anime",
                    "name": "Hakuhodo DY Music & Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1333\/Hakuhodo_DY_Music___Pictures"
                },
                {
                    "mal_id": 1430,
                    "type": "anime",
                    "name": "Shogakukan",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1430\/Shogakukan"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/102\/Funimation"
                },
                {
                    "mal_id": 1468,
                    "type": "anime",
                    "name": "Crunchyroll",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1468\/Crunchyroll"
                }
            ],
            "studios": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Bones",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/4\/Bones"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        },
        {
            "mal_id": 58222,
            "url": "https:\/\/myanimelist.net\/anime\/58222\/Given_Movie_3__Umi_e",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1663\/144261.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1663\/144261t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1663\/144261l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1663\/144261.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1663\/144261t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1663\/144261l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/s0Srq7l6kSM?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Given Movie 3: Umi e"
                },
                {
                    "type": "Japanese",
                    "title": "\u6620\u753b \u30ae\u30f4\u30f3 \u6d77\u3078"
                },
                {
                    "type": "English",
                    "title": "given The Movie: To the Sea"
                }
            ],
            "title": "Given Movie 3: Umi e",
            "title_english": "given The Movie: To the Sea",
            "title_japanese": "\u6620\u753b \u30ae\u30f4\u30f3 \u6d77\u3078",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2024-09-20T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 20,
                        "month": 9,
                        "year": 2024
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Sep 20, 2024"
            },
            "duration": "1 hr 20 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.49,
            "scored_by": 9099,
            "rank": 168,
            "popularity": 4669,
            "members": 29188,
            "favorites": 157,
            "synopsis": "Second part of Given Movie: Hiiragi Mix.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 101,
                    "type": "anime",
                    "name": "Studio Hibari",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/101\/Studio_Hibari"
                },
                {
                    "mal_id": 166,
                    "type": "anime",
                    "name": "Movic",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/166\/Movic"
                },
                {
                    "mal_id": 169,
                    "type": "anime",
                    "name": "Fuji TV",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/169\/Fuji_TV"
                },
                {
                    "mal_id": 1672,
                    "type": "anime",
                    "name": "Shinshokan",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1672\/Shinshokan"
                },
                {
                    "mal_id": 2511,
                    "type": "anime",
                    "name": "Blue Lynx",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2511\/Blue_Lynx"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 456,
                    "type": "anime",
                    "name": "Lerche",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/456\/Lerche"
                }
            ],
            "genres": [
                {
                    "mal_id": 28,
                    "type": "anime",
                    "name": "Boys Love",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/28\/Boys_Love"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 19,
                    "type": "anime",
                    "name": "Music",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/19\/Music"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 40834,
            "url": "https:\/\/myanimelist.net\/anime\/40834\/Ousama_Ranking",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1347\/117616.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1347\/117616t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1347\/117616l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1347\/117616.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1347\/117616t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1347\/117616l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/c1HHoucIxRg?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Ousama Ranking"
                },
                {
                    "type": "Synonym",
                    "title": "King Ranking"
                },
                {
                    "type": "Japanese",
                    "title": "\u738b\u69d8\u30e9\u30f3\u30ad\u30f3\u30b0"
                },
                {
                    "type": "English",
                    "title": "Ranking of Kings"
                }
            ],
            "title": "Ousama Ranking",
            "title_english": "Ranking of Kings",
            "title_japanese": "\u738b\u69d8\u30e9\u30f3\u30ad\u30f3\u30b0",
            "title_synonyms": [
                "King Ranking"
            ],
            "type": "TV",
            "source": "Web manga",
            "episodes": 23,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2021-10-15T00:00:00+00:00",
                "to": "2022-03-25T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 15,
                        "month": 10,
                        "year": 2021
                    },
                    "to": {
                        "day": 25,
                        "month": 3,
                        "year": 2022
                    }
                },
                "string": "Oct 15, 2021 to Mar 25, 2022"
            },
            "duration": "22 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.48,
            "scored_by": 394807,
            "rank": 172,
            "popularity": 306,
            "members": 747592,
            "favorites": 13748,
            "synopsis": "The people of the kingdom look down on the young Prince Bojji, who can neither hear nor speak. They call him \"The Useless Prince\" while jeering at his supposed foolishness.\n\nHowever, while Bojji may not be physically strong, he is certainly not weak of heart. When a chance encounter with a shadow creature should have left him traumatized, it instead makes him believe that he has found a friend amidst those who only choose to notice his shortcomings. He starts meeting with Kage, the shadow, regularly, to the point where even the otherwise abrasive creature begins to warm up to him.\n\nKage and Bojji's unlikely friendship lays the budding foundations of the prince's journey, one where he intends to conquer his fears and insecurities. Despite the constant ridicule he faces, Bojji resolves to fulfill his desire of becoming the best king he can be.\n\n[Written by MAL Rewrite]",
            "background": "The sign language depicted in Ousama Ranking is supervised by the Tokyo Foundation of the Deaf. The series was released on Blu-ray and DVD from January 12, 2022 to July 20, 2022.",
            "season": "fall",
            "year": 2021,
            "broadcast": {
                "day": "Fridays",
                "time": "00:55",
                "timezone": "Asia\/Tokyo",
                "string": "Fridays at 00:55 (JST)"
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 169,
                    "type": "anime",
                    "name": "Fuji TV",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/169\/Fuji_TV"
                },
                {
                    "mal_id": 1696,
                    "type": "anime",
                    "name": "Kadokawa",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1696\/Kadokawa"
                },
                {
                    "mal_id": 1992,
                    "type": "anime",
                    "name": "Bandai Spirits",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1992\/Bandai_Spirits"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/102\/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 858,
                    "type": "anime",
                    "name": "Wit Studio",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/858\/Wit_Studio"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        },
        {
            "mal_id": 30276,
            "url": "https:\/\/myanimelist.net\/anime\/30276\/One_Punch_Man",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/12\/76049.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/12\/76049t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/12\/76049l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/12\/76049.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/12\/76049t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/12\/76049l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/ExUMiF1L0HA?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "One Punch Man"
                },
                {
                    "type": "Synonym",
                    "title": "One Punch-Man"
                },
                {
                    "type": "Synonym",
                    "title": "OPM"
                },
                {
                    "type": "Japanese",
                    "title": "\u30ef\u30f3\u30d1\u30f3\u30de\u30f3"
                },
                {
                    "type": "English",
                    "title": "One-Punch Man"
                }
            ],
            "title": "One Punch Man",
            "title_english": "One-Punch Man",
            "title_japanese": "\u30ef\u30f3\u30d1\u30f3\u30de\u30f3",
            "title_synonyms": [
                "One Punch-Man",
                "OPM"
            ],
            "type": "TV",
            "source": "Web manga",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2015-10-05T00:00:00+00:00",
                "to": "2015-12-21T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 5,
                        "month": 10,
                        "year": 2015
                    },
                    "to": {
                        "day": 21,
                        "month": 12,
                        "year": 2015
                    }
                },
                "string": "Oct 5, 2015 to Dec 21, 2015"
            },
            "duration": "24 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.48,
            "scored_by": 2405629,
            "rank": 171,
            "popularity": 4,
            "members": 3491486,
            "favorites": 66358,
            "synopsis": "The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process. Now, Saitama is so powerful, he can defeat any enemy with just one punch. However, having no one capable of matching his strength has led Saitama to an unexpected problem\u2014he is no longer able to enjoy the thrill of battling and has become quite bored.\n\nOne day, Saitama catches the attention of 19-year-old cyborg Genos, who witnesses his power and wishes to become Saitama's disciple. Genos proposes that the two join the Hero Association in order to become certified heroes that will be recognized for their positive contributions to society. Saitama, who is shocked that no one knows who he is, quickly agrees. Meeting new allies and taking on new foes, Saitama embarks on a new journey as a member of the Hero Association to experience the excitement of battle he once felt.\n\n[Written by MAL Rewrite]",
            "background": "Episodes 1 and 2 were previewed at a screening in Saitama city cultural center (small hall) on September 6, 2015. Regular broadcasting began on October 5, 2015. One Punch Man is based on Yusuke Murata's manga remake of ONE's original web comic. The anime adapts the first seven volumes of the manga.",
            "season": "fall",
            "year": 2015,
            "broadcast": {
                "day": "Mondays",
                "time": "01:05",
                "timezone": "Asia\/Tokyo",
                "string": "Mondays at 01:05 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/16\/TV_Tokyo"
                },
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "Bandai Visual",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/23\/Bandai_Visual"
                },
                {
                    "mal_id": 104,
                    "type": "anime",
                    "name": "Lantis",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/104\/Lantis"
                },
                {
                    "mal_id": 142,
                    "type": "anime",
                    "name": "Asatsu DK",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/142\/Asatsu_DK"
                },
                {
                    "mal_id": 1121,
                    "type": "anime",
                    "name": "Banpresto",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1121\/Banpresto"
                },
                {
                    "mal_id": 1261,
                    "type": "anime",
                    "name": "Good Smile Company",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1261\/Good_Smile_Company"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                },
                {
                    "mal_id": 1501,
                    "type": "anime",
                    "name": "JR East Marketing & Communications",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1501\/JR_East_Marketing___Communications"
                }
            ],
            "licensors": [
                {
                    "mal_id": 119,
                    "type": "anime",
                    "name": "VIZ Media",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/119\/VIZ_Media"
                }
            ],
            "studios": [
                {
                    "mal_id": 11,
                    "type": "anime",
                    "name": "Madhouse",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/11\/Madhouse"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 50,
                    "type": "anime",
                    "name": "Adult Cast",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/50\/Adult_Cast"
                },
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/20\/Parody"
                },
                {
                    "mal_id": 31,
                    "type": "anime",
                    "name": "Super Power",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/31\/Super_Power"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/42\/Seinen"
                }
            ]
        },
        {
            "mal_id": 12431,
            "url": "https:\/\/myanimelist.net\/anime\/12431\/Uchuu_Kyoudai",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1290\/135694.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1290\/135694t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1290\/135694l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1290\/135694.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1290\/135694t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1290\/135694l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/ciS3fDqT1Vw?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Uchuu Kyoudai"
                },
                {
                    "type": "Synonym",
                    "title": "Uchuu Kyodai"
                },
                {
                    "type": "Japanese",
                    "title": "\u5b87\u5b99\u5144\u5f1f"
                },
                {
                    "type": "English",
                    "title": "Space Brothers"
                },
                {
                    "type": "German",
                    "title": "Space Brothers"
                },
                {
                    "type": "Spanish",
                    "title": "Uchuu Kyoudai: Space Brothers"
                },
                {
                    "type": "French",
                    "title": "Space Brothers"
                }
            ],
            "title": "Uchuu Kyoudai",
            "title_english": "Space Brothers",
            "title_japanese": "\u5b87\u5b99\u5144\u5f1f",
            "title_synonyms": [
                "Uchuu Kyodai"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 99,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2012-04-01T00:00:00+00:00",
                "to": "2014-03-22T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 1,
                        "month": 4,
                        "year": 2012
                    },
                    "to": {
                        "day": 22,
                        "month": 3,
                        "year": 2014
                    }
                },
                "string": "Apr 1, 2012 to Mar 22, 2014"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.48,
            "scored_by": 55804,
            "rank": 173,
            "popularity": 1319,
            "members": 209572,
            "favorites": 3946,
            "synopsis": "On a fateful summer night in 2006, Mutta Nanba and his younger brother Hibito witness what they believe to be a UFO flying toward the Moon. This impressing and unusual phenomenon leads both siblings vowing to become astronauts, with Hibito aiming for the Moon and Mutta, convinced that the eldest brother has to be one step ahead, for Mars.\n\nNow an adult, life hasn't turned out how Mutta had pictured it: he is diligently working in an automotive company, whereas Hibito is on his way to be the very first Japanese man to step on the Moon. However, after losing his job, Mutta is presented with an unexpected opportunity to catch up to his younger brother when the Japanese Aerospace Exploration Agency, commonly known as JAXA, accepts his application to participate in the next astronaut selection. Despite self-doubts about his prospects, Mutta is unwilling to waste this chance of a lifetime, and thus embarks on an ambitious journey to fulfill the promise made 19 years ago.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "spring",
            "year": 2012,
            "broadcast": {
                "day": "Sundays",
                "time": "07:00",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 07:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 76,
                    "type": "anime",
                    "name": "Yomiuri Telecasting",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/76\/Yomiuri_Telecasting"
                },
                {
                    "mal_id": 643,
                    "type": "anime",
                    "name": "Trinity Sound",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/643\/Trinity_Sound"
                }
            ],
            "licensors": [
                {
                    "mal_id": 376,
                    "type": "anime",
                    "name": "Sentai Filmworks",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/376\/Sentai_Filmworks"
                }
            ],
            "studios": [
                {
                    "mal_id": 56,
                    "type": "anime",
                    "name": "A-1 Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/56\/A-1_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 50,
                    "type": "anime",
                    "name": "Adult Cast",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/50\/Adult_Cast"
                },
                {
                    "mal_id": 29,
                    "type": "anime",
                    "name": "Space",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/29\/Space"
                },
                {
                    "mal_id": 48,
                    "type": "anime",
                    "name": "Workplace",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/48\/Workplace"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/42\/Seinen"
                }
            ]
        },
        {
            "mal_id": 60544,
            "url": "https:\/\/myanimelist.net\/anime\/60544\/Nezha_Zhi_Mo_Tong_Nao_Hai",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1616\/147002.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1616\/147002t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1616\/147002l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1616\/147002.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1616\/147002t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1616\/147002l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/cwV_c7iSUbc?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Nezha Zhi Mo Tong Nao Hai"
                },
                {
                    "type": "Japanese",
                    "title": "\u54ea\u5412\u4e4b\u9b54\u7ae5\u95f9\u6d77"
                },
                {
                    "type": "English",
                    "title": "Ne Zha 2"
                }
            ],
            "title": "Nezha Zhi Mo Tong Nao Hai",
            "title_english": "Ne Zha 2",
            "title_japanese": "\u54ea\u5412\u4e4b\u9b54\u7ae5\u95f9\u6d77",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Original",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2025-01-29T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 29,
                        "month": 1,
                        "year": 2025
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jan 29, 2025"
            },
            "duration": "2 hr 23 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.48,
            "scored_by": 4831,
            "rank": 170,
            "popularity": 7123,
            "members": 10269,
            "favorites": 63,
            "synopsis": "After the heavenly lightning, although Ne Zha and Ao Bing survived by becoming Spirits, they would soon dissipate completely. Taiyi plans to rebuild Ne Zha and Ao Bing's mortal bodies with the Seven-colored Precious Lotus. However, during the process of reconstruction, numerous obstacles arise. What will become of the fate of Ne Zha and Ao Bing? \n\n(Source: AMC)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 1465,
                    "type": "anime",
                    "name": "Beijing Enlight Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1465\/Beijing_Enlight_Pictures"
                },
                {
                    "mal_id": 2285,
                    "type": "anime",
                    "name": "Horgos Coloroom Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2285\/Horgos_Coloroom_Pictures"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1809,
                    "type": "anime",
                    "name": "October Media",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1809\/October_Media"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 40434,
            "url": "https:\/\/myanimelist.net\/anime\/40434\/Mo_Dao_Zu_Shi__Wanjie_Pian",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1634\/116782.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1634\/116782t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1634\/116782l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1634\/116782.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1634\/116782t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1634\/116782l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/YsA1hKfRqtQ?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Mo Dao Zu Shi: Wanjie Pian"
                },
                {
                    "type": "Synonym",
                    "title": "The Master of Diabolism 3rd Season"
                },
                {
                    "type": "Synonym",
                    "title": "Grandmaster of Demonic Cultivation 3"
                },
                {
                    "type": "Synonym",
                    "title": "The Founder of Diabolism 3"
                },
                {
                    "type": "Synonym",
                    "title": "Mo Dao Zu Shi 3rd Season"
                },
                {
                    "type": "Synonym",
                    "title": "Mo Dao Zu Shi Final Arc"
                },
                {
                    "type": "Synonym",
                    "title": "MDZS"
                },
                {
                    "type": "Japanese",
                    "title": "\u9b54\u9053\u7956\u5e08 \u5b8c\u7ed3\u7bc7"
                },
                {
                    "type": "English",
                    "title": "The Master of Diabolism 3"
                }
            ],
            "title": "Mo Dao Zu Shi: Wanjie Pian",
            "title_english": "The Master of Diabolism 3",
            "title_japanese": "\u9b54\u9053\u7956\u5e08 \u5b8c\u7ed3\u7bc7",
            "title_synonyms": [
                "The Master of Diabolism 3rd Season",
                "Grandmaster of Demonic Cultivation 3",
                "The Founder of Diabolism 3",
                "Mo Dao Zu Shi 3rd Season",
                "Mo Dao Zu Shi Final Arc",
                "MDZS"
            ],
            "type": "ONA",
            "source": "Web novel",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2021-08-07T00:00:00+00:00",
                "to": "2021-10-16T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 7,
                        "month": 8,
                        "year": 2021
                    },
                    "to": {
                        "day": 16,
                        "month": 10,
                        "year": 2021
                    }
                },
                "string": "Aug 7, 2021 to Oct 16, 2021"
            },
            "duration": "24 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.67,
            "scored_by": 34664,
            "rank": 79,
            "popularity": 2427,
            "members": 95845,
            "favorites": 1736,
            "synopsis": "Along an empty road in the rural countryside, Wei Wuxian and Lan Wangji stumble across a stone plaque that reads \"Yi City.\" Still on their quest to unravel the mystery behind the cursed severed arm, they venture into the deserted city to obtain further leads.\n\nHowever, with the appearance of a mysterious new cultivator, the demonic arm investigation leads Wei Wuxian and Lan Wangji to a plot that threatens the cultivation world as they know it. The gravity of the new situation escalates when the two find it involves the chief cultivator of the renowned Lanling Jin Sect\u2014Jin Guangyao.\n\nAs the pair continue to piece together the crucial conspiracies of the cultivation history, their friends and colleagues grow suspicious of their motives. With the world against him, Wei Wuxian must prove he is not the demonic sorcerer people believe him to be to regain their trust and save the cultivation world from the sinister evil lurking within it.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 1727,
                    "type": "anime",
                    "name": "Tencent Video",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1727\/Tencent_Video"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1350,
                    "type": "anime",
                    "name": "B.CMAY PICTURES",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1350\/BCMAY_PICTURES"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/7\/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                },
                {
                    "mal_id": 6,
                    "type": "anime",
                    "name": "Mythology",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/6\/Mythology"
                },
                {
                    "mal_id": 72,
                    "type": "anime",
                    "name": "Reincarnation",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/72\/Reincarnation"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 164,
            "url": "https:\/\/myanimelist.net\/anime\/164\/Mononoke_Hime",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1355\/147277.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1355\/147277t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1355\/147277l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1355\/147277.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1355\/147277t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1355\/147277l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/I1dHzoRl0sQ?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Mononoke Hime"
                },
                {
                    "type": "Synonym",
                    "title": "Mononoke Hime"
                },
                {
                    "type": "Japanese",
                    "title": "\u3082\u306e\u306e\u3051\u59eb"
                },
                {
                    "type": "English",
                    "title": "Princess Mononoke"
                },
                {
                    "type": "German",
                    "title": "Prinzessin Mononoke"
                },
                {
                    "type": "Spanish",
                    "title": "La Princesa Mononoke"
                },
                {
                    "type": "French",
                    "title": "Princesse Mononok\u00e9"
                }
            ],
            "title": "Mononoke Hime",
            "title_english": "Princess Mononoke",
            "title_japanese": "\u3082\u306e\u306e\u3051\u59eb",
            "title_synonyms": [
                "Mononoke Hime"
            ],
            "type": "Movie",
            "source": "Original",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1997-07-12T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 12,
                        "month": 7,
                        "year": 1997
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jul 12, 1997"
            },
            "duration": "2 hr 13 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.67,
            "scored_by": 882094,
            "rank": 80,
            "popularity": 106,
            "members": 1370154,
            "favorites": 24069,
            "synopsis": "When an Emishi village is attacked by a fierce demon boar, the young prince Ashitaka puts his life at stake to defend his tribe. With its dying breath, the beast curses the prince's arm, granting him demonic powers while gradually siphoning his life away. Instructed by the village elders to travel westward for a cure, Ashitaka arrives at Tatara, the Iron Town, where he finds himself embroiled in a fierce conflict: Lady Eboshi of Tatara, promoting constant deforestation, stands against Princess San and the sacred spirits of the forest, who are furious at the destruction brought by the humans. As the opposing forces of nature and mankind begin to clash in a desperate struggle for survival, Ashitaka attempts to seek harmony between the two, all the while battling the latent demon inside of him. Princess Mononoke is a tale depicting the connection of technology and nature, while showing the path to harmony that could be achieved by mutual acceptance.\n\n[Written by MAL Rewrite]",
            "background": "In 1997, the film won Best Japanese Movie, Best Animation, and Japanese Movie Fans' Choice awards during the 52nd Mainichi Film Awards. In 1998, the film won the Best Picture award during the 21st Japan Academy Awards.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 382,
                    "type": "anime",
                    "name": "Tokuma Shoten",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/382\/Tokuma_Shoten"
                },
                {
                    "mal_id": 1003,
                    "type": "anime",
                    "name": "Nippon Television Network",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1003\/Nippon_Television_Network"
                },
                {
                    "mal_id": 2981,
                    "type": "anime",
                    "name": "Omnibus Promotion",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2981\/Omnibus_Promotion"
                }
            ],
            "licensors": [
                {
                    "mal_id": 783,
                    "type": "anime",
                    "name": "GKIDS",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/783\/GKIDS"
                }
            ],
            "studios": [
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Studio Ghibli",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/21\/Studio_Ghibli"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 46,
                    "type": "anime",
                    "name": "Award Winning",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/46\/Award_Winning"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        },
        {
            "mal_id": 431,
            "url": "https:\/\/myanimelist.net\/anime\/431\/Howl_no_Ugoku_Shiro",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1470\/138723.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1470\/138723t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1470\/138723l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1470\/138723.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1470\/138723t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1470\/138723l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/ARCQf2CEr8k?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Howl no Ugoku Shiro"
                },
                {
                    "type": "Japanese",
                    "title": "\u30cf\u30a6\u30eb\u306e\u52d5\u304f\u57ce"
                },
                {
                    "type": "English",
                    "title": "Howl's Moving Castle"
                },
                {
                    "type": "German",
                    "title": "Das wandelnde Schloss"
                },
                {
                    "type": "Spanish",
                    "title": "El Castillo Ambulante"
                },
                {
                    "type": "French",
                    "title": "Le Ch\u00e2teau ambulant"
                }
            ],
            "title": "Howl no Ugoku Shiro",
            "title_english": "Howl's Moving Castle",
            "title_japanese": "\u30cf\u30a6\u30eb\u306e\u52d5\u304f\u57ce",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Novel",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2004-11-20T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 20,
                        "month": 11,
                        "year": 2004
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Nov 20, 2004"
            },
            "duration": "1 hr 59 min",
            "rating": "G - All Ages",
            "score": 8.67,
            "scored_by": 1017887,
            "rank": 77,
            "popularity": 99,
            "members": 1477059,
            "favorites": 31575,
            "synopsis": "That jumbled piece of architecture, that cacophony of hissing steam and creaking joints, with smoke billowing from it as it moves on its own... That castle is home to the magnificent wizard Howl, infamous for both his magical prowess and for being a womanizer\u2014or so the rumor goes in Sophie Hatter's small town. Sophie, as the plain daughter of a hatmaker, does not expect much from her future and is content with working hard in the shop. \n\nHowever, Sophie's simple life takes a turn for the exciting when she is ensnared in a disturbing situation, and the mysterious wizard appears to rescue her. Unfortunately, this encounter, brief as it may be, spurs the vain and vengeful Witch of the Waste\u2014in a fit of jealousy caused by a past discord with Howl\u2014to put a curse on the maiden, turning her into an old woman.\n\nIn an endeavor to return to normal, Sophie must accompany Howl and a myriad of eccentric companions\u2014ranging from a powerful fire demon to a hopping scarecrow\u2014in his living castle, on a dangerous adventure as a raging war tears their kingdom apart.\n\n[Written by MAL Rewrite]",
            "background": "Howl No Ugoku Shiro premiered at the Venice Film Festival in 2004 and was later released to Japanese theaters in November, making it one of only three Studio Ghibli films not to be released in July. In 2004 the film won the Osella Awards for Technical Achievement in the 61st Venice Film Festival, the Best Japanese Movie Overall in the Mainichi Film Awards and an Excellence Prize, Animation in the Japan Media Arts Festival. In 2005 the film won the Animation of the Year in the Tokyo International Anime Fair and the Audience Award in the Maui Film Festival. In 2006 it was nominated for the Best Animated Feature in the 78th Academy Award, but lost to the movie Wallace and Gromit: The Curse of the Were-Rabbit.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 164,
                    "type": "anime",
                    "name": "d-rights",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/164\/d-rights"
                },
                {
                    "mal_id": 382,
                    "type": "anime",
                    "name": "Tokuma Shoten",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/382\/Tokuma_Shoten"
                },
                {
                    "mal_id": 3024,
                    "type": "anime",
                    "name": "Fonishia",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/3024\/Fonishia"
                }
            ],
            "licensors": [
                {
                    "mal_id": 417,
                    "type": "anime",
                    "name": "Disney Platform Distribution",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/417\/Disney_Platform_Distribution"
                }
            ],
            "studios": [
                {
                    "mal_id": 21,
                    "type": "anime",
                    "name": "Studio Ghibli",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/21\/Studio_Ghibli"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 46,
                    "type": "anime",
                    "name": "Award Winning",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/46\/Award_Winning"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/22\/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        },
        {
            "mal_id": 5258,
            "url": "https:\/\/myanimelist.net\/anime\/5258\/Hajime_no_Ippo__New_Challenger",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/8\/56617.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/8\/56617t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/8\/56617l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/8\/56617.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/8\/56617t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/8\/56617l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Hajime no Ippo: New Challenger"
                },
                {
                    "type": "Synonym",
                    "title": "Hajime no Ippo New Series"
                },
                {
                    "type": "Synonym",
                    "title": "Hajime no Ippo Season II"
                },
                {
                    "type": "Synonym",
                    "title": "Hajime no Ippo 2"
                },
                {
                    "type": "Japanese",
                    "title": "\u306f\u3058\u3081\u306e\u4e00\u6b69 \u65b0\u30b7\u30ea\u30fc\u30ba"
                },
                {
                    "type": "English",
                    "title": "Fighting Spirit: New Challenger"
                },
                {
                    "type": "Spanish",
                    "title": "Hajime no Ippo: The Fighting. New Challenger"
                }
            ],
            "title": "Hajime no Ippo: New Challenger",
            "title_english": "Fighting Spirit: New Challenger",
            "title_japanese": "\u306f\u3058\u3081\u306e\u4e00\u6b69 \u65b0\u30b7\u30ea\u30fc\u30ba",
            "title_synonyms": [
                "Hajime no Ippo New Series",
                "Hajime no Ippo Season II",
                "Hajime no Ippo 2"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 26,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2009-01-07T00:00:00+00:00",
                "to": "2009-07-01T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 7,
                        "month": 1,
                        "year": 2009
                    },
                    "to": {
                        "day": 1,
                        "month": 7,
                        "year": 2009
                    }
                },
                "string": "Jan 7, 2009 to Jul 1, 2009"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.67,
            "scored_by": 187600,
            "rank": 76,
            "popularity": 862,
            "members": 323116,
            "favorites": 1945,
            "synopsis": "Japanese Featherweight Champion Ippo Makunouchi has successfully defended and retained his title. Meanwhile, his rival, Ichirou Miyata, has resurfaced in Japan, aiming for his own Featherweight belt in the Oriental Pacific Boxing Federation. When the rest of the world comes knocking, however, will Japan's best fighters rise to the challenge and achieve glory at the top? Or will the small island nation be crushed under the weight of greater entities? This time, champions will become challengers issuing a call to the rest of the world and ready to show off their fighting spirit!\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "winter",
            "year": 2009,
            "broadcast": {
                "day": "Wednesdays",
                "time": "01:29",
                "timezone": "Asia\/Tokyo",
                "string": "Wednesdays at 01:29 (JST)"
            },
            "producers": [
                {
                    "mal_id": 29,
                    "type": "anime",
                    "name": "VAP",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/29\/VAP"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/159\/Kodansha"
                },
                {
                    "mal_id": 1003,
                    "type": "anime",
                    "name": "Nippon Television Network",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1003\/Nippon_Television_Network"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 11,
                    "type": "anime",
                    "name": "Madhouse",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/11\/Madhouse"
                }
            ],
            "genres": [
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/30\/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 54,
                    "type": "anime",
                    "name": "Combat Sports",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/54\/Combat_Sports"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 56784,
            "url": "https:\/\/myanimelist.net\/anime\/56784\/Bleach__Sennen_Kessen-hen_-_Soukoku-tan",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1595\/144074.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1595\/144074t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1595\/144074l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1595\/144074.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1595\/144074t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1595\/144074l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/tShYCQALuH8?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Bleach: Sennen Kessen-hen - Soukoku-tan"
                },
                {
                    "type": "Synonym",
                    "title": "Bleach: Thousand-Year Blood War Arc Part 3"
                },
                {
                    "type": "Japanese",
                    "title": "BLEACH \u5343\u5e74\u8840\u6226\u7bc7-\u76f8\u524b\u8b5a-"
                },
                {
                    "type": "English",
                    "title": "Bleach: Thousand-Year Blood War - The Conflict"
                }
            ],
            "title": "Bleach: Sennen Kessen-hen - Soukoku-tan",
            "title_english": "Bleach: Thousand-Year Blood War - The Conflict",
            "title_japanese": "BLEACH \u5343\u5e74\u8840\u6226\u7bc7-\u76f8\u524b\u8b5a-",
            "title_synonyms": [
                "Bleach: Thousand-Year Blood War Arc Part 3"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 14,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2024-10-05T00:00:00+00:00",
                "to": "2024-12-28T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 5,
                        "month": 10,
                        "year": 2024
                    },
                    "to": {
                        "day": 28,
                        "month": 12,
                        "year": 2024
                    }
                },
                "string": "Oct 5, 2024 to Dec 28, 2024"
            },
            "duration": "24 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.67,
            "scored_by": 150112,
            "rank": 75,
            "popularity": 976,
            "members": 284418,
            "favorites": 3643,
            "synopsis": "After an awe-inspiring battle with Ichibei Hyousube\u2014leader of the Soul Society's Royal Guard\u2014the powerful Yhwach moves into the final stage of his master plan. He aims to slay the Soul King, the being whose very existence maintains the status quo of three worlds: Hueco Mundo, the Soul Society, and the realm of humans that Ichigo Kurosaki and his closest friends hail from. Conquering his own bout with the remainder of the Royal Guard, Uryuu Ishida joins Yhwach in his efforts to create a new world in his image.\n\nWith a flood of resolution and newfound power, Ichigo rushes to stop Yhwach from accomplishing his ultimate goal and save the countless lives within the three existing realms. But Ichigo has a complicated lineage, one that leaves him susceptible to Yhwach's sinister influence.\n\nMeanwhile, in a final desperate gambit, Jirou Sakuranosuke Shunsui Kyouraku, the newly promoted head captain of the Soul Society's combat corps, enlists the help of an old enemy whose immense power may turn the tide of battle.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2024,
            "broadcast": {
                "day": "Saturdays",
                "time": "23:00",
                "timezone": "Asia\/Tokyo",
                "string": "Saturdays at 23:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Studio Pierrot",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1\/Studio_Pierrot"
                },
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/16\/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                },
                {
                    "mal_id": 1392,
                    "type": "anime",
                    "name": "Zack Promotion",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1392\/Zack_Promotion"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 2951,
                    "type": "anime",
                    "name": "Pierrot Films",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2951\/Pierrot_Films"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 61930,
            "url": "https:\/\/myanimelist.net\/anime\/61930\/Uma_Musume__Cinderella_Gray_Part_2",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1120\/152280.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1120\/152280t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1120\/152280l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1120\/152280.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1120\/152280t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1120\/152280l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/9xGGAYRtDAA?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Uma Musume: Cinderella Gray Part 2"
                },
                {
                    "type": "Japanese",
                    "title": "\u30a6\u30de\u5a18 \u30b7\u30f3\u30c7\u30ec\u30e9\u30b0\u30ec\u30a4 \u7b2c2\u30af\u30fc\u30eb"
                },
                {
                    "type": "English",
                    "title": "Umamusume: Cinderella Gray Part 2"
                }
            ],
            "title": "Uma Musume: Cinderella Gray Part 2",
            "title_english": "Umamusume: Cinderella Gray Part 2",
            "title_japanese": "\u30a6\u30de\u5a18 \u30b7\u30f3\u30c7\u30ec\u30e9\u30b0\u30ec\u30a4 \u7b2c2\u30af\u30fc\u30eb",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 10,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2025-10-05T00:00:00+00:00",
                "to": "2025-12-21T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 5,
                        "month": 10,
                        "year": 2025
                    },
                    "to": {
                        "day": 21,
                        "month": 12,
                        "year": 2025
                    }
                },
                "string": "Oct 5, 2025 to Dec 21, 2025"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.67,
            "scored_by": 27931,
            "rank": 78,
            "popularity": 3298,
            "members": 57131,
            "favorites": 503,
            "synopsis": "Ever since horse girl Oguri Cap left the small town of Kasamatsu to chase greater heights in Tokyo, she has rapidly gained attention with her remarkable results. Her goal to become the best horse girl in Japan seems within reach, but there is a rival in her way\u2014another running prodigy named Tamamo Cross.\n\nHowever, Tamamo is not the only threat to Oguri: several world-class racers from overseas are joining the Japan Cup, pushing the renowned race's competition to unprecedented levels. With the support from the people close to her and her intense desire to win, Oguri will do anything to conquer the Japan Cup and continue sprinting for the top.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2025,
            "broadcast": {
                "day": "Sundays",
                "time": "16:30",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 16:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 145,
                    "type": "anime",
                    "name": "TBS",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/145\/TBS"
                },
                {
                    "mal_id": 1397,
                    "type": "anime",
                    "name": "Universal Music Japan",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1397\/Universal_Music_Japan"
                },
                {
                    "mal_id": 1587,
                    "type": "anime",
                    "name": "Cygames",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1587\/Cygames"
                },
                {
                    "mal_id": 2074,
                    "type": "anime",
                    "name": "Bit grooove promotion",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2074\/Bit_grooove_promotion"
                },
                {
                    "mal_id": 2751,
                    "type": "anime",
                    "name": "Happinet Media Marketing",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2751\/Happinet_Media_Marketing"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1893,
                    "type": "anime",
                    "name": "CygamesPictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1893\/CygamesPictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/30\/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 51,
                    "type": "anime",
                    "name": "Anthropomorphic",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/51\/Anthropomorphic"
                },
                {
                    "mal_id": 3,
                    "type": "anime",
                    "name": "Racing",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/3\/Racing"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/42\/Seinen"
                }
            ]
        },
        {
            "mal_id": 457,
            "url": "https:\/\/myanimelist.net\/anime\/457\/Mushishi",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/2\/73862.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/2\/73862t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/2\/73862l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/2\/73862.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/2\/73862t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/2\/73862l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/h371H0KIuPo?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Mushishi"
                },
                {
                    "type": "Japanese",
                    "title": "\u87f2\u5e2b"
                },
                {
                    "type": "English",
                    "title": "Mushi-Shi"
                },
                {
                    "type": "German",
                    "title": "Mushi-Shi"
                },
                {
                    "type": "Spanish",
                    "title": "Mushi-Shi"
                },
                {
                    "type": "French",
                    "title": "Mushi-Shi"
                }
            ],
            "title": "Mushishi",
            "title_english": "Mushi-Shi",
            "title_japanese": "\u87f2\u5e2b",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 26,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2005-10-23T00:00:00+00:00",
                "to": "2006-06-19T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 23,
                        "month": 10,
                        "year": 2005
                    },
                    "to": {
                        "day": 19,
                        "month": 6,
                        "year": 2006
                    }
                },
                "string": "Oct 23, 2005 to Jun 19, 2006"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.65,
            "scored_by": 296516,
            "rank": 82,
            "popularity": 225,
            "members": 899756,
            "favorites": 28265,
            "synopsis": "\"Mushi\": the most basic forms of life in the world. They exist without any goals or purposes aside from simply \"being.\" They are beyond the shackles of the words \"good\" and \"evil.\" Mushi can exist in countless forms and are capable of mimicking things from the natural world such as plants, diseases, and even phenomena like rainbows.\n\nThis is, however, just a vague definition of these entities that inhabit the vibrant world of Mushishi, as to even call them a form of life would be an oversimplification. Detailed information on Mushi is scarce because the majority of humans are unaware of their existence.\n\nSo what are Mushi and why do they exist? This is the question that a \"Mushishi,\" Ginko, ponders constantly. Mushishi are those who research Mushi in hopes of understanding their place in the world's hierarchy of life.\n\nGinko chases rumors of occurrences that could be tied to Mushi, all for the sake of finding an answer.\n\nIt could, after all, lead to the meaning of life itself.\n\n[Written by MAL Rewrite]",
            "background": "Mushishi is an adaptation of Yuki Urushibara's award-winning manga of the same name. The series adapts the first 26 chapters of the manga, adapting one per episode. The anime aired these stories in a different order than that of the manga. The series won the Tokyo Anime Award in the Television category in 2006. The series premiered on October 23, 2005, but went on hiatus on March 12, 2006 after having aired 20 episodes. Broadcast resumed on May 15, and aired the remaining 6 episodes, concluding on June 19, 2006.",
            "season": "fall",
            "year": 2005,
            "broadcast": {
                "day": "Sundays",
                "time": "03:40",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 03:40 (JST)"
            },
            "producers": [
                {
                    "mal_id": 52,
                    "type": "anime",
                    "name": "Avex Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/52\/Avex_Entertainment"
                },
                {
                    "mal_id": 82,
                    "type": "anime",
                    "name": "Marvelous Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/82\/Marvelous_Entertainment"
                },
                {
                    "mal_id": 147,
                    "type": "anime",
                    "name": "SKY Perfect Well Think",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/147\/SKY_Perfect_Well_Think"
                },
                {
                    "mal_id": 711,
                    "type": "anime",
                    "name": "Delfi Sound",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/711\/Delfi_Sound"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/102\/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Artland",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/8\/Artland"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/7\/Mystery"
                },
                {
                    "mal_id": 36,
                    "type": "anime",
                    "name": "Slice of Life",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/36\/Slice_of_Life"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 50,
                    "type": "anime",
                    "name": "Adult Cast",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/50\/Adult_Cast"
                },
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                },
                {
                    "mal_id": 63,
                    "type": "anime",
                    "name": "Iyashikei",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/63\/Iyashikei"
                }
            ],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/42\/Seinen"
                }
            ]
        },
        {
            "mal_id": 57864,
            "url": "https:\/\/myanimelist.net\/anime\/57864\/Monogatari_Series__Off___Monster_Season",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1142\/146776.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1142\/146776t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1142\/146776l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1142\/146776.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1142\/146776t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1142\/146776l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/wMQY20isBQs?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Monogatari Series: Off & Monster Season"
                },
                {
                    "type": "Synonym",
                    "title": "Orokamonogatari"
                },
                {
                    "type": "Synonym",
                    "title": "Wazamonogatari"
                },
                {
                    "type": "Synonym",
                    "title": "Nademonogatari"
                },
                {
                    "type": "Synonym",
                    "title": "Shinobumonogatari"
                },
                {
                    "type": "Japanese",
                    "title": "\u3008\u7269\u8a9e\u3009\u30b7\u30ea\u30fc\u30ba \u30aa\u30d5&\u30e2\u30f3\u30b9\u30bf\u30fc\u30b7\u30fc\u30ba\u30f3"
                },
                {
                    "type": "English",
                    "title": "Monogatari Series: Off & Monster Season"
                }
            ],
            "title": "Monogatari Series: Off & Monster Season",
            "title_english": "Monogatari Series: Off & Monster Season",
            "title_japanese": "\u3008\u7269\u8a9e\u3009\u30b7\u30ea\u30fc\u30ba \u30aa\u30d5&\u30e2\u30f3\u30b9\u30bf\u30fc\u30b7\u30fc\u30ba\u30f3",
            "title_synonyms": [
                "Orokamonogatari",
                "Wazamonogatari",
                "Nademonogatari",
                "Shinobumonogatari"
            ],
            "type": "ONA",
            "source": "Light novel",
            "episodes": 14,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2024-07-06T00:00:00+00:00",
                "to": "2024-10-19T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 6,
                        "month": 7,
                        "year": 2024
                    },
                    "to": {
                        "day": 19,
                        "month": 10,
                        "year": 2024
                    }
                },
                "string": "Jul 6, 2024 to Oct 19, 2024"
            },
            "duration": "25 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.65,
            "scored_by": 38177,
            "rank": 81,
            "popularity": 2360,
            "members": 100749,
            "favorites": 884,
            "synopsis": "Koyomi Araragi spent his last year of high school helping girls in his town resolve various supernatural afflictions. But now Araragi has departed for university, leaving his friends to fend for themselves against new problems and curses that plague them. Yotsugi Ononoki, once a human corpse and now a living doll, takes residence in Araragi's home, keeping watch over his sister Tsukihi, a girl harboring a mystical secret of her own. As part of her duties, Yotsugi fills Araragi's vacated role as occult expert, assisting others in town with their issues.\n\nOne of these girls, middle school student Nadeko Sengoku, slowly recovers from her own recent brushes with the paranormal. She avoids returning to school, instead spending time alone in her room and pursuing her dream of becoming a professional manga artist. In order to speed up Nadeko's quest for mastery of her craft, Yotsugi convinces her to create four copies of herself, each representing a distinct aspect of Nadeko's personality. However, the clones refuse to help Nadeko, instead escaping into the town and creating a chaotic mess. Now forced to grapple with her own fractured sense of identity, Nadeko sets out to capture them and resolve her inner conflict.\n\n[Written by MAL Rewrite]",
            "background": "Monogatari Series: Off & Monster Season was released on Blu-ray and DVD in seven volumes from December 11, 2024, to June 4, 2025.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/159\/Kodansha"
                },
                {
                    "mal_id": 211,
                    "type": "anime",
                    "name": "Rakuonsha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/211\/Rakuonsha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 493,
                    "type": "anime",
                    "name": "Aniplex of America",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/493\/Aniplex_of_America"
                }
            ],
            "studios": [
                {
                    "mal_id": 44,
                    "type": "anime",
                    "name": "Shaft",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/44\/Shaft"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/4\/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/7\/Mystery"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 32,
                    "type": "anime",
                    "name": "Vampire",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/32\/Vampire"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 35760,
            "url": "https:\/\/myanimelist.net\/anime\/35760\/Shingeki_no_Kyojin_Season_3",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1173\/92110.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1173\/92110t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1173\/92110l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1173\/92110.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1173\/92110t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1173\/92110l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/EHzBhrncmac?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Shingeki no Kyojin Season 3"
                },
                {
                    "type": "Japanese",
                    "title": "\u9032\u6483\u306e\u5de8\u4eba Season3"
                },
                {
                    "type": "English",
                    "title": "Attack on Titan Season 3"
                },
                {
                    "type": "German",
                    "title": "Attack on Titan 3. Staffel"
                },
                {
                    "type": "Spanish",
                    "title": "Ataque a los Titanes Temporada 3"
                },
                {
                    "type": "French",
                    "title": "L'Attaque des Titans Saison 3"
                }
            ],
            "title": "Shingeki no Kyojin Season 3",
            "title_english": "Attack on Titan Season 3",
            "title_japanese": "\u9032\u6483\u306e\u5de8\u4eba Season3",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2018-07-23T00:00:00+00:00",
                "to": "2018-10-15T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 23,
                        "month": 7,
                        "year": 2018
                    },
                    "to": {
                        "day": 15,
                        "month": 10,
                        "year": 2018
                    }
                },
                "string": "Jul 23, 2018 to Oct 15, 2018"
            },
            "duration": "23 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.64,
            "scored_by": 1791289,
            "rank": 85,
            "popularity": 18,
            "members": 2635545,
            "favorites": 22276,
            "synopsis": "Still threatened by the \"Titans\" that rob them of their freedom, mankind remains caged inside the two remaining walls. Efforts to eradicate these monsters continue; however, threats arise not only from the Titans beyond the walls, but from the humans within them as well.\n\nAfter being rescued from the Colossal and Armored Titans, Eren Yaeger devotes himself to improving his Titan form. Krista Lenz struggles to accept the loss of her friend, Captain Levi chooses Eren and his friends to form his new personal squad, and Commander Erwin Smith recovers from his injuries. All seems well for the soldiers, until the government suddenly demands custody of Eren and Krista. The Survey Corps' recent successes have drawn attention, and a familiar face from Levi's past is sent to collect the wanted soldiers. Sought after by the government, Levi and his new squad must evade their adversaries in hopes of keeping Eren and Krista safe.\n\nEren and his fellow soldiers are not only fighting for their survival against the terrifying Titans, but also against the terror of a far more conniving foe: their fellow humans.\n\n[Written by MAL Rewrite]",
            "background": "Shingeki no Kyojin Season 3 adapts content from manga volumes 13-17.",
            "season": "summer",
            "year": 2018,
            "broadcast": {
                "day": "Mondays",
                "time": "00:35",
                "timezone": "Asia\/Tokyo",
                "string": "Mondays at 00:35 (JST)"
            },
            "producers": [
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Production I.G",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/10\/Production_IG"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 143,
                    "type": "anime",
                    "name": "Mainichi Broadcasting System",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/143\/Mainichi_Broadcasting_System"
                },
                {
                    "mal_id": 144,
                    "type": "anime",
                    "name": "Pony Canyon",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/144\/Pony_Canyon"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/159\/Kodansha"
                },
                {
                    "mal_id": 1499,
                    "type": "anime",
                    "name": "Techno Sound",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1499\/Techno_Sound"
                },
                {
                    "mal_id": 1557,
                    "type": "anime",
                    "name": "Pony Canyon Enterprises",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1557\/Pony_Canyon_Enterprises"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/102\/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 858,
                    "type": "anime",
                    "name": "Wit Studio",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/858\/Wit_Studio"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 41,
                    "type": "anime",
                    "name": "Suspense",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/41\/Suspense"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 58,
                    "type": "anime",
                    "name": "Gore",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/58\/Gore"
                },
                {
                    "mal_id": 38,
                    "type": "anime",
                    "name": "Military",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/38\/Military"
                },
                {
                    "mal_id": 76,
                    "type": "anime",
                    "name": "Survival",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/76\/Survival"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 50399,
            "url": "https:\/\/myanimelist.net\/anime\/50399\/Tian_Guan_Cifu_Er",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1203\/139210.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1203\/139210t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1203\/139210l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1203\/139210.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1203\/139210t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1203\/139210l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/gZRZaElR0So?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Tian Guan Cifu Er"
                },
                {
                    "type": "Synonym",
                    "title": "Tian Guan Cifu 2nd Season"
                },
                {
                    "type": "Synonym",
                    "title": "\u5929\u5b98\u8d50\u798f \u7b2c\u4e8c\u5b63"
                },
                {
                    "type": "Synonym",
                    "title": "Tian Guan Ci Fu"
                },
                {
                    "type": "Synonym",
                    "title": "TGCF"
                },
                {
                    "type": "Japanese",
                    "title": "\u5929\u5b98\u8cdc\u798f \u8cb3"
                },
                {
                    "type": "English",
                    "title": "Heaven Official's Blessing Season 2"
                }
            ],
            "title": "Tian Guan Cifu Er",
            "title_english": "Heaven Official's Blessing Season 2",
            "title_japanese": "\u5929\u5b98\u8cdc\u798f \u8cb3",
            "title_synonyms": [
                "Tian Guan Cifu 2nd Season",
                "\u5929\u5b98\u8d50\u798f \u7b2c\u4e8c\u5b63",
                "Tian Guan Ci Fu",
                "TGCF"
            ],
            "type": "ONA",
            "source": "Web novel",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2023-10-18T00:00:00+00:00",
                "to": "2024-01-17T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 18,
                        "month": 10,
                        "year": 2023
                    },
                    "to": {
                        "day": 17,
                        "month": 1,
                        "year": 2024
                    }
                },
                "string": "Oct 18, 2023 to Jan 17, 2024"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.64,
            "scored_by": 24513,
            "rank": 87,
            "popularity": 3115,
            "members": 63566,
            "favorites": 1294,
            "synopsis": "Although most gods in the heavenly realm avoid dealing with the forgotten god Xie Lian, Heavenly Emperor Jun Wu holds him in good graces. Xie Lian's luck is otherwise terrible, and adding to his troubles, the gods seem to suspect that Xie Lian's recent companion was the dreaded Ghost King Hua Cheng. Despite what others may think of him, Xie Lian fondly recalls Hua Cheng's promise: the next time they meet, Hua Cheng will appear in his true form.\n\nJun Wu informs Xie Lian of the unsettling news that a god's distress signal was seen coming from the Ghost City\u2014the most prosperous place in the ghost realm, where the only law is Hua Cheng himself. As Xie Lian has no qualms about stepping into Hua Cheng's territory, he infiltrates the city to locate the lost god. There, the genuine Hua Cheng is already waiting. He is the most feared being across the three realms, yet before Xie Lian, his arrogance erodes. Without revealing the reason for his generosity, he spares no power or means to ease the burdens of Xie Lian's endlessly unfortunate past.\n\n[Written by MAL Rewrite]",
            "background": "Adaptation based on a Chinese web novel of the same name, written by Mo Xiang Tong Xiu (\u58a8\u9999\u94dc\u81ed). The show falls into the xianxia genre (a fantasy genre influence by Taoism, Buddhism, and Chinese mythology).",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 1414,
                    "type": "anime",
                    "name": "bilibili",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1414\/bilibili"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 2126,
                    "type": "anime",
                    "name": "Red Dog Culture House",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2126\/Red_Dog_Culture_House"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/13\/Historical"
                },
                {
                    "mal_id": 6,
                    "type": "anime",
                    "name": "Mythology",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/6\/Mythology"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 23273,
            "url": "https:\/\/myanimelist.net\/anime\/23273\/Shigatsu_wa_Kimi_no_Uso",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1405\/143284.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1405\/143284t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1405\/143284l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1405\/143284.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1405\/143284t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1405\/143284l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/aMJpI_fEsA4?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Shigatsu wa Kimi no Uso"
                },
                {
                    "type": "Synonym",
                    "title": "Kimiuso"
                },
                {
                    "type": "Japanese",
                    "title": "\u56db\u6708\u306f\u541b\u306e\u5618"
                },
                {
                    "type": "English",
                    "title": "Your Lie in April"
                },
                {
                    "type": "German",
                    "title": "Shigatsu Wa Kimi No Uso - Sekunden in Moll"
                },
                {
                    "type": "Spanish",
                    "title": "Your Lie in April"
                },
                {
                    "type": "French",
                    "title": "Your Lie in April"
                }
            ],
            "title": "Shigatsu wa Kimi no Uso",
            "title_english": "Your Lie in April",
            "title_japanese": "\u56db\u6708\u306f\u541b\u306e\u5618",
            "title_synonyms": [
                "Kimiuso"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 22,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2014-10-10T00:00:00+00:00",
                "to": "2015-03-20T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 10,
                        "month": 10,
                        "year": 2014
                    },
                    "to": {
                        "day": 20,
                        "month": 3,
                        "year": 2015
                    }
                },
                "string": "Oct 10, 2014 to Mar 20, 2015"
            },
            "duration": "22 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.64,
            "scored_by": 1457032,
            "rank": 83,
            "popularity": 24,
            "members": 2399643,
            "favorites": 89633,
            "synopsis": "Kousei Arima is a child prodigy known as the \"Human Metronome\" for playing the piano with precision and perfection. Guided by a strict mother and rigorous training, Kousei dominates every competition he enters, earning the admiration of his musical peers and praise from audiences. When his mother suddenly passes away, the subsequent trauma makes him unable to hear the sound of a piano, and he never takes the stage thereafter.\n\nNowadays, Kousei lives a quiet and unassuming life as a junior high school student alongside his friends Tsubaki Sawabe and Ryouta Watari. While struggling to get over his mother's death, he continues to cling to music. His monochrome life turns upside down the day he encounters the eccentric violinist Kaori Miyazono, who thrusts him back into the spotlight as her accompanist. Through a little lie, these two young musicians grow closer together as Kaori tries to fill Kousei's world with color.\n\n[Written by MAL Rewrite]",
            "background": "Winner in the anime division of the 2016 Sugoi Japan\u00ae Awards.",
            "season": "fall",
            "year": 2014,
            "broadcast": {
                "day": "Fridays",
                "time": "01:20",
                "timezone": "Asia\/Tokyo",
                "string": "Fridays at 01:20 (JST)"
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 159,
                    "type": "anime",
                    "name": "Kodansha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/159\/Kodansha"
                },
                {
                    "mal_id": 169,
                    "type": "anime",
                    "name": "Fuji TV",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/169\/Fuji_TV"
                },
                {
                    "mal_id": 1309,
                    "type": "anime",
                    "name": "Lawson HMV Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1309\/Lawson_HMV_Entertainment"
                },
                {
                    "mal_id": 1411,
                    "type": "anime",
                    "name": "Kyoraku Industrial Holdings",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1411\/Kyoraku_Industrial_Holdings"
                },
                {
                    "mal_id": 1412,
                    "type": "anime",
                    "name": "Kansai TV",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1412\/Kansai_TV"
                }
            ],
            "licensors": [
                {
                    "mal_id": 493,
                    "type": "anime",
                    "name": "Aniplex of America",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/493\/Aniplex_of_America"
                }
            ],
            "studios": [
                {
                    "mal_id": 56,
                    "type": "anime",
                    "name": "A-1 Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/56\/A-1_Pictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/22\/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 64,
                    "type": "anime",
                    "name": "Love Polygon",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/64\/Love_Polygon"
                },
                {
                    "mal_id": 19,
                    "type": "anime",
                    "name": "Music",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/19\/Music"
                },
                {
                    "mal_id": 70,
                    "type": "anime",
                    "name": "Performing Arts",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/70\/Performing_Arts"
                },
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "School",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/23\/School"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 49413,
            "url": "https:\/\/myanimelist.net\/anime\/49413\/Shiguang_Dailiren_II",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1897\/137108.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1897\/137108t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1897\/137108l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1897\/137108.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1897\/137108t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1897\/137108l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/vE0tnwk-jVE?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Shiguang Dailiren II"
                },
                {
                    "type": "Synonym",
                    "title": "LINK CLICK \u2161"
                },
                {
                    "type": "Synonym",
                    "title": "\u65f6\u5149\u4ee3\u7406\u4eba \u7b2c\u4e8c\u5b63"
                },
                {
                    "type": "Synonym",
                    "title": "Link Click 2nd Season"
                },
                {
                    "type": "Synonym",
                    "title": "\u6642\u5149\u4ee3\u7406\u4eba -LINK CLICK- II"
                },
                {
                    "type": "Japanese",
                    "title": "\u65f6\u5149\u4ee3\u7406\u4ebaII"
                },
                {
                    "type": "English",
                    "title": "Link Click Season 2"
                }
            ],
            "title": "Shiguang Dailiren II",
            "title_english": "Link Click Season 2",
            "title_japanese": "\u65f6\u5149\u4ee3\u7406\u4ebaII",
            "title_synonyms": [
                "LINK CLICK \u2161",
                "\u65f6\u5149\u4ee3\u7406\u4eba \u7b2c\u4e8c\u5b63",
                "Link Click 2nd Season",
                "\u6642\u5149\u4ee3\u7406\u4eba -LINK CLICK- II"
            ],
            "type": "ONA",
            "source": "Original",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2023-07-14T00:00:00+00:00",
                "to": "2023-09-22T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 14,
                        "month": 7,
                        "year": 2023
                    },
                    "to": {
                        "day": 22,
                        "month": 9,
                        "year": 2023
                    }
                },
                "string": "Jul 14, 2023 to Sep 22, 2023"
            },
            "duration": "24 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.64,
            "scored_by": 78454,
            "rank": 84,
            "popularity": 1612,
            "members": 168260,
            "favorites": 2136,
            "synopsis": "The attempt to capture the mysterious perpetrator who possesses people ends tragically: Lu Guang is rushed to the hospital in a critical state, while Cheng Xiaoshi is arrested for the alleged crime. In light of recent events, the father of Liu Min unleashes his skilled, ruthless lawyer\u2014Qian Jin\u2014after Police Chief Li Xiao, who is spearheading the investigation related to the photo studio owned by Qiao Ling.\n\nIt appears that no one is safe from the unpredictable and fatal attacks of the adversary who painstakingly hides their identity. As he tries to learn from his past mistakes, Cheng Xiaoshi must act swiftly and decisively to put an end to this devastating trail of death.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 1414,
                    "type": "anime",
                    "name": "bilibili",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1414\/bilibili"
                },
                {
                    "mal_id": 2357,
                    "type": "anime",
                    "name": "BeDream",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2357\/BeDream"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1774,
                    "type": "anime",
                    "name": "LAN Studio",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1774\/LAN_Studio"
                }
            ],
            "genres": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/7\/Mystery"
                },
                {
                    "mal_id": 41,
                    "type": "anime",
                    "name": "Suspense",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/41\/Suspense"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 50,
                    "type": "anime",
                    "name": "Adult Cast",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/50\/Adult_Cast"
                },
                {
                    "mal_id": 31,
                    "type": "anime",
                    "name": "Super Power",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/31\/Super_Power"
                },
                {
                    "mal_id": 78,
                    "type": "anime",
                    "name": "Time Travel",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/78\/Time_Travel"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 2001,
            "url": "https:\/\/myanimelist.net\/anime\/2001\/Tengen_Toppa_Gurren_Lagann",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/5123.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/5123t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/5123l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/5123.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/5123t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/4\/5123l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/rAQylCHv8Cw?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Tengen Toppa Gurren Lagann"
                },
                {
                    "type": "Synonym",
                    "title": "Tengen Toppa Gurren-Lagann"
                },
                {
                    "type": "Synonym",
                    "title": "Making Break-Through Gurren Lagann"
                },
                {
                    "type": "Synonym",
                    "title": "Heavenly Breakthrough Gurren Lagann"
                },
                {
                    "type": "Synonym",
                    "title": "TTGL"
                },
                {
                    "type": "Synonym",
                    "title": "Gurren Laggan"
                },
                {
                    "type": "Japanese",
                    "title": "\u5929\u5143\u7a81\u7834\u30b0\u30ec\u30f3\u30e9\u30ac\u30f3"
                },
                {
                    "type": "English",
                    "title": "Gurren Lagann"
                },
                {
                    "type": "German",
                    "title": "Gurren Lagann"
                },
                {
                    "type": "Spanish",
                    "title": "Gurren Lagann"
                },
                {
                    "type": "French",
                    "title": "Gurren Lagann"
                }
            ],
            "title": "Tengen Toppa Gurren Lagann",
            "title_english": "Gurren Lagann",
            "title_japanese": "\u5929\u5143\u7a81\u7834\u30b0\u30ec\u30f3\u30e9\u30ac\u30f3",
            "title_synonyms": [
                "Tengen Toppa Gurren-Lagann",
                "Making Break-Through Gurren Lagann",
                "Heavenly Breakthrough Gurren Lagann",
                "TTGL",
                "Gurren Laggan"
            ],
            "type": "TV",
            "source": "Original",
            "episodes": 27,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2007-04-01T00:00:00+00:00",
                "to": "2007-09-30T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 1,
                        "month": 4,
                        "year": 2007
                    },
                    "to": {
                        "day": 30,
                        "month": 9,
                        "year": 2007
                    }
                },
                "string": "Apr 1, 2007 to Sep 30, 2007"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.64,
            "scored_by": 969409,
            "rank": 86,
            "popularity": 66,
            "members": 1751746,
            "favorites": 84462,
            "synopsis": "Simon and Kamina were born and raised in a deep, underground village, hidden from the fabled surface. Kamina is a free-spirited loose cannon bent on making a name for himself, while Simon is a timid young boy with no real aspirations. One day while excavating the earth, Simon stumbles upon a mysterious object that turns out to be the ignition key to an ancient artifact of war, which the duo dubs Lagann. Using their new weapon, Simon and Kamina fend off a surprise attack from the surface with the help of Yoko Littner, a hot-blooded redhead wielding a massive gun who wanders the world above.\n\nIn the aftermath of the battle, the sky is now in plain view, prompting Simon and Kamina to set off on a journey alongside Yoko to explore the wastelands of the surface. Soon, they join the fight against the \"Beastmen,\" humanoid creatures that terrorize the remnants of humanity in powerful robots called \"Gunmen.\" Although they face some challenges and setbacks, the trio bravely fights these new enemies alongside other survivors to reclaim the surface, while slowly unraveling a galaxy-sized mystery.\n\n[Written by MAL Rewrite]",
            "background": "Gurren Lagann received widespread critical acclaim since its release. The series received an Excellence Prize at the 2007 Japan Media Arts Festival. Its director Hiroyuki Imaishi received an individual award for \"Personal Best\" at the 12th Animation Kobe Festival that same year for his work on the series. In 2008, during the 7th annual Tokyo Anime Awards held at the Tokyo International Anime Fair, Gurren Lagann won the \"Best Television Production\" award. In addition, the \"Best Character Design\" award was given to the character designer Atsushi Nishigori for his work on the anime.",
            "season": "spring",
            "year": 2007,
            "broadcast": {
                "day": "Sundays",
                "time": "08:30",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 08:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/16\/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 85,
                    "type": "anime",
                    "name": "Konami",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/85\/Konami"
                },
                {
                    "mal_id": 213,
                    "type": "anime",
                    "name": "Half H.P Studio",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/213\/Half_HP_Studio"
                },
                {
                    "mal_id": 230,
                    "type": "anime",
                    "name": "Bandai",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/230\/Bandai"
                }
            ],
            "licensors": [
                {
                    "mal_id": 97,
                    "type": "anime",
                    "name": "ADV Films",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/97\/ADV_Films"
                },
                {
                    "mal_id": 233,
                    "type": "anime",
                    "name": "Bandai Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/233\/Bandai_Entertainment"
                },
                {
                    "mal_id": 493,
                    "type": "anime",
                    "name": "Aniplex of America",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/493\/Aniplex_of_America"
                }
            ],
            "studios": [
                {
                    "mal_id": 6,
                    "type": "anime",
                    "name": "Gainax",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/6\/Gainax"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 46,
                    "type": "anime",
                    "name": "Award Winning",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/46\/Award_Winning"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/24\/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 18,
                    "type": "anime",
                    "name": "Mecha",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/18\/Mecha"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 57647,
            "url": "https:\/\/myanimelist.net\/anime\/57647\/Uma_Musume__Pretty_Derby_-_Shin_Jidai_no_Tobira",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1427\/142210.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1427\/142210t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1427\/142210l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1427\/142210.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1427\/142210t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1427\/142210l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/Mbq51ikrOg0?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Uma Musume: Pretty Derby - Shin Jidai no Tobira"
                },
                {
                    "type": "Japanese",
                    "title": "\u30a6\u30de\u5a18 \u30d7\u30ea\u30c6\u30a3\u30fc\u30c0\u30fc\u30d3\u30fc \u65b0\u6642\u4ee3\u306e\u6249"
                },
                {
                    "type": "English",
                    "title": "Umamusume: Pretty Derby - Beginning of a New Era"
                }
            ],
            "title": "Uma Musume: Pretty Derby - Shin Jidai no Tobira",
            "title_english": "Umamusume: Pretty Derby - Beginning of a New Era",
            "title_japanese": "\u30a6\u30de\u5a18 \u30d7\u30ea\u30c6\u30a3\u30fc\u30c0\u30fc\u30d3\u30fc \u65b0\u6642\u4ee3\u306e\u6249",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Game",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2024-05-24T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 24,
                        "month": 5,
                        "year": 2024
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "May 24, 2024"
            },
            "duration": "1 hr 47 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.64,
            "scored_by": 31444,
            "rank": 88,
            "popularity": 3478,
            "members": 52026,
            "favorites": 898,
            "synopsis": "Running in the highest level of horse racing, the Twinkle Series, is the dream of many horse girls. Although she has only taken part in freestyle racing before, horse girl Jungle Pocket discovers that very same aspiration after she witnesses Fuji Kiseki's tremendous victory on a grand stage. Equipped with unwavering self-confidence, Jungle Pocket is quickly able to accumulate a few victories, allowing her to participate in higher-level races.\n\nWhen Jungle Pocket takes part in her first G1 race alongside another rising racer\u2014the highly intelligent and eccentric Agnes Tachyon\u2014she realizes the enormous gap in their abilities. However, that only motivates Jungle Pocket even further as she resolves to get her revenge against Tachyon by winning the honored Triple Crown Classic title the following year. Although the world of horse racing is never predictable or easy, Jungle Pocket is determined to take down Tachyon and herald the beginning of a new era.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 1587,
                    "type": "anime",
                    "name": "Cygames",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1587\/Cygames"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1893,
                    "type": "anime",
                    "name": "CygamesPictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1893\/CygamesPictures"
                }
            ],
            "genres": [
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/30\/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 51,
                    "type": "anime",
                    "name": "Anthropomorphic",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/51\/Anthropomorphic"
                },
                {
                    "mal_id": 3,
                    "type": "anime",
                    "name": "Racing",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/3\/Racing"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 46102,
            "url": "https:\/\/myanimelist.net\/anime\/46102\/Odd_Taxi",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1981\/113348.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1981\/113348t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1981\/113348l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1981\/113348.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1981\/113348t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1981\/113348l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/rS228HesD9g?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Odd Taxi"
                },
                {
                    "type": "Japanese",
                    "title": "\u30aa\u30c3\u30c9\u30bf\u30af\u30b7\u30fc"
                },
                {
                    "type": "English",
                    "title": "Odd Taxi"
                }
            ],
            "title": "Odd Taxi",
            "title_english": "Odd Taxi",
            "title_japanese": "\u30aa\u30c3\u30c9\u30bf\u30af\u30b7\u30fc",
            "title_synonyms": [],
            "type": "TV",
            "source": "Original",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2021-04-06T00:00:00+00:00",
                "to": "2021-06-29T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 6,
                        "month": 4,
                        "year": 2021
                    },
                    "to": {
                        "day": 29,
                        "month": 6,
                        "year": 2021
                    }
                },
                "string": "Apr 6, 2021 to Jun 29, 2021"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.63,
            "scored_by": 248010,
            "rank": 92,
            "popularity": 505,
            "members": 503884,
            "favorites": 9123,
            "synopsis": "Eccentric and blunt, the walrus Hiroshi Odokawa lives a relatively normal life. He drives a taxi for a living, and there he meets several unique individuals: the jobless Taichi Kabasawa who is dead-set on going viral, the mysterious nurse Miho Shirakawa, the struggling comedic duo \"Homo Sapiens,\" and Dobu, a well-known delinquent.\n\nBut Odokawa's simple way of life is about to be turned upside down. The case of a missing girl the police have been tracking leads back to him, and now both the yakuza and a duo of corrupt cops are on his tail.\n\n[Written by MAL Rewrite]",
            "background": "Winner of the New Face Award at the 25th Japan Media Arts Festival.",
            "season": "spring",
            "year": 2021,
            "broadcast": {
                "day": "Tuesdays",
                "time": "02:00",
                "timezone": "Asia\/Tokyo",
                "string": "Tuesdays at 02:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/16\/TV_Tokyo"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 144,
                    "type": "anime",
                    "name": "Pony Canyon",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/144\/Pony_Canyon"
                },
                {
                    "mal_id": 238,
                    "type": "anime",
                    "name": "AT-X",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/238\/AT-X"
                },
                {
                    "mal_id": 1468,
                    "type": "anime",
                    "name": "Crunchyroll",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1468\/Crunchyroll"
                },
                {
                    "mal_id": 1557,
                    "type": "anime",
                    "name": "Pony Canyon Enterprises",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1557\/Pony_Canyon_Enterprises"
                },
                {
                    "mal_id": 2177,
                    "type": "anime",
                    "name": "Mimoid",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2177\/Mimoid"
                },
                {
                    "mal_id": 2442,
                    "type": "anime",
                    "name": "Yoshimoto Kogyo",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2442\/Yoshimoto_Kogyo"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 28,
                    "type": "anime",
                    "name": "OLM",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/28\/OLM"
                },
                {
                    "mal_id": 1872,
                    "type": "anime",
                    "name": "P.I.C.S.",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1872\/PICS"
                }
            ],
            "genres": [
                {
                    "mal_id": 46,
                    "type": "anime",
                    "name": "Award Winning",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/46\/Award_Winning"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/7\/Mystery"
                },
                {
                    "mal_id": 41,
                    "type": "anime",
                    "name": "Suspense",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/41\/Suspense"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 50,
                    "type": "anime",
                    "name": "Adult Cast",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/50\/Adult_Cast"
                },
                {
                    "mal_id": 51,
                    "type": "anime",
                    "name": "Anthropomorphic",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/51\/Anthropomorphic"
                },
                {
                    "mal_id": 68,
                    "type": "anime",
                    "name": "Organized Crime",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/68\/Organized_Crime"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 22135,
            "url": "https:\/\/myanimelist.net\/anime\/22135\/Ping_Pong_the_Animation",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1586\/146565.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1586\/146565t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1586\/146565l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1586\/146565.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1586\/146565t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1586\/146565l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/ItlDaDfLBn8?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Ping Pong the Animation"
                },
                {
                    "type": "Synonym",
                    "title": "PPTA"
                },
                {
                    "type": "Japanese",
                    "title": "\u30d4\u30f3\u30dd\u30f3 THE ANIMATION"
                },
                {
                    "type": "English",
                    "title": "Ping Pong the Animation"
                }
            ],
            "title": "Ping Pong the Animation",
            "title_english": "Ping Pong the Animation",
            "title_japanese": "\u30d4\u30f3\u30dd\u30f3 THE ANIMATION",
            "title_synonyms": [
                "PPTA"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 11,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2014-04-11T00:00:00+00:00",
                "to": "2014-06-20T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 11,
                        "month": 4,
                        "year": 2014
                    },
                    "to": {
                        "day": 20,
                        "month": 6,
                        "year": 2014
                    }
                },
                "string": "Apr 11, 2014 to Jun 20, 2014"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.63,
            "scored_by": 202624,
            "rank": 93,
            "popularity": 602,
            "members": 435832,
            "favorites": 17356,
            "synopsis": "Despite being polar opposites, Makoto \"Smile\" Tsukimoto and Yutaka \"Peco\" Hoshino have been best friends since childhood. Although the overly confident Peco strives to be the best ping-pong player in the world, he often skips practice, earning the ire of his fellow teammates on the Katase High School ping-pong team. Meanwhile, Smile\u2014in spite of his innate talent for the sport\u2014cannot help but hold back his full strength when playing against others. Through their mutual love for ping-pong, the two have developed a bond that is seemingly unbreakable.\n\nWhen Peco hears that an ex-national team player from China is coming to Japan, he drags Smile over to rival Tsujido High School to observe them. The subsequent trip leads to a clash between Peco and Kong Wenge, who overwhelmingly defeats the former in one game. Stunned by such a comprehensive loss, Peco finds himself questioning why he plays to begin with. Seeing his potential as a player, Katase's coach begins to train Smile to overcome his hesitation, but he is reluctant to play if it is not for enjoyment.\n\nAs the two struggle to find meaning in the sport, a plethora of stronger players\u2014each with their own internal strifes\u2014await them at the inter-high tournament, where only the very best can persevere. But when these young athletes let their unbridled ambition go unchecked, the hardships they face paint a somber reality as they pursue glory.\n\n[Written by MAL Rewrite]",
            "background": "Ping Pong The Animation won the Animation of the Year award in the Television category at the Tokyo Anime Award Festival in 2015. The series was released on Blu-ray and DVD by Funimation Entertainment on June 23, 2015.",
            "season": "spring",
            "year": 2014,
            "broadcast": {
                "day": "Fridays",
                "time": "00:50",
                "timezone": "Asia\/Tokyo",
                "string": "Fridays at 00:50 (JST)"
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 169,
                    "type": "anime",
                    "name": "Fuji TV",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/169\/Fuji_TV"
                },
                {
                    "mal_id": 1411,
                    "type": "anime",
                    "name": "Kyoraku Industrial Holdings",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1411\/Kyoraku_Industrial_Holdings"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/102\/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 103,
                    "type": "anime",
                    "name": "Tatsunoko Production",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/103\/Tatsunoko_Production"
                }
            ],
            "genres": [
                {
                    "mal_id": 46,
                    "type": "anime",
                    "name": "Award Winning",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/46\/Award_Winning"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/30\/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/42\/Seinen"
                }
            ]
        },
        {
            "mal_id": 11665,
            "url": "https:\/\/myanimelist.net\/anime\/11665\/Natsume_Yuujinchou_Shi",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/37449.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/37449t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/37449l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/37449.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/37449t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/3\/37449l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/n_Ku789_xVo?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Natsume Yuujinchou Shi"
                },
                {
                    "type": "Synonym",
                    "title": "Natsume Yuujinchou Four"
                },
                {
                    "type": "Synonym",
                    "title": "Natsume Yuujinchou 4"
                },
                {
                    "type": "Synonym",
                    "title": "Natsume Yujincho 4"
                },
                {
                    "type": "Japanese",
                    "title": "\u590f\u76ee\u53cb\u4eba\u5e33 \u8086"
                },
                {
                    "type": "English",
                    "title": "Natsume's Book of Friends Season 4"
                },
                {
                    "type": "German",
                    "title": "Natsume Yujin-cho Staffel 4"
                },
                {
                    "type": "Spanish",
                    "title": "Natsume Yujin-cho Temporada 4"
                },
                {
                    "type": "French",
                    "title": "Natsume Yujin-cho Saison 4"
                }
            ],
            "title": "Natsume Yuujinchou Shi",
            "title_english": "Natsume's Book of Friends Season 4",
            "title_japanese": "\u590f\u76ee\u53cb\u4eba\u5e33 \u8086",
            "title_synonyms": [
                "Natsume Yuujinchou Four",
                "Natsume Yuujinchou 4",
                "Natsume Yujincho 4"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2012-01-03T00:00:00+00:00",
                "to": "2012-03-27T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 3,
                        "month": 1,
                        "year": 2012
                    },
                    "to": {
                        "day": 27,
                        "month": 3,
                        "year": 2012
                    }
                },
                "string": "Jan 3, 2012 to Mar 27, 2012"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.63,
            "scored_by": 117079,
            "rank": 91,
            "popularity": 1055,
            "members": 264822,
            "favorites": 2109,
            "synopsis": "Takashi Natsume, the timid youkai expert and master of the Book of Friends, continues his journey towards self-understanding and acceptance with the help of friends both new and old. His most important ally is still his gluttonous and sake-loving bodyguard, the arrogant but fiercely protective wolf spirit Madara\u2014or Nyanko-sensei, as Madara is called when in his usual disguise of an unassuming, pudgy cat.\n\nNatsume, while briefly separated from Nyanko-sensei, is ambushed and kidnapped by a strange group of masked, monkey-like youkai, who have spirited him away to their forest as they desperately search for the Book of Friends. Realizing that his \"servant\" has been taken out from right under his nose, Nyanko-sensei enlists the help of Natsume's youkai friends and mounts a rescue operation. However, the forest of the monkey spirits holds many dangerous enemies, including the Matoba Clan, Natsume's old nemesis.\n\nStretching from the formidable hideout of the Matoba to Natsume's own childhood home, Natsume Yuujinchou Shi is a sweeping but familiar return to a world of danger and friendship, where Natsume will finally confront the demons of his own past.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "winter",
            "year": 2012,
            "broadcast": {
                "day": "Tuesdays",
                "time": "01:30",
                "timezone": "Asia\/Tokyo",
                "string": "Tuesdays at 01:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/16\/TV_Tokyo"
                },
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 139,
                    "type": "anime",
                    "name": "Nihon Ad Systems",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/139\/Nihon_Ad_Systems"
                },
                {
                    "mal_id": 148,
                    "type": "anime",
                    "name": "Hakusensha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/148\/Hakusensha"
                },
                {
                    "mal_id": 757,
                    "type": "anime",
                    "name": "Sony Music Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/757\/Sony_Music_Entertainment"
                }
            ],
            "licensors": [
                {
                    "mal_id": 372,
                    "type": "anime",
                    "name": "NIS America",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/372\/NIS_America"
                }
            ],
            "studios": [
                {
                    "mal_id": 112,
                    "type": "anime",
                    "name": "Brain's Base",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/112\/Brains_Base"
                }
            ],
            "genres": [
                {
                    "mal_id": 36,
                    "type": "anime",
                    "name": "Slice of Life",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/36\/Slice_of_Life"
                },
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 63,
                    "type": "anime",
                    "name": "Iyashikei",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/63\/Iyashikei"
                },
                {
                    "mal_id": 6,
                    "type": "anime",
                    "name": "Mythology",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/6\/Mythology"
                }
            ],
            "demographics": [
                {
                    "mal_id": 25,
                    "type": "anime",
                    "name": "Shoujo",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/25\/Shoujo"
                }
            ]
        },
        {
            "mal_id": 33050,
            "url": "https:\/\/myanimelist.net\/anime\/33050\/Fate_stay_night_Movie__Heavens_Feel_-_III_Spring_Song",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1142\/112957.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1142\/112957t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1142\/112957l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1142\/112957.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1142\/112957t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1142\/112957l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/zfjbLLxdZOU?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Fate\/stay night Movie: Heaven's Feel - III. Spring Song"
                },
                {
                    "type": "Synonym",
                    "title": "Fate\/stay night Movie: Heaven's Feel 3"
                },
                {
                    "type": "Japanese",
                    "title": "\u5287\u5834\u7248\u300cFate\/stay night [Heaven's Feel] III.spring song\u300d"
                },
                {
                    "type": "English",
                    "title": "Fate\/stay night: Heaven's Feel - III. Spring Song"
                },
                {
                    "type": "French",
                    "title": "Fate\/stay night: Heaven's Feel - III. Spring Song"
                }
            ],
            "title": "Fate\/stay night Movie: Heaven's Feel - III. Spring Song",
            "title_english": "Fate\/stay night: Heaven's Feel - III. Spring Song",
            "title_japanese": "\u5287\u5834\u7248\u300cFate\/stay night [Heaven's Feel] III.spring song\u300d",
            "title_synonyms": [
                "Fate\/stay night Movie: Heaven's Feel 3"
            ],
            "type": "Movie",
            "source": "Visual novel",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2020-08-15T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 15,
                        "month": 8,
                        "year": 2020
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Aug 15, 2020"
            },
            "duration": "2 hr 2 min",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.63,
            "scored_by": 219526,
            "rank": 89,
            "popularity": 670,
            "members": 402320,
            "favorites": 8482,
            "synopsis": "The Fifth Holy Grail War in Fuyuki City has reached a turning point in which the lives of all participants are threatened as the hidden enemy finally reveals itself. As Shirou Emiya, Rin Toosaka, and Illyasviel von Einzbern discover the true, corruptive nature of the shadow that has been rampaging throughout the city, they realize just how dire the situation is. In order to protect their beloved ones, the group must hold their own against the seemingly insurmountable enemy force\u2014even if some of those foes were once their allies, or perhaps, something more intimate.\n\nAs the final act of this chaotic war commences, the ideals Shirou believes will soon be challenged by an excruciating dilemma: is it really possible to save a world where everything seems to have gone wrong?\n\n[Written by MAL Rewrite]",
            "background": "Fate\/stay night Movie: Heaven's Feel - III. Spring Song was ranked the ninth highest grossing Japanese film of 2020 for the Japanese box office, generating 1.95 billion yen (aprox. $19,252,497 million) during its box office run. The opening weekend grossed 474 million yen, debuting at No. 1 at the Japanese box office.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
                },
                {
                    "mal_id": 703,
                    "type": "anime",
                    "name": "Notes",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/703\/Notes"
                },
                {
                    "mal_id": 1696,
                    "type": "anime",
                    "name": "Kadokawa",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1696\/Kadokawa"
                }
            ],
            "licensors": [
                {
                    "mal_id": 493,
                    "type": "anime",
                    "name": "Aniplex of America",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/493\/Aniplex_of_America"
                }
            ],
            "studios": [
                {
                    "mal_id": 43,
                    "type": "anime",
                    "name": "ufotable",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/43\/ufotable"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 82,
                    "type": "anime",
                    "name": "Urban Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/82\/Urban_Fantasy"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 34599,
            "url": "https:\/\/myanimelist.net\/anime\/34599\/Made_in_Abyss",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/86733.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/86733t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/86733l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/86733.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/86733t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/6\/86733l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/AQbaZeby2zA?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Made in Abyss"
                },
                {
                    "type": "Japanese",
                    "title": "\u30e1\u30a4\u30c9\u30a4\u30f3\u30a2\u30d3\u30b9"
                },
                {
                    "type": "English",
                    "title": "Made in Abyss"
                }
            ],
            "title": "Made in Abyss",
            "title_english": "Made in Abyss",
            "title_japanese": "\u30e1\u30a4\u30c9\u30a4\u30f3\u30a2\u30d3\u30b9",
            "title_synonyms": [],
            "type": "TV",
            "source": "Web manga",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2017-07-07T00:00:00+00:00",
                "to": "2017-09-29T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 7,
                        "month": 7,
                        "year": 2017
                    },
                    "to": {
                        "day": 29,
                        "month": 9,
                        "year": 2017
                    }
                },
                "string": "Jul 7, 2017 to Sep 29, 2017"
            },
            "duration": "25 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.63,
            "scored_by": 830332,
            "rank": 90,
            "popularity": 91,
            "members": 1537310,
            "favorites": 47569,
            "synopsis": "The Abyss\u2014a gaping chasm stretching down into the depths of the earth, filled with mysterious creatures and relics from a time long past. How did it come to be? What lies at the bottom? Countless brave individuals, known as Divers, have sought to solve these mysteries of the Abyss, fearlessly descending into its darkest realms. The best and bravest of the Divers, the White Whistles, are hailed as legends by those who remain on the surface.\n\nRiko, daughter of the missing White Whistle Lyza the Annihilator, aspires to become like her mother and explore the furthest reaches of the Abyss. However, just a novice Red Whistle herself, she is only permitted to roam its most upper layer. Even so, Riko has a chance encounter with a mysterious robot with the appearance of an ordinary young boy. She comes to name him Reg, and he has no recollection of the events preceding his discovery. Certain that the technology to create Reg must come from deep within the Abyss, the two decide to venture forth into the chasm to recover his memories and see the bottom of the great pit with their own eyes. However, they know not of the harsh reality that is the true existence of the Abyss.\n\n[Written by MAL Rewrite]",
            "background": "The first season adapts the first three manga volumes in their entirety, and it concludes with the first chapter of the manga's fourth volume.",
            "season": "summer",
            "year": 2017,
            "broadcast": {
                "day": "Fridays",
                "time": "21:30",
                "timezone": "Asia\/Tokyo",
                "string": "Fridays at 21:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 238,
                    "type": "anime",
                    "name": "AT-X",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/238\/AT-X"
                },
                {
                    "mal_id": 332,
                    "type": "anime",
                    "name": "Takeshobo",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/332\/Takeshobo"
                },
                {
                    "mal_id": 737,
                    "type": "anime",
                    "name": "Sony Music Communications",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/737\/Sony_Music_Communications"
                },
                {
                    "mal_id": 1551,
                    "type": "anime",
                    "name": "Kadokawa Media House",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1551\/Kadokawa_Media_House"
                },
                {
                    "mal_id": 1587,
                    "type": "anime",
                    "name": "Cygames",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1587\/Cygames"
                },
                {
                    "mal_id": 1677,
                    "type": "anime",
                    "name": "Kanetsu Investment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1677\/Kanetsu_Investment"
                },
                {
                    "mal_id": 1696,
                    "type": "anime",
                    "name": "Kadokawa",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1696\/Kadokawa"
                },
                {
                    "mal_id": 2095,
                    "type": "anime",
                    "name": "Global Solutions",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2095\/Global_Solutions"
                },
                {
                    "mal_id": 2369,
                    "type": "anime",
                    "name": "IRMA LA DOUCE",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2369\/IRMA_LA_DOUCE"
                }
            ],
            "licensors": [
                {
                    "mal_id": 376,
                    "type": "anime",
                    "name": "Sentai Filmworks",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/376\/Sentai_Filmworks"
                }
            ],
            "studios": [
                {
                    "mal_id": 290,
                    "type": "anime",
                    "name": "Kinema Citrus",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/290\/Kinema_Citrus"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/7\/Mystery"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/24\/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 58,
                    "type": "anime",
                    "name": "Gore",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/58\/Gore"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 28891,
            "url": "https:\/\/myanimelist.net\/anime\/28891\/Haikyuu_Second_Season",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/9\/76662.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/9\/76662t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/9\/76662l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/9\/76662.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/9\/76662t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/9\/76662l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/qK_ASmBoiz0?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Haikyuu!! Second Season"
                },
                {
                    "type": "Synonym",
                    "title": "Haikyuu!! Second Season"
                },
                {
                    "type": "Japanese",
                    "title": "\u30cf\u30a4\u30ad\u30e5\u30fc!! \u30bb\u30ab\u30f3\u30c9\u30b7\u30fc\u30ba\u30f3"
                },
                {
                    "type": "English",
                    "title": "Haikyu!! 2nd Season"
                },
                {
                    "type": "German",
                    "title": "Haikyu!! Staffel 2"
                },
                {
                    "type": "Spanish",
                    "title": "Haikyu!! Los Ases del V\u00f3ley Temporada 2"
                },
                {
                    "type": "French",
                    "title": "Haikyu!! Saison 2"
                }
            ],
            "title": "Haikyuu!! Second Season",
            "title_english": "Haikyu!! 2nd Season",
            "title_japanese": "\u30cf\u30a4\u30ad\u30e5\u30fc!! \u30bb\u30ab\u30f3\u30c9\u30b7\u30fc\u30ba\u30f3",
            "title_synonyms": [
                "Haikyuu!! Second Season"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 25,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2015-10-04T00:00:00+00:00",
                "to": "2016-03-27T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 4,
                        "month": 10,
                        "year": 2015
                    },
                    "to": {
                        "day": 27,
                        "month": 3,
                        "year": 2016
                    }
                },
                "string": "Oct 4, 2015 to Mar 27, 2016"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.62,
            "scored_by": 1021006,
            "rank": 98,
            "popularity": 85,
            "members": 1555140,
            "favorites": 16100,
            "synopsis": "Following their participation at the Inter-High, the Karasuno High School volleyball team attempts to refocus their efforts, aiming to conquer the Spring tournament instead. \n\nWhen they receive an invitation from long-standing rival Nekoma High, Karasuno agrees to take part in a large training camp alongside many notable volleyball teams in Tokyo and even some national level players. By playing with some of the toughest teams in Japan, they hope not only to sharpen their skills, but also come up with new attacks that would strengthen them. Moreover, Hinata and Kageyama attempt to devise a more powerful weapon, one that could possibly break the sturdiest of blocks. \n\nFacing what may be their last chance at victory before the senior players graduate, the members of Karasuno's volleyball team must learn to settle their differences and train harder than ever if they hope to overcome formidable opponents old and new\u2014including their archrival Aoba Jousai and its world-class setter Tooru Oikawa.\n\n[Written by MAL Rewrite]",
            "background": "Haikyuu!! Second Season is the sequel to the first anime adaptation of the manga of the same name, Haikyuu!!, which was ranked in 4th place in Honya Club's prestigious 'Zenkoku Shotenin ga Eranda Osusume Comic' ranking in 2013. Sentai Filmworks has announced their exclusive licensing rights for digital and home release in North America.",
            "season": "fall",
            "year": 2015,
            "broadcast": {
                "day": "Sundays",
                "time": "02:58",
                "timezone": "Asia\/Tokyo",
                "string": "Sundays at 02:58 (JST)"
            },
            "producers": [
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
                },
                {
                    "mal_id": 143,
                    "type": "anime",
                    "name": "Mainichi Broadcasting System",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/143\/Mainichi_Broadcasting_System"
                },
                {
                    "mal_id": 166,
                    "type": "anime",
                    "name": "Movic",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/166\/Movic"
                },
                {
                    "mal_id": 757,
                    "type": "anime",
                    "name": "Sony Music Entertainment",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/757\/Sony_Music_Entertainment"
                },
                {
                    "mal_id": 1143,
                    "type": "anime",
                    "name": "TOHO animation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1143\/TOHO_animation"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 376,
                    "type": "anime",
                    "name": "Sentai Filmworks",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/376\/Sentai_Filmworks"
                }
            ],
            "studios": [
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Production I.G",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/10\/Production_IG"
                }
            ],
            "genres": [
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/30\/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 23,
                    "type": "anime",
                    "name": "School",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/23\/School"
                },
                {
                    "mal_id": 77,
                    "type": "anime",
                    "name": "Team Sports",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/77\/Team_Sports"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 1535,
            "url": "https:\/\/myanimelist.net\/anime\/1535\/Death_Note",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1079\/138100.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1079\/138100t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1079\/138100l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1079\/138100.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1079\/138100t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1079\/138100l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/Vt_3c8BgxV4?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Death Note"
                },
                {
                    "type": "Synonym",
                    "title": "DN"
                },
                {
                    "type": "Japanese",
                    "title": "\u30c7\u30b9\u30ce\u30fc\u30c8"
                },
                {
                    "type": "English",
                    "title": "Death Note"
                }
            ],
            "title": "Death Note",
            "title_english": "Death Note",
            "title_japanese": "\u30c7\u30b9\u30ce\u30fc\u30c8",
            "title_synonyms": [
                "DN"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": 37,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2006-10-04T00:00:00+00:00",
                "to": "2007-06-27T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 4,
                        "month": 10,
                        "year": 2006
                    },
                    "to": {
                        "day": 27,
                        "month": 6,
                        "year": 2007
                    }
                },
                "string": "Oct 4, 2006 to Jun 27, 2007"
            },
            "duration": "23 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.62,
            "scored_by": 2978186,
            "rank": 97,
            "popularity": 2,
            "members": 4256270,
            "favorites": 184732,
            "synopsis": "Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten.\n\nFor his own amusement, Ryuk drops his Death Note into the human world. Light stumbles upon it, deeming the first of its rules ridiculous: the human whose name is written in this note shall die. However, the temptation is too great, and Light experiments by writing a felon's name, which disturbingly enacts his first murder.\n\nAware of the terrifying godlike power that has fallen into his hands, Light\u2014under the alias Kira\u2014follows his wicked sense of justice with the ultimate goal of cleansing the world of all evil-doers. The meticulous mastermind detective L is already on his trail, but as Light's brilliance rivals L's, the grand chase for Kira turns into an intense battle of wits that can only end when one of them is dead.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": "fall",
            "year": 2006,
            "broadcast": {
                "day": "Wednesdays",
                "time": "00:56",
                "timezone": "Asia\/Tokyo",
                "string": "Wednesdays at 00:56 (JST)"
            },
            "producers": [
                {
                    "mal_id": 29,
                    "type": "anime",
                    "name": "VAP",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/29\/VAP"
                },
                {
                    "mal_id": 1003,
                    "type": "anime",
                    "name": "Nippon Television Network",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1003\/Nippon_Television_Network"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                },
                {
                    "mal_id": 1791,
                    "type": "anime",
                    "name": "D.N. Dream Partners",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1791\/DN_Dream_Partners"
                }
            ],
            "licensors": [
                {
                    "mal_id": 119,
                    "type": "anime",
                    "name": "VIZ Media",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/119\/VIZ_Media"
                }
            ],
            "studios": [
                {
                    "mal_id": 11,
                    "type": "anime",
                    "name": "Madhouse",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/11\/Madhouse"
                }
            ],
            "genres": [
                {
                    "mal_id": 37,
                    "type": "anime",
                    "name": "Supernatural",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/37\/Supernatural"
                },
                {
                    "mal_id": 41,
                    "type": "anime",
                    "name": "Suspense",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/41\/Suspense"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 40,
                    "type": "anime",
                    "name": "Psychological",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/40\/Psychological"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 42310,
            "url": "https:\/\/myanimelist.net\/anime\/42310\/Cyberpunk__Edgerunners",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1818\/126435.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1818\/126435t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1818\/126435l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1818\/126435.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1818\/126435t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1818\/126435l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/JtqIas3bYhg?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Cyberpunk: Edgerunners"
                },
                {
                    "type": "Japanese",
                    "title": "\u30b5\u30a4\u30d0\u30fc\u30d1\u30f3\u30af \u30a8\u30c3\u30b8\u30e9\u30f3\u30ca\u30fc\u30ba"
                }
            ],
            "title": "Cyberpunk: Edgerunners",
            "title_english": null,
            "title_japanese": "\u30b5\u30a4\u30d0\u30fc\u30d1\u30f3\u30af \u30a8\u30c3\u30b8\u30e9\u30f3\u30ca\u30fc\u30ba",
            "title_synonyms": [],
            "type": "ONA",
            "source": "Game",
            "episodes": 10,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2022-09-13T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 13,
                        "month": 9,
                        "year": 2022
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Sep 13, 2022"
            },
            "duration": "25 min per ep",
            "rating": "R+ - Mild Nudity",
            "score": 8.62,
            "scored_by": 696021,
            "rank": 96,
            "popularity": 180,
            "members": 1024489,
            "favorites": 34221,
            "synopsis": "Dreams are doomed to die in Night City, a futuristic Californian metropolis. As a teenager living in the city's slums, David Martinez is trying to fulfill his mother's lifelong wish for him to reach the top of Arasaka, the world's leading security corporation. To this end, he attends the prestigious Arasaka Academy while his mother works tirelessly to keep their family afloat.\n\nWhen an incident with a street gang leaves David's life in tatters, he stumbles upon Sandevistan cyberware\u2014a prosthetic that grants its wearer superhuman speed. Fueled by rage, David implants the device in his back, using it to exact revenge on one of his tormentors. This gets him expelled from the academy, shattering his hopes of ever making his mother proud.\n\nAfter witnessing David's newfound abilities, the beautiful data thief Lucyna \"Lucy\" Kushinada offers to team up with him, handing him a ticket to salvation. However, associating with Lucy introduces David to the world of Edgerunners\u2014cyborg criminals who will break any law for money. Edgerunners often lose their lives, if the cyberware does not break their minds first; but in his fight for survival inside a corrupt system, David is ready to risk it all.\n\n[Written by MAL Rewrite]",
            "background": "Cyberpunk: Edgerunners is based on the Cyberpunk 2077 video game by CD Projekt Red. The series acts as a prequel to the game's story.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 2594,
                    "type": "anime",
                    "name": "CD Projekt Red",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2594\/CD_Projekt_Red"
                }
            ],
            "licensors": [
                {
                    "mal_id": 493,
                    "type": "anime",
                    "name": "Aniplex of America",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/493\/Aniplex_of_America"
                }
            ],
            "studios": [
                {
                    "mal_id": 803,
                    "type": "anime",
                    "name": "Trigger",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/803\/Trigger"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/24\/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 58,
                    "type": "anime",
                    "name": "Gore",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/58\/Gore"
                },
                {
                    "mal_id": 68,
                    "type": "anime",
                    "name": "Organized Crime",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/68\/Organized_Crime"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 55255,
            "url": "https:\/\/myanimelist.net\/anime\/55255\/Alien_Stage",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1524\/143502.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1524\/143502t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1524\/143502l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1524\/143502.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1524\/143502t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1524\/143502l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Alien Stage"
                },
                {
                    "type": "Synonym",
                    "title": "ALNST"
                },
                {
                    "type": "Japanese",
                    "title": "ALIEN STAGE (\uc5d0\uc77c\ub9ac\uc5b8\uc2a4\ud14c\uc774\uc9c0)"
                },
                {
                    "type": "English",
                    "title": "Alien Stage"
                }
            ],
            "title": "Alien Stage",
            "title_english": "Alien Stage",
            "title_japanese": "ALIEN STAGE (\uc5d0\uc77c\ub9ac\uc5b8\uc2a4\ud14c\uc774\uc9c0)",
            "title_synonyms": [
                "ALNST"
            ],
            "type": "Music",
            "source": "Music",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2022-09-07T00:00:00+00:00",
                "to": "2025-06-27T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 7,
                        "month": 9,
                        "year": 2022
                    },
                    "to": {
                        "day": 27,
                        "month": 6,
                        "year": 2025
                    }
                },
                "string": "Sep 7, 2022 to Jun 27, 2025"
            },
            "duration": "3 min per ep",
            "rating": "R - 17+ (violence & profanity)",
            "score": 8.62,
            "scored_by": 6809,
            "rank": null,
            "popularity": 6037,
            "members": 15348,
            "favorites": 794,
            "synopsis": "Humans once lived like Earth was the center of the universe. Some people embraced religion and believed that God would deliver them from suffering. After humanity was enslaved by aliens, no one spoke of God any longer.\n\nNow the grim truth is that humans are mere property of aliens. Recently, entering pet humans into the entertainment industry has become popular, and the biggest, most thrilling spectacle is known as Alien Stage. In this reality singing competition, alien sponsors flaunt their investments, while human contestants must battle to survive. No matter the relationship between opponents\u2014whether it is love, hate, or something more extreme\u2014only one victor can emerge each round.\n\n[Written by MAL Rewrite]",
            "background": "Alien Stage is a series of animations on YouTube led by VIVINOS in collaboration with QMENG and produced by STUDIO LICO.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 2125,
                    "type": "anime",
                    "name": "LICO",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2125\/LICO"
                }
            ],
            "genres": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/24\/Sci-Fi"
                },
                {
                    "mal_id": 41,
                    "type": "anime",
                    "name": "Suspense",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/41\/Suspense"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 59,
                    "type": "anime",
                    "name": "High Stakes Game",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/59\/High_Stakes_Game"
                },
                {
                    "mal_id": 19,
                    "type": "anime",
                    "name": "Music",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/19\/Music"
                },
                {
                    "mal_id": 40,
                    "type": "anime",
                    "name": "Psychological",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/40\/Psychological"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 58125,
            "url": "https:\/\/myanimelist.net\/anime\/58125\/Look_Back",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1716\/142633.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1716\/142633t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1716\/142633l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1716\/142633.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1716\/142633t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1716\/142633l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/gH6zVJVHEaM?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Look Back"
                },
                {
                    "type": "Japanese",
                    "title": "\u30eb\u30c3\u30af\u30d0\u30c3\u30af"
                }
            ],
            "title": "Look Back",
            "title_english": null,
            "title_japanese": "\u30eb\u30c3\u30af\u30d0\u30c3\u30af",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2024-06-28T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 28,
                        "month": 6,
                        "year": 2024
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jun 28, 2024"
            },
            "duration": "57 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.62,
            "scored_by": 131078,
            "rank": 94,
            "popularity": 1215,
            "members": 230747,
            "favorites": 4745,
            "synopsis": "Ayumu Fujino may only be in the fourth grade, but she already basks in high praise for her hand-drawn four-panel comics featured in the school's newspaper. However, when she is asked to share the page with Kyoumoto\u2014a reclusive student she has never met\u2014Fujino feels inadequate for the first time: her free-spirited drawings look embarrassingly amateurish next to Kyoumoto's breathtakingly detailed art.\n\nFor a year, Fujino shuts out the world, obsessively studying manga creation and drawing tirelessly to catch up to her faceless competition. But Kyoumoto's talent far exceeds hers, and Fujino quits it all. Another year passes, and on the day of their graduation, Fujino finally meets Kyoumoto. This unkempt, shy, and stuttering girl has actually been Fujino's biggest fan all along. Their encounter reignites Fujino's passion for art and sparks the beginning of a years-long friendship built on rivalry, admiration, and their shared love of manga.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 577,
                    "type": "anime",
                    "name": "Tohokushinsha Film Corporation",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/577\/Tohokushinsha_Film_Corporation"
                },
                {
                    "mal_id": 1284,
                    "type": "anime",
                    "name": "Avex Pictures",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1284\/Avex_Pictures"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/1365\/Shueisha"
                },
                {
                    "mal_id": 3021,
                    "type": "anime",
                    "name": "Amazon MGM Studios",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/3021\/Amazon_MGM_Studios"
                }
            ],
            "licensors": [
                {
                    "mal_id": 783,
                    "type": "anime",
                    "name": "GKIDS",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/783\/GKIDS"
                }
            ],
            "studios": [
                {
                    "mal_id": 2196,
                    "type": "anime",
                    "name": "Studio DURIAN",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2196\/Studio_DURIAN"
                }
            ],
            "genres": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 69,
                    "type": "anime",
                    "name": "Otaku Culture",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/69\/Otaku_Culture"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
                }
            ]
        },
        {
            "mal_id": 61952,
            "url": "https:\/\/myanimelist.net\/anime\/61952\/Luo_Xiaohei_Zhanji_2",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1288\/151853.jpg",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1288\/151853t.jpg",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1288\/151853l.jpg"
                },
                "webp": {
                    "image_url": "https:\/\/myanimelist.net\/images\/anime\/1288\/151853.webp",
                    "small_image_url": "https:\/\/myanimelist.net\/images\/anime\/1288\/151853t.webp",
                    "large_image_url": "https:\/\/myanimelist.net\/images\/anime\/1288\/151853l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": "https:\/\/www.youtube-nocookie.com\/embed\/9myucrfP7mo?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Luo Xiaohei Zhanji 2"
                },
                {
                    "type": "Synonym",
                    "title": "The Legend of Hei II"
                },
                {
                    "type": "Synonym",
                    "title": "Luo Xiao Hei Zhan Ji 2"
                },
                {
                    "type": "Synonym",
                    "title": "\u7f85\u5c0f\u9ed2\u6226\u8a18\uff12 \u307c\u304f\u3089\u304c\u671b\u3080\u672a\u6765"
                },
                {
                    "type": "Japanese",
                    "title": "\u7f57\u5c0f\u9ed1\u6218\u8bb02"
                },
                {
                    "type": "English",
                    "title": "The Legend of Hei 2"
                }
            ],
            "title": "Luo Xiaohei Zhanji 2",
            "title_english": "The Legend of Hei 2",
            "title_japanese": "\u7f57\u5c0f\u9ed1\u6218\u8bb02",
            "title_synonyms": [
                "The Legend of Hei II",
                "Luo Xiao Hei Zhan Ji 2",
                "\u7f85\u5c0f\u9ed2\u6226\u8a18\uff12 \u307c\u304f\u3089\u304c\u671b\u3080\u672a\u6765"
            ],
            "type": "Movie",
            "source": "Original",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2025-07-18T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 18,
                        "month": 7,
                        "year": 2025
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jul 18, 2025"
            },
            "duration": "1 hr 58 min",
            "rating": "G - All Ages",
            "score": 8.62,
            "scored_by": 1977,
            "rank": 95,
            "popularity": 7680,
            "members": 8492,
            "favorites": 65,
            "synopsis": "When an attack shatters the fragile peace between the spirit world and humanity, Hei teams up with Luye, the last disciple of his Shifu Wuxian, to expose a conspiracy that threatens both realms\u2014and the bond they've sworn to protect.\n\n(Source: AMC Theatres)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [
                {
                    "mal_id": 783,
                    "type": "anime",
                    "name": "GKIDS",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/783\/GKIDS"
                }
            ],
            "studios": [
                {
                    "mal_id": 2513,
                    "type": "anime",
                    "name": "HMCH",
                    "url": "https:\/\/myanimelist.net\/anime\/producer\/2513\/HMCH"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        }
]


export const mockManga: MALManga[] = [
    {
      "mal_id": 1,
      "url": "https://myanimelist.net/manga/1/Monster",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/3/258224.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/3/258224t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/3/258224l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/3/258224.webp",
          "small_image_url": "https://myanimelist.net/images/manga/3/258224t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/3/258224l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Monster"
        },
        {
          "type": "Japanese",
          "title": "MONSTER"
        },
        {
          "type": "English",
          "title": "Monster"
        }
      ],
      "title": "Monster",
      "title_english": "Monster",
      "title_japanese": "MONSTER",
      "title_synonyms": [],
      "type": "Manga",
      "chapters": 162,
      "volumes": 18,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "1994-12-05T00:00:00+00:00",
        "to": "2001-12-20T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 5,
            "month": 12,
            "year": 1994
          },
          "to": {
            "day": 20,
            "month": 12,
            "year": 2001
          }
        },
        "string": "Dec 5, 1994 to Dec 20, 2001"
      },
      "score": 9.16,
      "scored": 9.16,
      "scored_by": 115317,
      "rank": 5,
      "popularity": 27,
      "members": 286217,
      "favorites": 23599,
      "synopsis": "Kenzou Tenma, a renowned Japanese neurosurgeon working in post-war Germany, faces a difficult choice: to operate on Johan Liebert, an orphan boy on the verge of death, or on the mayor of Düsseldorf. In the end, Tenma decides to gamble his reputation by saving Johan, effectively leaving the mayor for dead.\n\nAs a consequence of his actions, hospital director Heinemann strips Tenma of his position, and Heinemann's daughter Eva breaks off their engagement. Disgraced and shunned by his colleagues, Tenma loses all hope of a successful career—that is, until the mysterious killing of Heinemann gives him another chance.\n\nNine years later, Tenma is the head of the surgical department and close to becoming the director himself. Although all seems well for him at first, he soon becomes entangled in a chain of gruesome murders that have taken place throughout Germany. The culprit is a monster—the same one that Tenma saved on that fateful day nine years ago.\n\n[Written by MAL Rewrite]",
      "background": "Monster won the Grand Prize at the third Tezuka Osamu Cultural Prize in 1999, as well as the 46th Shogakukan Manga Award in the General category in 2000. The series was published in English by VIZ Media under its VIZ Signature imprint from February 21, 2006, to December 16, 2008, and again in 2-in-1 omnibuses under the subtitle The Perfect Edition. The manga was also published in Brazilian Portuguese by Panini Comics from June 2012 to April 2015; in Polish by Hanami from March 28, 2014, to February 1, 2017; in Spain by Planeta Cómic from June 16, 2009, to September 21, 2010; in Argentina by Editorial Ivrea and LARP Editores; and in Turkey by Marmara Çizgi.",
      "authors": [
        {
          "mal_id": 1867,
          "type": "people",
          "name": "Urasawa, Naoki",
          "url": "https://myanimelist.net/people/1867/Naoki_Urasawa"
        }
      ],
      "serializations": [
        {
          "mal_id": 1,
          "type": "manga",
          "name": "Big Comic Original",
          "url": "https://myanimelist.net/manga/magazine/1/Big_Comic_Original"
        }
      ],
      "genres": [
        {
          "mal_id": 46,
          "type": "manga",
          "name": "Award Winning",
          "url": "https://myanimelist.net/manga/genre/46/Award_Winning"
        },
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Drama",
          "url": "https://myanimelist.net/manga/genre/8/Drama"
        },
        {
          "mal_id": 7,
          "type": "manga",
          "name": "Mystery",
          "url": "https://myanimelist.net/manga/genre/7/Mystery"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 50,
          "type": "manga",
          "name": "Adult Cast",
          "url": "https://myanimelist.net/manga/genre/50/Adult_Cast"
        },
        {
          "mal_id": 40,
          "type": "manga",
          "name": "Psychological",
          "url": "https://myanimelist.net/manga/genre/40/Psychological"
        }
      ],
      "demographics": [
        {
          "mal_id": 41,
          "type": "manga",
          "name": "Seinen",
          "url": "https://myanimelist.net/manga/genre/41/Seinen"
        }
      ]
    },
    {
      "mal_id": 2,
      "url": "https://myanimelist.net/manga/2/Berserk",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/1/157897.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/1/157897t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/1/157897l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/1/157897.webp",
          "small_image_url": "https://myanimelist.net/images/manga/1/157897t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/1/157897l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Berserk"
        },
        {
          "type": "Synonym",
          "title": "Berserk: The Prototype"
        },
        {
          "type": "Japanese",
          "title": "ベルセルク"
        },
        {
          "type": "English",
          "title": "Berserk"
        }
      ],
      "title": "Berserk",
      "title_english": "Berserk",
      "title_japanese": "ベルセルク",
      "title_synonyms": [
        "Berserk: The Prototype"
      ],
      "type": "Manga",
      "chapters": null,
      "volumes": null,
      "status": "Publishing",
      "publishing": true,
      "published": {
        "from": "1989-08-25T00:00:00+00:00",
        "to": null,
        "prop": {
          "from": {
            "day": 25,
            "month": 8,
            "year": 1989
          },
          "to": {
            "day": null,
            "month": null,
            "year": null
          }
        },
        "string": "Aug 25, 1989 to ?"
      },
      "score": 9.46,
      "scored": 9.46,
      "scored_by": 394232,
      "rank": 1,
      "popularity": 1,
      "members": 788003,
      "favorites": 137312,
      "synopsis": "Guts, a former mercenary now known as the Black Swordsman, is out for revenge. After a tumultuous childhood, he finally finds someone he respects and believes he can trust, only to have everything fall apart when this person takes away everything important to Guts for the purpose of fulfilling his own desires. Now marked for death, Guts becomes condemned to a fate in which he is relentlessly pursued by demonic beings.\n\nSetting out on a dreadful quest riddled with misfortune, Guts, armed with a massive sword and monstrous strength, will let nothing stop him, not even death itself, until he is finally able to take the head of the one who stripped him—and his loved one—of their humanity.\n\n[Written by MAL Rewrite]\n\nIncluded one-shot:\nVolume 14: Berserk: The Prototype",
      "background": "Berserk won the Excellence Award at the sixth Tezuka Osamu Cultural Prize in 2002. As of August 2025, over 70 million copies of the manga are in circulation. The series has been published in English by Dark Horse Comics since November 4, 2003. It has also been released in Argentina, Brazil, Czech Republic, France, Germany, Greece, Hong Kong, Italy, México, Poland, South Korea, Spain, Taiwan, Thailand, and Turkey. In May 2021, the author Kentaro Miura suddenly died at the age of 54. Chapter 364 of Berserk was published posthumously on September 10, 2021. Miura would often share details about the series' story with his childhood friend and fellow mangaka Kouji Mori. The series resumed on June 24, 2022, with Studio Gaga handling the art and Kouji Mori's supervision.",
      "authors": [
        {
          "mal_id": 1868,
          "type": "people",
          "name": "Miura, Kentarou",
          "url": "https://myanimelist.net/people/1868/Kentarou_Miura"
        },
        {
          "mal_id": 49592,
          "type": "people",
          "name": "Studio Gaga",
          "url": "https://myanimelist.net/people/49592/Studio_Gaga"
        }
      ],
      "serializations": [
        {
          "mal_id": 2,
          "type": "manga",
          "name": "Young Animal",
          "url": "https://myanimelist.net/manga/magazine/2/Young_Animal"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "manga",
          "name": "Action",
          "url": "https://myanimelist.net/manga/genre/1/Action"
        },
        {
          "mal_id": 2,
          "type": "manga",
          "name": "Adventure",
          "url": "https://myanimelist.net/manga/genre/2/Adventure"
        },
        {
          "mal_id": 46,
          "type": "manga",
          "name": "Award Winning",
          "url": "https://myanimelist.net/manga/genre/46/Award_Winning"
        },
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Drama",
          "url": "https://myanimelist.net/manga/genre/8/Drama"
        },
        {
          "mal_id": 10,
          "type": "manga",
          "name": "Fantasy",
          "url": "https://myanimelist.net/manga/genre/10/Fantasy"
        },
        {
          "mal_id": 14,
          "type": "manga",
          "name": "Horror",
          "url": "https://myanimelist.net/manga/genre/14/Horror"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 58,
          "type": "manga",
          "name": "Gore",
          "url": "https://myanimelist.net/manga/genre/58/Gore"
        },
        {
          "mal_id": 38,
          "type": "manga",
          "name": "Military",
          "url": "https://myanimelist.net/manga/genre/38/Military"
        },
        {
          "mal_id": 40,
          "type": "manga",
          "name": "Psychological",
          "url": "https://myanimelist.net/manga/genre/40/Psychological"
        }
      ],
      "demographics": [
        {
          "mal_id": 41,
          "type": "manga",
          "name": "Seinen",
          "url": "https://myanimelist.net/manga/genre/41/Seinen"
        }
      ]
    },
    {
      "mal_id": 3,
      "url": "https://myanimelist.net/manga/3/20th_Century_Boys",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/5/260006.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/5/260006t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/5/260006l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/5/260006.webp",
          "small_image_url": "https://myanimelist.net/images/manga/5/260006t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/5/260006l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "20th Century Boys"
        },
        {
          "type": "Synonym",
          "title": "20 Seiki Shounen"
        },
        {
          "type": "Synonym",
          "title": "Nijuu Seiki Shounen"
        },
        {
          "type": "Synonym",
          "title": "Nijuusseiki Shounen"
        },
        {
          "type": "Synonym",
          "title": "20thCB"
        },
        {
          "type": "Japanese",
          "title": "20世紀少年"
        },
        {
          "type": "English",
          "title": "20th Century Boys"
        }
      ],
      "title": "20th Century Boys",
      "title_english": "20th Century Boys",
      "title_japanese": "20世紀少年",
      "title_synonyms": [
        "20 Seiki Shounen",
        "Nijuu Seiki Shounen",
        "Nijuusseiki Shounen",
        "20thCB"
      ],
      "type": "Manga",
      "chapters": 249,
      "volumes": 22,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "1999-09-27T00:00:00+00:00",
        "to": "2006-04-24T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 27,
            "month": 9,
            "year": 1999
          },
          "to": {
            "day": 24,
            "month": 4,
            "year": 2006
          }
        },
        "string": "Sep 27, 1999 to Apr 24, 2006"
      },
      "score": 8.93,
      "scored": 8.93,
      "scored_by": 108178,
      "rank": 19,
      "popularity": 24,
      "members": 307239,
      "favorites": 22833,
      "synopsis": "As the 20th century approaches its end, people all over the world are anxious that the world is changing. And probably not for the better.\n\nKenji Endou is a normal convenience store manager who is just trying to get by. But when he learns that one of his old friends going by the name \"Donkey\" has suddenly committed suicide and that a new cult led by a figure known as \"Friend\" is becoming more notorious, Kenji starts to feel that something is not right. With a few key clues left behind by his deceased friend, Kenji realizes that this cult is much more than he ever thought it would be—not only is this mysterious organization directly targeting him and his childhood friends, but the whole world also faces a grave danger that only the friends have the key to stop.\n\nKenji's simple life of barely making ends meet is flipped upside down when he reunites with his childhood friends, and together they must figure out the truth of how their past is connected to the cult, as the turn of the century could mean the possible end of the world.\n\n[Written by MAL Rewrite]",
      "background": "20th Century Boys won the Kodansha Manga Award in the general category in 2001, an Excellence Prize at the Japan Media Arts Festival in 2002, and the Shogakukan Manga Award in the general category in 2003. The series' combined storyline won the Grand Prize at the 37th Japan Cartoonist Awards on May 9, 2008. VIZ Media published the series in English under the VIZ Signature imprint from February 17, 2009, to September 18, 2012. VIZ Media licensed the series in 2005; however, at Urasawa's request, it was rescheduled for release after Monster finished its English publication due to a change in art style over time. It was also published as 2-in-1 omnibus volumes from September 18, 2018, to March 16, 2021. The series has also been published in Brazilian Portuguese by Panini Comics/Planet Manga since September 2012. The series was adapted into a trilogy of live-action films which released in Japan between August 30, 2008, and August 29, 2009.",
      "authors": [
        {
          "mal_id": 1867,
          "type": "people",
          "name": "Urasawa, Naoki",
          "url": "https://myanimelist.net/people/1867/Naoki_Urasawa"
        }
      ],
      "serializations": [
        {
          "mal_id": 3,
          "type": "manga",
          "name": "Big Comic Spirits",
          "url": "https://myanimelist.net/manga/magazine/3/Big_Comic_Spirits"
        }
      ],
      "genres": [
        {
          "mal_id": 46,
          "type": "manga",
          "name": "Award Winning",
          "url": "https://myanimelist.net/manga/genre/46/Award_Winning"
        },
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Drama",
          "url": "https://myanimelist.net/manga/genre/8/Drama"
        },
        {
          "mal_id": 7,
          "type": "manga",
          "name": "Mystery",
          "url": "https://myanimelist.net/manga/genre/7/Mystery"
        },
        {
          "mal_id": 24,
          "type": "manga",
          "name": "Sci-Fi",
          "url": "https://myanimelist.net/manga/genre/24/Sci-Fi"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 13,
          "type": "manga",
          "name": "Historical",
          "url": "https://myanimelist.net/manga/genre/13/Historical"
        },
        {
          "mal_id": 40,
          "type": "manga",
          "name": "Psychological",
          "url": "https://myanimelist.net/manga/genre/40/Psychological"
        }
      ],
      "demographics": [
        {
          "mal_id": 41,
          "type": "manga",
          "name": "Seinen",
          "url": "https://myanimelist.net/manga/genre/41/Seinen"
        }
      ]
    },
    {
      "mal_id": 4,
      "url": "https://myanimelist.net/manga/4/Yokohama_Kaidashi_Kikou",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/1/171813.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/1/171813t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/1/171813l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/1/171813.webp",
          "small_image_url": "https://myanimelist.net/images/manga/1/171813t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/1/171813l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Yokohama Kaidashi Kikou"
        },
        {
          "type": "Synonym",
          "title": "Yokohama Shopping Log"
        },
        {
          "type": "Synonym",
          "title": "Yokohama Shopping Trip"
        },
        {
          "type": "Synonym",
          "title": "Touge"
        },
        {
          "type": "Japanese",
          "title": "ヨコハマ買い出し紀行"
        },
        {
          "type": "English",
          "title": "Yokohama Kaidashi Kikou"
        },
        {
          "type": "French",
          "title": "Escale à Yokohama"
        }
      ],
      "title": "Yokohama Kaidashi Kikou",
      "title_english": "Yokohama Kaidashi Kikou",
      "title_japanese": "ヨコハマ買い出し紀行",
      "title_synonyms": [
        "Yokohama Shopping Log",
        "Yokohama Shopping Trip",
        "Touge"
      ],
      "type": "Manga",
      "chapters": 142,
      "volumes": 14,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "1994-04-25T00:00:00+00:00",
        "to": "2006-02-25T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 25,
            "month": 4,
            "year": 1994
          },
          "to": {
            "day": 25,
            "month": 2,
            "year": 2006
          }
        },
        "string": "Apr 25, 1994 to Feb 25, 2006"
      },
      "score": 8.64,
      "scored": 8.64,
      "scored_by": 21190,
      "rank": 85,
      "popularity": 209,
      "members": 85141,
      "favorites": 5547,
      "synopsis": "In a post-apocalyptic world where an environmental disaster led to the eruption of Mt. Fuji and the inundation of Yokohama, the age of humans is in its twilight. Alpha Hatsuseno is an android and the namesake of a small cafe outside Yokohama. As her owner is away on a trip indefinitely, she has been left responsible for running the cafe. Although she rarely gets any customers, Alpha remains outgoing and cheerful.\n\nWhile Alpha awaits her owner's homecoming, she explores the vicinity with her scooter and camera. Throughout her journeys, she meets new people and other androids, making memories along the way.\n\nYokohama Kaidashi Kikou is a beautiful, laid-back story centered around Alpha's daily activities, emphasizing the passing of time in everyday life.\n\n[Written by MAL Rewrite]",
      "background": "Yokohama Kaidashi Kikou won the Seiun Award for Best Manga in 2007. Three drama CDs were released in 2002. In all three, Alpha is voiced by Hekiru Shiina and Kokone by Akiko Nakagawa, both of whom voiced the same characters in the two OVA series. The series was published in English by Seven Seas Entertainment in five omnibus volumes from August 9, 2022, to August 6, 2024.",
      "authors": [
        {
          "mal_id": 1869,
          "type": "people",
          "name": "Ashinano, Hitoshi",
          "url": "https://myanimelist.net/people/1869/Hitoshi_Ashinano"
        }
      ],
      "serializations": [
        {
          "mal_id": 4,
          "type": "manga",
          "name": "Afternoon",
          "url": "https://myanimelist.net/manga/magazine/4/Afternoon"
        }
      ],
      "genres": [
        {
          "mal_id": 46,
          "type": "manga",
          "name": "Award Winning",
          "url": "https://myanimelist.net/manga/genre/46/Award_Winning"
        },
        {
          "mal_id": 24,
          "type": "manga",
          "name": "Sci-Fi",
          "url": "https://myanimelist.net/manga/genre/24/Sci-Fi"
        },
        {
          "mal_id": 36,
          "type": "manga",
          "name": "Slice of Life",
          "url": "https://myanimelist.net/manga/genre/36/Slice_of_Life"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 63,
          "type": "manga",
          "name": "Iyashikei",
          "url": "https://myanimelist.net/manga/genre/63/Iyashikei"
        }
      ],
      "demographics": [
        {
          "mal_id": 41,
          "type": "manga",
          "name": "Seinen",
          "url": "https://myanimelist.net/manga/genre/41/Seinen"
        }
      ]
    },
    {
      "mal_id": 7,
      "url": "https://myanimelist.net/manga/7/Hajime_no_Ippo",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/2/250313.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/2/250313t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/2/250313l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/2/250313.webp",
          "small_image_url": "https://myanimelist.net/images/manga/2/250313t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/2/250313l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Hajime no Ippo"
        },
        {
          "type": "Synonym",
          "title": "The Fighting!"
        },
        {
          "type": "Synonym",
          "title": "Fighting Spirit"
        },
        {
          "type": "Synonym",
          "title": "The Fighting! Ippo"
        },
        {
          "type": "Synonym",
          "title": "Hajime no Ippo Gaiden: Naniwa Tiger"
        },
        {
          "type": "Japanese",
          "title": "はじめの一歩"
        },
        {
          "type": "English",
          "title": "Hajime no Ippo: Fighting Spirit!"
        },
        {
          "type": "French",
          "title": "Ippo"
        }
      ],
      "title": "Hajime no Ippo",
      "title_english": "Hajime no Ippo: Fighting Spirit!",
      "title_japanese": "はじめの一歩",
      "title_synonyms": [
        "The Fighting!",
        "Fighting Spirit",
        "The Fighting! Ippo",
        "Hajime no Ippo Gaiden: Naniwa Tiger"
      ],
      "type": "Manga",
      "chapters": null,
      "volumes": null,
      "status": "Publishing",
      "publishing": true,
      "published": {
        "from": "1989-09-27T00:00:00+00:00",
        "to": null,
        "prop": {
          "from": {
            "day": 27,
            "month": 9,
            "year": 1989
          },
          "to": {
            "day": null,
            "month": null,
            "year": null
          }
        },
        "string": "Sep 27, 1989 to ?"
      },
      "score": 8.75,
      "scored": 8.75,
      "scored_by": 41759,
      "rank": 55,
      "popularity": 160,
      "members": 101250,
      "favorites": 7602,
      "synopsis": "Makunouchi Ippo is a 16-year-old high school student who helps his mother run the family business. His hefty workload impedes his social life, making him an easy target for bullies. One day, while being beaten up by a group of high school students, Ippo is saved by a boxer named Mamoru Takamura, and is brought to the Kamogawa Boxing Gym.\n\nThis afterschool bullying session turns his life around for the better, as Ippo discovers his latent talent for boxing and decides to practice the sport professionally. However, Mamoru doubts Ippo's determination and assigns him a task deemed impossible to complete; but the resolute Ippo trains tirelessly to fulfill his mission. Along the way, he finds out what it means to attain true strength while making new friends and fighting formidable foes.\n\n[Written by MAL Rewrite]",
      "background": "Hajime no Ippo won the 15th Kodansha Manga Award in the Shounen category in 1991. As of July 2023, over 100 million copies of the series are in circulation. The series has been published digitally in English as Hajime no Ippo: Fighting Spirit! by Kodansha through K Manga.",
      "authors": [
        {
          "mal_id": 1876,
          "type": "people",
          "name": "Morikawa, George",
          "url": "https://myanimelist.net/people/1876/George_Morikawa"
        }
      ],
      "serializations": [
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Shounen Magazine (Weekly)",
          "url": "https://myanimelist.net/manga/magazine/8/Shounen_Magazine_Weekly"
        }
      ],
      "genres": [
        {
          "mal_id": 46,
          "type": "manga",
          "name": "Award Winning",
          "url": "https://myanimelist.net/manga/genre/46/Award_Winning"
        },
        {
          "mal_id": 30,
          "type": "manga",
          "name": "Sports",
          "url": "https://myanimelist.net/manga/genre/30/Sports"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 54,
          "type": "manga",
          "name": "Combat Sports",
          "url": "https://myanimelist.net/manga/genre/54/Combat_Sports"
        }
      ],
      "demographics": [
        {
          "mal_id": 27,
          "type": "manga",
          "name": "Shounen",
          "url": "https://myanimelist.net/manga/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 8,
      "url": "https://myanimelist.net/manga/8/Full_Moon_wo_Sagashite",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/3/175970.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/3/175970t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/3/175970l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/3/175970.webp",
          "small_image_url": "https://myanimelist.net/images/manga/3/175970t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/3/175970l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Full Moon wo Sagashite"
        },
        {
          "type": "Synonym",
          "title": "Searching for the Full Moon"
        },
        {
          "type": "Synonym",
          "title": "Ginyuu Meika"
        },
        {
          "type": "Synonym",
          "title": "Mangetsu wo Sagashite"
        },
        {
          "type": "Japanese",
          "title": "満月〈フルムーン〉をさがして"
        },
        {
          "type": "English",
          "title": "Full Moon wo Sagashite"
        },
        {
          "type": "German",
          "title": "Fullmoon wo Sagashite"
        },
        {
          "type": "Spanish",
          "title": "FullMoon"
        },
        {
          "type": "French",
          "title": "Full Moon: À la Recherche de la Pleine Lune"
        }
      ],
      "title": "Full Moon wo Sagashite",
      "title_english": "Full Moon wo Sagashite",
      "title_japanese": "満月〈フルムーン〉をさがして",
      "title_synonyms": [
        "Searching for the Full Moon",
        "Ginyuu Meika",
        "Mangetsu wo Sagashite"
      ],
      "type": "Manga",
      "chapters": 35,
      "volumes": 7,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "2001-12-01T00:00:00+00:00",
        "to": "2004-04-30T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 1,
            "month": 12,
            "year": 2001
          },
          "to": {
            "day": 30,
            "month": 4,
            "year": 2004
          }
        },
        "string": "Dec 1, 2001 to Apr 30, 2004"
      },
      "score": 8.02,
      "scored": 8.02,
      "scored_by": 19778,
      "rank": 771,
      "popularity": 500,
      "members": 40838,
      "favorites": 1948,
      "synopsis": "At the tender age of 12, Mitsuki Kouyama has a sarcoma in her throat. Though this rare cancer can be cured by removing her vocal cords, Mitsuki refuses because of her desire to become a pop singer and keep her childhood promise to Eichi Sakurai, her first love who left for America. Unable to both heal and keep her voice, she allows her health to deteriorate, as she accepts her tragic fate.\n\nOne day, while escaping the home of her music-hating grandmother to attend an audition, Mitsuki meets two shinigami, Takuto Kira and Meroko Yui. Realizing that Mitsuki can see them, Takuto and Meroko reveal to her that she will die in a year. Moved by her plight, Takuto allows Mitsuki the chance to pursue her dream by giving her the ability to transform into a healthy sixteen-year-old girl. After being chosen for a contract with Seed Records, Mitsuki makes her debut under the stage name Full Moon and chooses to pursue her dream music career before her life's end.\n\n[Written by MAL Rewrite]\n\n\nIncluded one-shot:\nVolume 2: Ginyuu Meika",
      "background": "Full Moon wo Sagashite was published in English as Full Moon by VIZ Media under its Shojo Beat imprint from July 5, 2005, to October 3, 2006. It was also released in French by Glénat from December 17, 2005, to November 22, 2006; in Spanish by Grupo Editorial Vid from October 26, 2006, to April 19, 2007; and in Brazilian Portuguese by Editora JBC from May 2009 to November 2009.",
      "authors": [
        {
          "mal_id": 1878,
          "type": "people",
          "name": "Tanemura, Arina",
          "url": "https://myanimelist.net/people/1878/Arina_Tanemura"
        }
      ],
      "serializations": [
        {
          "mal_id": 9,
          "type": "manga",
          "name": "Ribon Magazine",
          "url": "https://myanimelist.net/manga/magazine/9/Ribon_Magazine"
        }
      ],
      "genres": [
        {
          "mal_id": 4,
          "type": "manga",
          "name": "Comedy",
          "url": "https://myanimelist.net/manga/genre/4/Comedy"
        },
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Drama",
          "url": "https://myanimelist.net/manga/genre/8/Drama"
        },
        {
          "mal_id": 10,
          "type": "manga",
          "name": "Fantasy",
          "url": "https://myanimelist.net/manga/genre/10/Fantasy"
        },
        {
          "mal_id": 22,
          "type": "manga",
          "name": "Romance",
          "url": "https://myanimelist.net/manga/genre/22/Romance"
        },
        {
          "mal_id": 37,
          "type": "manga",
          "name": "Supernatural",
          "url": "https://myanimelist.net/manga/genre/37/Supernatural"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 19,
          "type": "manga",
          "name": "Music",
          "url": "https://myanimelist.net/manga/genre/19/Music"
        },
        {
          "mal_id": 76,
          "type": "manga",
          "name": "Showbiz",
          "url": "https://myanimelist.net/manga/genre/76/Showbiz"
        }
      ],
      "demographics": [
        {
          "mal_id": 25,
          "type": "manga",
          "name": "Shoujo",
          "url": "https://myanimelist.net/manga/genre/25/Shoujo"
        }
      ]
    },
    {
      "mal_id": 9,
      "url": "https://myanimelist.net/manga/9/Tsubasa__RESERVoir_CHRoNiCLE",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/1/272410.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/1/272410t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/1/272410l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/1/272410.webp",
          "small_image_url": "https://myanimelist.net/images/manga/1/272410t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/1/272410l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Tsubasa: RESERVoir CHRoNiCLE"
        },
        {
          "type": "Synonym",
          "title": "TRC"
        },
        {
          "type": "Japanese",
          "title": "ツバサ -RESERVoir CHRoNiCLE-"
        },
        {
          "type": "English",
          "title": "Tsubasa: RESERVoir CHRoNiCLE"
        }
      ],
      "title": "Tsubasa: RESERVoir CHRoNiCLE",
      "title_english": "Tsubasa: RESERVoir CHRoNiCLE",
      "title_japanese": "ツバサ -RESERVoir CHRoNiCLE-",
      "title_synonyms": [
        "TRC"
      ],
      "type": "Manga",
      "chapters": 233,
      "volumes": 28,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "2003-05-21T00:00:00+00:00",
        "to": "2009-10-07T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 21,
            "month": 5,
            "year": 2003
          },
          "to": {
            "day": 7,
            "month": 10,
            "year": 2009
          }
        },
        "string": "May 21, 2003 to Oct 7, 2009"
      },
      "score": 8.29,
      "scored": 8.29,
      "scored_by": 38180,
      "rank": 344,
      "popularity": 210,
      "members": 85073,
      "favorites": 6244,
      "synopsis": "Warmhearted Syaoran has always been friends with Sakura—the princess of the Clow Kingdom who holds an extraordinary power capable of changing the world. When a mysterious man attempts to monopolize Sakura's ability, her memories scatter throughout different worlds in the form of feathers. To save Sakura, Syaoran seeks help from the Dimensional Witch and meets two other travelers—Kurogane and Fai D. Flourite.\n\nKurogane, a capable fighter and ninja, has been banished from his homeworld and wishes to return. In contrast, Fai, a magician from Celes, wants to traverse different worlds to avoid his home and past. As the price to cross dimensions, each of the three must sacrifice their most valued possession. For Sakura's sake, Syaoran agrees to give away their relationship as payment to the Dimensional Witch. With firm determination, Syaoran, Kurogane, and Fai begin journeying through numerous worlds to fight against their ill-fated destinies.\n\n[Written by MAL Rewrite]",
      "background": "Tsubasa: RESERVoir CHRoNiCLE is set in the same universe as other CLAMP works, most notably xxxHOLiC. Characters in the series follow Osamu Tezuka's star system principle, in which characters with the same name and design are reused in different settings. The series was published in English by Del Rey Comics from April 27, 2004, to November 23, 2010. Kodansha Comics USA republished the series in 10 omnibus volumes from August 19, 2014, to October 18, 2016. It was also released in Brazilian Portuguese by Editora JBC in 56 volumes from April 2006 to September 2011.",
      "authors": [
        {
          "mal_id": 1877,
          "type": "people",
          "name": "CLAMP",
          "url": "https://myanimelist.net/people/1877/CLAMP"
        }
      ],
      "serializations": [
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Shounen Magazine (Weekly)",
          "url": "https://myanimelist.net/manga/magazine/8/Shounen_Magazine_Weekly"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "manga",
          "name": "Action",
          "url": "https://myanimelist.net/manga/genre/1/Action"
        },
        {
          "mal_id": 2,
          "type": "manga",
          "name": "Adventure",
          "url": "https://myanimelist.net/manga/genre/2/Adventure"
        },
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Drama",
          "url": "https://myanimelist.net/manga/genre/8/Drama"
        },
        {
          "mal_id": 10,
          "type": "manga",
          "name": "Fantasy",
          "url": "https://myanimelist.net/manga/genre/10/Fantasy"
        }
      ],
      "explicit_genres": [],
      "themes": [],
      "demographics": [
        {
          "mal_id": 27,
          "type": "manga",
          "name": "Shounen",
          "url": "https://myanimelist.net/manga/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 10,
      "url": "https://myanimelist.net/manga/10/xxxHOLiC",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/3/217533.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/3/217533t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/3/217533l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/3/217533.webp",
          "small_image_url": "https://myanimelist.net/images/manga/3/217533t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/3/217533l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "xxxHOLiC"
        },
        {
          "type": "Synonym",
          "title": "xxxHolic Rou"
        },
        {
          "type": "Synonym",
          "title": "xxxHolic Cage"
        },
        {
          "type": "Japanese",
          "title": "xxxHOLiC"
        },
        {
          "type": "English",
          "title": "xxxHOLiC"
        }
      ],
      "title": "xxxHOLiC",
      "title_english": "xxxHOLiC",
      "title_japanese": "xxxHOLiC",
      "title_synonyms": [
        "xxxHolic Rou",
        "xxxHolic Cage"
      ],
      "type": "Manga",
      "chapters": 213,
      "volumes": 19,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "2003-02-24T00:00:00+00:00",
        "to": "2011-02-09T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 24,
            "month": 2,
            "year": 2003
          },
          "to": {
            "day": 9,
            "month": 2,
            "year": 2011
          }
        },
        "string": "Feb 24, 2003 to Feb 9, 2011"
      },
      "score": 8.37,
      "scored": 8.37,
      "scored_by": 33968,
      "rank": 257,
      "popularity": 192,
      "members": 91380,
      "favorites": 5183,
      "synopsis": "Living alone after his parents passed away, Kimihiro Watanuki is a high school student who can see otherworldly creatures that are attracted to him. His days are plagued by these nuisances, and he wishes to rid himself of this inconvenience. One fateful day, as Kimihiro is being chased by a horde of spirits, his feet bring him into a mysterious store to seek shelter. Here he meets Yuuko Ichihara, the mistress of this supposed store, who claims to be able to grant wishes. Yuuko offers to grant Kimihiro's, as long as he pays an appropriate price.\n\nThus begins Kimihiro's time working in her store to earn the payment necessary for his wish. In Yuuko's employ, he must become further involved with spirits and the supernatural before he can leave that world behind. How will he fare in the inexplicable encounters that await him?\n\n[Written by MAL Rewrite]",
      "background": "xxxHOLiC was published in English by Del Rey Manga from April 27, 2004, to February 21, 2012. Kodansha Comics USA republished the series in omnibus volumes from March 18, 2014, to September 8, 2015, with the final two volumes being 2-in-1 while the rest being 3-in-1. It was also published in Spain by Norma Editorial from July 2004 to October 2011; in Brazilian Portuguese by Editora JBC in 38 volumes from March 2006 to October 2011; and in Mexico by Editorial Kamite from October 27, 2018, to April 19, 2024. The series was adapted into a Japanese live-action TV series that aired from February 24, 2013, to April 14, 2013. It was also adapted into a Japanese live-action movie that premiered on April 29, 2022.",
      "authors": [
        {
          "mal_id": 1877,
          "type": "people",
          "name": "CLAMP",
          "url": "https://myanimelist.net/people/1877/CLAMP"
        }
      ],
      "serializations": [
        {
          "mal_id": 10,
          "type": "manga",
          "name": "Young Magazine (Weekly)",
          "url": "https://myanimelist.net/manga/magazine/10/Young_Magazine_Weekly"
        }
      ],
      "genres": [
        {
          "mal_id": 4,
          "type": "manga",
          "name": "Comedy",
          "url": "https://myanimelist.net/manga/genre/4/Comedy"
        },
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Drama",
          "url": "https://myanimelist.net/manga/genre/8/Drama"
        },
        {
          "mal_id": 7,
          "type": "manga",
          "name": "Mystery",
          "url": "https://myanimelist.net/manga/genre/7/Mystery"
        },
        {
          "mal_id": 37,
          "type": "manga",
          "name": "Supernatural",
          "url": "https://myanimelist.net/manga/genre/37/Supernatural"
        }
      ],
      "explicit_genres": [],
      "themes": [],
      "demographics": [
        {
          "mal_id": 41,
          "type": "manga",
          "name": "Seinen",
          "url": "https://myanimelist.net/manga/genre/41/Seinen"
        }
      ]
    },
    {
      "mal_id": 11,
      "url": "https://myanimelist.net/manga/11/Naruto",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/3/249658.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/3/249658t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/3/249658l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/3/249658.webp",
          "small_image_url": "https://myanimelist.net/images/manga/3/249658t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/3/249658l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Naruto"
        },
        {
          "type": "Japanese",
          "title": "NARUTO―ナルト―"
        },
        {
          "type": "English",
          "title": "Naruto"
        }
      ],
      "title": "Naruto",
      "title_english": "Naruto",
      "title_japanese": "NARUTO―ナルト―",
      "title_synonyms": [],
      "type": "Manga",
      "chapters": 700,
      "volumes": 72,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "1999-09-21T00:00:00+00:00",
        "to": "2014-11-10T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 21,
            "month": 9,
            "year": 1999
          },
          "to": {
            "day": 10,
            "month": 11,
            "year": 2014
          }
        },
        "string": "Sep 21, 1999 to Nov 10, 2014"
      },
      "score": 8.08,
      "scored": 8.08,
      "scored_by": 286703,
      "rank": 666,
      "popularity": 13,
      "members": 441979,
      "favorites": 44371,
      "synopsis": "Whenever Naruto Uzumaki proclaims that he will someday become the Hokage—a title bestowed upon the best ninja in the Village Hidden in the Leaves—no one takes him seriously. Since birth, Naruto has been shunned and ridiculed by his fellow villagers. But their contempt isn't because Naruto is loud-mouthed, mischievous, or because of his ineptitude in the ninja arts, but because there is a demon inside him. Prior to Naruto's birth, the powerful and deadly Nine-Tailed Fox attacked the village. In order to stop the rampage, the Fourth Hokage sacrificed his life to seal the demon inside the body of the newborn Naruto.\n\nAnd so when he is assigned to Team 7—along with his new teammates Sasuke Uchiha and Sakura Haruno, under the mentorship of veteran ninja Kakashi Hatake—Naruto is forced to work together with other people for the first time in his life. Through undergoing vigorous training and taking on challenging missions, Naruto must learn what it means to work in a team and carve his own route toward becoming a full-fledged ninja recognized by his village.\n\n[Written by MAL Rewrite]",
      "background": "Naruto has sold over 250 million copies worldwide as of 2020, making it the 4th highest-grossing manga series of all time. It was nominated for the 19th Tezuka Osamu Cultural Prize in 2014, and in the same year, Masashi Kishimoto was awarded Rookie of the Year in the media fine arts category by Japan's Agency for Cultural Affairs. The series was published in English by VIZ Media under the Shonen Jump imprint from August 16, 2003, to October 6, 2015. In the last four months of 2007, the campaign titled Naruto Nation was launched, in which three volumes were published each month so that US releases would be closer to Japan's. The same practice was done in February through April of 2009, this time titled Generation Ninja. A 3-in-1 omnibus edition was later released. A box set containing volumes 1 through 27 was released on August 6, 2008, a set containing volumes 28 through 48 on July 7, 2015, and the final box set with volumes 49 through 72 on January 5, 2016. It was also published in Brazilian Portuguese by Panini Comics from May 2007 to June 2015; in German by Carlsen Verlag; and in French and Dutch by Kana. Numerous databooks, artbooks, novels, and fanbooks on the series have been released. Eight summary volumes featuring unaltered color pages, larger dimensions, and exclusive interviews, covering the first part of the series were released between November 7, 2008, and April 10, 2009.",
      "authors": [
        {
          "mal_id": 1879,
          "type": "people",
          "name": "Kishimoto, Masashi",
          "url": "https://myanimelist.net/people/1879/Masashi_Kishimoto"
        }
      ],
      "serializations": [
        {
          "mal_id": 83,
          "type": "manga",
          "name": "Shounen Jump (Weekly)",
          "url": "https://myanimelist.net/manga/magazine/83/Shounen_Jump_Weekly"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "manga",
          "name": "Action",
          "url": "https://myanimelist.net/manga/genre/1/Action"
        },
        {
          "mal_id": 2,
          "type": "manga",
          "name": "Adventure",
          "url": "https://myanimelist.net/manga/genre/2/Adventure"
        },
        {
          "mal_id": 10,
          "type": "manga",
          "name": "Fantasy",
          "url": "https://myanimelist.net/manga/genre/10/Fantasy"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 17,
          "type": "manga",
          "name": "Martial Arts",
          "url": "https://myanimelist.net/manga/genre/17/Martial_Arts"
        }
      ],
      "demographics": [
        {
          "mal_id": 27,
          "type": "manga",
          "name": "Shounen",
          "url": "https://myanimelist.net/manga/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 12,
      "url": "https://myanimelist.net/manga/12/Bleach",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/3/180031.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/3/180031t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/3/180031l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/3/180031.webp",
          "small_image_url": "https://myanimelist.net/images/manga/3/180031t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/3/180031l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Bleach"
        },
        {
          "type": "Japanese",
          "title": "BLEACH"
        },
        {
          "type": "English",
          "title": "Bleach"
        }
      ],
      "title": "Bleach",
      "title_english": "Bleach",
      "title_japanese": "BLEACH",
      "title_synonyms": [],
      "type": "Manga",
      "chapters": 705,
      "volumes": 74,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "2001-08-07T00:00:00+00:00",
        "to": "2016-08-22T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 7,
            "month": 8,
            "year": 2001
          },
          "to": {
            "day": 22,
            "month": 8,
            "year": 2016
          }
        },
        "string": "Aug 7, 2001 to Aug 22, 2016"
      },
      "score": 7.92,
      "scored": 7.92,
      "scored_by": 257668,
      "rank": 1009,
      "popularity": 15,
      "members": 422393,
      "favorites": 38420,
      "synopsis": "For as long as he can remember, high school student Ichigo Kurosaki has been able to see the spirits of the dead, but that has not stopped him from leading an ordinary life. One day, Ichigo returns home to find an intruder in his room who introduces herself as Rukia Kuchiki, a Soul Reaper tasked with helping souls pass over. Suddenly, the two are jolted from their conversation when a Hollow—an evil spirit known for consuming souls—attacks. As Ichigo makes a brash attempt to stop the Hollow, Rukia steps in and shields him from a counterattack. Injured and unable to keep fighting, Rukia suggests a risky plan—transfer half of her Soul Reaper powers to Ichigo. He accepts and, to Rukia's surprise, ends up absorbing her powers entirely, allowing him to easily dispatch the Hollow.\n\nNow a Soul Reaper himself, Ichigo must take up Rukia's duties of exterminating Hollows and protecting spirits, both living and dead. Along with his friends Orihime Inoue and Yasutora Sado—who later discover spiritual abilities of their own—Ichigo soon learns that the consequences of becoming a Soul Reaper and dealing with the world of spirits are far greater than he ever imagined.\n\n[Written by MAL Rewrite]",
      "background": "Bleach has sold over 130 million copies worldwide as of 2022, making it one of the top 20 best-selling manga series of all time; North American sales have also been significant with 1.7 million copies sold in the region. In 2005, the series won the 50th Shogakukan Manga Award in the shounen category. The series was published in English by VIZ Media under the Shonen Jump imprint from July 6, 2004, to October 2, 2018, and as omnibus volumes from June 7, 2011, to March 5, 2019; a hardcover collector's edition for volume one was released by VIZ Media on August 5, 2008, a box set of volumes 1-21 was released on September 16, 2008, as well as volumes 22-48 on July 7, 2015, and the final box set containing volumes 49-74 on November 6, 2018. It has also been published in Brazilian Portuguese by Panini Comics since July 2007, and in Spanish by Glénat since June 2006, publishing 51 volumes before the publisher went defunct; it was later republished by Panini Comics from February 2013 to November 2017. Many adaptations have also been made of Bleach, with four feature-length films, numerous video games, spin-off light novels, databooks, a live-action movie, and even a musical.",
      "authors": [
        {
          "mal_id": 1880,
          "type": "people",
          "name": "Kubo, Tite",
          "url": "https://myanimelist.net/people/1880/Tite_Kubo"
        }
      ],
      "serializations": [
        {
          "mal_id": 83,
          "type": "manga",
          "name": "Shounen Jump (Weekly)",
          "url": "https://myanimelist.net/manga/magazine/83/Shounen_Jump_Weekly"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "manga",
          "name": "Action",
          "url": "https://myanimelist.net/manga/genre/1/Action"
        },
        {
          "mal_id": 2,
          "type": "manga",
          "name": "Adventure",
          "url": "https://myanimelist.net/manga/genre/2/Adventure"
        },
        {
          "mal_id": 46,
          "type": "manga",
          "name": "Award Winning",
          "url": "https://myanimelist.net/manga/genre/46/Award_Winning"
        },
        {
          "mal_id": 37,
          "type": "manga",
          "name": "Supernatural",
          "url": "https://myanimelist.net/manga/genre/37/Supernatural"
        }
      ],
      "explicit_genres": [],
      "themes": [],
      "demographics": [
        {
          "mal_id": 27,
          "type": "manga",
          "name": "Shounen",
          "url": "https://myanimelist.net/manga/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 13,
      "url": "https://myanimelist.net/manga/13/One_Piece",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/2/253146.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/2/253146t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/2/253146l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/2/253146.webp",
          "small_image_url": "https://myanimelist.net/images/manga/2/253146t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/2/253146l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "One Piece"
        },
        {
          "type": "Japanese",
          "title": "ONE PIECE"
        },
        {
          "type": "English",
          "title": "One Piece"
        }
      ],
      "title": "One Piece",
      "title_english": "One Piece",
      "title_japanese": "ONE PIECE",
      "title_synonyms": [],
      "type": "Manga",
      "chapters": null,
      "volumes": null,
      "status": "Publishing",
      "publishing": true,
      "published": {
        "from": "1997-07-22T00:00:00+00:00",
        "to": null,
        "prop": {
          "from": {
            "day": 22,
            "month": 7,
            "year": 1997
          },
          "to": {
            "day": null,
            "month": null,
            "year": null
          }
        },
        "string": "Jul 22, 1997 to ?"
      },
      "score": 9.22,
      "scored": 9.22,
      "scored_by": 417405,
      "rank": 4,
      "popularity": 3,
      "members": 690911,
      "favorites": 125422,
      "synopsis": "Gol D. Roger, a man referred to as the King of the Pirates, is set to be executed by the World Government. But just before his demise, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. Announcing that One Piece can be claimed by anyone worthy enough to reach it, the King of the Pirates is executed and the Great Age of Pirates begins.\n\nTwenty-two years later, a young man by the name of Monkey D. Luffy is ready to embark on his own adventure, searching for One Piece and striving to become the new King of the Pirates. Armed with just a straw hat, a small boat, and an elastic body, he sets out on a fantastic journey to gather his own crew and a worthy ship that will take them across the Grand Line to claim the greatest status on the high seas.\n\n[Written by MAL Rewrite]",
      "background": "One Piece is the highest-selling manga series of all time, with over 500 million copies in circulation as of 2022. Volume 67 of the series currently holds the record for highest first print run of any manga or book of all time in Japan, with 4.05 million in 2012. The series was a finalist for the Tezuka Osamu Cultural Prize three times in a row from 2000 to 2002. In 2012, it won the 41st Japan Cartoonists Association Award Grand Prize, alongside Kimuchi Yokoyama's Neko Darake. VIZ Media has published One Piece in English under the Shonen Jump imprint since January 2, 2003, and in 3-in-1 omnibus editions since December 1, 2009. VIZ Media has been publishing boxed sets for the manga since November 5, 2013. It has also been simulpub through MANGA Plus. The series has also been published in numerous amounts of languages worldwide including Korean, Malay, Indonesian, Chinese, Thai, Vietnamese, German, French, Italian, Spanish, Portuguese, Swedish, Danish, Norwegian, Finnish, Polish, Turkish, and Russian. The manga has been adapted into a live-action TV series on Netflix since August 31, 2023.",
      "authors": [
        {
          "mal_id": 1881,
          "type": "people",
          "name": "Oda, Eiichiro",
          "url": "https://myanimelist.net/people/1881/Eiichiro_Oda"
        }
      ],
      "serializations": [
        {
          "mal_id": 83,
          "type": "manga",
          "name": "Shounen Jump (Weekly)",
          "url": "https://myanimelist.net/manga/magazine/83/Shounen_Jump_Weekly"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "manga",
          "name": "Action",
          "url": "https://myanimelist.net/manga/genre/1/Action"
        },
        {
          "mal_id": 2,
          "type": "manga",
          "name": "Adventure",
          "url": "https://myanimelist.net/manga/genre/2/Adventure"
        },
        {
          "mal_id": 10,
          "type": "manga",
          "name": "Fantasy",
          "url": "https://myanimelist.net/manga/genre/10/Fantasy"
        }
      ],
      "explicit_genres": [],
      "themes": [],
      "demographics": [
        {
          "mal_id": 27,
          "type": "manga",
          "name": "Shounen",
          "url": "https://myanimelist.net/manga/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 14,
      "url": "https://myanimelist.net/manga/14/Rave",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/3/255624.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/3/255624t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/3/255624l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/3/255624.webp",
          "small_image_url": "https://myanimelist.net/images/manga/3/255624t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/3/255624l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Rave"
        },
        {
          "type": "Synonym",
          "title": "Rave: The Groove Adventure"
        },
        {
          "type": "Japanese",
          "title": "RAVE"
        },
        {
          "type": "English",
          "title": "Rave Master"
        }
      ],
      "title": "Rave",
      "title_english": "Rave Master",
      "title_japanese": "RAVE",
      "title_synonyms": [
        "Rave: The Groove Adventure"
      ],
      "type": "Manga",
      "chapters": 298,
      "volumes": 35,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "1999-07-07T00:00:00+00:00",
        "to": "2005-07-27T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 7,
            "month": 7,
            "year": 1999
          },
          "to": {
            "day": 27,
            "month": 7,
            "year": 2005
          }
        },
        "string": "Jul 7, 1999 to Jul 27, 2005"
      },
      "score": 7.84,
      "scored": 7.84,
      "scored_by": 24487,
      "rank": 1263,
      "popularity": 359,
      "members": 52752,
      "favorites": 2117,
      "synopsis": "Fifty years ago, the wielders of the sacred Rave stones fought against an onslaught caused by demon stones called Dark Bring. This war resulted in an explosion known as \"Overdrive\"—a blast so powerful that it sent the Dark Bring into a deep slumber and scattered the pieces of Rave across the world.\n\nIn the present, Haru Glory lives a peaceful life on Garage Island until one day, he catches the creature Plue while fishing. Plue is later recognized by Shiba Roses, an old man who happens to be the original Rave Master. Shiba explains that the Dark Bring has resurfaced, and that to stop it, assembling the scattered parts of Rave is of utmost urgency. However, before Shiba can leave on this mission, he is attacked by a soldier from the evil organization Demon Card, forcing him to transfer the power of Rave to Haru. With the fate of humankind resting on his shoulders, the new Rave Master begins his quest to find the scattered Rave fragments.\n\n[Written by MAL Rewrite]",
      "background": "Rave was published in English by Tokyopop as Rave Master for 32 volumes from February 11, 2003 to February 10, 2009, until their license with Kodansha expired. Del Rey later gained the license and published the final three volumes in a single omnibus on May 24, 2011. Kodansha Comics USA digitally published the entire series in single volumes on October 3, 2017. It was also published in Spanish by Norma Editorial from February 2004 to February 2010.",
      "authors": [
        {
          "mal_id": 1882,
          "type": "people",
          "name": "Mashima, Hiro",
          "url": "https://myanimelist.net/people/1882/Hiro_Mashima"
        }
      ],
      "serializations": [
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Shounen Magazine (Weekly)",
          "url": "https://myanimelist.net/manga/magazine/8/Shounen_Magazine_Weekly"
        }
      ],
      "genres": [
        {
          "mal_id": 2,
          "type": "manga",
          "name": "Adventure",
          "url": "https://myanimelist.net/manga/genre/2/Adventure"
        },
        {
          "mal_id": 4,
          "type": "manga",
          "name": "Comedy",
          "url": "https://myanimelist.net/manga/genre/4/Comedy"
        },
        {
          "mal_id": 10,
          "type": "manga",
          "name": "Fantasy",
          "url": "https://myanimelist.net/manga/genre/10/Fantasy"
        }
      ],
      "explicit_genres": [],
      "themes": [],
      "demographics": [
        {
          "mal_id": 27,
          "type": "manga",
          "name": "Shounen",
          "url": "https://myanimelist.net/manga/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 15,
      "url": "https://myanimelist.net/manga/15/Mahou_Sensei_Negima",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/1/259286.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/1/259286t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/1/259286l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/1/259286.webp",
          "small_image_url": "https://myanimelist.net/images/manga/1/259286t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/1/259286l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Mahou Sensei Negima!"
        },
        {
          "type": "Synonym",
          "title": "Magical Teacher Negima!"
        },
        {
          "type": "Japanese",
          "title": "魔法先生ネギま!"
        },
        {
          "type": "English",
          "title": "Negima! Magister Negi Magi"
        }
      ],
      "title": "Mahou Sensei Negima!",
      "title_english": "Negima! Magister Negi Magi",
      "title_japanese": "魔法先生ネギま!",
      "title_synonyms": [
        "Magical Teacher Negima!"
      ],
      "type": "Manga",
      "chapters": 355,
      "volumes": 38,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "2003-02-26T00:00:00+00:00",
        "to": "2012-03-14T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 26,
            "month": 2,
            "year": 2003
          },
          "to": {
            "day": 14,
            "month": 3,
            "year": 2012
          }
        },
        "string": "Feb 26, 2003 to Mar 14, 2012"
      },
      "score": 7.91,
      "scored": 7.91,
      "scored_by": 36559,
      "rank": 1045,
      "popularity": 229,
      "members": 77478,
      "favorites": 5041,
      "synopsis": "Negi Springfield, a 10-year-old wizard who recently graduated from Merdiana Magic Academy in Wales, hopes to achieve two things—to find his missing father, who was once known as the Thousand Master, and to become a Magister Magi, someone who helps the everyday world through magic. To reach his latter goal, he is assigned one last task: to teach English at a middle school in Japan.\n\nMuch to his surprise and dismay, he not only discovers that his homeroom class consists of 31 girls, but also ends up revealing his true identity as a magician to Asuna Kagurazaka, one of his new students. Negi must now negotiate with the girl and face his most difficult challenge yet—to keep his identity a secret as he tackles magical threats both from within and outside of Mahora Academy, all the while keeping a watchful eye out for his lost father.\n\n[Written by MAL Rewrite]",
      "background": "The first 27 volumes of Mahou Sensei Negima! were published in English as Negima! by Del Rey Comics from April 27, 2004, to July 27, 2010. Kodansha Comics USA picked up the license and published volumes 28 through 38 from October 2, 2012, to April 23, 2013, as well as republishing the previous volumes in nine omnibus volumes from June 14, 2011, to February 11, 2014. It was also released in Brazilian Portuguese by Editora JBC in 76 volumes from January 2006 to February 2013.",
      "authors": [
        {
          "mal_id": 1883,
          "type": "people",
          "name": "Akamatsu, Ken",
          "url": "https://myanimelist.net/people/1883/Ken_Akamatsu"
        }
      ],
      "serializations": [
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Shounen Magazine (Weekly)",
          "url": "https://myanimelist.net/manga/magazine/8/Shounen_Magazine_Weekly"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "manga",
          "name": "Action",
          "url": "https://myanimelist.net/manga/genre/1/Action"
        },
        {
          "mal_id": 2,
          "type": "manga",
          "name": "Adventure",
          "url": "https://myanimelist.net/manga/genre/2/Adventure"
        },
        {
          "mal_id": 4,
          "type": "manga",
          "name": "Comedy",
          "url": "https://myanimelist.net/manga/genre/4/Comedy"
        },
        {
          "mal_id": 10,
          "type": "manga",
          "name": "Fantasy",
          "url": "https://myanimelist.net/manga/genre/10/Fantasy"
        },
        {
          "mal_id": 22,
          "type": "manga",
          "name": "Romance",
          "url": "https://myanimelist.net/manga/genre/22/Romance"
        },
        {
          "mal_id": 37,
          "type": "manga",
          "name": "Supernatural",
          "url": "https://myanimelist.net/manga/genre/37/Supernatural"
        },
        {
          "mal_id": 9,
          "type": "manga",
          "name": "Ecchi",
          "url": "https://myanimelist.net/manga/genre/9/Ecchi"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 35,
          "type": "manga",
          "name": "Harem",
          "url": "https://myanimelist.net/manga/genre/35/Harem"
        },
        {
          "mal_id": 17,
          "type": "manga",
          "name": "Martial Arts",
          "url": "https://myanimelist.net/manga/genre/17/Martial_Arts"
        },
        {
          "mal_id": 23,
          "type": "manga",
          "name": "School",
          "url": "https://myanimelist.net/manga/genre/23/School"
        }
      ],
      "demographics": [
        {
          "mal_id": 27,
          "type": "manga",
          "name": "Shounen",
          "url": "https://myanimelist.net/manga/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 16,
      "url": "https://myanimelist.net/manga/16/Love_Hina",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/1/259287.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/1/259287t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/1/259287l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/1/259287.webp",
          "small_image_url": "https://myanimelist.net/images/manga/1/259287t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/1/259287l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Love Hina"
        },
        {
          "type": "Japanese",
          "title": "ラブひな"
        },
        {
          "type": "English",
          "title": "Love Hina"
        }
      ],
      "title": "Love Hina",
      "title_english": "Love Hina",
      "title_japanese": "ラブひな",
      "title_synonyms": [],
      "type": "Manga",
      "chapters": 120,
      "volumes": 14,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "1998-10-21T00:00:00+00:00",
        "to": "2001-10-31T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 21,
            "month": 10,
            "year": 1998
          },
          "to": {
            "day": 31,
            "month": 10,
            "year": 2001
          }
        },
        "string": "Oct 21, 1998 to Oct 31, 2001"
      },
      "score": 7.77,
      "scored": 7.77,
      "scored_by": 37745,
      "rank": 1553,
      "popularity": 253,
      "members": 70904,
      "favorites": 3909,
      "synopsis": "It is said that if a couple gets into the University of Tokyo together, they will live happily ever after. However, for Keitarou Urashima, UTokyo is a distant dream. After failing the entrance exams twice already, he decides to stay at his grandmother's inn in Tokyo in order to prepare for his third attempt. He is, therefore, surprised when he finds out that not only has his grandmother gone on a long vacation, but the inn has also become the Hinata House, an all-girls dormitory!\n\nUnfortunately for Keitarou, a series of misunderstandings during his first visit leave him with five untrusting tenants. But when Haruka Urashima, his aunt who works at the dorm, brings up that he is supposedly a UTokyo student, the girls' impressions of him quickly change, and they reluctantly allow him to stay. Feeling guilty about the lie, he slowly gets to know his new neighbors: the cute yet violent Naru Narusegawa, the cheeky and opportunistic Mitsune Konno, the soft-spoken Shinobu Maehara, the straight-laced Motoko Aoyama, and the mischievous Kaolla Su.\n\nThus continues the unpopular Keitarou's difficult journey to get into UTokyo, all for the chance to fulfill his childhood promise to the only girl who has ever shown any interest in him and maybe, just maybe, meet her again.\n\n[Written by MAL Rewrite]",
      "background": "Love Hina won the 25th Kodansha Manga Award in the Shounen category in 2001. The series was published in English by Tokyopop from May 21, 2002, to September 16, 2003. Kodansha USA republished the series in 3-in-1 omnibus volumes from October 25, 2011, to March 26, 2013. It was also released in Brazilian Portuguese by Editora JBC in 28 volumes from May 2002 to August 2003.",
      "authors": [
        {
          "mal_id": 1883,
          "type": "people",
          "name": "Akamatsu, Ken",
          "url": "https://myanimelist.net/people/1883/Ken_Akamatsu"
        }
      ],
      "serializations": [
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Shounen Magazine (Weekly)",
          "url": "https://myanimelist.net/manga/magazine/8/Shounen_Magazine_Weekly"
        }
      ],
      "genres": [
        {
          "mal_id": 46,
          "type": "manga",
          "name": "Award Winning",
          "url": "https://myanimelist.net/manga/genre/46/Award_Winning"
        },
        {
          "mal_id": 4,
          "type": "manga",
          "name": "Comedy",
          "url": "https://myanimelist.net/manga/genre/4/Comedy"
        },
        {
          "mal_id": 22,
          "type": "manga",
          "name": "Romance",
          "url": "https://myanimelist.net/manga/genre/22/Romance"
        },
        {
          "mal_id": 9,
          "type": "manga",
          "name": "Ecchi",
          "url": "https://myanimelist.net/manga/genre/9/Ecchi"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 35,
          "type": "manga",
          "name": "Harem",
          "url": "https://myanimelist.net/manga/genre/35/Harem"
        }
      ],
      "demographics": [
        {
          "mal_id": 27,
          "type": "manga",
          "name": "Shounen",
          "url": "https://myanimelist.net/manga/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 17,
      "url": "https://myanimelist.net/manga/17/Kareshi_Kanojo_no_Jijou",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/1/267780.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/1/267780t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/1/267780l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/1/267780.webp",
          "small_image_url": "https://myanimelist.net/images/manga/1/267780t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/1/267780l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Kareshi Kanojo no Jijou"
        },
        {
          "type": "Synonym",
          "title": "His and Hers"
        },
        {
          "type": "Synonym",
          "title": "The Tiger and the Chameleon: A Promise for One Week"
        },
        {
          "type": "Synonym",
          "title": "Ashita Mata Mori de Aou ne"
        },
        {
          "type": "Synonym",
          "title": "Meet Me Again Tomorrow in the Forest"
        },
        {
          "type": "Synonym",
          "title": "KKNJ"
        },
        {
          "type": "Synonym",
          "title": "Abareru Ousama"
        },
        {
          "type": "Synonym",
          "title": "The Raging King"
        },
        {
          "type": "Japanese",
          "title": "彼氏彼女の事情"
        },
        {
          "type": "English",
          "title": "Kare Kano: His and Her Circumstances"
        }
      ],
      "title": "Kareshi Kanojo no Jijou",
      "title_english": "Kare Kano: His and Her Circumstances",
      "title_japanese": "彼氏彼女の事情",
      "title_synonyms": [
        "His and Hers",
        "The Tiger and the Chameleon: A Promise for One Week",
        "Ashita Mata Mori de Aou ne",
        "Meet Me Again Tomorrow in the Forest",
        "KKNJ",
        "Abareru Ousama",
        "The Raging King"
      ],
      "type": "Manga",
      "chapters": 108,
      "volumes": 21,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "1995-12-22T00:00:00+00:00",
        "to": "2005-05-10T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 22,
            "month": 12,
            "year": 1995
          },
          "to": {
            "day": 10,
            "month": 5,
            "year": 2005
          }
        },
        "string": "Dec 22, 1995 to May 10, 2005"
      },
      "score": 8.14,
      "scored": 8.14,
      "scored_by": 15107,
      "rank": 551,
      "popularity": 478,
      "members": 41832,
      "favorites": 1645,
      "synopsis": "Yukino Miyazawa is the perfect model student. Pretty, kind, good at sports, always at the top of her class. But she's not all that she seems. It's all an act of deception; she is really the self-confessed 'queen of vanity,' and her only goal in life is winning the praise and admiration of everyone around her.\n\nWhen she enters high school, she finally meets her match: Souichirou Arima, a handsome, athletic, popular, and very intelligent young boy. Ever since he stole the top seat in the class from her, Yukino has hated him, and has been plotting on how to take back her former place as the object of all other students' admiration.\n\nWhat she wasn't expecting, however, was that Souichirou, the very boy she hated, would confess his love for her. Or that he would find out about her deception—and use it to blackmail her!\n\nTogether, they discover that they have more in common than they knew, and they slowly begin to bring out each other's inner selves.\n\n(Source: MU)\n\nIncluded one-shots:\nVolume 1: Tora to Chameleon: Yakusoku wa Isshukan (The Tiger and the Chameleon: A Promise for One Week)\nVolume 4: Ashita Mata Mori de Aou ne (Meet Me Again Tomorrow in the Forest)\nVolume 8: Abareru Ousama (The Raging King)",
      "background": "Kareshi Kanojo no Jijou was published in English as Kare Kano: His and Her Circumstances by TokyoPop from January 21, 2003 to January 9, 2007.",
      "authors": [
        {
          "mal_id": 1885,
          "type": "people",
          "name": "Tsuda, Masami",
          "url": "https://myanimelist.net/people/1885/Masami_Tsuda"
        }
      ],
      "serializations": [
        {
          "mal_id": 11,
          "type": "manga",
          "name": "LaLa",
          "url": "https://myanimelist.net/manga/magazine/11/LaLa"
        }
      ],
      "genres": [
        {
          "mal_id": 4,
          "type": "manga",
          "name": "Comedy",
          "url": "https://myanimelist.net/manga/genre/4/Comedy"
        },
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Drama",
          "url": "https://myanimelist.net/manga/genre/8/Drama"
        },
        {
          "mal_id": 22,
          "type": "manga",
          "name": "Romance",
          "url": "https://myanimelist.net/manga/genre/22/Romance"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 23,
          "type": "manga",
          "name": "School",
          "url": "https://myanimelist.net/manga/genre/23/School"
        }
      ],
      "demographics": [
        {
          "mal_id": 25,
          "type": "manga",
          "name": "Shoujo",
          "url": "https://myanimelist.net/manga/genre/25/Shoujo"
        }
      ]
    },
    {
      "mal_id": 18,
      "url": "https://myanimelist.net/manga/18/Kodomo_no_Omocha",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/1/267715.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/1/267715t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/1/267715l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/1/267715.webp",
          "small_image_url": "https://myanimelist.net/images/manga/1/267715t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/1/267715l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Kodomo no Omocha"
        },
        {
          "type": "Synonym",
          "title": "Child's Toy"
        },
        {
          "type": "Japanese",
          "title": "こどものおもちゃ"
        },
        {
          "type": "English",
          "title": "Kodocha: Sana's Stage"
        }
      ],
      "title": "Kodomo no Omocha",
      "title_english": "Kodocha: Sana's Stage",
      "title_japanese": "こどものおもちゃ",
      "title_synonyms": [
        "Child's Toy"
      ],
      "type": "Manga",
      "chapters": 54,
      "volumes": 10,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "1994-07-02T00:00:00+00:00",
        "to": "1998-10-03T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 2,
            "month": 7,
            "year": 1994
          },
          "to": {
            "day": 3,
            "month": 10,
            "year": 1998
          }
        },
        "string": "Jul 2, 1994 to Oct 3, 1998"
      },
      "score": 8.29,
      "scored": 8.29,
      "scored_by": 11329,
      "rank": 345,
      "popularity": 858,
      "members": 24929,
      "favorites": 1207,
      "synopsis": "Sana Kurata, a child actress, faces many problems in her classroom, including a major one - her bullying classmate, Akito Hayama. Sana's outgoing and friendly nature leads her to work towards correcting all of the problems around her. Her 'meddling' irritates Hayama but at the same time captivates him, just as Hayama's gloomy nature irritates Sana and compels her to change him. As these two opposites attract each other, they face many hardships which bring them closer to a mutual understanding.\n\n(Source: ANN)",
      "background": "Kodomo no Omocha won the 22nd Kodansha Manga Award in the Shoujo category in 1998. The series was published in English as Kodocha: Sana's Stage by Tokyopop from June 11, 2002, to November 11, 2003.",
      "authors": [
        {
          "mal_id": 1884,
          "type": "people",
          "name": "Obana, Miho",
          "url": "https://myanimelist.net/people/1884/Miho_Obana"
        }
      ],
      "serializations": [
        {
          "mal_id": 9,
          "type": "manga",
          "name": "Ribon Magazine",
          "url": "https://myanimelist.net/manga/magazine/9/Ribon_Magazine"
        }
      ],
      "genres": [
        {
          "mal_id": 46,
          "type": "manga",
          "name": "Award Winning",
          "url": "https://myanimelist.net/manga/genre/46/Award_Winning"
        },
        {
          "mal_id": 4,
          "type": "manga",
          "name": "Comedy",
          "url": "https://myanimelist.net/manga/genre/4/Comedy"
        },
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Drama",
          "url": "https://myanimelist.net/manga/genre/8/Drama"
        },
        {
          "mal_id": 22,
          "type": "manga",
          "name": "Romance",
          "url": "https://myanimelist.net/manga/genre/22/Romance"
        },
        {
          "mal_id": 36,
          "type": "manga",
          "name": "Slice of Life",
          "url": "https://myanimelist.net/manga/genre/36/Slice_of_Life"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 64,
          "type": "manga",
          "name": "Love Polygon",
          "url": "https://myanimelist.net/manga/genre/64/Love_Polygon"
        },
        {
          "mal_id": 23,
          "type": "manga",
          "name": "School",
          "url": "https://myanimelist.net/manga/genre/23/School"
        },
        {
          "mal_id": 76,
          "type": "manga",
          "name": "Showbiz",
          "url": "https://myanimelist.net/manga/genre/76/Showbiz"
        }
      ],
      "demographics": [
        {
          "mal_id": 25,
          "type": "manga",
          "name": "Shoujo",
          "url": "https://myanimelist.net/manga/genre/25/Shoujo"
        }
      ]
    },
    {
      "mal_id": 19,
      "url": "https://myanimelist.net/manga/19/GetBackers",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/1/169369.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/1/169369t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/1/169369l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/1/169369.webp",
          "small_image_url": "https://myanimelist.net/images/manga/1/169369t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/1/169369l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "GetBackers"
        },
        {
          "type": "Synonym",
          "title": "Get Backers: Dakkan-ya"
        },
        {
          "type": "Japanese",
          "title": "GetBackers -奪還屋-"
        },
        {
          "type": "English",
          "title": "GetBackers"
        }
      ],
      "title": "GetBackers",
      "title_english": "GetBackers",
      "title_japanese": "GetBackers -奪還屋-",
      "title_synonyms": [
        "Get Backers: Dakkan-ya"
      ],
      "type": "Manga",
      "chapters": 344,
      "volumes": 39,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "1999-03-24T00:00:00+00:00",
        "to": "2007-02-21T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 24,
            "month": 3,
            "year": 1999
          },
          "to": {
            "day": 21,
            "month": 2,
            "year": 2007
          }
        },
        "string": "Mar 24, 1999 to Feb 21, 2007"
      },
      "score": 7.63,
      "scored": 7.63,
      "scored_by": 6091,
      "rank": 2333,
      "popularity": 1419,
      "members": 16221,
      "favorites": 427,
      "synopsis": "Blonde, hip, pragmatic and cool, Ginji Amano has the power to generate currents with his body like an electric eel. Brunette, equally hip, bespectacled and rambunctious, Ban Mido has the mystically mysterious 'Evil Eye,' the power to create illusions in the minds of his foes. Together, they are the GetBackers, the best retrieval team in the world. They can get back anything taken from clients, and their success rate is (almost) 100%! However, first they have to get some clients—and soon—or this spry detective duo will starve on the streets!\n\n(Source: Tokyopop)",
      "background": "The first 28 volumes of GetBackers were published in English by Tokyopop from February 10, 2004, to March 10, 2009, until their license with Kodansha expired.",
      "authors": [
        {
          "mal_id": 1886,
          "type": "people",
          "name": "Kibayashi, Shin",
          "url": "https://myanimelist.net/people/1886/Shin_Kibayashi"
        },
        {
          "mal_id": 1887,
          "type": "people",
          "name": "Ayamine, Rando",
          "url": "https://myanimelist.net/people/1887/Rando_Ayamine"
        }
      ],
      "serializations": [
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Shounen Magazine (Weekly)",
          "url": "https://myanimelist.net/manga/magazine/8/Shounen_Magazine_Weekly"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "manga",
          "name": "Action",
          "url": "https://myanimelist.net/manga/genre/1/Action"
        },
        {
          "mal_id": 4,
          "type": "manga",
          "name": "Comedy",
          "url": "https://myanimelist.net/manga/genre/4/Comedy"
        },
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Drama",
          "url": "https://myanimelist.net/manga/genre/8/Drama"
        },
        {
          "mal_id": 7,
          "type": "manga",
          "name": "Mystery",
          "url": "https://myanimelist.net/manga/genre/7/Mystery"
        },
        {
          "mal_id": 37,
          "type": "manga",
          "name": "Supernatural",
          "url": "https://myanimelist.net/manga/genre/37/Supernatural"
        },
        {
          "mal_id": 9,
          "type": "manga",
          "name": "Ecchi",
          "url": "https://myanimelist.net/manga/genre/9/Ecchi"
        }
      ],
      "explicit_genres": [],
      "themes": [],
      "demographics": [
        {
          "mal_id": 27,
          "type": "manga",
          "name": "Shounen",
          "url": "https://myanimelist.net/manga/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 20,
      "url": "https://myanimelist.net/manga/20/Hikaru_no_Go",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/2/170574.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/2/170574t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/2/170574l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/2/170574.webp",
          "small_image_url": "https://myanimelist.net/images/manga/2/170574t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/2/170574l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Hikaru no Go"
        },
        {
          "type": "Japanese",
          "title": "ヒカルの碁"
        },
        {
          "type": "English",
          "title": "Hikaru no Go"
        }
      ],
      "title": "Hikaru no Go",
      "title_english": "Hikaru no Go",
      "title_japanese": "ヒカルの碁",
      "title_synonyms": [],
      "type": "Manga",
      "chapters": 198,
      "volumes": 23,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "1998-12-08T00:00:00+00:00",
        "to": "2003-07-14T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 8,
            "month": 12,
            "year": 1998
          },
          "to": {
            "day": 14,
            "month": 7,
            "year": 2003
          }
        },
        "string": "Dec 8, 1998 to Jul 14, 2003"
      },
      "score": 8.11,
      "scored": 8.11,
      "scored_by": 23977,
      "rank": 604,
      "popularity": 389,
      "members": 49971,
      "favorites": 2085,
      "synopsis": "When Hikaru Shindou discovers an old go board in his grandfather's attic, he is greeted by the spirit of an ancient go master, Fujiwara no Sai. Sai spent his life teaching the techniques of the board game to an emperor during the Heian era, and now in his ghostly state, he is eager to share his passion with the unsuspecting Hikaru. The only problem is that Hikaru is not all that interested in board games. But Sai is not easily dissuaded. Pressured by Sai's unrelenting desire to pursue something he refers to as the \"Divine Move,\" Hikaru begrudgingly consents to playing the game, executing moves as dictated by Sai. But slowly, intrigued by the dedication of his peers, he begins to learn the basics of the game.\n\nAs Hikaru enters into the world of go, guided by his intangible tutor and inspired by his rival, Akira Touya, he cannot help but be drawn into the complex game as he grows determined to prove his own abilities.\n\n[Written by MAL Rewrite]",
      "background": "Hikaru no Go won the 45th Shogakukan Manga Award in the Shounen category in 2000. The series also won the Creative Award at the seventh Tezuka Osamu Cultural Prize in 2003. The series was published in English by VIZ Media under the Shonen Jump imprint from May 19, 2004, to May 3, 2011. It was also released in Brazilian Portuguese by Editora JBC from January 2010 to July 2012.",
      "authors": [
        {
          "mal_id": 1888,
          "type": "people",
          "name": "Obata, Takeshi",
          "url": "https://myanimelist.net/people/1888/Takeshi_Obata"
        },
        {
          "mal_id": 1889,
          "type": "people",
          "name": "Hotta, Yumi",
          "url": "https://myanimelist.net/people/1889/Yumi_Hotta"
        }
      ],
      "serializations": [
        {
          "mal_id": 83,
          "type": "manga",
          "name": "Shounen Jump (Weekly)",
          "url": "https://myanimelist.net/manga/magazine/83/Shounen_Jump_Weekly"
        }
      ],
      "genres": [
        {
          "mal_id": 46,
          "type": "manga",
          "name": "Award Winning",
          "url": "https://myanimelist.net/manga/genre/46/Award_Winning"
        },
        {
          "mal_id": 4,
          "type": "manga",
          "name": "Comedy",
          "url": "https://myanimelist.net/manga/genre/4/Comedy"
        },
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Drama",
          "url": "https://myanimelist.net/manga/genre/8/Drama"
        },
        {
          "mal_id": 37,
          "type": "manga",
          "name": "Supernatural",
          "url": "https://myanimelist.net/manga/genre/37/Supernatural"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 11,
          "type": "manga",
          "name": "Strategy Game",
          "url": "https://myanimelist.net/manga/genre/11/Strategy_Game"
        }
      ],
      "demographics": [
        {
          "mal_id": 27,
          "type": "manga",
          "name": "Shounen",
          "url": "https://myanimelist.net/manga/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 21,
      "url": "https://myanimelist.net/manga/21/Death_Note",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/1/258245.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/1/258245t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/1/258245l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/1/258245.webp",
          "small_image_url": "https://myanimelist.net/images/manga/1/258245t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/1/258245l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Death Note"
        },
        {
          "type": "Japanese",
          "title": "DEATH NOTE"
        },
        {
          "type": "English",
          "title": "Death Note"
        }
      ],
      "title": "Death Note",
      "title_english": "Death Note",
      "title_japanese": "DEATH NOTE",
      "title_synonyms": [],
      "type": "Manga",
      "chapters": 108,
      "volumes": 12,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "2003-12-01T00:00:00+00:00",
        "to": "2006-05-15T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 1,
            "month": 12,
            "year": 2003
          },
          "to": {
            "day": 15,
            "month": 5,
            "year": 2006
          }
        },
        "string": "Dec 1, 2003 to May 15, 2006"
      },
      "score": 8.68,
      "scored": 8.68,
      "scored_by": 242745,
      "rank": 71,
      "popularity": 14,
      "members": 426849,
      "favorites": 32967,
      "synopsis": "Ryuk, a god of death, drops his Death Note into the human world for personal pleasure. In Japan, prodigious high school student Light Yagami stumbles upon it. Inside the notebook, he finds a chilling message: those whose names are written in it shall die. Its nonsensical nature amuses Light; but when he tests its power by writing the name of a criminal in it, they suddenly meet their demise.\n\nRealizing the Death Note's vast potential, Light commences a series of nefarious murders under the pseudonym \"Kira,\" vowing to cleanse the world of corrupt individuals and create a perfect society where crime ceases to exist. However, the police quickly catch on, and they enlist the help of L—a mastermind detective—to uncover the culprit.\n\nDeath Note tells the thrilling tale of Light and L as they clash in a great battle-of-minds, one that will determine the future of the world.\n\n[Written by MAL Rewrite]",
      "background": "Death Note ranked second in the 2006 and 2007 Kono Manga ga Sugoi! for the Male Readers division. It was nominated for the 38th Seiun Award in the Best Comic category in 2007. In the same year, it was also nominated for the 11th Tezuka Osamu Cultural Prize. As of April 2015, over 30 million copies of the manga are in circulation. The manga was published in English by VIZ Media under the Shonen Jump Advanced imprint from October 10, 2005, to July 3, 2007, and again in 2-in-1 omnibus volumes subtitled Black Edition. There have been several more rereleases of the series: a special hardcover edition of the first volume; a complete box set, which included a guidebook titled Death Note 13: How to Read; and a complete omnibus. It was also published in Italian by Panini Comics from October 19, 2006, to September 18, 2008; in Brazilian Portuguese by Editora JBC from June 2007 to June 2008; in German by Tokyopop from September 2006 to March 2009; in French by Kana from January 19, 2007, to October 9, 2008; in Dutch by Kana; in Argentina by LARP Editores from May 20, 2009, to April 2012; and in Spanish by Glénat España from June 30, 2006, to September 30, 2007. The series was adapted into three live-action films, a TV drama series, and a stage musical. It has also inspired other works and copycat crimes outside Japan, leading to various controversies.",
      "authors": [
        {
          "mal_id": 1888,
          "type": "people",
          "name": "Obata, Takeshi",
          "url": "https://myanimelist.net/people/1888/Takeshi_Obata"
        },
        {
          "mal_id": 2111,
          "type": "people",
          "name": "Ohba, Tsugumi",
          "url": "https://myanimelist.net/people/2111/Tsugumi_Ohba"
        }
      ],
      "serializations": [
        {
          "mal_id": 83,
          "type": "manga",
          "name": "Shounen Jump (Weekly)",
          "url": "https://myanimelist.net/manga/magazine/83/Shounen_Jump_Weekly"
        }
      ],
      "genres": [
        {
          "mal_id": 37,
          "type": "manga",
          "name": "Supernatural",
          "url": "https://myanimelist.net/manga/genre/37/Supernatural"
        },
        {
          "mal_id": 45,
          "type": "manga",
          "name": "Suspense",
          "url": "https://myanimelist.net/manga/genre/45/Suspense"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 40,
          "type": "manga",
          "name": "Psychological",
          "url": "https://myanimelist.net/manga/genre/40/Psychological"
        }
      ],
      "demographics": [
        {
          "mal_id": 27,
          "type": "manga",
          "name": "Shounen",
          "url": "https://myanimelist.net/manga/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 22,
      "url": "https://myanimelist.net/manga/22/Rurouni_Kenshin__Meiji_Kenkaku_Romantan",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/2/127583.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/2/127583t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/2/127583l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/2/127583.webp",
          "small_image_url": "https://myanimelist.net/images/manga/2/127583t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/2/127583l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Rurouni Kenshin: Meiji Kenkaku Romantan"
        },
        {
          "type": "Synonym",
          "title": "Samurai X"
        },
        {
          "type": "Synonym",
          "title": "Sengoku no Mikazuki"
        },
        {
          "type": "Synonym",
          "title": "Crescent Moon in the Warring States"
        },
        {
          "type": "Synonym",
          "title": "Crescent Moon Over a Country At War"
        },
        {
          "type": "Synonym",
          "title": "Meteor Strike"
        },
        {
          "type": "Japanese",
          "title": "るろうに剣心 -明治剣客浪漫譚-"
        },
        {
          "type": "English",
          "title": "Rurouni Kenshin: Meiji Swordsman Romantic Story"
        }
      ],
      "title": "Rurouni Kenshin: Meiji Kenkaku Romantan",
      "title_english": "Rurouni Kenshin: Meiji Swordsman Romantic Story",
      "title_japanese": "るろうに剣心 -明治剣客浪漫譚-",
      "title_synonyms": [
        "Samurai X",
        "Sengoku no Mikazuki",
        "Crescent Moon in the Warring States",
        "Crescent Moon Over a Country At War",
        "Meteor Strike"
      ],
      "type": "Manga",
      "chapters": 259,
      "volumes": 28,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "1994-04-12T00:00:00+00:00",
        "to": "1999-09-21T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 12,
            "month": 4,
            "year": 1994
          },
          "to": {
            "day": 21,
            "month": 9,
            "year": 1999
          }
        },
        "string": "Apr 12, 1994 to Sep 21, 1999"
      },
      "score": 8.53,
      "scored": 8.53,
      "scored_by": 50283,
      "rank": 138,
      "popularity": 151,
      "members": 104278,
      "favorites": 7210,
      "synopsis": "Ten years have passed since the end of Bakumatsu, an era of war that saw the uprising of citizens against the Tokugawa shogunate. The revolutionaries wanted to create a time of peace, and a thriving country free from oppression. The new age of Meiji has come, but peace has not yet been achieved. Swords are banned but people are still murdered in the streets. Orphans of war veterans are left with nowhere to go, while the government seems content to just line their pockets with money.\n\nOne wandering samurai, Kenshin Himura, still works to make sure the values he fought for are worth the lives spent to bring about the new era. Once known as Hitokiri Battousai, he was feared as the most ruthless killer of all the revolutionaries. Now haunted by guilt, Kenshin has sworn never to kill again in atonement for the lives he took, and he may never know peace until killing is a thing of the past.\n\nNow in the 11th year of Meiji, Kenshin stumbles upon Kaoru Kamiya, owner and head instructor of a small dojo being threatened to close its doors. The police force is powerless to stop the string of murders done in the name of her dojo by a man claiming to be the famous Battousai. Kenshin's wanderings pause for now as he joins Kaoru to clear both their names. But how long can he stay before his past catches up to him?\n\n[Written by MAL Rewrite]\n\nIncluded one-shot:\nVolume 28: Meteor Strike",
      "background": "As of December 2019, over 72 million copies of Rurouni Kenshin: Meiji Kenkaku Romantan are in circulation. The series was published in English as Rurouni Kenshin by VIZ Media under the Shonen Jump imprint from December 23, 2003, to July 5, 2006, and again in 3-in-1 omnibus volumes under the Shonen Jump VIZBIG imprint from January 29, 2008, to March 16, 2010. VIZ Media later rereleased the series in new 3-in-1 omnibus volumes. It was also published in Brazilian Portuguese by Editora JBC as Samurai X in 56 volumes from May 2001 to November 2003.",
      "authors": [
        {
          "mal_id": 1890,
          "type": "people",
          "name": "Watsuki, Nobuhiro",
          "url": "https://myanimelist.net/people/1890/Nobuhiro_Watsuki"
        }
      ],
      "serializations": [
        {
          "mal_id": 83,
          "type": "manga",
          "name": "Shounen Jump (Weekly)",
          "url": "https://myanimelist.net/manga/magazine/83/Shounen_Jump_Weekly"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "manga",
          "name": "Action",
          "url": "https://myanimelist.net/manga/genre/1/Action"
        },
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Drama",
          "url": "https://myanimelist.net/manga/genre/8/Drama"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 13,
          "type": "manga",
          "name": "Historical",
          "url": "https://myanimelist.net/manga/genre/13/Historical"
        },
        {
          "mal_id": 21,
          "type": "manga",
          "name": "Samurai",
          "url": "https://myanimelist.net/manga/genre/21/Samurai"
        }
      ],
      "demographics": [
        {
          "mal_id": 27,
          "type": "manga",
          "name": "Shounen",
          "url": "https://myanimelist.net/manga/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 23,
      "url": "https://myanimelist.net/manga/23/Ranma_½",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/1/156534.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/1/156534t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/1/156534l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/1/156534.webp",
          "small_image_url": "https://myanimelist.net/images/manga/1/156534t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/1/156534l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Ranma ½"
        },
        {
          "type": "Japanese",
          "title": "らんま½"
        },
        {
          "type": "English",
          "title": "Ranma 1/2"
        }
      ],
      "title": "Ranma ½",
      "title_english": "Ranma 1/2",
      "title_japanese": "らんま½",
      "title_synonyms": [],
      "type": "Manga",
      "chapters": 407,
      "volumes": 38,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "1987-08-05T00:00:00+00:00",
        "to": "1996-02-21T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 5,
            "month": 8,
            "year": 1987
          },
          "to": {
            "day": 21,
            "month": 2,
            "year": 1996
          }
        },
        "string": "Aug 5, 1987 to Feb 21, 1996"
      },
      "score": 8,
      "scored": 8,
      "scored_by": 27516,
      "rank": 807,
      "popularity": 326,
      "members": 58047,
      "favorites": 3249,
      "synopsis": "Soun Tendou runs the Tendou Martial Arts School accompanied by his three daughters: Akane, Nabiki, and Kasumi. One day, the sisters' lives are turned upside down when their father announces that he has promised one of them to be married to a fellow martial artist's son in hopes of carrying on the family legacy. In addition to their mixed reactions, when the fiancé arrives, the last thing the Tendou family expects is Ranma Saotome and his father, Genma.\n\nRanma has been training in China with his father until an unfortunate accident changed them both. Now, when water touches them, Ranma turns into a girl and Genma into a giant panda. Ranma ½ follows Ranma as he attempts to get along with his newly betrothed, the youngest of the Tendou sisters, Akane. As the two begin to attend the same school, they deal with fellow friends and rivals, all of whom have something to say about their engagement.\n\n[Written by MAL Rewrite]",
      "background": "Ranma ½ was published in English by VIZ Media from May 1993 to November 16, 2006. It was VIZ's longest-running manga at the release of its final volume. It was republished in 2-in-1 omnibus volumes in the original right-to-left format by VIZ Media under the Shonen Sunday imprint from March 11, 2014, to March 14, 2017. The series was also partially published in Spanish by Glénat España from December 2011 to June 2013, before the publisher went defunct. Planeta Cómic published the full series in 2-in-1 omnibus volumes from April 28, 2016, to July 24, 2018. The manga was also released in Brazilian Portuguese by Editora JBC from September 2009 to April 2013.",
      "authors": [
        {
          "mal_id": 1891,
          "type": "people",
          "name": "Takahashi, Rumiko",
          "url": "https://myanimelist.net/people/1891/Rumiko_Takahashi"
        }
      ],
      "serializations": [
        {
          "mal_id": 229,
          "type": "manga",
          "name": "Shounen Sunday",
          "url": "https://myanimelist.net/manga/magazine/229/Shounen_Sunday"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "manga",
          "name": "Action",
          "url": "https://myanimelist.net/manga/genre/1/Action"
        },
        {
          "mal_id": 4,
          "type": "manga",
          "name": "Comedy",
          "url": "https://myanimelist.net/manga/genre/4/Comedy"
        },
        {
          "mal_id": 22,
          "type": "manga",
          "name": "Romance",
          "url": "https://myanimelist.net/manga/genre/22/Romance"
        },
        {
          "mal_id": 9,
          "type": "manga",
          "name": "Ecchi",
          "url": "https://myanimelist.net/manga/genre/9/Ecchi"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 35,
          "type": "manga",
          "name": "Harem",
          "url": "https://myanimelist.net/manga/genre/35/Harem"
        },
        {
          "mal_id": 17,
          "type": "manga",
          "name": "Martial Arts",
          "url": "https://myanimelist.net/manga/genre/17/Martial_Arts"
        },
        {
          "mal_id": 23,
          "type": "manga",
          "name": "School",
          "url": "https://myanimelist.net/manga/genre/23/School"
        }
      ],
      "demographics": [
        {
          "mal_id": 27,
          "type": "manga",
          "name": "Shounen",
          "url": "https://myanimelist.net/manga/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 24,
      "url": "https://myanimelist.net/manga/24/DGray-man",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/3/240470.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/3/240470t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/3/240470l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/3/240470.webp",
          "small_image_url": "https://myanimelist.net/images/manga/3/240470t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/3/240470l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "D.Gray-man"
        },
        {
          "type": "Synonym",
          "title": "D.Grey-man"
        },
        {
          "type": "Synonym",
          "title": "D. Grayman"
        },
        {
          "type": "Synonym",
          "title": "D. Gray-man"
        },
        {
          "type": "Japanese",
          "title": "D.Gray-man"
        },
        {
          "type": "English",
          "title": "D.Gray-man"
        },
        {
          "type": "Spanish",
          "title": "D.Gray-Man"
        },
        {
          "type": "French",
          "title": "D.Gray-Man"
        }
      ],
      "title": "D.Gray-man",
      "title_english": "D.Gray-man",
      "title_japanese": "D.Gray-man",
      "title_synonyms": [
        "D.Grey-man",
        "D. Grayman",
        "D. Gray-man"
      ],
      "type": "Manga",
      "chapters": null,
      "volumes": null,
      "status": "Publishing",
      "publishing": true,
      "published": {
        "from": "2004-05-31T00:00:00+00:00",
        "to": null,
        "prop": {
          "from": {
            "day": 31,
            "month": 5,
            "year": 2004
          },
          "to": {
            "day": null,
            "month": null,
            "year": null
          }
        },
        "string": "May 31, 2004 to ?"
      },
      "score": 8.28,
      "scored": 8.28,
      "scored_by": 65910,
      "rank": 355,
      "popularity": 73,
      "members": 170379,
      "favorites": 12771,
      "synopsis": "Thousands of years ago, there existed those gifted with the power of God. Their mission: to destroy the ominous evils that lurk in the darkness known as \"Akuma.\" Led by the Milenium Earl, Akuma seek to destroy fragments of \"Innocence,\" the only weapons capable of harming the Earl and his army and bring about the Great Flood from a hundred years ago. \n\nTo prevent this tragedy from happening, the Black Order was formed as an organization dedicated to fighting the Earl. They recruit Exorcists, those with the inherent ability to accomodate Innocence, to fight against the Akuma.\n\nIn the late 19th century, Allen Walker—a white-haired boy armed with Innocence that takes the form of his entire left arm and a cursed eye that can see Akuma—is sent to the Black Order. There, Allen meets various comrades from the Order—the mercurial Yuu Kanda, the kindhearted Lenalee Lee, and the cheerful yet mysterious Lavi. Despite their different personalities, they have one goal in mind: to bring salvation to the souls of Akuma and prevent the Earl from destroying the world.\n\n[Written by MAL Rewrite]",
      "background": "D.Gray-man has been published in English by VIZ Media under the Shonen Jump Advanced imprint since May 2, 2006 and in 3-in-1 omnibus editions since July 2, 2013. It has been also published in Spanish, first the first 23 volumes by Glénat until August 2012, when Shueisha broke the contract with Glénat, and then by Ivrea since July 2013, re-editing the first 23 volumes and simultaneously publishing new volumes; and in Italian by Panini Comics under the Planet Manga imprint since July 20, 2006.",
      "authors": [
        {
          "mal_id": 1892,
          "type": "people",
          "name": "Hoshino, Katsura",
          "url": "https://myanimelist.net/people/1892/Katsura_Hoshino"
        }
      ],
      "serializations": [
        {
          "mal_id": 1477,
          "type": "manga",
          "name": "Jump SQ.Rise",
          "url": "https://myanimelist.net/manga/magazine/1477/Jump_SQRise"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "manga",
          "name": "Action",
          "url": "https://myanimelist.net/manga/genre/1/Action"
        },
        {
          "mal_id": 2,
          "type": "manga",
          "name": "Adventure",
          "url": "https://myanimelist.net/manga/genre/2/Adventure"
        },
        {
          "mal_id": 10,
          "type": "manga",
          "name": "Fantasy",
          "url": "https://myanimelist.net/manga/genre/10/Fantasy"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 83,
          "type": "manga",
          "name": "Urban Fantasy",
          "url": "https://myanimelist.net/manga/genre/83/Urban_Fantasy"
        }
      ],
      "demographics": [
        {
          "mal_id": 27,
          "type": "manga",
          "name": "Shounen",
          "url": "https://myanimelist.net/manga/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 25,
      "url": "https://myanimelist.net/manga/25/Fullmetal_Alchemist",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/3/243675.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/3/243675t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/3/243675l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/3/243675.webp",
          "small_image_url": "https://myanimelist.net/images/manga/3/243675t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/3/243675l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Fullmetal Alchemist"
        },
        {
          "type": "Synonym",
          "title": "Full Metal Alchemist"
        },
        {
          "type": "Synonym",
          "title": "Hagane no Renkinjutsushi"
        },
        {
          "type": "Synonym",
          "title": "FMA"
        },
        {
          "type": "Synonym",
          "title": "HagaRen"
        },
        {
          "type": "Synonym",
          "title": "Fullmetal Alchemist Gaiden"
        },
        {
          "type": "Japanese",
          "title": "鋼の錬金術師"
        },
        {
          "type": "English",
          "title": "Fullmetal Alchemist"
        }
      ],
      "title": "Fullmetal Alchemist",
      "title_english": "Fullmetal Alchemist",
      "title_japanese": "鋼の錬金術師",
      "title_synonyms": [
        "Full Metal Alchemist",
        "Hagane no Renkinjutsushi",
        "FMA",
        "HagaRen",
        "Fullmetal Alchemist Gaiden"
      ],
      "type": "Manga",
      "chapters": 116,
      "volumes": 27,
      "status": "Finished",
      "publishing": false,
      "published": {
        "from": "2001-07-12T00:00:00+00:00",
        "to": "2010-09-11T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 12,
            "month": 7,
            "year": 2001
          },
          "to": {
            "day": 11,
            "month": 9,
            "year": 2010
          }
        },
        "string": "Jul 12, 2001 to Sep 11, 2010"
      },
      "score": 9.04,
      "scored": 9.04,
      "scored_by": 169138,
      "rank": 11,
      "popularity": 20,
      "members": 320903,
      "favorites": 31350,
      "synopsis": "Alchemists are knowledgeable and naturally talented individuals who can manipulate and modify matter due to their art. Yet despite the wide range of possibilities, alchemy is not as all-powerful as most would believe. Human transmutation is strictly forbidden, and whoever attempts it risks severe consequences. Even so, siblings Edward and Alphonse Elric decide to ignore this great taboo and bring their mother back to life. Unfortunately, not only do they fail in resurrecting her, they also pay an extremely high price for their arrogance: Edward loses his left leg and Alphonse his entire body. Furthermore, Edward also gives up his right arm in order to seal his brother's soul into a suit of armor.\n\nYears later, the young alchemists travel across the country looking for the Philosopher's Stone, in the hopes of recovering their old bodies with its power. However, their quest for the fated stone also leads them to unravel far darker secrets than they could ever imagine.\n\n[Written by MAL Rewrite]",
      "background": "Fullmetal Alchemist won the 49th Shogakukan Manga Award in the Shounen category in 2003, along with Yakitate!! Japan. Hiromu Arakawa also won the 15th Tezuka Osamu Cultural Prize in the New Artist Prize category for the series in 2011. In the same year, the manga won the Seiun Award in the Best Comic category. As of July 2021, over 80 million copies of the series have been sold worldwide. The series was published in English by VIZ Media from May 3, 2005, to December 20, 2011, and digitally by Yen Press on April 15, 2014. A 3-in-1 omnibus edition and complete box set, which included the novel Fullmetal Alchemist: Sorezore no Kizuna, were later released by VIZ Media. The manga was also published in Italian by Panini Comic from July 13, 2006, to September 3, 2011; in Polish by Japonica Polonica Fantastica from January 2006 to April 2012; in Brazilian Portuguese by Editora JBC in 54 volumes from February 2007 to April 2011; in Argentina by Editorial Ivrea from December 9, 2016, to March 21, 2019; and in Spain by Norma Editorial.",
      "authors": [
        {
          "mal_id": 1874,
          "type": "people",
          "name": "Arakawa, Hiromu",
          "url": "https://myanimelist.net/people/1874/Hiromu_Arakawa"
        }
      ],
      "serializations": [
        {
          "mal_id": 13,
          "type": "manga",
          "name": "Shounen Gangan",
          "url": "https://myanimelist.net/manga/magazine/13/Shounen_Gangan"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "manga",
          "name": "Action",
          "url": "https://myanimelist.net/manga/genre/1/Action"
        },
        {
          "mal_id": 2,
          "type": "manga",
          "name": "Adventure",
          "url": "https://myanimelist.net/manga/genre/2/Adventure"
        },
        {
          "mal_id": 46,
          "type": "manga",
          "name": "Award Winning",
          "url": "https://myanimelist.net/manga/genre/46/Award_Winning"
        },
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Drama",
          "url": "https://myanimelist.net/manga/genre/8/Drama"
        },
        {
          "mal_id": 10,
          "type": "manga",
          "name": "Fantasy",
          "url": "https://myanimelist.net/manga/genre/10/Fantasy"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 38,
          "type": "manga",
          "name": "Military",
          "url": "https://myanimelist.net/manga/genre/38/Military"
        }
      ],
      "demographics": [
        {
          "mal_id": 27,
          "type": "manga",
          "name": "Shounen",
          "url": "https://myanimelist.net/manga/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 26,
      "url": "https://myanimelist.net/manga/26/Hunter_x_Hunter",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/2/253119.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/2/253119t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/2/253119l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/2/253119.webp",
          "small_image_url": "https://myanimelist.net/images/manga/2/253119t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/2/253119l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Hunter x Hunter"
        },
        {
          "type": "Synonym",
          "title": "HxH"
        },
        {
          "type": "Japanese",
          "title": "HUNTER×HUNTER"
        },
        {
          "type": "English",
          "title": "Hunter x Hunter"
        },
        {
          "type": "German",
          "title": "Hunter X Hunter"
        },
        {
          "type": "French",
          "title": "Hunter X Hunter"
        }
      ],
      "title": "Hunter x Hunter",
      "title_english": "Hunter x Hunter",
      "title_japanese": "HUNTER×HUNTER",
      "title_synonyms": [
        "HxH"
      ],
      "type": "Manga",
      "chapters": null,
      "volumes": null,
      "status": "Publishing",
      "publishing": true,
      "published": {
        "from": "1998-03-03T00:00:00+00:00",
        "to": null,
        "prop": {
          "from": {
            "day": 3,
            "month": 3,
            "year": 1998
          },
          "to": {
            "day": null,
            "month": null,
            "year": null
          }
        },
        "string": "Mar 3, 1998 to ?"
      },
      "score": 8.77,
      "scored": 8.77,
      "scored_by": 141099,
      "rank": 49,
      "popularity": 23,
      "members": 309794,
      "favorites": 26460,
      "synopsis": "\"Secret treasure hoards, undiscovered wealth... mystical places, unexplored frontiers... 'The mysterious unknown.' There's magic in such words for those captivated by its spell. They are called 'Hunters'!\"\n\nGon Freecss wants to become a Hunter so he can find his father, a man who abandoned him to pursue a life of adventure. But it's not that simple: only one in one hundred thousand can pass the Hunter Exam, and that is just the first obstacle on his journey. During the Hunter Exam, Gon befriends many other potential Hunters, such as the mysterious Killua; the revenge-driven Kurapika; and Leorio, who aims to become a doctor. There's a world of adventure and peril awaiting, and those who embrace it with open arms can become the greatest Hunters of them all!\n\n[Written by MAL Rewrite]",
      "background": "As of July 2022, over 84 million copies of Hunter x Hunter have been sold worldwide. The series has been published in English by VIZ Media under the Shonen Jump Advanced imprint since April 5, 2005, and as 3-in-1 omnibus volumes since February 18, 2025. It has also been simulpub digitally through MANGA Plus. The series has been released in Brazilian Portuguese by Editora JBC since January 2008; in Spanish by Panini Comics since October 2012; in Italian by Panini Comics since May 20, 2004; and in Polish by Waneko since May 16, 2023. The manga has been serialized irregularly since 2006 due to Yoshihiro Togashi's health problems.",
      "authors": [
        {
          "mal_id": 1893,
          "type": "people",
          "name": "Togashi, Yoshihiro",
          "url": "https://myanimelist.net/people/1893/Yoshihiro_Togashi"
        }
      ],
      "serializations": [
        {
          "mal_id": 83,
          "type": "manga",
          "name": "Shounen Jump (Weekly)",
          "url": "https://myanimelist.net/manga/magazine/83/Shounen_Jump_Weekly"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "manga",
          "name": "Action",
          "url": "https://myanimelist.net/manga/genre/1/Action"
        },
        {
          "mal_id": 2,
          "type": "manga",
          "name": "Adventure",
          "url": "https://myanimelist.net/manga/genre/2/Adventure"
        },
        {
          "mal_id": 10,
          "type": "manga",
          "name": "Fantasy",
          "url": "https://myanimelist.net/manga/genre/10/Fantasy"
        }
      ],
      "explicit_genres": [],
      "themes": [],
      "demographics": [
        {
          "mal_id": 27,
          "type": "manga",
          "name": "Shounen",
          "url": "https://myanimelist.net/manga/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 27,
      "url": "https://myanimelist.net/manga/27/X",
      "images": {
        "jpg": {
          "image_url": "https://myanimelist.net/images/manga/2/267781.jpg",
          "small_image_url": "https://myanimelist.net/images/manga/2/267781t.jpg",
          "large_image_url": "https://myanimelist.net/images/manga/2/267781l.jpg"
        },
        "webp": {
          "image_url": "https://myanimelist.net/images/manga/2/267781.webp",
          "small_image_url": "https://myanimelist.net/images/manga/2/267781t.webp",
          "large_image_url": "https://myanimelist.net/images/manga/2/267781l.webp"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "X"
        },
        {
          "type": "Synonym",
          "title": "X/1999"
        },
        {
          "type": "Japanese",
          "title": "X"
        },
        {
          "type": "English",
          "title": "X"
        }
      ],
      "title": "X",
      "title_english": "X",
      "title_japanese": "X",
      "title_synonyms": [
        "X/1999"
      ],
      "type": "Manga",
      "chapters": 158,
      "volumes": 18,
      "status": "On Hiatus",
      "publishing": false,
      "published": {
        "from": "1992-03-24T00:00:00+00:00",
        "to": "2003-03-24T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 24,
            "month": 3,
            "year": 1992
          },
          "to": {
            "day": 24,
            "month": 3,
            "year": 2003
          }
        },
        "string": "Mar 24, 1992 to Mar 24, 2003"
      },
      "score": 8.09,
      "scored": 8.09,
      "scored_by": 9209,
      "rank": 647,
      "popularity": 723,
      "members": 28920,
      "favorites": 1024,
      "synopsis": "Six years ago, Kamui Shirou and siblings Fuuma and Kotori Monou were inseparable childhood friends. After the sudden, gruesome death of the Monou siblings' mother, Kamui was taken away from Tokyo by his own mother. In the years that passed, the two lived peacefully while Kamui strengthened his innate telekinetic abilities. When his mother passes away in 1999, her dying wish prompts him to return to Tokyo to face his \"destiny.\"\n\nWhen Kamui reappears in the city, his attitude has taken a drastic turn, and he displays the growth of his powers through violent confrontations in the streets. Various opponents come after him asking if he is \"Kamui,\" but they seem to be demanding something far more significant than his name. These fighters represent two opposite factions—the Dragons of Heaven and the Dragons of Earth—who each wish to recruit him to their cause. Piecing together clues about the apocalyptic \"promised day,\" Kamui realizes that he holds the fate of the world in his hands. Depending on which group of Dragons he allies himself with, he can either choose to save the world—or end it.\n\n[Written by MAL Rewrite]",
      "background": "X is written and illustrated by the four-person team of CLAMP. It is currently incomplete, but CLAMP has stated their intention to conclude the series one day, if possible. It started serialization in Kadokawa Shoten's Monthly Asuka shoujo manga magazine in March 1992 and stopped serialization in March 2003. Events depicted in the manga were too similar for comfort to real-life disasters that occurred in Japan, which contributed to the series' halt. Chapters of X have been collected in eighteen and a \"half\" volumes, out of a total of twenty-one volumes expected. X has been adapted into various anime that speculate about events that occurred before the manga started or after the point where the manga left off. The series was published in English by VIZ Media as 3-in-1 omnibus volumes from November 8, 2011, to August 13, 2013.",
      "authors": [
        {
          "mal_id": 1877,
          "type": "people",
          "name": "CLAMP",
          "url": "https://myanimelist.net/people/1877/CLAMP"
        }
      ],
      "serializations": [
        {
          "mal_id": 14,
          "type": "manga",
          "name": "Asuka",
          "url": "https://myanimelist.net/manga/magazine/14/Asuka"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "manga",
          "name": "Action",
          "url": "https://myanimelist.net/manga/genre/1/Action"
        },
        {
          "mal_id": 8,
          "type": "manga",
          "name": "Drama",
          "url": "https://myanimelist.net/manga/genre/8/Drama"
        },
        {
          "mal_id": 10,
          "type": "manga",
          "name": "Fantasy",
          "url": "https://myanimelist.net/manga/genre/10/Fantasy"
        },
        {
          "mal_id": 37,
          "type": "manga",
          "name": "Supernatural",
          "url": "https://myanimelist.net/manga/genre/37/Supernatural"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 40,
          "type": "manga",
          "name": "Psychological",
          "url": "https://myanimelist.net/manga/genre/40/Psychological"
        },
        {
          "mal_id": 31,
          "type": "manga",
          "name": "Super Power",
          "url": "https://myanimelist.net/manga/genre/31/Super_Power"
        }
      ],
      "demographics": [
        {
          "mal_id": 25,
          "type": "manga",
          "name": "Shoujo",
          "url": "https://myanimelist.net/manga/genre/25/Shoujo"
        }
      ]
    }
]