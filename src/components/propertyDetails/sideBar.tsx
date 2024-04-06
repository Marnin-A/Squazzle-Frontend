"use client";
import React from "react";
import { ArrowLeft, Pencil } from "lucide-react";
import { DateRange, House } from "@mui/icons-material";

type props = {
	address: string;
	city: string;
	state: string;
	reason: string;
	hostingPeriodFrom: string;
	hostingPeriodTo: string;
	accommodationType: string;
};
export default function SideBar(props: props) {
	return (
		<div className="w-[280px] mr-12 max-lg:mr-0 max-lg:w-full max-lg:mb-4 max-md:hidden">
			<div className="flex justify-between bg-primary-dark-green mb-5">
				<button className="border-none bg-transparent text-primary-lightgreen text-sm flex items-center py-5 px-6 gap-2">
					<ArrowLeft color="#CCE6E7" /> Back
				</button>
				<button className="border-none bg-transparent text-primary-lightgreen text-sm flex items-center py-5 px-6 gap-2">
					<Pencil size={25} fill="#CCE6E7" stroke="black" />
					Edit
				</button>
			</div>

			<div className="flex flex-col items-center gap-3 p-3 shadow-md max-lg:flex-row max-lg:flex-wrap max-md:p-0">
				<div
					className={
						"flex flex-col items-center gap-4 w-full min-w-[200px] py-3 px-3 mx-auto group hover:bg-primary-lightgreen max-lg:w-[30%] max-lg:self-start"
					}
				>
					<h3 className="font-semibold text-lg  w-full">Location</h3>
					<hr className="w-full border-primary-mid-grey group-hover:border-off-white" />
					<p className="w-full">{`${props.address}, ${props.city}, ${props.state} State, Nigeria`}</p>
				</div>
				<div
					className={
						"flex flex-col items-center gap-4 w-full min-w-[200px] py-3 px-3 mx-auto group hover:bg-primary-lightgreen max-lg:w-[30%] max-lg:self-start"
					}
				>
					<h3 className="font-semibold text-lg w-full">
						Reason for listing this accommodation
					</h3>
					<hr className="w-full border-primary-mid-grey group-hover:border-off-white" />
					<p className="w-full">{props.reason}</p>
				</div>
				<div
					className={
						"flex flex-col items-center gap-4 w-full min-w-[200px] py-3 px-3 mx-auto group hover:bg-primary-lightgreen max-lg:w-[30%] max-lg:self-start"
					}
				>
					<h3 className="font-semibold text-lg w-full">Hosting Duration</h3>
					<hr className="w-full border-primary-mid-grey group-hover:border-off-white" />
					<p className="flex gap-2 w-full">
						<DateRange htmlColor="#03796E" />
						{`${props.hostingPeriodFrom
							.replace(/\d{4}$/, "")
							.trim()} - ${props.hostingPeriodTo.replace(/\d{4}$/, "")}`}
					</p>
				</div>
				<div
					className={
						"flex flex-col items-center gap-4 w-full min-w-[200px] py-3 px-3 mx-auto group hover:bg-primary-lightgreen max-lg:w-[30%] max-lg:self-start"
					}
				>
					<h3 className="font-semibold text-lg w-full">Accommodation Type</h3>
					<hr className="w-full border-primary-mid-grey group-hover:border-off-white" />
					<p className="flex gap-2 w-full">
						<House htmlColor="#03796E" />
						{props.accommodationType}
					</p>
				</div>
			</div>
		</div>
	);
}
