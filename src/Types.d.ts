export abstract class Parser {
  /**
   * Returns true if the parser will accept the file based on file name
   *
   * @param fileName the name of the file to check whether to parse or not
   */
  abstract canParseString(fileName: string): boolean;

  abstract parseFile(fileContents: string, fileName: string): null;

  abstract createFileContents(): string;
}

export class Song {
  title: string;
  artist: string;
  sources: SongSources;
}

export class SongSources {
  youtube?: string;
  spotify?: string;
  filePath?: string;
}

export class Playlist {
  title: string;
  songs: Song[];
}

export class Config {
  databasePath?: string;
}
