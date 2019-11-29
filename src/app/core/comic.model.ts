export class Comic {
  id: number;
  title: string;
  description: string;
  prices: string;
  thumbnail: Thumbnail;

  constructor(id: number, title: string, description: string, prices: string, path: string, extension: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.prices = prices;
    this.thumbnail = new Thumbnail(path, extension);
  }
}

class Thumbnail {
  path: string;
  extension: string;

  constructor(path: string, extension: string) {
    this.path = path;
    this.extension = extension;
  }
}
