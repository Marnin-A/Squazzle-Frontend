"use client";
import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import DatePickerWithRange from "../landing_page/DateRangeCalender";

export default function Hero() {
	function handleSearch() {
		console.log();
	}
	return (
		<div className="flex items-center justify-center accommodations-bg py-40 w-full">
			<div className="flex m-auto z-10 items-center max-mlg:flex-col max-sm:bg-[#F5F5F5]/[0.6]">
				<div className=" flex items-center justify-center gap-3 bg-[#F5F5F5]/[0.6] rounded-lg p-8 flex-wrap max-sm:w-full max-sm:flex-col">
					{/* Search Input */}
					<div className="flex items-center gap-1  p-3 rounded-lg bg-white border border-slate-400 min-w-[200px] max-[980px]:min-w-[100px] max-sm:w-full">
						<SearchIcon htmlColor="#787878" />
						<InputBase
							placeholder="Search by state or city"
							inputProps={{ "aria-label": "Search by state or town" }}
						/>
					</div>
					<div className="w-[2px] h-[40px] bg-primary-green max-md:hidden"></div>
					{/* Date Input */}
					<DatePickerWithRange className="min-w-[200px] max-[980px]:min-w-[100px] max-sm:w-full" />
					{/* Search Button */}
					<button
						onClick={handleSearch}
						className="flex items-center justify-center py-4 px-12 text-primary-lightgreen text-center font-semibold bg-primary-green rounded-lg max-sm:w-full"
					>
						Search
					</button>
				</div>
				<button className="ml-8 py-5 px-14 rounded-lg bg-white max-mlg:w-11/12 max-mlg:bg-[#F5F5F5] ">
					<FilterListIcon color="success" />{" "}
					<span className="font-bold text-primary-green">Filter</span>
				</button>
			</div>
		</div>
	);
}
