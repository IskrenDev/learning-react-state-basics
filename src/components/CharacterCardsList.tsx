import {useState} from "react";
import CharacterCard from "./CharacterCard.tsx";
import allCharacters from "../allCharacters.ts";
import RickAndMortyCharacter from "../interfaces/RickAndMortyCharacter.ts";

function CharacterCardsList() {

    const [characters , setCharacters] = useState<RickAndMortyCharacter[]>(allCharacters);

    return (
        <>
            <input onChange={(event) => {
                const searchedCharacters = allCharacters
                    .filter(character => character.name.includes(event.target.value))
                setCharacters(searchedCharacters);
            }}/>
            <div className={"characters-list"}>
                {characters.map((character) => {
                    return (<CharacterCard
                        key={character.id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        imageUrl={character.image}
                    />)
                })}
            </div>



        </>
    )
}

export default CharacterCardsList;
