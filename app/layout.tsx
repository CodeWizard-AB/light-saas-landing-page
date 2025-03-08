import type { Metadata } from "next";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Light Saas Landing Page",
	description: "Light Saas Landing Page build with Next.js 15",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang="en">
			<body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
				{children}
			</body>
		</html>
	);
}
