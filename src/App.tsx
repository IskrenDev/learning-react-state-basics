import {Route, Routes} from 'react-router-dom';
import './App.css';
import CharacterCardsList from "./components/CharacterCardsList.tsx";
import CharacterForm from "./components/CharacterForm.tsx";

function App() {
    return (
    <Routes>
        <Route path={""} element={<CharacterCardsList />}/>
        <Route path={"/characters/add"} element={<CharacterForm />}/>
    </Routes>
    )
}

export default App
