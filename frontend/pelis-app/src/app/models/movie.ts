export interface Movie {
    id: number;
    title: string;
    href: string;
    year: number;
    cast: Cast[];
    genres: string[];
    extract: string;
    thumbnail: string;
    thumbnailWidth: number;
    thumbnailHeight: number;
}

export interface Cast {
    firstName: string;
    lastName: string;
}