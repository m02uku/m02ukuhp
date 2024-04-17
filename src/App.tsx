import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Links from "./pages/Links";
import Top from "./pages/Top";

const App = () => {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path="/m02ukuhp" element={<Top />} />
                    <Route path="/links" element={<Links />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
