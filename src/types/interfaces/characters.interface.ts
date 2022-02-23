import { Episode } from './episodes.interface';
import { HTTPResponse, MultipleResponse } from './general.interface';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: Episode[];
  created: string;
}

export type Characters = MultipleResponse<Character>;
export type CharactersResponse = HTTPResponse<{ characters: Characters }>;
export type characterResponse = HTTPResponse<{ character: Character }>;
export interface FilterCharacter {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}
