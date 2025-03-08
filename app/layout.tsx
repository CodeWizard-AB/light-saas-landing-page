import "./globals.css";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Light Saas Landing Page",
	description: "Light Saas Landing Page build with Next.js 15",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang="en">
			<body
				className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}
				data-new-gr-c-s-check-loaded="14.1226.0"
				data-gr-ext-installed=""
				cz-shortcut-listen="true"
			>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
