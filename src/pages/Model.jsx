import { useParams } from "react-router";
import { useState } from "react";
import { products } from "../utils/images";
import { useCart } from "../context/CartContext";
import BuyButton from "../components/Buy-Btn";
import QuantitySelect from "../components/Stock";
import CartBtn from "../components/Cart-Btn";
import Display from "../components/Display";
import "../index.css";

export default function Model() {
    const [quantity, setQuantity] = useState(1);
    const { model } = useParams();
    const product = products.find(p => p.model === model);

    if (!product) {
        return <h1>Product not found</h1>;
    }

    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const [size, setSize] = useState("7");
    const selectedVariant = product.variants[selectedVariantIndex];
    const productsArray = products;
    const cardsCount = 5;
    const getRandomProduct = () =>
        productsArray[Math.floor(Math.random() * productsArray.length)];

    const { addToCart } = useCart();

    function handleAddToCart() {
        const item = {
            model: product.model,
            name: product.name,
            color: selectedVariant.color,
            img: selectedVariant.img,
            size,
            quantity,
            price: selectedVariant.price,
            subtotal: selectedVariant.price * quantity,
        };
        
        addToCart(item);
    }

    return (
        <>
            <main>
                <div className="w-full bg-white mb-20 rounded-2xl flex flex-row flex-wrap-reverse gap-20 max-md:gap-0 place-items-center justify-center overflow-hidden"
                    id="display">
                    <div className="w-1/3 max-xl:w-full py-20 max-xl:py-0 flex flex-col place-content-center items-center text-center">
                        <h1 className="text-6xl">{product.name}</h1>
                        <p className="text-sm my-6 w-10/12">{product.description}</p>
                        <label className="block mt-5"> Size:
                            <select value={size} onChange={(e) => setSize(e.target.value)}>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </label>
                        <label className="block">
                            Color:
                            <select value={selectedVariantIndex} onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}> {product.variants.map((variant, index) => (
                                <option key={index} value={index}>{variant.color}</option>
                            ))}
                            </select>
                        </label>
                        <label className="block">Quantity:
                            <QuantitySelect stock={selectedVariant.stock} value={quantity} onChange={setQuantity} />
                        </label>
                        <p className="text-xl font-semibold mt-4">${selectedVariant.price}</p>
                        <CartBtn onClick={handleAddToCart} />
                    </div>

                    <img src={selectedVariant.img} alt={product.name} className="w-1/2" />
                </div>
            </main>

            <section>
                <h1 className="font-medium text-left text-2xl pl-5">
                    Similar models
                </h1>

                <div className="flex flex-row flex-wrap justify-evenly">
                    {Array.from({ length: cardsCount }).map((_, idx) => {
                        const randomProduct = getRandomProduct();
                        const defaultVariant = randomProduct.variants[0];

                        return (
                            <article key={idx} className="cards">
                                <img
                                    src={defaultVariant.img}
                                    alt={randomProduct.name}
                                    className="w-50 mb-5"
                                />
                                <h3 className="text-xl">
                                    {randomProduct.name}
                                </h3>
                                <p className="text-sm">
                                    ${defaultVariant.price}
                                </p>
                                <BuyButton model={randomProduct.model} />
                            </article>
                        );
                    })}
                </div>
                <h1 className="font-medium text-left text-2xl pt-20 pl-5">Other models</h1>
                <div className="flex flex-row flex-wrap justify-evenly pb-20">
                    {Array.from({ length: cardsCount }).map((_, idx) => {
                        const randomProduct = getRandomProduct();
                        const defaultVariant = randomProduct.variants[0];

                        return (
                            <article key={idx} className="cards">
                                <img src={defaultVariant.img} alt={randomProduct.name} className="w-50 mb-5" />
                                <h3 className="text-xl">{randomProduct.name}</h3>
                                <p className="text-sm">${defaultVariant.price}</p>
                                <BuyButton model={randomProduct.model} />
                            </article>
                        );
                    })}
                </div>

                <div className="py-20">
                    <Display />
                </div>
            </section>
        </>
    );
}