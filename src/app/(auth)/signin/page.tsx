import SignInLeft from "@/components/sigin/signInLeft";
import SignInRight from "@/components/sigin/signInRight";

export default function Page() {
	return (
		<main className="bg-off-white max-md:pb-12 flex max-md:flex-col w-[100vw] overflow-hidden">
			<SignInLeft />
			<SignInRight />
		</main>
	);
}
