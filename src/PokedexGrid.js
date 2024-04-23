import React from 'react';
import PokemonCard from './PokemonCard';

function PokedexGrid({ pokeCards }) {
    return (
        <>
            <div className="pokedex-grid">
                {pokeCards.map((pokemon, index) => (
                    <PokemonCard
                        key={index}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        type={pokemon.type}
                        height={pokemon.height}
                        weight={pokemon.weight}
                        abilities={pokemon.abilities}
                        stats={pokemon.stats}
                    />
                ))}
            </div>
        </>
    );
}

export default PokedexGrid;