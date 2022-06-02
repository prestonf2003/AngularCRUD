//The angular side models need to match the JSON data and not the C# model

export class Movie{
    id: number;
    title: string;
    releaseYear: number;
    genre: number;

    constructor(id: number, title: string, releaseYear: number, genre: number) {
        this.id = id;
        this.title = title;
        this.releaseYear = releaseYear;
        this.genre = genre;
    }
}