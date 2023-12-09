import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./redux/storeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const openSans = Open_Sans({
	weight: ["400", "500", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Squazzle",
	description:
		"Get the best accommodation and list your property for the right prices.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<StoreProvider>
			<html lang="en">
				<body className={openSans.className}>
					{children}
					<SpeedInsights />
				</body>
			</html>
		</StoreProvider>
	);
}
