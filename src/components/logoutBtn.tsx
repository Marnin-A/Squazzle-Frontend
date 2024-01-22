import React from "react";
import { Button } from "./ui/button";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function LogoutBtn() {
	const { removeLocalStorage } = useLocalStorage();
	return (
		<Button
			className="text-left font-light justify-start text-secondary-red hover:text-secondary-red rounded-none"
			variant={"ghost"}
			onClick={() => {
				removeLocalStorage("accessToken");
				window.location.reload();
			}}
		>
			Logout
		</Button>
	);
}
