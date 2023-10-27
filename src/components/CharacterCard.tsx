import "./CharacterCard.css";
import Character from "../interfaces/Character.ts";

function CharacterCard({name,status,species,gender,imageUrl} : Character) {
    return(
        <div className={"character-card"}>
            <img src={imageUrl} alt={name}/>
            <h3>{name}</h3>
            <p>Gender: {gender}</p>
            <p>Species: {species}</p>
            <p>Status: {status}</p>
        </div>
    )
}

export default CharacterCard;