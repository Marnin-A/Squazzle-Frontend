"use client";
import React from "react";
import { Phone, getCountryByIso } from "react-telephone";
import { FieldValues, SubmitHandler, set, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
	Update_Profile_Abort_Controller,
	useGetUserDetailsQuery,
	useUpdateProfileMutation,
} from "@/app/redux/services/apiServices";
import { useDispatch, useSelector } from "react-redux";
import { setAlertOpen } from "@/app/redux/slices/notificationSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { userProfileSchema } from "@/utils/schemas";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { RootState } from "@/app/redux/store";
import LoadingSpinner from "../loadingSpinner";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TRefetchUserDetails, TUpdateProfileResponse } from "@/types/apiTypes";

export type UserProfileData = {
	firstName: string;
	lastName: string;
	email: string;
	occupation: string;
	gender: NonNullable<"Male" | "Female" | undefined>;
	state: string;
	city: string;
	address: string;
	phoneNumber: number;
	about: string;
};
export default function ProfileForm() {
	const dispatch = useDispatch();
	const alertId = React.useId();
	const { getLocalStorage, setLocalStorage } = useLocalStorage();
	const [userId, setUserId] = React.useState("");
	const [accessToken, setAccessToken] = React.useState("");
	const [countryCode, setCountryCode] = React.useState<string>("");
	const countryCodeInput = React.useRef<HTMLSelectElement>(null);
	const UpdatedProfilePicture = useSelector(
		(state: RootState) => state.ProfilePicture
	);

	function addCountryCode(
		countryCodeInput: React.RefObject<HTMLSelectElement>
	) {
		setCountryCode(
			`+${getCountryByIso(countryCodeInput.current?.value as any)[3]}`
		);
	}
	// Form validation from React Hook Form
	const {
		register,
		setValue,
		formState: { errors },
		handleSubmit,
	} = useForm<UserProfileData>({
		resolver: yupResolver(userProfileSchema),
		criteriaMode: "all",
		reValidateMode: "onChange",
	});
	const [updateProfile, { isSuccess, isLoading, isError, data, error }] =
		useUpdateProfileMutation();
	const { refetch: getUserData } = useGetUserDetailsQuery({
		token: accessToken,
		userId: userId,
	});

	// Handle Form Submission
	const onSubmit: SubmitHandler<FieldValues> = async ({
		firstName,
		lastName,
		email,
		occupation,
		gender,
		state,
		city,
		address,
		phoneNumber,
		about,
	}) => {
		const formData = new FormData();
		formData.append("firstName", firstName);
		formData.append("lastName", lastName);
		formData.append("email", email);
		formData.append("occupation", occupation);
		formData.append("gender", gender);
		formData.append("state", state);
		formData.append("state", state);
		formData.append("city", city);
		formData.append("address", address);
		formData.append("phoneNumber", phoneNumber);
		formData.append("about", about);
		if (UpdatedProfilePicture) {
			const image = new Blob([UpdatedProfilePicture], {
				type: `image/${getImageType(UpdatedProfilePicture)}`,
			});
			formData.append("image", image);
		}

		const res = (await updateProfile({
			userId: userId,
			userInfo: formData,
			token: accessToken,
		})) as unknown as TUpdateProfileResponse;
		console.log(res);

		if ("data" in res) {
			console.log(res);

			dispatch(
				setAlertOpen({
					alertId: alertId,
					open: true,
					severity: "success",
					title: "Success",
					message: res.message,
				})
			);
			const updatedDetails =
				(await getUserData()) as unknown as TRefetchUserDetails;
			if ("data" in updatedDetails) {
				setLocalStorage(
					"profileImage",
					updatedDetails.data.data.profile.profilePicture
				);
			} else {
				dispatch(
					setAlertOpen({
						alertId: alertId,
						open: true,
						severity: "warning",
						title: "",
						message: "Couldn't fetch updated user details",
					})
				);
			}
		} else {
			dispatch(
				setAlertOpen({
					alertId: alertId,
					open: true,
					severity: "error",
					title: "Error",
					message: res.error.data.error,
				})
			);
		}
	};
	// Cancel a Save after it has been made
	const handleCancel = () => {
		Update_Profile_Abort_Controller.abort();
		dispatch(
			setAlertOpen({
				alertId: alertId,
				open: true,
				severity: "info",
				title: "Info",
				message: "Sign in request cancelled",
			})
		);
	};
	React.useEffect(() => {
		setUserId(getLocalStorage("_id"));
		setAccessToken(getLocalStorage("accessToken"));
	}, []);

	return (
		<form
			name="editProfile"
			className=" bg-transparent w-full pt-6 p-16 flex flex-col gap-6"
			onSubmit={handleSubmit(onSubmit)}
		>
			{/* First Name Input */}
			<div className="relative">
				<label className="block text-gray-700 text-md mb-2" htmlFor="firstName">
					First Name <sup className="text-error">*</sup>
				</label>
				<input
					className={
						"h-12 text-xl appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight  placeholder:pl-4" +
						(errors.firstName?.type === "required"
							? " outline-error"
							: " focus:outline-success focus:shadow-outline")
					}
					id="firstName"
					type="text"
					placeholder="First Name"
					autoComplete="first-name"
					{...register("firstName")}
				/>
				<ErrorMessage
					errors={errors}
					name="firstName"
					render={({ message }) => (
						<p className="text-xs text-error absolute bottom-[-22%]">
							{message}
						</p>
					)}
				/>
			</div>
			{/* last Name Input */}
			<div className="relative">
				<label className="block text-gray-700 text-md mb-2" htmlFor="lastName">
					Last Name <sup className=" text-error">*</sup>
				</label>
				<input
					className={
						"h-12 text-xl appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight placeholder:pl-4" +
						(errors.lastName?.type === "required"
							? " outline-error"
							: " focus:outline-success focus:shadow-outline")
					}
					id="lastName"
					type="text"
					placeholder="Last Name"
					autoComplete="on"
					{...register("lastName")}
				/>
				<ErrorMessage
					errors={errors}
					name="lastName"
					render={({ message }) => (
						<p className="text-xs text-error absolute bottom-[-22%]">
							{message}
						</p>
					)}
				/>
			</div>
			{/* Email Input */}
			<div className="relative">
				<label className="block text-gray-700 text-md mb-2" htmlFor="email">
					Email <sup className=" text-error">*</sup>
				</label>
				<input
					className={
						"h-12 text-xl appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight placeholder:pl-4" +
						(errors.email
							? " outline-error"
							: " focus:outline-success focus:shadow-outline")
					}
					id="email"
					type="email"
					placeholder="Email"
					autoComplete="on"
					{...register("email")}
				/>
				<ErrorMessage
					errors={errors}
					name="email"
					render={({ message }) => (
						<p className="text-xs text-error absolute bottom-[-10%]">
							{message}
						</p>
					)}
				/>
			</div>
			{/* Occupation */}
			<div className="relative">
				<label
					className="block text-gray-700 text-md mb-2"
					htmlFor="Occupation"
				>
					Occupation<sup className=" text-error">*</sup>
				</label>
				<input
					className={
						"h-12 text-xl appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight placeholder:pl-4" +
						(errors.occupation?.type === "required"
							? " outline-error"
							: " focus:outline-success focus:shadow-outline")
					}
					id="occupation"
					type="text"
					placeholder="Occupation"
					autoComplete="on"
					{...register("occupation")}
				/>
				<ErrorMessage
					errors={errors}
					name="occupation"
					render={({ message }) => (
						<p className="text-xs text-error absolute bottom-[-22%]">
							{message}
						</p>
					)}
				/>
			</div>
			{/* // There is an error in this block of code */}
			<Select
				onValueChange={(value) =>
					setValue(
						"gender",
						value as NonNullable<"Male" | "Female" | undefined>
					)
				}
				defaultValue="Default"
			>
				<label
					className="block text-gray-700 text-md mb-[-15px]"
					htmlFor="gender"
				>
					Gender<sup className=" text-error">*</sup>
				</label>
				<SelectTrigger
					className={
						"h-12 text-xl appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight placeholder:pl-4 placeholder:text-gray-700" +
						(errors.gender?.type === "required"
							? " outline-error"
							: " focus:outline-success focus:shadow-outline")
					}
				>
					<SelectValue
						placeholder="Gender"
						className="placeholder:pl-4 placeholder:text-gray-700"
					/>
				</SelectTrigger>
				<SelectContent {...register("gender")}>
					<SelectItem value="Male">Male</SelectItem>
					<SelectItem value="Female">Female</SelectItem>
				</SelectContent>
				<ErrorMessage
					errors={errors}
					name="gender"
					render={({ message }) => (
						<p className="text-xs text-error absolute bottom-[-16%]">
							{message}
						</p>
					)}
				/>
			</Select>
			{/* State */}
			<div className="relative">
				<label className="block text-gray-700 text-md mb-2" htmlFor="state">
					State<sup className=" text-error">*</sup>
				</label>
				<input
					className={
						"h-12 text-xl appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight placeholder:pl-4" +
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
				<label className="block text-gray-700 text-md mb-2" htmlFor="city">
					City<sup className=" text-error">*</sup>
				</label>
				<input
					className={
						"h-12 text-xl appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight placeholder:pl-4" +
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
			{/* Address */}
			<div className="relative">
				<label className="block text-gray-700 text-md mb-2" htmlFor="Address">
					Address<sup className=" text-error">*</sup>
				</label>
				<input
					className={
						"h-12 text-xl appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight placeholder:pl-4" +
						(errors.occupation?.type === "required"
							? " outline-error"
							: " focus:outline-success focus:shadow-outline")
					}
					id="address"
					type="text"
					placeholder="Address"
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
			{/* Phone Number Input */}
			<div className="relative">
				<label
					className="block text-gray-700 text-md mb-2"
					htmlFor="phoneNumber"
				>
					Phone Number <sup className=" text-error">*</sup>
				</label>
				<div
					className={
						"bg-white h-12 flex items-center justify-start rounded-lg shadow-md" +
						(errors.phoneNumber?.type === "required"
							? " outline-error"
							: " focus:outline-success focus:shadow-outline")
					}
				>
					<Phone defaultCountry="ng">
						<Phone.Country
							value={countryCode}
							ref={countryCodeInput}
							className="w-[25%] md:w-[28%] ml-[2%] mr-[2%] outline-none text-base border-r border-neutral-600"
						/>
						<Phone.Number
							placeholder="Number"
							type="number"
							autoComplete="on"
							className="w-[60%]  outline-none text-xl"
							{...register("phoneNumber", {
								required: "Phone number is required",
								maxLength: {
									value: 10,
									message: "Phone number can't be more than 10 chars",
								},
								onBlur() {
									addCountryCode(countryCodeInput);
								},
							})}
						/>
						<ErrorMessage
							errors={errors}
							name="phoneNumber"
							render={({ message }) => (
								<p className="text-xs text-error absolute bottom-[-22%]">
									{message}
								</p>
							)}
						/>
					</Phone>
				</div>
			</div>
			{/* About */}
			<div className="relative">
				<label className="block text-gray-700 text-md mb-2" htmlFor="about">
					About<sup className=" text-error">*</sup>
				</label>
				<textarea
					className={
						"min-h-[100px] text-xl appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight placeholder:pl-4 placeholder:pt-4" +
						(errors.about?.type === "required"
							? " outline-error"
							: " focus:outline-success focus:shadow-outline")
					}
					id="about"
					placeholder="Describe yourself"
					autoComplete="on"
					{...register("about")}
				/>
				<ErrorMessage
					errors={errors}
					name="about"
					render={({ message }) => (
						<p className="text-xs text-error absolute bottom-[-12%]">
							{message}
						</p>
					)}
				/>
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
					formTarget="editProfile"
					disabled={isLoading}
				>
					<span className="flex items-center justify-center gap-2">
						{isLoading && <LoadingSpinner className="h-8 w-8" />}Save
					</span>
				</button>
			</div>
		</form>
	);
}
function getImageType(imgUrl: string) {
	const regex = /\/(.*?);/;
	const match = regex.exec(imgUrl);

	// Check if a match is found
	if (match && match[1]) {
		return match[1];
	} else {
		return null; // Return null if no match is found
	}
}
