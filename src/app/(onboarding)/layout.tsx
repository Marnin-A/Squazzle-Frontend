import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Squazzle",
	description:
		"Get the best accommodation and list your property for the right prices.",
};

export default function OnboardingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
