import { products } from '../utils/images';
import BuyButton from './Buy-Btn';

export default function Display() {
    const featured = products[0];

    return (
        <div className='h-screen rounded-2xl flex flex-row flex-wrap-reverse items-center justify-center overflow-hidden' id='display'>
            <div className='w-xl pl-10'>
                <h1 className='text-7xl mb-5'>{featured.name}</h1>
                <p className='text-md mb-10'>{featured.description}</p>
                <BuyButton model={featured.model} />
            </div>
            <img src={featured.imgDisplay} className='w-3xl rotate-30 transition-all'></img>
        </div>
    )
}