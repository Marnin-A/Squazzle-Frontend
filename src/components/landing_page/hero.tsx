import DatePickerWithRange from "@/components/landing_page/DateRangeCalender";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
	return (
		<section className="flex items-start w-full max-mlg:flex-col">
			<div className="flex flex-col p-[10%] gap-9 flex-grow">
				<h1 className="text-5xl font-bold max-w-[500px]">
					The easiest way to find the property of your choice
				</h1>
				<p className="text-body-text-green">
					We provide various property models for you at affordable prices and
					the best quality
				</p>

				<div className="flex  z-10 items-center max-mlg:flex-col mlg:mr-[-300px] max-sm:bg-[#F5F5F5]/[0.8]">
					<div className=" flex items-center justify-center gap-3 bg-[#F5F5F5]/[0.8] rounded-lg p-8 flex-wrap max-sm:w-full max-sm:flex-col">
						{/* Search Input */}
						<div className="flex items-center gap-1  p-3 rounded-lg bg-white border border-slate-400 min-w-[200px] max-[980px]:min-w-[100px] max-sm:w-full">
							<SearchIcon htmlColor="#787878" />
							<InputBase
								placeholder="Search by state or town"
								inputProps={{ "aria-label": "Search by state or town" }}
							/>
						</div>
						<div className="w-[2px] h-[40px] bg-primary-green max-md:hidden"></div>
						{/* Date Input */}
						<DatePickerWithRange className="min-w-[200px] max-[980px]:min-w-[100px] max-sm:w-full" />
						{/* Search Button */}
						<button className="flex items-center justify-center py-4 px-12 text-primary-lightgreen text-center font-semibold bg-primary-green rounded-lg max-sm:w-full">
							Search
						</button>
					</div>
					<button className="m-8 py-3 px-4 rounded-lg h-min bg-white max-mlg:w-11/12 max-mlg:bg-[#F5F5F5] ">
						<FilterListIcon color="success" />{" "}
						<span className=" hidden font-bold text-primary-green max-mlg:inline">
							Filter
						</span>
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
			<div className="landing-page-bg w-1/3 mlg:h-screen p-5 flex flex-col max-mlg:w-full max-mlg:hidden max-sm:block">
				<Image
					src="/Landing-Page-Background.png"
					alt="A house with a swimming pool in front of it, surrounded by palm trees"
					width={351}
					height={336}
					placeholder="blur"
					blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAQAAAAHCAYAAAAvZezQAAAACXBIWXMAAAGJAAABiQGeLhE1AAAAAXNSR0IArs4c6QAAAIJJREFUGFcBdwCI/wH+/v//AQH/APb5+gDh7vYAAf39/P8CAQIA+Pv9AODr8AAB+Pr8/////QDV2tcAvcjMAAGrr6D/KS08AMrY1wDv7+8AAV5mVv83MSMA0+UCAP/38wABrOTm/wADAgCu2twABdfYAAHY7On/8gkLAJvp7AAwBAMAFM0/GG95m+oAAAAASUVORK5CYII="
					priority={false}
					className="md:w-3/5 w-full h-auto aspect-square mx-auto mb-6 shadow-md hidden min-w-max max-mlg:block"
				/>
				<button className="flex items-center justify-center py-4 px-12 text-white text-center font-semibold bg-primary-grey rounded-lg sm:hidden max-sm:w-full">
					Sign in
				</button>
			</div>
		</section>
	);
}
