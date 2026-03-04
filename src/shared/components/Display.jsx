import products from '../../features/products/data/products.json';
import image from '../../assets/aetherpulse.png'
import BuyButton from './Buy-Btn';

export default function Display() {
    const featured = products[0];
    console.log(featured.imgDisplay);
    return (
        <div className='h-screen rounded-2xl flex flex-row flex-wrap-reverse items-center justify-center overflow-hidden' id='display'>
            <div className='w-xl pl-10'>
                <h1 className='text-7xl mb-5'>{featured.name}</h1>
                <p className='text-md mb-10 w-10/12'>{featured.description}</p>
                <BuyButton model={featured.model} />
            </div>
            <img src={image} className='w-3xl rotate-30 transition-all'></img>
        </div>
    )
}