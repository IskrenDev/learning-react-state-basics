import "./SearchInput.css"
import {ChangeEvent} from "react";

type InputProps = {
    handleFunction: (event: ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput(props:InputProps) {
    return <input className={"search-input"} onChange={props.handleFunction}/>
}

export default SearchInput;
