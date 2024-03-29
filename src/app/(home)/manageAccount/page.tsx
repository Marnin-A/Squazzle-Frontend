import PageCard from "@/components/home/pageCard";
import UserCard from "@/components/home/userCard";
import {
	LocationCity,
	Notifications,
	GppMaybe,
	Payments,
	DeleteForever,
	AccountCircle,
} from "@mui/icons-material";

import React from "react";

export default function Page() {
	return (
		<div className="bg-off-white py-10 px-20 max-xl:px-5 max-sm:bg-white">
			<p className="pb-8 max-sm:hidden text-primary-mid-green">
				Manage Account
			</p>
			<div className="flex justify-between max-md:items-center max-md:flex-col max-sm:items-start">
				<UserCard />
				<div className="flex flex-wrap gap-y-6 gap-x-5 justify-center w-full max-sm:flex-nowrap max-sm:flex-col max-sm:gap-6 max-sm:justify-start max-sm:text-primary-mid-green">
					<p className="font-semibold text-lg sm:hidden">Manage Account</p>
					<PageCard
						img={<AccountCircle className="w-7 h-7" htmlColor="#575757" />}
						route="manageAccount/profile"
						title="Personal Details"
						key="Personal Details"
					/>
					<PageCard
						img={<LocationCity className="w-7 h-7" htmlColor="#575757" />}
						route="manageAccount/myListing"
						title="My listing"
						key="My listing"
					/>
					<PageCard
						img={<Notifications className="w-7 h-7" htmlColor="#575757" />}
						route="manageAccount/notification"
						title="Notification"
						key="Notification"
					/>
					<PageCard
						img={<GppMaybe className="w-7 h-7" htmlColor="#575757" />}
						route="manageAccount/passwordSetting"
						title="Password Setting"
						key="Password Setting"
					/>
					<PageCard
						img={<Payments className="w-7 h-7" htmlColor="#575757" />}
						route="manageAccount/paymentDetails"
						title="Payments and Payout"
						key="Payments and Payout"
					/>
					<PageCard
						img={<DeleteForever className="w-7 h-7" htmlColor="#575757" />}
						route="manageAccount/deleteAccount"
						title="Delete Account"
						key="Delete Account"
					/>
				</div>
			</div>
		</div>
	);
}
