import React from "react";
import { Button } from "./ui/button";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next13-progressbar";

export default function LogoutBtn() {
	const { clearLocalStorage, getLocalStorage } = useLocalStorage();
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	const router = useRouter();

	React.useEffect(() => {
		if (window !== undefined && window.localStorage) {
			setIsLoggedIn(Boolean(getLocalStorage("accessToken")));
		}
	}, [getLocalStorage]);

	return (
		<Button
			className={
				"text-left font-light justify-start rounded-none " +
				(isLoggedIn
					? "text-secondary-red hover:text-secondary-red"
					: "text-primary-mid-green hover:text-primary-lightgreen")
			}
			variant={"ghost"}
			onClick={() => {
				if (isLoggedIn) {
					clearLocalStorage();
					router.push("/signin");
				} else {
					router.push("/signin");
				}
			}}
		>
			{isLoggedIn ? "Logout" : "Sign in"}
		</Button>
	);
}
