import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import World from './component/World';

function App() {
  const name = "Tom";
  const naver = {
    name: "네이버",
    url: "https://naver.com",
  }
  return <div className="App">
    <h1 style={{
      color: "red",
      backgroundColor: "green",
    }}> hello, {name}. <p>{2+3}</p>
    </h1>
    <a href={naver.url}>{naver.name}</a>
    <div className="box"></div>
    <Hello />
    <Welcome />
  </div>
}

export default App;

