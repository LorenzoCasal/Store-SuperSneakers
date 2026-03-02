import { useCart } from "../context/CartContext";

export default function Cart() {
    const { cart, removeFromCart, totalPrice } = useCart();

    return (
        <div className="h-auto p-10 pb-60">
            <title>My Cart | SuperSneakers Store</title>
            <h1 className="text-3xl mb-5">Your Cart</h1>

            {cart.length === 0 && <p>Cart is empty</p>}

            {cart.map((item, index) => (
                <div key={index} className="flex flex-row flex-wrap border p-4 mb-4">
                    <img src={item.img} alt={item.name} className="w-50 mr-10 object-contain" />
                    <div className="w-1/2">
                        <h2 className="text-2xl">{item.name}</h2>
                        <p>Color: {item.color}</p>
                        <p>Size: {item.size}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Subtotal: ${item.subtotal}</p>
                        <button onClick={() => removeFromCart(index)} className="mt-10 hover:text-red-700">
                            Remove
                        </button>
                    </div>
                </div>
            ))}

            <h2 className="text-xl font-extrabold italic mt-5">
                Total: ${totalPrice}
            </h2>
        </div>
    );
}