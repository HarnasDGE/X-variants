export default function PricingCard({ plan = 'Pro', price = 29, features = [], onSelect }) {
  return (
    <div className="max-w-xs mx-auto border border-gray-300 p-5">
      <h2 className="text-xl font-bold">{plan}</h2>
      <p className="text-3xl mt-2">
        ${price}
        <span className="text-sm text-gray-500">/month</span>
      </p>
      <ul className="mt-4 space-y-1">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <button onClick={onSelect} className="mt-4 bg-brand text-white px-4 py-2">
        Start free trial
      </button>
    </div>
  );
}
