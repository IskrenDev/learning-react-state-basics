import "./CharacterCardsList.css";
import {ChangeEvent, useState} from "react";
import CharacterCard from "./CharacterCard.tsx";
import allCharacters from "../data/allCharacters.ts";
import RickAndMortyCharacter from "../interfaces/RickAndMortyCharacter.ts";
import SearchInput from "./SearchInput.tsx";
import ErrorMessage from "./ErrorMessage.tsx";

function CharacterCardsList() {
    const [characters , setCharacters] = useState<RickAndMortyCharacter[]>(allCharacters);
    const [count , setCount] = useState<number>(0);

    function onChangeHandler(event:ChangeEvent<HTMLInputElement>):void{
        const searchedCharacters:RickAndMortyCharacter[] = allCharacters
            .filter((character:RickAndMortyCharacter) =>
                character.name.includes(event.target.value) ||
                character.gender.includes(event.target.value) ||
                character.species.includes(event.target.value) ||
                character.status.includes(event.target.value)
            )
        setCharacters(searchedCharacters);
    }

    function onClickHandler() {
        const initialCount:number = count;
        const searchedCharacters:RickAndMortyCharacter[] = [];
        for (let i = initialCount; i < initialCount+5; i++) {
            searchedCharacters.push(allCharacters[i])
        }
        count<allCharacters.length-5 ? setCount(initialCount+5) : setCount(0);
        setCharacters(searchedCharacters);
    }

    return (
        <section className={"characters-list"}>
            <h1>Rick and morty</h1>
            <SearchInput onChangeFunction={onChangeHandler} onClickFunction={onClickHandler} total={characters.length}/>
            <div className={"characters-list-grid"}>
                {characters.length === 0 ? <ErrorMessage /> :characters.map((character:RickAndMortyCharacter) => {
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
