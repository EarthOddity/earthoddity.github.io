import React from "react";
import NavBar from "./NavBar";
import { useEffect } from "react";

function About() {
    useEffect(() => {
        console.log('About page rendered/route changed'); //Remove the check
    }, []);
    return (
        <>
            <div className="aboutPage">
                <p id="slogan">Let's catch them all!</p>
                <p>
                    Hey you! Do you want to capture the best pokémons you can find? Here
                    is the Pokedex where you can find all the information needed to
                    understand Pokémons. From their types to their abilities, everything
                    you want is in here. You can even check how tall your best companion
                    is. This page was brought to you by Ginta, Sergio, Alejandro and Martyna.
                </p>
            </div>
        </>
    );
}

export default About;