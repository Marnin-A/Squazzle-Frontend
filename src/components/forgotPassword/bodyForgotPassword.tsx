import React from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import ForgotPasswordCard from "./forgotPasswordCard";

export default function BodyForgotPassword() {
	const { setLocalStorage, getLocalStorage } = useLocalStorage();

	return (
		<div className="flex-1 flex flex-col items-center justify-center w-full overflow-y-scroll max-sm:items-start">
			<ForgotPasswordCard />
		</div>
	);
}
