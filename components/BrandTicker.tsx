import Acme from "@/assets/logo-acme.png";
import Apex from "@/assets/logo-apex.png";
import Celestial from "@/assets/logo-celestial.png";
import Echo from "@/assets/logo-echo.png";
import Pulse from "@/assets/logo-pulse.png";
import Qunatum from "@/assets/logo-quantum.png";
import Image from "next/image";
import * as motion from "motion/react-client";

const brands = [Acme, Apex, Celestial, Echo, Pulse, Qunatum];

export default function BrandTicker() {
	return (
		<section className="py-8 md:py-12 bg-white">
			<div className="container">
				<div className="flex overflow-hidden mask-fade">
					<motion.div
						animate={{
							translateX: "-50%",
							transition: {
								repeat: Infinity,
								duration: 20,
								ease: "linear",
							},
						}}
						className="flex items-center gap-14 pr-14 flex-none"
					>
						{brands.map((brand, index) => (
							<Image
								key={index}
								src={brand}
								alt="Logo"
								className="h-8 w-auto"
							/>
						))}

						{brands.map((brand, index) => (
							<Image
								key={index}
								src={brand}
								alt="Logo"
								className="h-8 w-auto"
							/>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
