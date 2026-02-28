import logo from '/images/logo.png';
import { Link } from 'react-router';
import '../index.css';

export default function SignUp() {
    return <>
        <main className="login rounded-3xl mb-20">

            <div className='w-2/5 h-full bg-white flex flex-col gap-5 rounded-l-3xl items-center justify-center text-center' id='container'>

                <img src={logo} alt="SuperSneakers' logo" className='w-32' />
                <h1 className="text-center font-bold text-4xl">Welcome!</h1>
                <p className='text-center text-md font-extralight'>Create your account</p>

                <form action="" method="post" className="w-4/5 flex flex-col gap-5">
                    <label htmlFor="name">
                        <input type="name" name="name" id="name" placeholder='Name' />
                    </label>
                    <label htmlFor="email">
                        <input type="email" name="email" id="email" placeholder='Email' />
                    </label>
                    <label htmlFor="tel">
                        <input type="tel" name="tel" id="phone" placeholder='Phone' />
                    </label>
                    <label htmlFor="password">
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </label>
                    <button className="login-btn" type="submit">Log In</button>
                    <Link to="/LogIn" className='text-md opacity-60 hover:opacity-100 cursor-pointer'>Have an account? Log In</Link>
                </form>

            </div>

        </main>
    </>
}