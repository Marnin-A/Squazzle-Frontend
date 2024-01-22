import ProfileForm from "@/components/editProfile/profileForm";
import EditProfileCard from "@/components/personalDetails/editProfileCard";
import CircularProgress from "@mui/material/CircularProgress";
import { CaretRightIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

export default function Page() {
	const DynamicEditProfileCard = dynamic(
		() => import("@/components/personalDetails/editProfileCard"),
		{
			ssr: false,
			loading: () => <CircularProgress color="success" className="m-auto" />,
		}
	);
	return (
		<div className="px-20 py-8">
			<div className="text-primary-mid-green flex items-center gap-3">
				<Link href="/home" className="hover:text-primary-dark-green">
					Manage Account
				</Link>
				<CaretRightIcon width={20} height={20} />
				<span>Edit Profile</span>
			</div>
			<main className="flex">
				<DynamicEditProfileCard />
				<ProfileForm />
			</main>
		</div>
	);
}
