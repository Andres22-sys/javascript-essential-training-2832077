class Book{
    constructor(
        title,
        author,
        pages,
        publisher,
        datePublished,
        genre,
        language,
        country,
        characters,
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.publisher = publisher;
        this.datePublished = datePublished;
        this.genre = genre;
        this.language = language;
        this.country = country;
        this.characters = characters;
    }
    bookAge() {
        let now = new Date();
        let published = new Date(this.datePublished);
        let elapsed = now - published;
        let daysSincePublished = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSincePublished;
    }
}
export default Book;