import React from "react";
import Image from "next/image";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Call, Email } from "@mui/icons-material";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useGetUserDetailsQuery } from "@/app/redux/services/apiServices";
import { useDispatch } from "react-redux";
import { setHostDetails } from "@/app/redux/slices/hostDetailsSlice";

export default function AboutHost({ userId }: { userId: string }) {
	const dispatch = useDispatch();
	const [token, setToken] = React.useState("");
	const { getLocalStorage } = useLocalStorage();

	const { data, isLoading, isError } = useGetUserDetailsQuery({
		userId: userId,
		token: token,
	});
	React.useEffect(() => {
		setToken(getLocalStorage("accessToken"));
		if (data && "status" in data && data.status === "success") {
			dispatch(
				setHostDetails({
					hostImg: data.data.profile.profilePicture,
					hostName: data.data.profile.firstName,
				})
			);
		}
	}, [data, dispatch]);
	return (
		<div className="w-full flex flex-col gap-2 mb-28">
			<h2 className="text-[28px]">About host</h2>
			{data && "status" in data && data.status === "success" ? (
				<div className="bg-off-white p-8">
					<div className="flex gap-[22px] px-6 py-4 bg-white">
						<Image
							src={data.data.profile.profilePicture}
							alt={"Johnathan Doe's Profile picture"}
							width={56}
							height={56}
							placeholder="empty"
							priority={false}
							className="w-14 aspect-square h-14 rounded-full"
						/>
						<div className="flex flex-col gap-2 px-3">
							<div className="font-semibold">
								{data.data.profile.firstName + " " + data.data.profile.lastName}
							</div>
							<div className="text-error">
								Joined squazzle on{" "}
								{new Date(data.data.profile.createdAt).toDateString()}
							</div>
							<div className="flex items-center gap-6 mb-10">
								<span className="text-primary-mid-green">
									<Email className="mr-1" />
									{data.data.profile.isEmailVerified
										? "Email Verified"
										: "Email Not Verified"}
								</span>
								<span>
									<Call className="mr-1" />
									{data.data.profile.phoneNumber}
								</span>
							</div>
							<button
								className="w-max py-3 px-4 rounded-lg hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-off-white font-bold"
								type="submit"
								formTarget="subscribe"
							>
								<DropdownMenu>
									<DropdownMenuTrigger>Contact Host</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem
											onClick={() =>
												navigator.clipboard.writeText(
													data.data.profile.phoneNumber
												)
											}
										>
											Phone
										</DropdownMenuItem>
										<DropdownMenuItem
											onClick={() =>
												navigator.clipboard.writeText(data.data.profile.email)
											}
										>
											Email
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="flex items-center justify-center h-full font-semibold text-lg">
					Failed to fetch host&apos;s data
				</div>
			)}
		</div>
	);
}
