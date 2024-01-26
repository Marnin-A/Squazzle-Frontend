import Menu from "@/components/personalDetails/menu";
import UserDetails from "@/components/personalDetails/userDetails";
import { CaretRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function Page() {
	return (
		<div className="px-20 py-8">
			<div className="text-primary-mid-green flex items-center gap-3">
				<Link href="/manageAccount" className="hover:text-primary-dark-green">
					Manage Account
				</Link>
				<CaretRightIcon width={20} height={20} />
				<span>Personal Details</span>
			</div>
			<main className="flex">
				<Menu />
				<UserDetails />
			</main>
		</div>
	);
}
