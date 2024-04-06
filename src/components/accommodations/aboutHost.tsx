import React from "react";
import Image from "next/image";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Call, Email } from "@mui/icons-material";
import { PropertyProps } from "./propertyDetailsBody";

export default function AboutHost({
	createdBy,
}: {
	createdBy: PropertyProps["createdBy"];
}) {
	return (
		<div className="w-full flex flex-col gap-2 mb-28">
			<h2 className="md:text-[28xl] text-xl">About host</h2>

			<div className="bg-off-white md:p-8 p-6">
				<div className="flex gap-3 px-6 py-4 bg-white">
					<Image
						src={createdBy.profileImage}
						alt={"User's Profile picture"}
						width={40}
						height={40}
						placeholder="empty"
						priority={false}
						className="w-10 aspect-square h-10 rounded-full"
					/>
					<div className="flex flex-col gap-2 md:px-3 max-md:text-sm">
						<div className="font-semibold">
							{createdBy.firstName + " " + createdBy.lastName}
						</div>
						<div className="text-error">
							Joined squazzle on {new Date(createdBy.createdAt).toDateString()}
						</div>
						<div className="flex items-center flex-wrap md:gap-6 md:mb-10 gap-4 mb-2">
							<span className="text-primary-mid-green whitespace-nowrap">
								<Email className="mr-1" />
								{createdBy.isEmailVerified
									? "Email Verified"
									: "Email Not Verified"}
							</span>
							<span className="whitespace-nowrap">
								<Call className="mr-1" />
								{"+234" + createdBy.phoneNumber}
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
												"+234" + createdBy.phoneNumber
											)
										}
									>
										Phone
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() =>
											navigator.clipboard.writeText(createdBy.email)
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
		</div>
	);
}
