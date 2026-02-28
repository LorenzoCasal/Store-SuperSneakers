import { useParams } from "react-router";
import json from '../products.json';
import BuyButton from "../components/Buy-Btn";
import CartBtn from "../components/Cart-Btn";
import Display from "../components/Display";
import '../index.css';

export default function Model() {
    const { model } = useParams();
    const product = json.find(p => p.model === model);
    const productsArray = Object.values(json);
    const cardsCount = 5;

    const getRandomProduct = () => productsArray[Math.floor(Math.random() * productsArray.length)];


    return <>
        <main className="mt-10">
            <div className="w-full bg-white mb-20 rounded-2xl flex flex-row flex-wrap-reverse gap-5 place-items-center justify-center overflow-hidden" id="display">
                <div className="w-1/3 text-center" id="content-display">
                    <h1 className="text-6xl">{product.name}</h1>
                    <p className="text-sm my-6 w-full">{product.description}</p>
                    <CartBtn />
                    <label htmlFor="options" className="block mt-5">Size:
                        <select id="options" name="options">
                            <option value="7" selected>7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </label>
                    <label htmlFor="options" className="block">Color:
                        <select id="options" name="options">
                            <option value="7" selected>Base</option>
                            {product.model === 'cave' && (
                                <option value="12">Gray</option>
                            )}
                        </select>
                    </label>

                </div>
                <img src={product.img} alt="model image" className="w-1/2" />
            </div>
        </main>
        <section>
            <h1 className="font-medium text-left text-2xl pl-5">Similar models</h1>
            <div className="flex flex-row flex-wrap justify-evenly">
                {Array.from({ length: cardsCount }).map((_, idx) => {
                    const product = getRandomProduct();
                    return (
                        <article key={idx} className="cards">
                            <img src={product.img} alt={product.name} className='w-50 mb-5' />
                            <h3 className='text-xl'>{product.name}</h3>
                            <p className='text-sm'>{product.price}</p>
                            <BuyButton model={product.model} />
                        </article>
                    )
                })}
            </div>
            <h1 className="font-medium text-left text-2xl pt-20 pl-5">Other models</h1>
            <div className="flex flex-row flex-wrap justify-evenly pb-20">
                {Array.from({ length: cardsCount }).map((_, idx) => {
                    const product = getRandomProduct();
                    return (
                        <article key={idx} className="cards">
                            <img src={product.img} alt={product.name} className='w-50 mb-5' />
                            <h3 className='text-xl'>{product.name}</h3>
                            <p className='text-sm'>{product.price}</p>
                            <BuyButton model={product.model} />
                        </article>
                    )
                })}
            </div>
            <div className="py-20">
                <Display />
            </div>
        </section>
    </>
}