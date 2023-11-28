"use client";
import React from "react";
import UserCreatePasswordForm from "./createPasswordForm";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import Zoom from "@mui/material/Zoom";
import UserCreateProfileForm from "./createProfileForm";
import { CircularProgress } from "@mui/material";

export default function SignUp() {
	const user = useSelector((state: RootState) => state.CreateProfile);
	const createdProfile = Boolean(
		user.email && user.firstName && user.lastName && user.phoneNumber
	);

	return (
		<div className=" flex">
			<Zoom in={createdProfile}>
				<div className={createdProfile ? "block" : "hidden"}>
					<UserCreatePasswordForm />
				</div>
			</Zoom>
			<Zoom in={!createdProfile}>
				<div className={createdProfile ? "hidden" : "block"}>
					<UserCreateProfileForm />
				</div>
			</Zoom>
		</div>
	);
}
