import './index.css'
import React from "react";
import PokedexGrid from "./PokedexGrid";
import { useState, useEffect } from "react";


function PokedexPage() {
    const [pokeCards, setPokeCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [allPokemons, setAllPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const pokemonsPerPage = 24;

    useEffect(() => {
        fetchAllPokemons();
        fetchPokemons(page);
    }, [page]);

    useEffect(() => {
        console.log(pokeCards);
    }, [pokeCards]);

    const fetchPokemons = (page) => {
        const offset = (page - 1) * pokemonsPerPage;
        setIsLoading(true);
        fetch(
            `https://pokeapi.co/api/v2/pokemon/?limit=${pokemonsPerPage}&offset=${offset}`
        )
            .then((response) => response.json())
            .then((data) => {
                const promises = data.results.map((pokemon, index) => {
                    return fetch(pokemon.url)
                        .then((response) => response.json())
                        .then((pokemonData) => {
                            return {
                                id: offset + index + 1,
                                name: pokemon.name,
                                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${offset + index + 1
                                    }.png`,
                                height: pokemonData.height,
                                weight: pokemonData.weight,
                                type: pokemonData.types
                                    .map((type) => type.type.name)
                                    .join(", "),
                                abilities: pokemonData.abilities.map(
                                    (ability) => ability.ability.name
                                ),
                                stats: pokemonData.stats.map((stat) => ({
                                    name: stat.stat.name,
                                    base_stat: stat.base_stat,
                                })),
                            };
                        });
                });

                Promise.all(promises).then((updatedData) => {
                    setPokeCards(updatedData);
                    setIsLoading(false);
                });
            });
    };

    const fetchAllPokemons = async (
        url = "https://pokeapi.co/api/v2/pokemon"
    ) => {
        if (isLoading) {
            return;
        }

        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();

        const promises = data.results.map((pokemon, index) => {
            return fetch(pokemon.url)
                .then((response) => response.json())
                .then((pokemonData) => {
                    return {
                        id: pokemonData.id,
                        name: pokemon.name,
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`,
                        height: pokemonData.height,
                        weight: pokemonData.weight,
                        type: pokemonData.types.map((type) => type.type.name).join(", "),
                        abilities: pokemonData.abilities.map(
                            (ability) => ability.ability.name
                        ),
                        stats: pokemonData.stats.map((stat) => ({
                            name: stat.stat.name,
                            base_stat: stat.base_stat,
                        })),
                    };
                });
        });
        const allPokemonData = await Promise.all(promises);
        setAllPokemons((prev) => {
            const newPokemonData = allPokemonData.filter(
                (pd) => !prev.some((p) => p.id === pd.id)
            );
            return [...prev, ...newPokemonData];
        });
        setIsLoading(false);

        // If there is a next page, fetch it
        if (data.next) {
            fetchAllPokemons(data.next);
        }
    };

    const loadNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const loadPreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const filteredPokeCards = allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app">
            <input
                id="searchField"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Pokemon"
            />
            <PokedexGrid pokeCards={searchTerm ? filteredPokeCards : pokeCards} />
            <button onClick={loadPreviousPage}>Previous</button>
            <button onClick={loadNextPage}>Load more...</button>
        </div>
    );
}

export default PokedexPage;
