import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import Star from "@/assets/star.png";
import Spring from "@/assets/spring.png";

export default function CallToAction() {
	return (
		<section className="bg-linear-to-b from-white to-[#D2DCFF] py-24">
			<div className="container">
				<div className="max-w-[335px] md:max-w-[540px] mx-auto">
					<div className="flex flex-col items-center text-center relative">
						<h1 className="section-title">Sign up for free today</h1>
						<p className="section-description">
							Celebrate the joy of accomplishment with an app designed to track
							your progress and motivate your efforts.
						</p>
						<Image
							src={Star}
							alt="Star"
							className="hidden md:block md:absolute w-[360px] -left-96 -top-32"
						/>
						<Image
							src={Spring}
							alt="Spring"
							className="hidden md:block absolute -bottom-32 -right-90 w-[360px]"
						/>
					</div>
					<div className="flex justify-center   items-center gap-6">
						<button className="btn btn-primary">Get for free</button>
						<button className="flex items-center gap-1">
							<span>Learn More</span>
							<Image
								src={ArrowRight}
								alt="Arrow Right"
								width={20}
								height={20}
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
