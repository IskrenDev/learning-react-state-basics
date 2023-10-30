import {useState} from "react";

function CharacterForm() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [specie, setSpecie] = useState("");
    const [status, setStatus] = useState("");

    return (
        <>
            <div>
                <h2>Add Character</h2>
                <form>
                    <label>
                        Name
                        <input type={"text"}
                        value={name}
                        onChange={event => setName(event.target.value)}/>
                    </label>

                    <label>
                        Gender
                        <input type={"text"}
                               value={gender}
                               onChange={event => setGender(event.target.value)}/>
                    </label>

                    <label>
                        Specie
                        <input type={"text"}
                               value={specie}
                               onChange={event => setSpecie(event.target.value)}/>
                    </label>

                    <label>
                        Status
                        <input type={"text"}
                               value={status}
                               onChange={event => setStatus(event.target.value)}/>
                    </label>

                    <button>Add</button>
                </form>
            </div>
        </>
    )
}

export default CharacterForm