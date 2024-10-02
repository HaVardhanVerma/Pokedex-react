import { useEffect, useState } from "react";
import { PokemonCom } from "./PokemonCom";
import img from "./assets/pokeball.png";
import {Loading} from "./Loading.jsx";
import './App.css';

export const Pokemon = () => {

    // const PokemonData = fetch("https://pokeapi.co/api/v2/pokemon?limit=400");

    const [Pokemon, setPokemon] = useState([]);
    const [load, setLoad] = useState(false);
    const [search, setSearch] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon?limit=649";

    async function fetchData() {
        try {
            const res = await fetch(API);
            const data = await res.json();
            // console.log("This is Data:- ", data.results);

            
            const getUrl = data.results.map(async (curr) => {
                
                const res = await fetch(curr.url);
                const Data = await res.json();

                // console.log(Data);
                return Data;

            });
            
            const finalUrl = await Promise.all(getUrl);

            // console.log("This is getUrl:- ", finalUrl);
            setPokemon(finalUrl);
            // console.log("Hello I am here:");
            setLoad(true);


        } catch (error) {
            console.log("Error");
        }
    }

    // if(load === false) {
    //     return <p>Loading</p>
    // }


    // console.log("Pokemon :- ", Pokemon);
    
    useEffect(() => {
        fetchData();
    }, []);

    const searchData = Pokemon.filter((currData) => currData.name.toLowerCase().includes(search.toLowerCase()));

    if(load === false) {
        return <Loading />
    }

    return (

        <section>
            <header className="section_header">
                <img src={img} className="img_1"/>
                <h1>Pokedex</h1>
                <img src={img} className="img_2"/>
            </header>

            <div className="section_input">
                <input type="text" placeholder="🔎 Search Pokemon" className="input_area" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            
            <div className="section_container">

                <ul className="Pokemon_container">

                    {searchData.map((curr) => {
                        return (
                            <PokemonCom key={curr.id} PokemonData={curr}/>
                        )
                    })}

                </ul>

            </div>


        </section>


    )

}