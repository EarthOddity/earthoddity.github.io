import React, { useState } from "react";
import PokemonInfo from "./PokemonInfo";

function PokemonCard(props) {
    const [showModal, setShowModal] = useState(false);

    const getTypeColor = (types) => {
        const type = types.split(',')[0]; // Split the string into an array and use the first type

        switch (type) {
            case "grass":
                return "#9bcc50";
            case "poison":
                return "#b97fc9";
            case "fire":
                return "#fd7d24";
            case "flying":
                return "#3dc7ef";
            case "water":
                return "#4592c4";
            case "bug":
                return "#729f3f";
            case "normal":
                return "#a4acaf";
            case "electric":
                return "#eed535";
            case "ground":
                return "#ab9842";
            case "fairy":
                return "#fdb9e9";
            case "fighting":
                return "#d56723";
            case "psychic":
                return "#f366b9";
            case "rock":
                return "#a38c21";
            case "steel":
                return "#9eb7b8";
            case "ghost":
                return "#7b62a3";
            case "ice":
                return "#51c4e7";
            case "dragon":
                return "#f16e57";
            default:
                return 'gray';
        }
    };
    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <div>
                <div
                    className="pokemon-card"
                    onClick={handleClick}
                    style={{ backgroundColor: getTypeColor(props.type) }}
                >
                    <h1 className="pokeID">{props.id}</h1>
                    <img src={props.image} alt={props.name} />
                    <h2>{props.name}</h2>
                </div>
                <PokemonInfo
                    showModal={showModal}
                    handleClose={handleClose}
                    id={props.id}
                    name={props.name}
                    image={props.image}
                    type={props.type}
                    height={props.height}
                    weight={props.weight}
                    abilities={props.abilities}
                    stats={props.stats}
                />
            </div>
        </>
    );
}

export default PokemonCard;
