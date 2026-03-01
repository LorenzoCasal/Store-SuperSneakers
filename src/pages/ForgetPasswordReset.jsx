import logo from '../assets/logo.png';
import { Link } from 'react-router';
import '../index.css';

export default function ForgetPasswordReset() {
    return <>
        <main className="login rounded-3xl mb-20">

            <div className='w-2/5 h-full bg-white flex flex-col gap-5 rounded-l-3xl items-center justify-center text-center' id='container'>

                <img src={logo} alt="SuperSneakers' logo" className='w-32' />
                <h1 className="text-center font-bold text-4xl">Reset your password</h1>
                <p className='text-center text-md font-extralight'>We will send you an email with a code to verify that the account belongs to you.</p>

                <form action="" method="post" className="w-4/5 flex flex-col gap-5">
                    <label htmlFor="email">
                        <input type="email" name="email" id="email" placeholder='Email' />
                    </label>
                    <button className="login-btn" type="submit">Log In</button>
                    <Link to="/SignUp" className='text-md opacity-60 hover:opacity-100 cursor-pointer'>Don't have an account? Sign Up</Link>
                    <Link to="/LogIn" className='text-md opacity-60 hover:opacity-100 cursor-pointer'>◀</Link>
                </form>

            </div>

        </main>
    </>
}