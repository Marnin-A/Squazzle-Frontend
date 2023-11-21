import React from "react";
import SignUpLeft from "@/components/signup/signUpLeft";
import SignupRight from "@/components/signup/signupRight";
export default function page() {
	return (
		<section className="bg-off-white max-sm:pb-12 grid grid-cols-2 max-sm:grid-cols-1">
			<SignUpLeft />
			<SignupRight />
		</section>
	);
}
