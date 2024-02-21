"use client";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CurrencyInput from "react-currency-input-field";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch } from "react-redux";
import { setAlertOpen } from "@/app/redux/slices/notificationSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { overviewFormSchema } from "@/utils/schemas";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Label } from "@/components/ui/label";
import { CountryDropdown } from "react-country-region-selector";
import { Textarea } from "@/components/ui/textarea";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import ManageSearchParams from "@/hooks/updateSearchParams";

export type OverviewForm = {
	accommodationName: string;
	address: string;
	state: string;
	city: string;
	accommodationType:
		| "Duplex"
		| "Apartment"
		| "Single room"
		| "Bungalow"
		| "Flat"
		| "Studio"
		| "Mansion";

	// availability: "Available" | "Not available";
	price: string;
	hostingPeriodFrom: string;
	hostingPeriodTo: string;
};

export default function OverviewForm() {
	const dispatch = useDispatch();
	const alertId = React.useId();
	// Form validation from React Hook Form
	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<OverviewForm>({
		resolver: yupResolver(overviewFormSchema),
		criteriaMode: "all",
		reValidateMode: "onChange",
	});
	const [country, setCountry] = React.useState("");
	const [hostingPeriodFrom, setStartDate] = React.useState<Date | undefined>();
	const [hostingPeriodTo, setEndDate] = React.useState<Date | undefined>();
	const [accomodationType, setAccommodationType] =
		React.useState<OverviewForm["accommodationType"]>("Duplex");
	// const [availability, setAvailability] =
	// 	React.useState<OverviewForm["availability"]>("Available");
	const { setLocalStorage, removeLocalStorage } = useLocalStorage();
	const { memoizedUpdateURLParam } = ManageSearchParams();
	const onSubmit: SubmitHandler<FieldValues> = (data) =>
		// data
		{
			console.log({
				...data,
				price: Number(data.price.replace(/[a-zA-Z,]/g, "").trim()),
			});

			setLocalStorage("accommodationOverview", {
				...data,
				price: Number(data.price.replace(/[a-zA-Z,]/g, "").trim()),
			});
			memoizedUpdateURLParam("view", "description");
		};

	const handleCancel = () => {
		removeLocalStorage("accommodationOverview");
		dispatch(
			setAlertOpen({
				alertId: alertId,
				open: true,
				severity: "error",
				title: "Info",
				message: "Cancelled",
			})
		);
	};
	React.useEffect(() => {
		if (hostingPeriodFrom) {
			console.log(hostingPeriodFrom.toDateString());

			setValue("hostingPeriodFrom", hostingPeriodFrom.toDateString());
		}
		if (hostingPeriodTo) {
			console.log(hostingPeriodTo.toDateString());

			setValue("hostingPeriodTo", hostingPeriodTo.toDateString());
		}
	}, [hostingPeriodTo, hostingPeriodFrom, setValue]);

	return (
		<>
			{/* Form */}
			<form
				name="overviewForm"
				className="bg-transparent w-full pt-6 p-10 flex flex-col gap-6 shadow-sm max-md:px-5"
				onSubmit={handleSubmit(onSubmit)}
			>
				{/* Accommodation Name Input */}
				<div className="relative">
					<label
						className="block text-body-text font-normal text-[28px] mb-2 max-md:text-lg max-md:font-semibold"
						htmlFor="accommodationName"
					>
						Accommodation Name
					</label>
					<input
						className={
							"h-16 text-xl appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight  placeholder:pl-4" +
							(errors.accommodationName?.type === "required"
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
						id="accommodationName"
						type="text"
						placeholder="Primrose View"
						autoComplete="on"
						{...register("accommodationName")}
					/>
					<ErrorMessage
						errors={errors}
						name="accommodationName"
						render={({ message }) => (
							<p className="text-xs text-error absolute bottom-[-22%]">
								{message}
							</p>
						)}
					/>
				</div>
				{/* Accommodation Type */}
				<div className="relative">
					<Label
						className="block text-body-text font-normal text-[28px] mb-2 max-md:text-lg max-md:font-semibold"
						htmlFor="price"
					>
						Accommodation Type
					</Label>
					<p className="text-primary-mid-green">Choose accommodation type</p>
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue="Duplex"
						className={
							"min-h-[100px] grid grid-cols-3 max-mlg:flex max-mlg:flex-wrap whitespace-nowrap text-xl appearance-none border-none rounded-lg w-full py-6 px-3 text-gray-700 leading-tight placeholder:pl-4 " +
							(errors.accommodationType?.type === "required"
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
						value={accomodationType}
						id="accommodationType"
					>
						<FormControlLabel
							value="Duplex"
							control={<Radio color="success" />}
							label="Duplex"
							color="#018388"
							{...register("accommodationType", {
								onChange(event) {
									setAccommodationType(() => event.target.value);
								},
							})}
						/>
						<FormControlLabel
							value="Apartment"
							control={<Radio color="success" />}
							color="#018388"
							label="Apartment"
							{...register("accommodationType", {
								onChange(event) {
									setAccommodationType(() => event.target.value);
								},
							})}
						/>
						<FormControlLabel
							value="Single Room"
							control={<Radio color="success" />}
							color="#018388"
							label="Single Room"
							{...register("accommodationType", {
								onChange(event) {
									setAccommodationType(() => event.target.value);
								},
							})}
						/>
						<FormControlLabel
							value="Bungalow"
							control={<Radio color="success" />}
							color="#018388"
							label="Bungalow"
							{...register("accommodationType", {
								onChange(event) {
									setAccommodationType(() => event.target.value);
								},
							})}
						/>
						<FormControlLabel
							value="Flat"
							control={<Radio color="success" />}
							color="#018388"
							label="Flat"
							{...register("accommodationType", {
								onChange(event) {
									setAccommodationType(() => event.target.value);
								},
							})}
						/>
						<FormControlLabel
							value="Studio"
							control={<Radio color="success" />}
							color="#018388"
							label="Studio"
							{...register("accommodationType", {
								onChange(event) {
									setAccommodationType(() => event.target.value);
								},
							})}
						/>
						<FormControlLabel
							value="Mansion"
							control={<Radio color="success" />}
							color="#018388"
							label="Mansion"
							{...register("accommodationType", {
								onChange(event) {
									setAccommodationType(() => event.target.value);
								},
							})}
						/>
					</RadioGroup>
					<ErrorMessage
						errors={errors}
						name="accommodationType"
						render={({ message }) => (
							<p className="text-xs text-error absolute bottom-[-22%]">
								{message}
							</p>
						)}
					/>
				</div>
				<hr className="my-5 border" />
				{/* Address */}
				<div className="relative">
					<Label
						className="block text-body-text font-normal text-[28px] mb-2 max-md:text-lg max-md:font-semibold"
						htmlFor="address"
					>
						Address
					</Label>
					<Textarea
						className={
							"min-h-[100px] text-xl appearance-none border rounded-lg w-full py-6 px-3 text-gray-700 leading-tight placeholder:pl-4 " +
							(errors.address?.type === "required"
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
						id="address"
						placeholder="Location Address"
						autoComplete="on"
						{...register("address")}
					/>
					<ErrorMessage
						errors={errors}
						name="address"
						render={({ message }) => (
							<p className="text-xs text-error absolute bottom-[-22%]">
								{message}
							</p>
						)}
					/>
				</div>

				<div className="flex items-center justify-between gap-6">
					{/* State */}
					<div className="relative">
						<Label
							className="block text-body-text font-normal text-[28px] mb-2 max-md:text-lg max-md:font-semibold"
							htmlFor="state"
						>
							State
						</Label>
						<input
							className={
								"h-16 text-xl appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight  placeholder:pl-4" +
								(errors.state?.type === "required"
									? " outline-error"
									: " focus:outline-success focus:shadow-outline")
							}
							id="state"
							type="text"
							placeholder="State"
							autoComplete="on"
							{...register("state")}
						/>
						<ErrorMessage
							errors={errors}
							name="state"
							render={({ message }) => (
								<p className="text-xs text-error absolute bottom-[-22%]">
									{message}
								</p>
							)}
						/>
					</div>
					{/* City */}
					<div className="relative">
						<Label
							className="block text-body-text font-normal text-[28px] mb-2 max-md:text-lg max-md:font-semibold"
							htmlFor="city"
						>
							City
						</Label>
						<input
							className={
								"h-16 text-xl appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight  placeholder:pl-4" +
								(errors.city?.type === "required"
									? " outline-error"
									: " focus:outline-success focus:shadow-outline")
							}
							id="city"
							type="text"
							placeholder="City"
							autoComplete="on"
							{...register("city")}
						/>
						<ErrorMessage
							errors={errors}
							name="city"
							render={({ message }) => (
								<p className="text-xs text-error absolute bottom-[-22%]">
									{message}
								</p>
							)}
						/>
					</div>
				</div>
				<hr className="my-5 border" />

				{/* Availability
				<div className="relative">
					<Label
						className="block text-body-text font-normal text-[28px] mb-2 max-md:text-lg max-md:font-semibold"
						htmlFor="availability"
					>
						Availability
					</Label>
					<p className="text-primary-mid-green">Choose availability</p>
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue="Available"
						className={
							" grid grid-cols-3 max-mlg:flex max-mlg:flex-wrap whitespace-nowrap text-xl appearance-none border-none rounded-lg w-full py-6 px-3 text-gray-700 leading-tight placeholder:pl-4 " +
							(errors.availability?.type === "required"
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
						value={availability}
						id="availability"
					>
						<FormControlLabel
							value="Available"
							control={<Radio color="success" />}
							label="Available"
							color="#018388"
							{...register("availability", {
								onChange(event) {
									setAvailability(() => event.target.value);
								},
							})}
						/>
						<FormControlLabel
							value="Not available"
							control={<Radio color="success" />}
							color="#018388"
							label="Not Available"
							{...register("availability", {
								onChange(event) {
									setAvailability(() => event.target.value);
								},
							})}
						/>
					</RadioGroup>
					<ErrorMessage
						errors={errors}
						name="availability"
						render={({ message }) => (
							<p className="text-xs text-error absolute bottom-[-22%]">
								{message}
							</p>
						)}
					/>
				</div>
				<hr className="my-5 border" /> */}
				{/* Accommodation Name Input */}
				<div className="relative">
					<label
						className="block text-body-text font-normal text-[28px] mb-2 max-md:text-lg max-md:font-semibold"
						htmlFor="accommodationPrice"
					>
						Accommodation Price
					</label>
					<div
						className={
							"flex items-center border rounded-lg gap-2 px-3 " +
							(errors.price?.type === "required"
								? " border-2 has-focus:border-error"
								: " border-2 has-focus:border-success")
						}
					>
						<CurrencyInput
							placeholder="0.00"
							defaultValue={"0.00"}
							decimalsLimit={4}
							intlConfig={{ locale: "en-US", currency: "NGN" }}
							className={
								"h-16 text-xl appearance-none border-r outline-none border-primary-mid-grey w-full py-2 text-gray-700 leading-tight placeholder:pl-4"
							}
							id="accommodationPrice"
							autoComplete="on"
							{...register("price")}
						/>
						<CountryDropdown
							value={country}
							onChange={(val) => setCountry(val)}
							defaultOptionLabel="NG"
							labelType="short"
						/>
					</div>
					<ErrorMessage
						errors={errors}
						name="price"
						render={({ message }) => (
							<p className="text-xs text-error absolute bottom-[-22%]">
								{message}
							</p>
						)}
					/>
				</div>
				<hr className="my-5 border" />
				{/* Hosting */}
				<div>
					<div className="block text-body-text font-normal text-[28px] mb-2 max-md:text-lg max-md:font-semibold">
						Hosting Duration
					</div>
					<div className="relative mb-8">
						<label
							htmlFor="hostingPeriodFrom"
							className="text-sm font-semibold text-black"
						>
							Start Date
						</label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant={"outline"}
									className={cn(
										"w-full px-6 py-8 text-left text-base font-normal",
										!hostingPeriodFrom && "text-muted-foreground"
									)}
								>
									{hostingPeriodFrom ? (
										new Date(hostingPeriodFrom).toDateString()
									) : (
										<span>DD/MM/YY</span>
									)}
									<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0" align="start">
								<Calendar
									mode="single"
									selected={hostingPeriodFrom}
									onSelect={setStartDate}
									disabled={
										(date) => date < new Date()
										// || date < new Date("1900-01-01")
									}
									{...register("hostingPeriodFrom")}
								/>
							</PopoverContent>
						</Popover>
						<ErrorMessage
							errors={errors}
							name="hostingPeriodFrom"
							render={({ message }) => (
								<p className="text-xs text-error absolute bottom-[-22%]">
									{message}
								</p>
							)}
						/>
					</div>

					<div className="relative mb-16 max-md:mb-10">
						<label
							htmlFor="hostingPeriodTo
"
							className="text-sm font-semibold text-black"
						>
							End Date
						</label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant={"outline"}
									className={cn(
										"w-full px-6 py-8 text-left text-base font-normal",
										!hostingPeriodTo && "text-muted-foreground"
									)}
								>
									{hostingPeriodTo ? (
										new Date(hostingPeriodTo).toDateString()
									) : (
										<span>DD/MM/YY</span>
									)}
									<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0" align="start">
								<Calendar
									mode="single"
									selected={hostingPeriodTo}
									onSelect={setEndDate}
									disabled={(date) =>
										date < new Date() ||
										date < new Date(hostingPeriodFrom as unknown as Date)
									}
									{...register("hostingPeriodTo")}
								/>
							</PopoverContent>
						</Popover>
						<ErrorMessage
							errors={errors}
							name="hostingPeriodTo"
							render={({ message }) => (
								<p className="text-xs text-error absolute bottom-[-22%]">
									{message}
								</p>
							)}
						/>
					</div>
				</div>
				{/* Buttons */}
				<div className="flex items-center justify-between max-md:flex-col-reverse max-md:gap-2">
					<button
						className="w-min hover:bg-primary-lightgreen hover:text-primary-green bg-white text-primary-green outline outline-primary-green font-bold py-4 px-6 rounded max-md:w-full"
						type="button"
						onClick={handleCancel}
					>
						Cancel
					</button>
					<button
						className="w-min hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-white font-bold py-4 px-6 rounded max-md:w-full"
						type="submit"
						formTarget="overviewForm"
					>
						<span className="max-md:hidden block">Save</span>
						<span className="max-md:block hidden">Save & Continue</span>
					</button>
				</div>
			</form>
		</>
	);
}
