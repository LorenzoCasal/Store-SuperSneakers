import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollReset from './components/Scroll-Reset';
import Products from './pages/Products';
import Model from './pages/Model';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import ForgetPasswordReset from './pages/ForgetPasswordReset';
import Cart from './pages/Cart';
import Purchase from './pages/Purchase';
import Terms from './pages/Terms';

export default function App() {
    return (
        <BrowserRouter>
            <ScrollReset />
            <Nav /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Products/:model" element={<Model />} />
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/ForgotPasswordReset" element={<ForgetPasswordReset />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Cart/Purchase" element={<Purchase />} />
                <Route path="/TermsAndConditions" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}