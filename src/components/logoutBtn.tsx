import React from "react";
import { Button } from "./ui/button";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next13-progressbar";

export default function LogoutBtn() {
	const { removeLocalStorage, getLocalStorage } = useLocalStorage();
	const [actionText, setActionText] = React.useState<"Sign in" | "Logout">(
		"Logout"
	);
	const router = useRouter();

	React.useEffect(() => {
		setActionText(getLocalStorage("accessToken") ? "Logout" : "Sign in");
	}, [getLocalStorage]);

	return (
		<Button
			className={
				"text-left font-light justify-start rounded-none " +
				(getLocalStorage("accessToken")
					? "text-secondary-red hover:text-secondary-red"
					: "text-primary-mid-green hover:text-primary-lightgreen")
			}
			variant={"ghost"}
			onClick={() => {
				if (getLocalStorage("accessToken")) {
					removeLocalStorage("accessToken");
					router.push("/login");
				} else {
					router.push("/signin");
				}
			}}
		>
			{actionText}
		</Button>
	);
}
