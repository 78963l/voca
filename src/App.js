import "./App.css";
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import DeleteDay from "./component/DeleteDay";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<DayList />}></Route>
                    <Route path="/day/:day" element={<Day />}></Route>
                    <Route path="/create_word" element={<CreateWord />}></Route>
                    <Route path="/create_day" element={<CreateDay />}></Route>
                    <Route path="/delete_day" element={<DeleteDay />}></Route>
                    <Route path="/*" element={<EmptyPage />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
