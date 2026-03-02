import { Link } from "react-router";

export default function Terms() {
    return (
        <main className="min-h-screen bg-none py-12 px-6 sm:px-12">
            <title>Terms and Conditions | SuperSneakers</title>

            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-xl border border-gray-100">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
                    Terms and Conditions
                </h1>
                <p className="text-sm text-gray-500 mb-8 italic">
                    Last updated: February 16, 2026
                </p>

                <div className="prose prose-slate prose-blue max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Welcome to <strong className="text-black font-semibold">SuperSneakers</strong>.
                        By accessing our website, you agree to comply with and be bound by the following terms and conditions.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                            <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                            Educational Purpose
                        </h2>
                        <p className="text-gray-600 leading-relaxed ml-11">
                            This website is a <strong className="text-gray-900">fictional educational project</strong>.
                            All products, descriptions, and brand references are for demonstration purposes only.
                            No real commercial transactions are conducted here.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                            <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                            Intellectual Property
                        </h2>
                        <p className="text-gray-600 leading-relaxed ml-11">
                            The content, layout, and design of this site are the property of SuperSneakers.
                            Images and trademarks used are the property of their respective owners and are used
                            under the premise of educational use.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                            <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                            Use of Information
                        </h2>
                        <p className="text-gray-600 leading-relaxed ml-11">
                            The "Aetherglide Sneakers" and other models displayed are conceptual.
                            Any information provided by the user is not stored or sold; it is used only to
                            demonstrate technical functionality.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                            <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                            Limitation of Liability
                        </h2>
                        <div className="text-gray-600 leading-relaxed ml-11 space-y-3">
                            <p>SuperSneakers provides this website "as is" for educational purposes. We are not liable for:</p>
                            <ul className="list-disc pl-5 space-y-1 italic">
                                <li>Any misunderstandings regarding the availability of footwear.</li>
                                <li>The use of placeholder "Lorem Ipsum" text for typography demonstration.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                            <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">5</span>
                            External Links
                        </h2>
                        <p className="text-gray-600 leading-relaxed ml-11">
                            This site may contain links to social media profiles. These are placeholders and do not
                            imply an active official partnership.
                        </p>
                    </section>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100">
                    <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Return to Shop
                    </Link>
                </div>
            </div>
        </main>
    );
}