import * as motion from "motion/react-client";

export function AnimatedCog({ children }: { children: React.ReactNode }) {
	return (
		<motion.div
			animate={{
				translateY: [-30, 30],
				transition: {
					repeat: Infinity,
					duration: 3,
					repeatType: "mirror",
					ease: "easeInOut",
				},
			}}
		>
			{children}
		</motion.div>
	);
}
