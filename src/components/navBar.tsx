"use client";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next13-progressbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MobileSideMenu } from "./mobileMenu";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "./ui/dropdown-menu";
import LogoutBtn from "./logoutBtn";
import ProfilePicture from "./profilePicture";

export default function NavBar() {
	const router = useRouter();
	const { getLocalStorage } = useLocalStorage();
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);

	React.useEffect(() => {
		if (typeof window !== "undefined" && window.localStorage) {
			setIsLoggedIn(Boolean(getLocalStorage("accessToken")));
		}
	}, [getLocalStorage]);

	return (
		<nav className="self-start flex justify-between items-center w-full py-5 shadow mlg:px-20 max-md:border-b-2 max-md:border-b-slate-300 px-8">
			<Link href={"/"} className="hover:cursor-pointer">
				<Image
					src={"/Mobile-logo.svg"}
					alt="Mobile Squazzle Logo"
					width={177}
					height={57}
					placeholder="empty"
					priority={false}
					className="w-min h-auto"
				/>
			</Link>
			<div className="mlg:flex hidden gap-6">
				<Link href="/accommodations">Accommodations</Link>
				<Link href="/manageAccount/myListing/editProperty?view=overview">
					List your property
				</Link>
				<Link href="/about-us">About us</Link>
				<Link href="/faq">FAQ</Link>
			</div>
			<div className="self-end">
				{
					<div className="hidden items-center gap-4 text-primary-green mlg:flex">
						<NotificationsNoneIcon color="inherit" />
						{isLoggedIn ? (
							<DropdownMenu>
								<DropdownMenuTrigger>
									<ProfilePicture height={40} width={40} />
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<Link href="/manageAccount">
										<DropdownMenuItem>Manage Account</DropdownMenuItem>
									</Link>
									<DropdownMenuItem>
										<LogoutBtn />
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						) : (
							<button
								className="py-2 px-4 rounded-md text-off-white bg-primary-dark-green"
								onClick={() => router.push("/signin")}
							>
								Sign in
							</button>
						)}
					</div>
				}
				<MobileSideMenu />
			</div>
		</nav>
	);
}
