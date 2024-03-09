"use client";
import React from "react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "../ui/alert-dialog";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { resetDialog } from "@/app/redux/slices/dialogSlice";

export default function PopupDialog() {
	const router = useRouter();
	const dispatch = useDispatch();
	const dialogState = useSelector((state: RootState) => state.Dialog);
	function handleGoBack() {
		dispatch(resetDialog());
		router.back();
	}
	function handleReload() {
		window.location.reload();
	}
	return (
		<AlertDialog open={dialogState.open}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="text-center">
						{dialogState.title}
					</AlertDialogTitle>
					<AlertDialogDescription className="flex items-centers justify-center">
						{dialogState.message ? (
							dialogState.message
						) : (
							<Image
								src="/error-svgrepo.svg"
								alt="An error occurred"
								width={100}
								height={100}
								placeholder="empty"
								priority={false}
								className="max-w-[100px] h-auto"
							/>
						)}
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className="flex items-centers justify-center">
					<AlertDialogCancel onClick={handleGoBack}>Go back</AlertDialogCancel>
					<AlertDialogAction onClick={handleReload}>Refresh</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
