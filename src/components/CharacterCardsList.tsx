import "./CharacterCardsList.css";
import {ChangeEvent, useState} from "react";
import CharacterCard from "./CharacterCard.tsx";
import allCharacters from "../data/allCharacters.ts";
import RickAndMortyCharacter from "../interfaces/RickAndMortyCharacter.ts";
import SearchInput from "./SearchInput.tsx";

function CharacterCardsList() {
    const [characters , setCharacters] = useState<RickAndMortyCharacter[]>(allCharacters);

    function handleOnChange(event:ChangeEvent<HTMLInputElement>){
        const searchedCharacters:RickAndMortyCharacter[] = allCharacters
            .filter(character => character.name.includes(event.target.value))
        setCharacters(searchedCharacters);
    }

    return (
        <>
            <SearchInput handleFunction={handleOnChange}/>
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
