// import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";
// import { useEffect, useState } from 'react';
import useFetch from "./../hooks/useFetch";

export default function Day() {
    //dummy.words
    const params = useParams();
    // const wordList = dummy.words.filter(word => word.day === Number(params.day));
    // const [words, setWords] = useState([]);
    // useEffect(()=>{
    //     fetch(`http://localhost:3001/words?day=${params.day}`)
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         setWords(data);
    //     })
    // }, [params.day]);

    const words = useFetch(`http://localhost:3001/words?day=${params.day}`);
    return (
        <div>
            <h2>Day {params.day}</h2>
            {words.length === 0 && <sapn>Loading...</sapn>}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
