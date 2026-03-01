import Display from '../components/Display';
import { products } from '../utils/images';
import BuyButton from '../components/Buy-Btn';
import { Link } from 'react-router';

export default function Products() {

    return <>
        <header>
            <Display />
        </header>

        <h2 className='text-xl pt-20 pb-5 pl-10'>All products</h2>

        <section className='flex flex-row flex-wrap items-center justify-evenly gap-5 pb-20'>

            {products.map(p => (
                <article key={p.model} className="cards">
                    <img
                        src={p.img}
                        alt={p.name}
                        className="w-50 mb-5"
                    />
                    <h3 className="text-2xl">{p.name}</h3>
                    <p className="text-sm">{p.price}</p>
                    <Link to={`/Products/${p.model}`}>
                        <BuyButton model={p.model} />
                    </Link>
                </article>
            ))}
        </section>
    </>
}