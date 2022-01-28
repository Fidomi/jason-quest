import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Resultats from "./pages/Resultats";
import Error from "./pages/Error";

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/resultats" element={<Resultats />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
};
