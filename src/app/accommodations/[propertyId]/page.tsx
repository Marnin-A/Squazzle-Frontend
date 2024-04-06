import React from "react";
import Link from "next/link";
import { CaretRightIcon } from "@radix-ui/react-icons";
import PropertyDetails from "@/components/accommodations/propertyDetails";
import LoadingSpinner from "@/components/loadingSpinner";

export default function Page({ params }: { params: { propertyId: string } }) {
	return (
		<div className="px-20 py-8 min-h-screen">
			<div className="text-primary-mid-green md:flex items-center gap-3 mb-8 hidden">
				<Link href="/manageAccount" className="hover:text-primary-dark-green">
					Manage Account
				</Link>
				<CaretRightIcon width={20} height={20} />
				<span>My Listing</span>
			</div>
			<div className="flex flex-wrap justify-center">
				<React.Suspense fallback={<LoadingSpinner className="m-auto" />}>
					<PropertyDetails propertyId={params.propertyId} />
				</React.Suspense>
			</div>
		</div>
	);
}
