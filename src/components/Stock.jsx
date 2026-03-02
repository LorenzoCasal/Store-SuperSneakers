import { useState } from "react";

export default function QuantitySelect({ stock, value, onChange }) {
    const [total, setTotal] = useState("");
    const maxOptions = Math.min(stock, 10);

    return (
        <select value={total} onChange={(e) => setTotal(e.target.value)}>
            {[...Array(maxOptions)].map((_, i) => (
                <option key={i} value={i + 1}>
                    {i + 1}
                </option>
            ))}
        </select>
    );
}