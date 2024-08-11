import img from "./assets/pokeball.png";
import './App.css';

export const PokemonCom = (curr) => {
    // console.log("This is curr:- ", curr);

    // console.log(typeof curr.PokemonData.types[0].type.name);


    return (

        <div className="Pokemon_card">

            <div className="Pokemon_images">
                <img src={curr.PokemonData.sprites.other.dream_world.front_default} alt={curr.PokemonData.name} className="pokemon_image"/>
                <img src={img} alt="Pokeball" className="pokeball_image_1"/>
                <img src={img} alt="Pokeball" className="pokeball_image_2"/>
            </div>
            

            <p className="pokemon_name">{curr.PokemonData.name.toUpperCase()}</p>

            <p className="pokemon_types">
                {curr.PokemonData.types.map((currType) => currType.type.name).join(", ").toUpperCase()}
            </p>

            <div className="pokemon_properties">

                <img src={img} alt="Pokeball" className="pokeball_image_4"/>

                <div className="pokemon_prop">
                    <p className="prop_value">
                        <span className="prop_key">Height: </span> {curr.PokemonData.height}
                    </p>

                    <p className="prop_value">
                        <span className="prop_key">Weight: </span> {curr.PokemonData.weight}
                    </p>

                    <p className="prop_value">
                        <span className="prop_key">Speed: </span> {curr.PokemonData.stats[5].base_stat}
                    </p>
                </div>

                <div className="pokemon_prop">
                    <p className="prop_value">
                        <span className="prop_key">Attack: </span> {curr.PokemonData.stats[1].base_stat}
                    </p>

                    <p className="prop_value">
                        <span className="prop_key">Defence: </span> {curr.PokemonData.stats[2].base_stat}
                    </p>

                    <p className="prop_value">
                        <span className="prop_key">Ability: </span>
                        {curr.PokemonData.abilities[0].ability.name}
                    </p>
                </div>
            </div>

        </div>

    )
}