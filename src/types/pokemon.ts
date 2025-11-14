export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListProps {
  data: Pokemon[];
};

export interface PokemonObject {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
