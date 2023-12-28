import Hero from "@/components/landing_page/hero";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import SellingPoints from "@/components/landing_page/sellingPoints";
import FeaturedProperty from "@/components/landing_page/featuredProperty";
import ExploreNow from "@/components/landing_page/exploreNow";
import ListPropertyCard from "@/components/landing_page/listPropertyCard";
import Testimonials from "@/components/landing_page/testimonials";
import Faq from "@/components/landing_page/faq";

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
				<Faq data={FAQdata} />
			</main>
			<Footer />
		</>
	);
}
const FAQdata = [
	{
		title: "Where is the cheapest place to rent a house?",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta at cumque delectus nobis dolores sit natus autem, quisquam enim nostrum dolorum, ab ullam quo distinctio quas? Odio, quia excepturi",
	},
	{
		title: "How can i list my property?",
		content: "Yes. It adheres to the WAI-ARIA design pattern.",
	},
	{
		title: "How can I find landlords who accept housing benefit?",
		content: "Yes. It adheres to the WAI-ARIA design pattern.",
	},
];
