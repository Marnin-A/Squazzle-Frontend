import ListedPropertyCard from "@/components/myListing/listedPropertyCard";
import { CaretRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function Page() {
	return (
		<div className="px-20 py-8 min-h-screen">
			<div className="text-primary-mid-green flex items-center gap-3 mb-8">
				<Link href="/manageAccount" className="hover:text-primary-dark-green">
					Manage Account
				</Link>
				<CaretRightIcon width={20} height={20} />
				<span>My Listing</span>
			</div>
			<div className="flex flex-wrap">
				<ListedPropertyCard />
			</div>
		</div>
	);
}
