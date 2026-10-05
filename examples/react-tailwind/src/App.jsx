import Hero from './components/Hero';
import PricingCard from './components/PricingCard';

const features = ['Unlimited projects', 'Preview deployments', 'Custom domains', 'Email support'];

export default function App() {
  return (
    <main>
      <Hero />
      <section id="pricing" className="py-10 px-5">
        <PricingCard plan="Pro" price={29} features={features} onSelect={() => (window.location.href = '/signup')} />
      </section>
    </main>
  );
}
