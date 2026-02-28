import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Products from './pages/Products';
import Model from './pages/Model';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import ForgetPasswordReset from './pages/ForgetPasswordReset';
import Cart from './pages/Cart';

export default function App() {
    return (
        <BrowserRouter>
            <Nav /> 
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/Products" exact element={<Products />} />
                <Route path="/Products/:model" exact element={<Model />} />
                <Route path="/LogIn" exact element={<LogIn />} />
                <Route path="/SignUp" exact element={<SignUp />} />
                <Route path="/ForgotPasswordReset" exact element={<ForgetPasswordReset />} />
                <Route path="/Cart" exact element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}