import "./SearchInput.css"
import {ChangeEvent} from "react";

type InputProps = {
    onChangeFunction: (event:ChangeEvent<HTMLInputElement>) => void,
    onClickFunction: () => void,
    total:number
}

function SearchInput(props:InputProps) {

    return(
        <div className={"search"}>
            <input
                className={"search-input"}
                onChange={props.onChangeFunction}
                placeholder={"e.g. Rick, Human, Alive..."}
            />
            <p className={"character-count"}>{props.total}</p>
            <button className={"btn-five-characters"} onClick={props.onClickFunction}>🖐🏿 Characters</button>
        </div>
    )


}

export default SearchInput;
