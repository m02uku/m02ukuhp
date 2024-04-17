import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Links from "./pages/Links";
import Top from "./pages/Top";

const App = () => {
    return (
        <div className="container">
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                    <h1>App</h1>
                    <Route path="/" element={<Top />} />
                    <Route path="/links" element={<Links />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
