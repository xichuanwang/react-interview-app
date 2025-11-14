import { useState } from 'react';
import { API_ENDPOINT, API_DEFAULT_limit } from './../constants/api';
import SearchInput from './SearchInput';
import { usePokemonApi } from '../hooks/pokemon-api';
import './PokemonList.css';
import { Pokemon } from '../types/pokemon';
import PokemonListItem from './PokemonListItem';
import { pluralizeWord } from '../utils/strings';
import GenericError from './GenericError';

/**
 * Main component to render the list of Pokemons from the poke API.
 * 
 * Handles frontend searching of the current rendered pokemons
 * 
 * Error state with retry
 * Loading state
 */
export default function PokemonList() {
  const { fetchData, data, isLoading, error } = usePokemonApi(`${API_ENDPOINT}?limit=${API_DEFAULT_limit}`);
  const [ filterData, setFilteredData ] = useState<Pokemon[]>([]);

  // frontend search filter
  // some additional improvements and thoughts:
  // 1. would be better if API supports search query param
  // 2. if search data is larger, then consider useMemo here to optimze performance
  // 3. debounce the input change event to reduce number of filter calls if the list is larger or API call is involved
  const searchFor = (term: string) => {
    if (!data || term.trim() === '') {
      setFilteredData([]);
      return;
    }
    
    const filtered = data.results.filter((pokemon: { name: string }) =>
      pokemon.name.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredData(filtered);
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    searchFor(term);
  }

  return (
    <>
      {
        error && <GenericError retryCallback={fetchData} retryButtonMessage='Try loading the pokemons again'/>
      }

      {
        isLoading && <div>Loading pokemons...</div>
      }
      
      {/* Search input component */}
      <SearchInput onChange={changeHandler}/>

      {
        filterData.length > 0 && (<div>Found {filterData.length} {pluralizeWord(filterData.length, 'result')}</div>)
      }

      {/* Rendering of the pokemon lists */}
      <ul className="pokemon-list list-none mt-5">

        {/* Filtered data from the search input */}
        {
          filterData.map((pokemon) => (
            <PokemonListItem key={pokemon.name} name={pokemon.name} />
          ))
        }

        {
          // if no filtered data, show all data
          !filterData.length && data?.results && data.results.map((pokemon) => (
            <PokemonListItem key={pokemon.name} name={pokemon.name} />
          ))
        }
      </ul>
    </>
  )
};