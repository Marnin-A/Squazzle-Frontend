import Footer from "@/components/footer";
import NavBar from "@/components/myListing/navbar";

export default function OnboardingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col min-h-screen">
			<NavBar />
			{children}
			<Footer />
		</section>
	);
}
