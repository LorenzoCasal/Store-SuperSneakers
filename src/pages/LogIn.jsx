import logo from '/images/logo.png';
import { Link } from 'react-router';
import '../index.css';

export default function LogIn() {
    return <>
        <main className="login rounded-3xl mb-20">

            <div className='w-2/5 h-full bg-white flex flex-col gap-5 rounded-l-3xl items-center justify-center text-center' id='container'>

                <img src={logo} alt="SuperSneakers' logo" className='w-32' />
                <h1 className="text-center font-bold text-4xl">Welcome Back!</h1>
                <p className='text-center text-md font-extralight'>Log in to your account</p>

                <form action="" method="post" className="w-4/5 flex flex-col gap-5">
                    <label htmlFor="email">
                        <input type="email" name="email" id="email" placeholder='Email' />
                    </label>
                    <label htmlFor="password">
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </label>
                    <Link to="/ForgotPasswordReset" className='text-sm opacity-60 hover:opacity-100 cursor-pointer'>Forgot password?</Link>
                    <button className="login-btn" type="submit">Log In</button>
                    <Link to="/SignUp" className='text-md opacity-60 hover:opacity-100 cursor-pointer'>Don't have an account? Sign Up</Link>
                </form>

            </div>

        </main>
    </>
}