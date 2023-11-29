import React from "react";
import SignUpLeft from "@/components/signup/signUpLeft";
import SignUp from "@/components/signup/signUp";

export default function Page() {
	return (
		<main className="bg-off-white max-md:pb-12 flex max-md:flex-col w-[100vw] overflow-hidden">
			<SignUpLeft />
			<SignUp />
		</main>
	);
}
