import { useCart } from "../cart/CartContext";

export default function Purchase() {
    const { cart, totalPrice } = useCart();

    return (
        <main className="px-6 sm:px-10 lg:px-20 py-10 max-w-7xl mx-auto purchase-font">

            <h1 className="text-2xl sm:text-3xl font-normal text-left mb-10">
                Purchase Info
            </h1>

            <section className="flex flex-col lg:flex-row gap-12">

                <form className="flex-1 flex flex-col gap-10 text-left">

                    <fieldset className="space-y-5">
                        <legend className="italic mb-5 text-lg">Card Information</legend>

                        <label className="flex flex-col gap-2">Cardholder:
                            <input type="text" name="cardholder" placeholder="Cardholder" autoCapitalize="words" className="border rounded-lg px-4 py-2"/>
                        </label>

                        <label className="flex flex-col gap-2">Card number:
                            <input type="text" name="cardnumber" placeholder="0000 0000 0000 0000" className="border rounded-lg px-4 py-2"
                            />
                        </label>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <label className="flex flex-col gap-2 flex-1">Expiration date:
                                <input type="text" name="expirationdate" placeholder="MM/YY" className="border rounded-lg px-4 py-2"/>
                            </label>

                            <label className="flex flex-col gap-2 flex-1">Security code:
                                <input type="text" name="securitycode" placeholder="CVV" className="border rounded-lg px-4 py-2"/>
                            </label>
                        </div>
                    </fieldset>

                    <fieldset className="space-y-5">
                        <legend className="italic mb-5 text-lg">
                            Shipping Information
                        </legend>

                        <label className="flex flex-col gap-2">Country:
                            <input type="text" name="country" placeholder="Country" className="border rounded-lg px-4 py-2"/>
                        </label>

                        <label className="flex flex-col gap-2">City:
                            <input type="text" name="city" placeholder="City" className="border rounded-lg px-4 py-2"/>
                        </label>

                        <label className="flex flex-col gap-2">Address:
                            <input type="text" name="address" placeholder="Address" autoCapitalize="words" className="border rounded-lg px-4 py-2"/>
                        </label>

                        <label className="flex flex-col gap-2">Zip code:
                            <input type="text" name="zipcode" placeholder="Zip code" className="border rounded-lg px-4 py-2"/>
                        </label>
                    </fieldset>

                    <button type="submit" className="py-3 px-6 rounded-xl border mt-6 hover:bg-black hover:text-white transition">Complete Purchase</button>
                </form>

                <aside className="flex-1 lg:max-w-md lg:sticky lg:top-20">
                    <h2 className="font-bold text-xl mb-6">Order Summary</h2>

                    {cart.map((item, index) => (
                        <div key={index} className="flex flex-col sm:flex-row gap-6 border p-4 mb-4 rounded-lg">
                            <img src={item.img} alt={item.name} className="w-full sm:w-32 object-contain"/>

                            <div className="flex-1">
                                <h3 className="text-lg sm:text-xl">{item.name}</h3>
                                <p>Color: {item.color}</p>
                                <p>Size: {item.size}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Subtotal: ${item.subtotal}</p>
                            </div>
                        </div>
                    ))}

                    <div className="border-t pt-4 mt-6">
                        <h3 className="font-semibold text-lg sm:text-xl">Total: ${totalPrice}</h3>
                    </div>
                </aside>
            </section>
        </main>
    )
}
