import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import Cylinder from "@/assets/cylinder.png";
import Noodle from "@/assets/noodle.png";
import * as motion from "motion/react-client";

export default function Hero() {
	return (
		<section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_80%)] md:bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
			<div className="container">
				<div className="flex flex-col md:flex-row items-center">
					<div className="md:w-[478px] lg:w-full">
						<div className="tag">Version 2.0 is here</div>
						<h1 className="headline mt-6 font-bold text-5xl md:text-7xl">
							Pathway to productivity
						</h1>
						<p className="text-xl leading-7 text-[#010D3E] mt-6 mb-8">
							Celebrate the joy of accomplishment with an app designed to track
							your progress, motivate your efforts, and celebrate your
							successes.
						</p>
						<div className="flex items-center">
							<button className="btn btn-primary">Get for free</button>
							<button className="btn btn-text">
								Learn More
								<Image
									src={ArrowRight}
									alt="Arrow Right"
									width={20}
									height={20}
								/>
							</button>
						</div>
					</div>
					<div className="mt-20 md:mt-0 md:h-[648px] md:relative w-full">
						<motion.div
							className="h-full w-full md:absolute md:left-6 lg:left-0"
							animate={{
								translateY: [-20, 30],
								transition: {
									repeat: Infinity,
									duration: 3,
									repeatType: "mirror",
									ease: "easeInOut",
								},
							}}
						>
							<Image
								src={CogImage}
								alt="Cog Image"
								className="md:w-auto md:h-full md:max-w-none"
							/>
						</motion.div>

						<Image
							src={Cylinder}
							alt="Cylinder"
							className="hidden md:block w-[220px] aspect-square md:absolute -left-24 -top-6"
						/>
						<Image
							src={Noodle}
							alt="Noodle"
							className="hidden lg:block lg:absolute -bottom-24 left-[450px] w-[220px] aspect-square rotate-30"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
