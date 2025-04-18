import BrandTicker from "@/components/BrandTicker";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import ProductShowcase from "@/components/ProductShowcase";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
	return (
		<main>
			<Hero />
			<BrandTicker />
			<ProductShowcase />
			<Pricing />
			<Testimonials />
			<CallToAction />
		</main>
	);
}
