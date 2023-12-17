import Hero from "@/components/landing_page/hero";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import SellingPoints from "@/components/landing_page/sellingPoints";
import FeaturedProperty from "@/components/landing_page/featuredProperty";

export default function Home() {
	return (
		<>
			<NavBar />
			<main className="flex min-h-screen flex-col justify-start text-body-text">
				<Hero />
				<SellingPoints />
				<FeaturedProperty />
			</main>
			<Footer />
		</>
	);
}
