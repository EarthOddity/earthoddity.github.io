import React from "react";

function PokemonInfo(props) {
    if (!props.showModal) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.handleClose}>
                    &times;
                </span>
                <h1>{props.id}</h1>
                <h2>{props.name}</h2>
                <img src={props.image} alt={props.name} />
                <p>Type: {props.type}</p>
                <p>Height: {props.height}</p>
                <p>Weight: {props.weight}</p>
                <p>Abilities: {props.abilities.join(", ")}</p>
                <p>
                    Stats:
                    <ul>
                        {props.stats.map((stat, index) => (
                            <li key={index}>
                                {stat.name}: {stat.base_stat}
                            </li>
                        ))}
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default PokemonInfo;
