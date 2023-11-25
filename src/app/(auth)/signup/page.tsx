import React from "react";
import SignUpLeft from "@/components/signup/signUpLeft";
import SignUp from "@/components/signup/signUp";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export default function Page() {
	// const user = useSelector((state: RootState) => state.CreateProfile);
	// console.log(user);
	return (
		<section className="bg-off-white max-md:pb-12 flex max-md:flex-col w-[100vw] overflow-hidden">
			<SignUpLeft />
			<SignUp />
		</section>
	);
}
