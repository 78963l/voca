import styles from "./stateEx.module.css"
import {useState} from "react";

export default function StateEx() {
    const [name, setName] = useState('Mike');

    function changeName(){
        const newName = name === "Mike" ? "Jane" : "Mike";
        setName(newName)
    }
    return (
        <div>
            Hello
        </div>
    );
}
