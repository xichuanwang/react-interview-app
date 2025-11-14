/**
 * Simple component to render a a single pokemon name within a parent list
 */
export default function PokemonListItem({ name }: { name: string }) {
  return (
    <li className="pokemon-list-item" key={name}>{name}</li>
  )
}