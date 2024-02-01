import EditPropertyForms from "@/components/editProperty/editPropertyForms";
import SideNav from "@/components/editProperty/sideNav";
import { CircularProgress } from "@mui/material";
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
			<div className="flex">
				<React.Suspense
					fallback={<CircularProgress color="success" className="m-auto" />}
				>
					<SideNav />
				</React.Suspense>
				<React.Suspense
					fallback={<CircularProgress color="success" className="m-auto" />}
				>
					<EditPropertyForms />
				</React.Suspense>
			</div>
		</div>
	);
}
