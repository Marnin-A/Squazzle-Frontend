import DatePickerWithRange from "@/components/landing_page/DateRangeCalender";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
	return (
		<section className="flex items-start w-full">
			<div className="flex flex-col p-[10%] gap-9 flex-grow">
				<h1 className="text-5xl font-bold max-w-[500px]">
					The easiest way to find the property of your choice
				</h1>
				<p className="text-body-text-green">
					We provide various property models for you at affordable prices and
					the best quality
				</p>

				<div className="flex mr-[-300px] z-10">
					<div className=" flex items-center gap-3 bg-[#F5F5F5]/[0.8] rounded-lg p-8">
						{/* Search Input */}
						<div className="flex items-center gap-1 min-w-[200px] p-3 rounded-lg bg-white border border-slate-400">
							<SearchIcon color="inherit" />
							<InputBase
								placeholder="Search by state or town"
								inputProps={{ "aria-label": "Search by state or town" }}
							/>
						</div>
						<div className="w-[2px] h-[40px] bg-primary-green "></div>
						{/* Date Input */}
						<DatePickerWithRange />
						{/* Search Button */}
						<button className="flex items-center py-4 px-12 text-primary-lightgreen font-semibold bg-primary-green rounded-lg">
							Search
						</button>
					</div>
					<button className="m-8 py-3 px-4 rounded-lg bg-white">
						<FilterListIcon color="success" />
					</button>
				</div>
				<Link
					className="flex items-center text-lg text-primary-green gap-2"
					href="/accommodations"
				>
					Explore our properties Now{" "}
					<Image
						src="/diagonal-arrow.svg"
						alt="Diagonal Arrow"
						width={15}
						height={13}
						placeholder="empty"
						priority={false}
						className="w-min h-auto"
					/>
				</Link>
			</div>
			<div className="landing-page-bg w-1/3 h-screen"></div>
		</section>
	);
}
