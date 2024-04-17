import { Route, Routes } from "react-router-dom";
import "./App.css";
import FeaturesPage from "./pages/FeaturesPage";
import Navbar from "./components/NavBar";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import DiscoverPage from "./pages/DiscoverPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar></Navbar>

            <Routes>
                <Route path="/" element={<FeaturesPage />}></Route>
                <Route path="/pricing" element={<PricingPage />}></Route>
                <Route path="/blog" element={<BlogPage />}></Route>
                <Route path="/discover" element={<DiscoverPage />}></Route>

                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/signup" element={<SignUpPage />}></Route>
            </Routes>

            <Footer></Footer>
        </>
    );
}

export default App;
