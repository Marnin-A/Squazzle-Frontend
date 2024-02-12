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

	availability: "Available" | "Not available";
	accommodationPrice: string;
	startDate: string;
	endDate: string;
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
	const [price, setPrice] = React.useState(0.0);
	const [startDate, setStartDate] = React.useState<Date | undefined>();
	const [endDate, setEndDate] = React.useState<Date | undefined>();
	const [accommodationType, setAccommodationType] =
		React.useState<OverviewForm["accommodationType"]>("Duplex");
	const [availability, setAvailability] =
		React.useState<OverviewForm["availability"]>("Available");
	const { setLocalStorage, removeLocalStorage } = useLocalStorage();
	const { memoizedUpdateURLParam } = ManageSearchParams();
	const onSubmit: SubmitHandler<FieldValues> = ({
		address,
		accommodationType,
		accommodationPrice,
		startDate,
		endDate,
		state,
		city,
	}) =>
		// data
		{
			console.log({
				address: address,
				state: state,
				city: city,
				accommodationType: accommodationType,
				availability: availability,
				accommodationPrice: price,
				startDate: startDate,
				endDate: endDate,
			});

			setLocalStorage("accommodationOverview", {
				address: address,
				accommodationType: accommodationType,
				availability: availability,
				accommodationPrice: accommodationPrice,
				hostingPeriodFrom: startDate,
				hostingPeriodTo: endDate,
				state: state,
				city: city,
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
		if (startDate) {
			console.log(startDate.toDateString());

			setValue("startDate", startDate.toDateString());
		}
		if (endDate) {
			console.log(endDate.toDateString());

			setValue("endDate", endDate.toDateString());
		}
	}, [endDate, startDate, setValue]);

	return (
		<>
			{/* Form */}
			<form
				name="overviewForm"
				className="bg-transparent w-full pt-6 p-10 flex flex-col gap-6 shadow-sm"
				onSubmit={handleSubmit(onSubmit)}
			>
				{/* Accommodation Name Input */}
				<div className="relative">
					<label
						className="block text-body-text font-normal text-[28px] mb-2"
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
						className="block text-body-text font-normal text-[28px] mb-2"
						htmlFor="accommodationType"
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
						value={accommodationType}
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
						className="block text-body-text font-normal text-[28px] mb-2"
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
							className="block text-body-text font-normal text-[28px] mb-2"
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
							className="block text-body-text font-normal text-[28px] mb-2"
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

				{/* Availability */}
				<div className="relative">
					<Label
						className="block text-body-text font-normal text-[28px] mb-2"
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
				<hr className="my-5 border" />
				{/* Accommodation Name Input */}
				<div className="relative">
					<label
						className="block text-body-text font-normal text-[28px] mb-2"
						htmlFor="accommodationPrice"
					>
						Accommodation Price
					</label>
					<div
						className={
							"flex items-center border rounded-lg gap-2 px-3 " +
							(errors.accommodationPrice?.type === "required"
								? " border-2 has-focus:border-error"
								: " border-2 has-focus:border-success")
						}
					>
						<CurrencyInput
							placeholder="0.00"
							defaultValue={"0.00"}
							decimalsLimit={4}
							intlConfig={{ locale: "en-US", currency: "NGN" }}
							onValueChange={(value) => setPrice(Number(value))}
							className={
								"h-16 text-xl appearance-none border-r outline-none border-primary-mid-grey w-full py-2 text-gray-700 leading-tight placeholder:pl-4"
							}
							id="accommodationPrice"
							autoComplete="on"
							{...register("accommodationPrice")}
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
						name="accommodationPrice"
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
					<div className="block text-body-text font-normal text-[28px] mb-2">
						Hosting Duration
					</div>
					<div className="relative mb-8">
						<label
							htmlFor="startDate"
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
										!startDate && "text-muted-foreground"
									)}
								>
									{startDate ? (
										new Date(startDate).toDateString()
									) : (
										<span>DD/MM/YY</span>
									)}
									<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0" align="start">
								<Calendar
									mode="single"
									selected={startDate}
									onSelect={setStartDate}
									disabled={
										(date) => date < new Date()
										// || date < new Date("1900-01-01")
									}
									{...register("startDate")}
								/>
							</PopoverContent>
						</Popover>
						<ErrorMessage
							errors={errors}
							name="startDate"
							render={({ message }) => (
								<p className="text-xs text-error absolute bottom-[-22%]">
									{message}
								</p>
							)}
						/>
					</div>

					<div className="relative mb-16">
						<label
							htmlFor="endDate"
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
										!endDate && "text-muted-foreground"
									)}
								>
									{endDate ? (
										new Date(endDate).toDateString()
									) : (
										<span>DD/MM/YY</span>
									)}
									<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0" align="start">
								<Calendar
									mode="single"
									selected={endDate}
									onSelect={setEndDate}
									disabled={(date) =>
										date < new Date() ||
										date < new Date(startDate as unknown as Date)
									}
									{...register("endDate")}
								/>
							</PopoverContent>
						</Popover>
						<ErrorMessage
							errors={errors}
							name="endDate"
							render={({ message }) => (
								<p className="text-xs text-error absolute bottom-[-22%]">
									{message}
								</p>
							)}
						/>
					</div>
				</div>
				{/* Buttons */}
				<div className="flex items-center justify-between ">
					<button
						className="w-min hover:bg-primary-lightgreen hover:text-primary-green bg-white text-primary-green outline outline-primary-green font-bold py-4 px-6 rounded"
						type="button"
						onClick={handleCancel}
					>
						Cancel
					</button>
					<button
						className="w-min hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-white font-bold py-4 px-6 rounded"
						type="submit"
						formTarget="overviewForm"
					>
						<span>Save</span>
					</button>
				</div>
			</form>
		</>
	);
}
