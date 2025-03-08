import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Menu from "@/assets/menu.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="sticky top-0">
			<div className="bg-black flex items-center gap-1 px-4 py-3 text-white justify-center">
				<span className="hidden md:inline text-white/60 mr-3">
					Streamline your workflow and boost your productivity. 
				</span>
				<p>Get started for free</p>
				<Image
					src={ArrowRight}
					alt="Arrow Right"
					width={20}
					height={20}
					className="invert"
				/>
			</div>
			<div className="px-5 py-5">
				<div className="flex justify-between items-center container mx-auto">
					<Image src={Logo} alt="Logo" width={40} height={40} />
					<Image
						src={Menu}
						alt="Logo"
						width={20}
						height={20}
						className="md:hidden"
					/>
					<nav className="items-center hidden md:flex gap-6 font-medium">
						<Link href="/">About</Link>
						<Link href="/">Features</Link>
						<Link href="/">Customers</Link>
						<Link href="/">Updates</Link>
						<Link href="/">Help</Link>
						<button className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer">
							Get for free
						</button>
					</nav>
				</div>
			</div>
		</header>
	);
}
