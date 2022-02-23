import { Character } from './characters.interface';
import { HTTPResponse, MultipleResponse } from './general.interface';

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  created: string;
}

export type Episodes = MultipleResponse<Episode>;
export type EpisodeResponse = HTTPResponse<{ episode: Episode }>;
