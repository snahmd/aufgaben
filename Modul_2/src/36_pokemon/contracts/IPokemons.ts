export interface IPokemons {
  count: number;
  next: string;
  previous: null;
  results: IPokemonResult[];
}

export interface IPokemonResult {
  name: string;
  url: string;
}

export interface IPokemonType {
  pokemon: IPokemonResult;
}
