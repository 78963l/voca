import "./App.css";
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<DayList />}></Route>
                    <Route path="/day/1" element={<Day num="1" />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
