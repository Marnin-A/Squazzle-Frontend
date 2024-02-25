"use client";
import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import DatePickerWithRange from "../landing_page/DateRangeCalender";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { HouseOutlined } from "@mui/icons-material";
import { Checkbox } from "../ui/checkbox";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import CurrencyInput from "react-currency-input-field";
type TPrice = { minPrice: string; maxPrice: string };
export default function Hero() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<TPrice>({
		criteriaMode: "all",
	});
	const onSubmit: SubmitHandler<TPrice> = async (data: TPrice) => {};
	function handleSearch() {
		console.log();
	}
	return (
		<div className="flex items-center justify-center accommodations-bg py-40 w-full">
			<div className="flex m-auto z-10 items-center max-mlg:flex-col">
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

				<Dialog>
					<DialogTrigger className="max-mlg:mt-6">
						<div className="bg-[#F5F5F5] rounded-lg px-10 py-3 ml-6">
							<FilterListIcon color="success" />
							<span className="font-bold text-primary-green w-max">Filter</span>
						</div>
					</DialogTrigger>
					<DialogContent className="p-0 flex flex-col gap-4 max-h-[450px] overflow-y-scroll">
						<DialogHeader className="text-left font-normal shadow-sm w-full pt-6 px-6">
							<DialogTitle className="mb-6">Filter</DialogTitle>
						</DialogHeader>
						<DialogDescription className="px-6">
							{/* Property Type */}
							<div className="flex flex-col gap-4 mb-8 text-primary-green">
								<h3 className="border-b flex items-center gap-4 pb-2 text-black text-lg font-semibold">
									<HouseOutlined className="w-5" htmlColor="#03796E" />
									Property type
								</h3>
								<div className="flex items-center justify-between">
									Duplex{" "}
									<Checkbox
										key={"Duplex-filter"}
										id="duplex-filter"
										className=" border-primary-light-grey border-2"
									/>
								</div>
								<div className="flex items-center justify-between">
									Flat{" "}
									<Checkbox
										key={"Flat-filter"}
										id="Flat-filter"
										className=" border-primary-light-grey border-2"
									/>
								</div>
								<div className="flex items-center justify-between">
									Bungalow{" "}
									<Checkbox
										key={"Bungalow-filter"}
										id="Bungalow-filter"
										className=" border-primary-light-grey border-2"
									/>
								</div>
								<div className="flex items-center justify-between">
									Self-contain{" "}
									<Checkbox
										key={"Self-contain-filter"}
										id="Self-contain-filter"
										className=" border-primary-light-grey border-2"
									/>
								</div>
								<div className="flex items-center justify-between">
									Apartment{" "}
									<Checkbox
										key={"Apartment-filter"}
										id="Apartment-filter"
										className=" border-primary-light-grey border-2"
									/>
								</div>
							</div>
							{/* Date Posted */}
							<div className="flex flex-col gap-4 text-primary-green">
								<h3 className="border-b flex items-center gap-4 pb-2 text-black text-lg font-semibold">
									<HouseOutlined className="w-5" htmlColor="#03796E" />
									Date Posted
								</h3>
								<div className="flex items-center justify-between">
									Just now{" "}
									<Checkbox
										key={"Now-filter"}
										id="Now-filter"
										className="border-primary-light-grey border-2"
									/>
								</div>
								<div className="flex items-center justify-between">
									Less than an hour{" "}
									<Checkbox
										key={"Last-hour-filter"}
										id="Last-hour-filter"
										className=" border-primary-light-grey border-2"
									/>
								</div>
								<div className="flex items-center justify-between">
									Past 24 hours{" "}
									<Checkbox
										key={"24hours-filter"}
										id="24hours-filter"
										className=" border-primary-light-grey border-2"
									/>
								</div>
								<div className="flex items-center justify-between">
									Past week{" "}
									<Checkbox
										key={"Past-week-filter"}
										id="Past-week-filter"
										className=" border-primary-light-grey border-2"
									/>
								</div>
								<div className="flex items-center justify-between">
									Past Month{" "}
									<Checkbox
										key={"Past-month-filter"}
										id="Past-month-filter"
										className=" border-primary-light-grey border-2"
									/>
								</div>
								{/* Suitable For */}
								<RadioGroup
									aria-labelledby="demo-radio-buttons-group-label"
									defaultValue="Male"
									className="flex flex-col gap-4 mb-8 text-primary-green"
								>
									<h3 className="border-b flex items-center gap-4 pb-2 text-black text-lg font-semibold">
										<HouseOutlined className="w-5" htmlColor="#03796E" />
										Gender
									</h3>

									<FormControlLabel
										value="Male"
										control={<Radio color="default" className="p-0" />}
										label="Male"
										className="justify-between flex-row-reverse pl-3 mr-0"
									/>
									<FormControlLabel
										value="Female"
										control={<Radio color="default" className="p-0" />}
										label="Female"
										className="justify-between flex-row-reverse pl-3 mr-0"
									/>
									<FormControlLabel
										value="Both"
										control={<Radio color="default" className="p-0" />}
										label="Both"
										className="justify-between flex-row-reverse pl-3 mr-0"
									/>
								</RadioGroup>
								{/* Price Per Night */}
								<form
									name="priceRange"
									className="flex flex-col gap-4 mb-8 text-primary-green"
								>
									<h3 className="border-b flex items-center gap-4 pb-2 text-black text-lg font-semibold">
										<HouseOutlined className="w-5" htmlColor="#03796E" />
										Price per night
									</h3>
									<div className="flex items-center justify-between gap-4">
										{/* Min Price*/}
										<div className="relative">
											<label
												className="block text-gray-700 text-md mb-2"
												htmlFor="minPrice"
											>
												Minimum
											</label>
											<div
												className={
													"flex items-center border rounded-lg gap-2 px-3 " +
													(errors.minPrice?.type === "required"
														? " border-2 has-focus:border-error"
														: " border-2 has-focus:border-success")
												}
											>
												<CurrencyInput
													placeholder="NGN 0"
													decimalsLimit={4}
													intlConfig={{ locale: "en-US", currency: "NGN" }}
													className={
														"h-16 text-xl appearance-none outline-none border-primary-mid-grey w-full py-2 text-gray-700 leading-tight placeholder:pl-4"
													}
													id="minPrice"
													autoComplete="on"
													{...register("minPrice", {
														pattern: {
															value: /^[0-9]/i,
															message: "Price must be a number",
														},
														maxLength: {
															value: 10,
															message: "Price can't be more than 10 characters",
														},
													})}
												/>
												<ErrorMessage
													errors={errors}
													name="minPrice"
													render={({ message }) => (
														<p className="text-xs text-error absolute bottom-[-22%]">
															{message}
														</p>
													)}
												/>
											</div>
										</div>
										{/* Max Price*/}
										<div className="relative ">
											<label
												className="block text-gray-700 text-md mb-2"
												htmlFor="maxPrice"
											>
												Maximum
											</label>
											<div
												className={
													"flex items-center border rounded-lg gap-2 px-3 " +
													(errors.maxPrice?.type === "required"
														? " border-2 has-focus:border-error"
														: " border-2 has-focus:border-success")
												}
											>
												<CurrencyInput
													placeholder="NGN 250,000+"
													decimalsLimit={4}
													intlConfig={{ locale: "en-US", currency: "NGN" }}
													className={
														"h-16 text-xl appearance-none outline-none border-primary-mid-grey w-full py-2 text-gray-700 leading-tight placeholder:pl-4"
													}
													id="maxPrice"
													autoComplete="on"
													{...register("maxPrice", {
														pattern: {
															value: /^[0-9]/i,
															message: "Price must be a number",
														},
														maxLength: {
															value: 10,
															message: "Price can't be more than 10 characters",
														},
													})}
												/>
												<ErrorMessage
													errors={errors}
													name="minPrice"
													render={({ message }) => (
														<p className="text-xs text-error absolute bottom-[-22%]">
															{message}
														</p>
													)}
												/>
											</div>
										</div>
									</div>
									<button
										className="w-max self-end hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-white font-bold py-4 px-6 rounded max-md:w-full"
										type="submit"
										formTarget="priceRange"
									>
										Apply Filter
									</button>
								</form>
							</div>
						</DialogDescription>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
}
