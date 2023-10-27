import "./CharacterCardsList.css";
import {ChangeEvent, useState} from "react";
import CharacterCard from "./CharacterCard.tsx";
import allCharacters from "../data/allCharacters.ts";
import RickAndMortyCharacter from "../interfaces/RickAndMortyCharacter.ts";
import SearchInput from "./SearchInput.tsx";
import ErrorMessage from "./ErrorMessage.tsx";

function CharacterCardsList() {
    const [characters , setCharacters] = useState<RickAndMortyCharacter[]>(allCharacters);

    function handleOnChange(event:ChangeEvent<HTMLInputElement>){
        const searchedCharacters:RickAndMortyCharacter[] = allCharacters
            .filter(character =>
                character.name.includes(event.target.value) ||
                character.gender.includes(event.target.value) ||
                character.species.includes(event.target.value) ||
                character.status.includes(event.target.value)
            )
        setCharacters(searchedCharacters);
    }

    return (
        <section className={"characters-list"}>
            <h1>Rick and morty</h1>
            <SearchInput handleFunction={handleOnChange}/>
            <div className={"characters-list-grid"}>
                {characters.length === 0 ? <ErrorMessage /> :characters.map((character) => {
                    return (<CharacterCard
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        imageUrl={character.image}
                    />)
                })}
            </div>
        </section>
    )
}

export default CharacterCardsList;
