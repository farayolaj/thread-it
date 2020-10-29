export interface INoteData {
  /** Note Id */
  id: string;
  /** Content of the note */
  content: string;
  /** List of tags note belongs to */
  tags: string[];
  /** Time note was created in milliseconds */
  time: number;
}

export interface IUser {
  id: string;
  name: string;
  profilePic: string;
}

/**
 * A generic interface for individual stories
 */
export interface IStory<T> {
  (args: T): JSX.Element;
  args?: T
}