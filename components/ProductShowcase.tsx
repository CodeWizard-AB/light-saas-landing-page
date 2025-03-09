import Image from "next/image";
import Product from "@/assets/product-image.png";
import Pyramid from "@/assets/pyramid.png";
import Tube from "@/assets/tube.png";

export default function ProductShowcase() {
	return (
		<section className="py-24 bg-linear-to-b from-white to-[#D2DCFF]">
			<div className="container">
				<div className="max-w-[335px] md:max-w-[540px] mx-auto">
					<div className="flex flex-col items-center text-center">
						<div className="py-1 px-3 font-medium border w-max border-[#2222221A] rounded-lg tracking-tight mb-5">
							Boost your productivity
						</div>
						<h1 className="section-title">
							A more effective way to track progress
						</h1>
						<p className="section-description">
							Celebrate the joy of accomplishment with an app designed to track
							your progress and motivate your efforts.
						</p>
					</div>
				</div>
				<div className="relative w-full">
					<Image src={Product} alt="Product" className="w-full h-auto" />
					<Image
						src={Pyramid}
						alt="Pyramid"
						className="hidden md:block md:absolute -top-32 -right-36 w-64 lg:w-auto"
					/>
					<Image
						src={Tube}
						alt="Tube"
						className="hidden md:block md:absolute bottom-16 -left-36 w-60 lg:bottom-24 lg:-left-30"
					/>
				</div>
			</div>
		</section>
	);
}
