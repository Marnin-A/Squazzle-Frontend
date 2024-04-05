"use client";
import { useGetPropertyDetailsQuery } from "@/app/redux/services/apiServices";
import EditPropertyForms from "@/components/editProperty/editPropertyForms";
import SideNav from "@/components/editProperty/sideNav";
import LoadingSpinner from "@/components/loadingSpinner";
import { useDispatch } from "react-redux";
import { setDialogOpen } from "@/app/redux/slices/dialogSlice";
import { CaretRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function Page({ params }: { params: { propertyId: string } }) {
	const alertId = React.useId();
	const dispatch = useDispatch();
	const { data, isError, error } = useGetPropertyDetailsQuery({
		propertyId: params.propertyId,
	});

	React.useEffect(() => {
		if (isError) {
			dispatch(
				setDialogOpen({
					alertId: alertId,
					message: "",
					open: true,
					title: "Sorry an error occurred",
				})
			);
		}
	}, [alertId, dispatch, error, isError]);
	return data && "status" in data && data.status === "success" ? (
		<div className="px-20 py-8 min-h-screen max-md:px-5">
			<div className="text-primary-mid-green flex items-center gap-3 mb-8 max-md:hidden">
				<Link href="/manageAccount" className="hover:text-primary-dark-green">
					Manage Account
				</Link>
				<CaretRightIcon width={20} height={20} />
				<span>My Listing</span>
				<CaretRightIcon width={20} height={20} />
				{data.data.accomodation.accommodationName}
			</div>
			<div className="flex max-md:flex-col">
				<React.Suspense fallback={<LoadingSpinner className="m-auto" />}>
					<SideNav />
				</React.Suspense>
				<React.Suspense fallback={<LoadingSpinner className="m-auto" />}>
					<EditPropertyForms propertyDetails={data.data.accomodation} />
				</React.Suspense>
			</div>
		</div>
	) : (
		<LoadingSpinner className="m-auto" />
	);
}
