"use client";
import React from "react";
import DeleteAccount from "./deleteAccount";
import { useGetUserDetailsQuery } from "@/app/redux/services/apiServices";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function UserDetails() {
	const { getLocalStorage } = useLocalStorage();
	const [localData, setLocalData] = React.useState({ token: "", userId: "" });
	const [userData, setUserData] = React.useState<{
		name?: string;
		email?: string;
		occupation?: string;
		gender?: string;
		address?: string;
		phoneNumber?: string;
		NIN?: string;
		about?: string;
		verified?: boolean;
	}>({
		name: "Zhara Doe",
		email: "zharadoe@gmail.com",
		occupation: "Real Estate Manager",
		gender: "female",
		address: "No 49 East-End, Jos, Plateau State, Nigeria.",
		phoneNumber: "08123181961",
		NIN: "75312208056610",
		about:
			"Lorem ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
		verified: true,
	});

	const { data, isLoading, isError, isSuccess } = useGetUserDetailsQuery({
		userId: localData.userId,
		token: localData.token,
	});
	React.useEffect(() => {
		setLocalData({
			token: getLocalStorage("accessToken"),
			userId: getLocalStorage("_id"),
		});
		let userProfile;

		if (data && "status" in data) {
			userProfile = data?.data.profile;
		}
		if (isSuccess && userProfile) {
			setUserData({
				...userData,
				email: userProfile.email,
				name: userProfile.firstName + " " + userProfile.lastName,
				phoneNumber: userProfile.phoneNumber,
				verified: userProfile.isEmailVerified,
			});
		}
	}, [data]);
	return (
		<section className="pt-9 p-16">
			<h1 className="font-semibold text-2xl">Personal Details</h1>
			<p className="text-primary-light-grey">
				Update your personal info and how we can reach you.
			</p>
			<div className="flex flex-col gap-6 my-6">
				<div>
					<h3 className="font-semibold text-lg mb-2">Name</h3>
					<div>{userData.name}</div>
				</div>

				<div>
					<h3 className="font-semibold text-lg mb-2">Email Address</h3>
					<div className="flex gap-2 items-center">
						{userData.email}
						{userData.verified && (
							<span className="px-1 py-0.5 text-white bg-[#3D7D50] rounded-sm">
								Verified
							</span>
						)}
					</div>
				</div>

				<div>
					<h3 className="font-semibold text-lg mb-2">Occupation</h3>
					<div>{userData.occupation}</div>
				</div>

				<div>
					<h3 className="font-semibold text-lg mb-2">Gender</h3>
					<div>{userData.gender}</div>
				</div>

				<div>
					<h3 className="font-semibold text-lg mb-2">Address</h3>
					<div>{userData.address}</div>
				</div>

				<div>
					<h3 className="font-semibold text-lg mb-2">Phone Number</h3>
					<div>{userData.phoneNumber}</div>
				</div>

				<div>
					<h3 className="font-semibold text-lg mb-2">NIN</h3>
					<div>{userData.NIN}</div>
				</div>

				<div>
					<h3 className="font-semibold text-lg mb-2">About Me</h3>
					<div>{userData.about}</div>
				</div>
			</div>
			<hr className="my-6" />

			<DeleteAccount />
		</section>
	);
}
