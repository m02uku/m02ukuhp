import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Links from "./pages/Links";
import Top from "./pages/Top";

const App = () => {
    return (
        <div className="container">
            <h1>Appa{process.env.PUBLIC_URL}</h1>
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Top />} />
                    <Route path="/links" element={<Links />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
