import PokemonList from "./components/PokemonList";
import './App.css';

export default function App() {
  return (
    <>
      <div className="place-items-center h-screen">
        <header className="title text-2xl font-bold p-10">Pokémon List</header>
        <main>
          <PokemonList/>
        </main>
      </div>
    </>
  );
}