import Hero from "@/components/landing_page/hero";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import SellingPoints from "@/components/landing_page/sellingPoints";
import FeaturedProperty from "@/components/landing_page/featuredProperty";
import ExploreNow from "@/components/landing_page/exploreNow";
import ListPropertyCard from "@/components/landing_page/listPropertyCard";
import Testimonials from "@/components/landing_page/testimonials";

export default function Home() {
	return (
		<>
			<NavBar />
			<main className="flex min-h-screen flex-col justify-start text-body-text">
				<Hero />
				<SellingPoints />
				<FeaturedProperty />
				<ExploreNow />
				<ListPropertyCard />
				<Testimonials />
			</main>
			<Footer />
		</>
	);
}
