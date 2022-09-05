import React from "react";
import { useState } from "react";
import Attribute from "../../Components/Attribute/Attribute";
import "./HomePage.css";

const HomePage = () => {
  const [imageUrl, setImageUrl] = useState("montu");
  const [name, setName] = useState("squirtle");
  const [height, setheight] = useState(88);
  const [weight, setweight] = useState(100);
  const [moves, setmoves] = useState(50);
  const [exp, setexp] = useState(50);
  let pokemonName = "";
  const pokemonlist = ["pikachu", "onix", "bulbasaur", "charizard"];

  const underConstruction = () => {
    alert("This feature is under development");
  };

  const findPokemon = () => {
    pokemonName = document.querySelector("#h-l-input").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setheight(data.height > 100 ? 100 : data.height);
        setweight(
          (data.weight * 100) / 2000 > 100 ? 100 : (data.weight * 100) / 2000
        );
        setmoves(data.moves.length > 100 ? 100 : data.moves.length);
        setexp(
          data.base_experience / 2 <= 100 ? data.base_experience / 2 : 100
        );
        setName(data.name);
        setImageUrl(data.sprites.other["official-artwork"].front_default);
      })
      .catch((e) => {
        alert("Pokemon not found");
      });
    document.querySelector("#h-l-input").value = "";
  };
  return (
    <div className="h-main">
      <div className="h-left">
        <div className="h-l-image">
          {/* <img src={require("../../images/pokemon.png")} alt="pokemon" /> */}
        </div>
        <div className="h-l-text1">Catch 'Em All!</div>
        <div className="h-l-text2">Find Your Pokemon here...</div>
        <div className="h-l-search-box">
          <input id="h-l-input" type="text" placeholder="Search Pokemon" />
          <div onClick={findPokemon}></div>
        </div>
        <button className="h-l-gamestart" onClick={underConstruction}>
          start GAME
        </button>
        <img
          className="h-r-image"
          //   src={require("../../images/charizard-nobg.png")}
          src={
            imageUrl === "montu"
              ? "https://in.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png"
              : imageUrl
          }
        ></img>
      </div>

      <div className="h-right">
        <div className="h-r-name">
          <div>.</div>
          <div>{name.toUpperCase()}</div>
        </div>
        <div className="h-r-stats">
          <div className="h-r-statbox">
            <div>BASE EXPERIENCE</div>
            <Attribute data={exp} />
          </div>
          <div className="h-r-statbox">
            <div>FIGHTING SKILLS</div>
            <Attribute data={moves} />
          </div>
          <div className="h-r-statbox">
            <div>HEIGHT</div>
            <Attribute data={height} />
          </div>
          <div className="h-r-statbox">
            <div>WEIGHT</div>
            <Attribute data={weight} />
          </div>
        </div>
        <div className="h-r-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem maiores
          autem expedita reiciendis illo esse sunt placeat architecto aut sed.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
