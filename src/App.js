import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';

function App() {
    return ( <
        div className = "App" >
        <NavBar/>
        <
        header className = "App-header" >
        <
        header img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p > sunmis web page < /p>   <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React < /a> </header >
        <
        /div>
    );
}

export default App;