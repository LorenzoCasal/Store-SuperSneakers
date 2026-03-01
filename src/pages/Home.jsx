import Display from '../components/Display';
import { products } from '../utils/images';
import { Link } from 'react-router';

export default function Home() {
    const topModels = ['ether', 'mountainclimbing', 'horizon', 'aetherpulse', 'cave'];

    return (
        <>
            <main className='w-full'>
                <Display />
            </main>

            <section>
                <div className='mt-10 pb-20'>
                    <h2 className='text-2xl font-bold pl-10'>Our top models</h2>
                    <div className='flex flex-row flex-wrap justify-center gap-10'>
                        {topModels.map(m => {
                            const p = products.find(p => p.model === m);
                            return (
                                <article key={m}>
                                    <Link to={`/Products/${p.model}`}>
                                        <img
                                            src={p.img}
                                            className="w-64 h-64 hover:scale-110 transition-transform duration-300"
                                        />
                                    </Link>
                                    <h3 className="text-center font-bold text-lg">{p.name}</h3>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}