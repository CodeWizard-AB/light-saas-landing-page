import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Check from "@/assets/check.svg";

export const Pricing = () => {
	return (
		<section className="py-24 bg-white">
			<div className="container">
				<div className="text-center max-w-[335px] md:max-w-[540px] mx-auto">
					<h1 className="headline font-bold text-4xl md:text-[54px]">
						Pricing
					</h1>
					<p className="text-xl leading-7 text-[#010D3E] mt-6 mb-10">
						Free forever. Upgrade for unlimited tasks, better security, and
						exclusive features.
					</p>
				</div>
				<div className="flex flex-col lg:flex-row gap-6">
					{pricingTiers.map((tier) => (
						<div
							key={tier.title}
							className={twMerge(
								"p-10 mt-auto border-1 h-max max-w-xs w-full mx-auto border-[#f1f1f1] rounded-3xl shadow-[0_7px_14px_0_rgba(234,234,234)]",
								tier.popular && "bg-black text-white"
							)}
						>
							<div className="flex justify-between items-center">
								<h3
									className={twMerge(
										"text-lg font-bold text-black/50",
										tier.popular && "text-white/50"
									)}
								>
									{tier.title}
								</h3>

								{tier.popular && (
									<div className="text-sm py-1.5 px-4 border-1 border-white/20 rounded-xl font-medium bg-linear-[90deg,#dd7dff_10%,#e1cd86,#8bcb92,#71c2ef,#3bffff,#dd7dff_85%] bg-clip-text text-transparent">
										Most Popular
									</div>
								)}
							</div>
							<div className="font-bold flex items-baseline gap-1 mt-[30px]">
								<span className="text-4xl">${tier.monthlyPrice}</span>
								<span className={twMerge(tier.popular && "text-white/50")}>
									/month
								</span>
							</div>
							<button
								className={twMerge(
									"btn mb-8 mt-[30px] w-full flex justify-center",
									tier.popular ? "bg-white text-black" : "btn-primary"
								)}
							>
								{tier.buttonText}
							</button>
							<ul className="flex *:flex *:items-center flex-col gap-5 *:gap-4">
								{tier.features.map((feature, i) => (
									<li key={i}>
										<Image
											src={Check}
											alt="Check"
											className={twMerge(
												"w-6 aspect-square",
												tier.inverse && "invert"
											)}
										/>
										<span className="text-sm">{feature}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const pricingTiers = [
	{
		title: "Free",
		monthlyPrice: 0,
		buttonText: "Get started for free",
		popular: false,
		inverse: false,
		features: [
			"Up to 5 project members",
			"Unlimited tasks and projects",
			"2GB storage",
			"Integrations",
			"Basic support",
		],
	},
	{
		title: "Pro",
		monthlyPrice: 9,
		buttonText: "Sign up now",
		popular: true,
		inverse: true,
		features: [
			"Up to 50 project members",
			"Unlimited tasks and projects",
			"50GB storage",
			"Integrations",
			"Priority support",
			"Advanced support",
			"Export support",
		],
	},
	{
		title: "Business",
		monthlyPrice: 19,
		buttonText: "Sign up now",
		popular: false,
		inverse: false,
		features: [
			"Up to 5 project members",
			"Unlimited tasks and projects",
			"200GB storage",
			"Integrations",
			"Dedicated account manager",
			"Custom fields",
			"Advanced analytics",
			"Export capabilities",
			"API access",
			"Advanced security features",
		],
	},
];
