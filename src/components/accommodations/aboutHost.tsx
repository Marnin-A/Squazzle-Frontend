"use client";
import React from "react";
import Image from "next/image";
import { Call, CameraAlt, Email } from "@mui/icons-material";

export default function AboutHost() {
	const [userData, setUserData] = React.useState<{
		name: string;
		dataJoined: string;
		emailVerified: boolean;
		idVerified: boolean;
		phoneNumber: string;
	}>({
		name: "Jonathan Doe",
		dataJoined: "July 2022",
		emailVerified: true,
		idVerified: true,
		phoneNumber: " +2340123456789",
	});
	return (
		<div className="w-full flex flex-col gap-2 mb-28">
			<h2 className="text-[28px]">About host</h2>
			<div className="bg-off-white p-8">
				<div className="flex gap-[22px] px-6 py-4 bg-white">
					<Image
						src="/temp/Jonathan_Doe.png"
						alt={"Johnathan Doe's Profile picture"}
						width={56}
						height={56}
						placeholder="empty"
						priority={false}
						className="w-14 aspect-square h-14 rounded-full"
					/>
					<div className="flex flex-col gap-2 px-3">
						<div className="font-semibold">{userData.name}</div>
						<div className="text-error">
							Joined squazzle {userData.dataJoined}
						</div>
						<div className="flex items-center gap-6 mb-10">
							<span className="text-primary-mid-green">
								<Email className="mr-1" />
								{userData.emailVerified
									? "Email Verified"
									: "Email Not Verified"}
							</span>
							<span>
								<Call className="mr-1" />
								{userData.phoneNumber}
							</span>
							<span className="text-primary-mid-green">
								<CameraAlt className="mr-1" />
								{userData.idVerified ? "ID Verified" : "ID Not Verified"}
							</span>
						</div>
						<button
							className="w-max py-3 px-4 rounded-lg hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-off-white font-bold"
							type="submit"
							formTarget="subscribe"
						>
							Contact Host
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
