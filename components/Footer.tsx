import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import Link from "next/link";
import SocialX from "@/assets/social-x.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialInsta from "@/assets/social-insta.svg";

const socials = [
	SocialInsta.src,
	SocialLinkedin.src,
	SocialPin.src,
	SocialYoutube.src,
	SocialX.src,
];

export default function Footer() {
	return (
		<footer className="py-10 bg-black text-[#BCBCBC]">
			<div className="container">
				<div className="before:absolute before:bg-[linear-gradient(90deg,#f87bff,#fb92cf_50%,#ffdd9b_75%,#c2f0b1_87.5%,#2fd8fe_100%)] w-max mx-auto relative before:h-full before:w-full before:blur-sm">
					<Image
						src={Logo}
						alt="Logo"
						width={40}
						height={40}
						className="relative"
					/>
				</div>
				<nav className="flex flex-col md:flex-row gap-6 font-medium justify-center items-center my-6">
					<Link href="/">About</Link>
					<Link href="/">Features</Link>
					<Link href="/">Customers</Link>
					<Link href="/">Pricing</Link>
					<Link href="/">Help</Link>
					<Link href="/">Careers</Link>
				</nav>

				<div className="flex gap-4 justify-center items-center">
					{socials.map((social, index) => (
						<Image
							key={index}
							src={social}
							alt="Logo"
							width={20}
							height={20}
							className="invert"
						/>
					))}
				</div>

				<p className="text-center mt-6">
					© 2024 Your Company, Inc. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
