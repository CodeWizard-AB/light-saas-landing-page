import BrandTicker from "@/components/BrandTicker";
import Hero from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import ProductShowcase from "@/components/ProductShowcase";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
	return (
		<>
			<Hero />
			<BrandTicker />
			<ProductShowcase />
			<Pricing />
			<Testimonials />
		</>
	);
}
