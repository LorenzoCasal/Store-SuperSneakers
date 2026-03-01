import { Link } from "react-router";

export default function Terms() {
    return (
        <body>
            <title>Terms and Conditions | SuperSneakers</title>
            <div class="container">
                <h1>Terms and Conditions</h1>
                <p class="date">Last updated: February 16, 2026</p>

                <p>Welcome to <strong>SuperSneakers</strong>. By accessing our website, you agree to comply with and be bound by
                    the following terms and conditions.</p>

                <h2>1. Educational Purpose</h2>
                <p>This website is a <strong>fictional educational project</strong>. All products, descriptions, and brand
                    references (including the Supershoes logo) are for demonstration purposes only. No real commercial
                    transactions are conducted here.</p>

                <h2>2. Intellectual Property</h2>
                <p>The content, layout, and design of this site are the property of SuperSneakers. Images and trademarks used
                    are the property of their respective owners and are used here under the premise of educational use.</p>

                <h2>3. Use of Information</h2>
                <p>The "Aetherglide Sneakers" and other models displayed are conceptual. Any information provided by the user in
                    forms (such as login or contact sections) is not stored or sold; it is used only to demonstrate technical
                    functionality.</p>

                <h2>4. Limitation of Liability</h2>
                <p>SuperSneakers provides this website "as is" for educational and portfolio purposes. We are not liable for:

                    Any misunderstandings regarding the availability of the footwear shown.

                    The use of placeholder "Lorem Ipsum" text, which is used solely to demonstrate the interface's typography
                    and layout.</p>

                <h2>5. External Links</h2>
                <p>This site may contain links to social media profiles (Instagram, Facebook). These are placeholders and do not
                    imply an active official partnership in a real-world commercial</p>
                <Link to="/">← Return to Shop</Link>
            </div>
        </body>
    )
}