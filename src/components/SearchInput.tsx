import {ChangeEvent} from "react";

type InputProps = {
    handleFunction: (event: ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput(props:InputProps) {
    return <input onChange={props.handleFunction}/>
}

export default SearchInput;
