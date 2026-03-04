export default function QuantitySelect({ stock, value, onChange }) {
    const maxOptions = Math.min(stock, 10);

    return (
        <select
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
        >
            {[...Array(maxOptions)].map((_, i) => (
                <option key={i} value={i + 1}>
                    {i + 1}
                </option>
            ))}
        </select>
    );
}