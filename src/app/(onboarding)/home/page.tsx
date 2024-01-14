import PageCard from "@/components/home/pageCard";
import {
	LocationCity,
	Notifications,
	GppMaybe,
	Payments,
	DeleteForever,
} from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircularProgress from "@mui/material/CircularProgress";
import dynamic from "next/dynamic";

import React from "react";

export default function Page() {
	const DynamicUserCard = dynamic(() => import("@/components/home/userCard"), {
		ssr: false,
		loading: () => <CircularProgress color="success" className="m-auto" />,
	});
	return (
		<div className="bg-off-white py-10 px-20 max-xl:px-5 max-sm:bg-white">
			<p className="pb-8 max-sm:hidden">Manage Account</p>
			<div className="flex justify-between max-md:items-center max-md:flex-col max-sm:items-start">
				<DynamicUserCard />
				<div className="flex flex-wrap gap-y-6 gap-x-5 justify-center w-full max-sm:flex-nowrap max-sm:flex-col max-sm:gap-6 max-sm:justify-start max-sm:text-primary-mid-green">
					<p className="font-semibold text-lg sm:hidden">Manage Account</p>
					<PageCard
						img={<AccountCircleIcon className="w-7 h-7" />}
						route="/personalDetails"
						title="Personal Details"
						key="Personal Details"
					/>
					<PageCard
						img={<LocationCity className="w-7 h-7" />}
						route="/myListing"
						title="My listing"
						key="My listing"
					/>
					<PageCard
						img={<Notifications className="w-7 h-7" />}
						route="/notification"
						title="Notification"
						key="Notification"
					/>
					<PageCard
						img={<GppMaybe className="w-7 h-7" />}
						route="/passwordSetting"
						title="Password Setting"
						key="Password Setting"
					/>
					<PageCard
						img={<Payments className="w-7 h-7" />}
						route="/paymentsAndPayouts"
						title="Payments and Payout"
						key="Payments and Payout"
					/>
					<PageCard
						img={<DeleteForever className="w-7 h-7" />}
						route="/deleteAccount"
						title="Delete Account"
						key="Delete Account"
					/>
				</div>
			</div>
		</div>
	);
}
