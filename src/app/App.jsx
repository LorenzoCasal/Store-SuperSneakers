import { BrowserRouter, Routes, Route } from 'react-router';
import Home from '../features/home/Home';
import NotFound from '../pages/NotFound';
import Nav from '../shared/components/Nav';
import Footer from '../shared/components/Footer';
import ScrollReset from '../shared/components/Scroll-Reset';
import Products from '../features/products/Products';
import Model from '../features/products/Model';
import LogIn from '../features/auth/LogIn';
import SignUp from '../features/auth/SignUp';
import ForgetPasswordReset from '../features/auth/ForgetPasswordReset';
import Cart from '../features/cart/Cart';
import Purchase from '../features/purchase/Purchase';
import Terms from '../pages/Terms';

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