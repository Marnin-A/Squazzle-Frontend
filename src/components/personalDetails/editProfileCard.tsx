"use client";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useLocalStorage from "@/hooks/useLocalStorage";
import React from "react";
import { ChevronLeft, Pencil } from "lucide-react";
import Link from "next/link";
import ProfilePicture from "../profilePicture";
import { useRouter } from "next13-progressbar";

export default function EditProfileCard() {
	const router = useRouter();
	const { getLocalStorage } = useLocalStorage();
	const [username, setUsername] = React.useState("User");
	const [email, setEmail] = React.useState("user@gmail.com");
	const [isEditPage, setIsEditPage] = React.useState(false);

	React.useEffect(() => {
		if (window !== undefined && window.localStorage) {
			setUsername(getLocalStorage("username") ?? "User");
			setEmail(getLocalStorage("email") ?? "user@gmail.com");
		}
		setIsEditPage(window.location.pathname.indexOf("/editProfile") > 0);
	}, [getLocalStorage]);

	return (
		<div className="max-w-[305px] h-min font-semibold py-6 px-12 bg-white text-center shadow-md max-md:mb-10 max-sm:text-left max-sm:p-0 max-sm:pr-12 max-sm:m-0 max-sm:shadow-none">
			<AccountCircleIcon
				htmlColor="#016D71"
				color="inherit"
				className="min-w-[104px] min-h-[104px] sm:hidden"
			/>
			<h1 className="text-[28px]">Welcome back {username}</h1>
			<p className="text-xl font-normal mb-10">{email}</p>
			<ProfilePicture height={104} width={104} />

			{isEditPage ? (
				<button
					onClick={() => router.back()}
					className="flex justify-center mt-5 m-auto"
				>
					<ChevronLeft color="#016D71" />
					Go Back
				</button>
			) : (
				<Link href="./editProfile" className="flex justify-center m-auto">
					Edit Profile <Pencil fill="#000" stroke="#fff" />
				</Link>
			)}
		</div>
	);
}
