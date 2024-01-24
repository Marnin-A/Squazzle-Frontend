import React from "react";
import { Button } from "./ui/button";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next13-progressbar";

export default function LogoutBtn() {
	const { removeLocalStorage } = useLocalStorage();
	const router = useRouter();
	return (
		<Button
			className="text-left font-light justify-start text-secondary-red hover:text-secondary-red rounded-none"
			variant={"ghost"}
			onClick={() => {
				removeLocalStorage("accessToken");
				router.push("/login");
			}}
		>
			Logout
		</Button>
	);
}
