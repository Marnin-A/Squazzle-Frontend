"use client";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function NavBar() {
	const { getLocalStorage } = useLocalStorage();
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);

	React.useEffect(() => {
		setIsLoggedIn(Boolean(getLocalStorage("accessToken")));
	}, [getLocalStorage]);

	return (
		<nav className="self-start flex justify-between items-center w-full py-5 mlg:px-20 px-8">
			<Image
				src="/Mobile-logo.svg"
				alt="Mobile Squazzle Logo"
				width={177}
				height={57}
				placeholder="empty"
				priority={false}
				className="w-min h-auto"
			/>
			<div className="mlg:flex hidden gap-6">
				<Link href="/accommodations">Accommodations</Link>
				<Link href="/list-property">List your property</Link>
				<Link href="/about-us">About us</Link>
				<Link href="/faq">FAQ</Link>
			</div>
			<>
				{
					<div className="mlg:flex hidden items-center gap-4 text-primary-green">
						<NotificationsNoneIcon color="inherit" />
						{isLoggedIn ? (
							<AccountCircleIcon color="inherit" className="w-10 h-10" />
						) : (
							<Link
								className="py-2 px-4 rounded-md text-off-white bg-primary-dark-green"
								href="/login"
							>
								Sign in
							</Link>
						)}
					</div>
				}
				<button className="w-6 flex flex-col gap-1 mlg:hidden">
					<div className="bg-primary-green h-[3px] w-full"></div>
					<div className="bg-primary-green h-[3px] w-full"></div>
					<div className="bg-primary-green h-[3px] w-full"></div>
				</button>
			</>
		</nav>
	);
}
