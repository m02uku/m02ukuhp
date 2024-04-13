import "./App.css";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="container">
            <Sidebar />
            <MainPage />
        </div>
    );
}

export default App;
